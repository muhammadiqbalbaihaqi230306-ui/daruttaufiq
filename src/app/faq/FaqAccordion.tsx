"use client";

import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

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
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div 
          key={index} 
          className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'border-primary bg-primary/5 shadow-md' : 'border-gray-200 bg-white hover:border-primary/50'}`}
        >
          <button
            onClick={() => toggleFaq(index)}
            className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
          >
            <span className={`font-semibold text-lg pr-4 ${openIndex === index ? 'text-primary' : 'text-secondary'}`}>
              {faq.question}
            </span>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'bg-primary text-white rotate-180' : 'bg-gray-100 text-gray-500'}`}>
              <FaChevronDown className="text-sm" />
            </div>
          </button>
          
          <div 
            className={`grid transition-all duration-300 ease-in-out ${
              openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
            }`}
          >
            <div className="overflow-hidden">
              <div className="px-6 pb-6 pt-0 text-text-muted leading-relaxed">
                {faq.answer}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
