"use client";

import { useState } from "react";
import { FaChevronDown } from "@/components/ui/FlaticonIcons";

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="border border-gray-200 bg-white rounded-2xl overflow-hidden shadow-2xs divide-y divide-gray-200">
      {faqs.map((faq, index) => (
        <div key={index} className="transition-colors">
          <button
            onClick={() => toggleFaq(index)}
            className="w-full text-left px-6 lg:px-8 py-5 flex items-center justify-between focus:outline-none"
          >
            <span className="font-semibold text-lg pr-4 text-secondary">
              {faq.question}
            </span>
            <div className={`flex items-center justify-center transition-transform duration-300 shrink-0 text-gray-400 ${openIndex === index ? 'rotate-180' : ''}`}>
              <FaChevronDown className="text-base" />
            </div>
          </button>
          
          <div 
            className={`grid transition-all duration-300 ease-in-out ${
              openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
            }`}
          >
            <div className="overflow-hidden">
              <div className="px-6 lg:px-8 pb-6 pt-0 text-text-muted leading-relaxed">
                {faq.answer}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
