import React, { useState } from 'react';
import { FAQ_ITEMS } from '../constants';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="py-24 bg-[#020617] relative"
      style={{ contentVisibility: 'auto', containIntrinsicSize: '600px' } as any}
    >
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ko'p beriladigan savollar
          </h2>
          <p className="text-slate-400">
            Shubhalaringiz bormi? Biz ochiqlik tarafdorimiz.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <div
              key={index}
              className={`rounded-2xl border transition-all duration-300 ${openIndex === index
                ? 'bg-blue-900/10 border-blue-500/50'
                : 'bg-white/5 border-white/5 hover:bg-white/10'
                }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex justify-between items-center gap-4"
              >
                <span className={`font-bold text-lg ${openIndex === index ? 'text-white' : 'text-slate-300'}`}>
                  {item.question}
                </span>
                <div className={`p-2 rounded-full ${openIndex === index ? 'bg-blue-600 text-white' : 'bg-white/10 text-slate-400'}`}>
                  {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>

              {openIndex === index && (
                <div className="overflow-hidden">
                  <div className="p-6 pt-0 text-slate-400 leading-relaxed border-t border-white/5 mt-2">
                    {item.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
