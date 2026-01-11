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

        <div className="max-w-5xl mx-auto space-y-8">
          {CURRICULUM.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ willChange: 'transform, opacity' }}
              className="flex flex-col md:flex-row gap-8 bg-[#0F1623] border border-white/5 p-8 rounded-[2rem] hover:border-blue-500/20 transition-colors group relative overflow-hidden"
            >
              {/* Module Number */}
              <div className="md:w-1/4 flex flex-col justify-between relative z-10">
                <div>
                  <div className={`text-sm font-bold text-${item.color}-400 uppercase tracking-widest mb-2`}>
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-bold text-white leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Module Content */}
              <div className="md:w-3/4 relative z-10 border-t md:border-t-0 md:border-l border-white/5 pt-6 md:pt-0 md:pl-8">
                <p className="text-slate-300 text-lg mb-6 leading-relaxed">
                  {item.desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {item.details?.map((detail, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-slate-400">
                      <CheckCircle2 className={`w-5 h-5 text-${item.color}-500 flex-shrink-0`} />
                      <span>{detail}</span>
                    </div>
                  ))}
                  <div className="flex items-center gap-3 text-sm text-slate-500/50">
                    <Lock className="w-4 h-4" />
                    <span>Maxfiy materiallar</span>
                  </div>
                </div>
              </div>

              {/* Decorative Gradient - Simplified */}
              <div className={`absolute top-0 right-0 w-48 h-48 bg-${item.color}-600/5 rounded-full blur-[60px]`}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Curriculum;