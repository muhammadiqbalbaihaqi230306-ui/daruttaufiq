import { NextResponse } from "next/server";
import path from "path";
// @ts-ignore
import { DatabaseSync } from "node:sqlite";

const dbPath = path.join(process.cwd(), "prisma", "dev.db");

function getDb() {
  return new DatabaseSync(dbPath);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      unit,
      programType,
      wave,
      fullName,
      nickname,
      gender,
      birthPlace,
      birthDate,
      nik,
      nisn,
      previousSchool,
      quranMemorized,
      fatherName,
      fatherJob,
      motherName,
      motherJob,
      whatsapp,
      email,
      address,
      medicalNotes,
    } = body;

    // Validasi field wajib
    if (!unit || !fullName || !gender || !birthPlace || !birthDate || !fatherName || !motherName || !whatsapp || !address) {
      return NextResponse.json(
        { error: "Mohon lengkapi semua data wajib bertanda (*)" },
        { status: 400 }
      );
    }

    // Generate unique Registration Number: DT27-[Unit]-[5 Random Digits]
    const unitCode = unit.replace(/[^A-Za-z]/g, "").toUpperCase().slice(0, 4) || "REG";
    const randomSuffix = Math.floor(10000 + Math.random() * 90000);
    const regNumber = `DT27-${unitCode}-${randomSuffix}`;
    const now = new Date().toISOString();

    const db = getDb();
    const stmt = db.prepare(`
      INSERT INTO Registration (
        regNumber, unit, programType, wave,
        fullName, nickname, gender, birthPlace, birthDate,
        nik, nisn, previousSchool, quranMemorized,
        fatherName, fatherJob, motherName, motherJob,
        whatsapp, email, address, medicalNotes,
        status, createdAt
      ) VALUES (
        ?, ?, ?, ?,
        ?, ?, ?, ?, ?,
        ?, ?, ?, ?,
        ?, ?, ?, ?,
        ?, ?, ?, ?,
        ?, ?
      )
    `);

    stmt.run(
      regNumber,
      unit,
      programType || (unit === "SMPIT" ? "Boarding" : "Fullday"),
      wave || "Gelombang 1 (Early Bird)",
      fullName,
      nickname || null,
      gender,
      birthPlace,
      birthDate,
      nik || null,
      nisn || null,
      previousSchool || null,
      quranMemorized || "Belum Ada",
      fatherName,
      fatherJob || null,
      motherName,
      motherJob || null,
      whatsapp,
      email || null,
      address,
      medicalNotes || null,
      "TERDAFTAR",
      now
    );

    const getStmt = db.prepare("SELECT * FROM Registration WHERE regNumber = ?");
    const record = getStmt.get(regNumber);

    return NextResponse.json(
      {
        success: true,
        message: "Pendaftaran berhasil disimpan!",
        data: record,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("PPDB Error:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan saat memproses pendaftaran. Silakan coba lagi." },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const regNumber = searchParams.get("regNumber");
    const db = getDb();

    if (regNumber) {
      const stmt = db.prepare("SELECT * FROM Registration WHERE regNumber = ?");
      const item = stmt.get(regNumber);
      if (!item) {
        return NextResponse.json({ error: "Data pendaftaran tidak ditemukan" }, { status: 404 });
      }
      return NextResponse.json({ success: true, data: item });
    }

    const stmt = db.prepare("SELECT * FROM Registration ORDER BY createdAt DESC LIMIT 50");
    const registrations = stmt.all();

    return NextResponse.json({ success: true, data: registrations });
  } catch (error) {
    console.error("PPDB GET Error:", error);
    return NextResponse.json({ error: "Gagal mengambil data" }, { status: 500 });
  }
}
