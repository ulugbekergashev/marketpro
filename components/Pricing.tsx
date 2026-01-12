import React from 'react';
import { PRICING_PLANS, COMMON_FEATURES } from '../constants';
import { Check, Star, AlertCircle, ShieldCheck, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const Pricing = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'auto' });
    }
  };

  return (
    <section
      id="pricing"
      className="py-24 bg-[#0B0F19]"
      style={{ contentVisibility: 'auto', containIntrinsicSize: '800px' } as any}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Kurs Paketlari</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Noldan professional darajagacha. O'zingizga mos paketni tanlang va marketpleyslar olamida muvaffaqiyatga erishing!
          </p>
        </div>

        {/* Common Features Section */}
        <div className="max-w-5xl mx-auto mb-20 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <ShieldCheck className="w-48 h-48 text-blue-500" />
          </div>
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                  <ShieldCheck className="w-6 h-6 text-blue-400" />
                  Barcha paketlarga kiritilgan:
                </h3>
                <p className="text-slate-400 text-sm">Ushbu xizmatlar har bir tarifda standart sifatida mavjud</p>
              </div>
              <div className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
                Professional Standart
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-5">
              {COMMON_FEATURES.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/20 transition-colors">
                    <Check className="w-3.5 h-3.5 text-blue-400" />
                  </div>
                  <span className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {PRICING_PLANS.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col p-8 rounded-[2.5rem] h-full transition-all duration-500 group ${plan.highlight
                ? 'bg-gradient-to-b from-blue-600/20 to-blue-900/40 border-2 border-blue-500 shadow-[0_0_50px_rgba(59,130,246,0.15)] z-10'
                : 'bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/[0.08]'
                }`}
            >
              {plan.highlight && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-500 to-amber-600 text-white px-6 py-2 rounded-full text-sm font-extrabold tracking-wide uppercase shadow-lg flex items-center gap-2 whitespace-nowrap z-20">
                  <Star className="w-4 h-4 fill-white" /> Eng Ko'p Sotilgan
                </div>
              )}

              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className={`text-2xl font-bold ${plan.highlight ? 'text-white' : 'text-slate-200'}`}>
                    {plan.name}
                  </h3>
                  {plan.highlight && <GraduationCap className="w-6 h-6 text-blue-400" />}
                </div>
                <p className="text-sm text-blue-400 font-semibold mb-8">
                  {plan.subtitle}
                </p>

                {/* Marketplaces - The Core Difference */}
                <div className="mb-10">
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">O'rgatiladigan platformalar:</p>
                  <div className="flex flex-wrap gap-2">
                    {(plan as any).marketplaces?.map((mp: string, i: number) => (
                      <span key={i} className={`px-4 py-1.5 rounded-xl border text-[11px] font-bold uppercase tracking-wider transition-colors ${plan.highlight
                        ? 'bg-blue-500/20 border-blue-500/30 text-blue-300'
                        : 'bg-white/5 border-white/10 text-slate-300 group-hover:border-white/20'
                        }`}>
                        {mp}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price Display */}
                <div className="pb-8 border-b border-white/10">
                  {(plan as any).oldPrice && (
                    <div className="text-sm text-slate-500 line-through mb-1 font-medium">
                      {plan.oldPrice}
                    </div>
                  )}
                  <div className="flex items-baseline gap-2">
                    <span className={`font-extrabold tracking-tight ${plan.highlight ? 'text-white text-5xl' : 'text-white text-4xl'}`}>
                      {plan.price}
                    </span>
                    <span className="text-slate-500 font-medium">
                      {plan.period}
                    </span>
                  </div>
                  {(plan as any).oldPrice && (
                    <div className="inline-block px-2 py-0.5 rounded bg-green-500/10 text-green-400 text-[10px] font-bold mt-3 uppercase tracking-wider">
                      Maxsus chegirma!
                    </div>
                  )}
                </div>
              </div>

              {/* Specific Features - Only if they exist */}
              {plan.features.length > 0 && (
                <div className="mb-8 flex-1">
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">Eksklyuziv imkoniyatlar:</p>
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className={`mt-1 p-0.5 rounded-full flex-shrink-0 ${plan.highlight ? 'bg-blue-400 text-blue-900' : 'bg-slate-700 text-slate-300'}`}>
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="text-slate-300 text-sm font-medium leading-tight">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* ROI Assurance */}
              {plan.highlight && (
                <div className="bg-blue-500/10 border border-blue-500/20 p-5 rounded-2xl mb-8 flex gap-3 items-start">
                  <AlertCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <p className="text-xs text-blue-200 leading-relaxed">
                    <span className="font-bold">Kafolat:</span> Kursni tugatgach, biz sizni ish bilan ta'minlaymiz va daromadingizni kafolatlaymiz.
                  </p>
                </div>
              )}

              <a
                href="#contact-form"
                onClick={(e) => handleScroll(e, 'contact-form')}
                className={`w-full py-5 px-6 rounded-2xl font-bold text-center transition-all mt-auto flex items-center justify-center gap-2 group cursor-pointer ${plan.highlight
                  ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-[0_10px_30px_rgba(37,99,235,0.3)]'
                  : 'bg-white text-slate-900 hover:bg-blue-50'
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