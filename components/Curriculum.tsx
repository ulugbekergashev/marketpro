import React from 'react';
import { CURRICULUM } from '../constants';
import { CheckCircle2, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const Curriculum = () => {
  return (
    <section
      id="curriculum"
      className="py-24 bg-brand-dark relative"
      style={{ contentVisibility: 'auto', containIntrinsicSize: '1000px' } as any}
    >
      {/* Background Glow - Simplified */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-blue-900/5 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-blue-500 font-bold tracking-wider uppercase text-sm mb-2 block">Premium Dastur</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Muvaffaqiyatning <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Yashirin Algoritmi</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Bu shunchaki darslar to'plami emas. Bu — $100M aylanmaga ega kompaniyaning ichki ishlovchi standartlari.
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {CURRICULUM.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              style={{ willChange: 'transform, opacity' }}
              className="flex flex-col md:flex-row gap-6 bg-[#0F1623] border border-white/5 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] hover:border-blue-500/20 transition-all group relative overflow-hidden"
            >
              {/* Module Number & Title */}
              <div className="md:w-1/3 flex flex-col relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 font-bold text-sm border border-blue-500/20">
                    {index + 1}
                  </div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white leading-tight group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
              </div>

              {/* Module Content */}
              <div className="md:w-2/3 relative z-10 border-t md:border-t-0 md:border-l border-white/5 pt-6 md:pt-0 md:pl-8">
                <p className="text-slate-400 text-sm md:text-base mb-6 leading-relaxed">
                  {item.desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {item.details?.map((detail, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-[13px] text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-2.5 text-[13px] text-slate-500/50">
                    <Lock className="w-3.5 h-3.5" />
                    <span>Maxfiy materiallar</span>
                  </div>
                </div>
              </div>

              {/* Decorative Background Element */}
              <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-colors"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Curriculum;