import React from 'react';
import { PRICING_PLANS } from '../constants';
import { Check, Star, AlertCircle, Briefcase, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Pricing = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="py-24 bg-[#0B0F19]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Hamkorlik Paketlari</h2>
          <p className="text-slate-400 max-w-xl mx-auto">
             Qimmat? Yo'q. Arzon mutaxassis bilan vaqt yo'qotish — mana bu qimmat.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-center">
          {PRICING_PLANS.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative flex flex-col p-8 rounded-[2rem] h-full transition-transform duration-300 ${
                plan.highlight 
                  ? 'bg-gradient-to-b from-blue-900/80 to-[#020617] border-2 border-blue-500 shadow-[0_0_60px_rgba(37,99,235,0.25)] z-10 scale-105 lg:scale-110 lg:-mt-4 min-h-[600px]' 
                  : 'bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/[0.07] min-h-[500px]'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-500 to-amber-600 text-white px-6 py-2 rounded-full text-sm font-extrabold tracking-wide uppercase shadow-lg flex items-center gap-2 whitespace-nowrap z-20">
                  <Star className="w-4 h-4 fill-white animate-pulse" /> Eng Ko'p Sotilgan
                </div>
              )}
              
              <div className="mb-6 text-center lg:text-left">
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlight ? 'text-white text-3xl' : 'text-slate-200'}`}>
                  {plan.name}
                </h3>
                <p className="text-sm text-slate-400 mb-6 min-h-[20px]">
                  {plan.subtitle}
                </p>
                
                {/* Price Display */}
                <div className="pb-6 border-b border-white/10">
                   {/* Fake Old Price for psychological effect */}
                  <div className="text-sm text-slate-500 line-through mb-1">
                      Asl qiymati: {index === 1 ? '$2000' : index === 2 ? '$25,000' : '$5000'}
                  </div>
                  <div className="flex items-end gap-2 justify-center lg:justify-start">
                    <span className={`font-extrabold tracking-tight ${plan.highlight ? 'text-blue-400 text-6xl' : 'text-white text-5xl'}`}>{plan.price}</span>
                    <span className="text-slate-500 mb-2 font-medium">
                        {plan.period}
                    </span>
                  </div>
                  {plan.oldPrice && (
                    <div className="text-red-400 text-sm font-bold mt-2 animate-pulse">
                        Faqat bugun: {plan.oldPrice} dan chegirma!
                    </div>
                  )}
                </div>
              </div>

              {/* Value Stack */}
              <div className="mb-8 flex-1">
                 <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Nimalar kiritilgan:</p>
                 <ul className="space-y-4">
                    {/* Special Feature for Mentoring/Service Plans */}
                    {(index === 0 || index === 2) && (
                        <li className="flex items-start gap-3 bg-green-500/10 p-2 rounded-lg border border-green-500/20">
                            <div className="p-1 rounded-full flex-shrink-0 bg-green-500/20 text-green-400">
                                <Briefcase className="w-3 h-3" />
                            </div>
                            <span className="text-green-300 text-sm font-bold leading-relaxed">
                                Kafolatlangan ish ($1000+)
                            </span>
                        </li>
                    )}
                    {/* For the main service plan */}
                    {index === 1 && (
                         <li className="flex items-start gap-3 bg-blue-500/10 p-2 rounded-lg border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                            <div className="p-1 rounded-full flex-shrink-0 bg-blue-500/20 text-blue-400">
                                <Sparkles className="w-3 h-3" />
                            </div>
                            <span className="text-blue-200 text-sm font-bold leading-relaxed">
                                To'liq "Kalit topshirish" (Done-for-you)
                            </span>
                        </li>
                    )}

                    {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                        <div className={`p-1 rounded-full flex-shrink-0 ${plan.highlight ? 'bg-blue-500/20 text-blue-400' : 'bg-white/10 text-white'}`}>
                        <Check className="w-3 h-3" />
                        </div>
                        <span className="text-slate-300 text-sm font-medium leading-relaxed">
                        {feature}
                        </span>
                    </li>
                    ))}
                </ul>
              </div>

              {/* ROI Assurance */}
              {plan.highlight && (
                  <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-xl mb-6 flex gap-3 items-start">
                      <AlertCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                      <p className="text-xs text-blue-200 leading-relaxed">
                          <span className="font-bold">Diqqat:</span> Ushbu paketni sotib olganlarning 90%i birinchi oydayoq xarajatni qoplaydi.
                      </p>
                  </div>
              )}

              <a 
                href="#contact"
                onClick={(e) => handleScroll(e, 'contact')}
                className={`w-full py-5 px-6 rounded-xl font-bold text-center transition-all mt-auto flex items-center justify-center gap-2 group cursor-pointer ${
                  plan.highlight 
                    ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_50px_rgba(37,99,235,0.6)] transform hover:-translate-y-1' 
                    : 'bg-white text-brand-dark hover:bg-slate-200'
                }`}
              >
                Boshlash
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;