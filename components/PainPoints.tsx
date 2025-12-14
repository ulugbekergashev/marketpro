import React from 'react';
import { PAIN_POINTS } from '../constants';
import { TrendingDown, Swords, AlertTriangle, RefreshCw, XCircle, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap: Record<string, React.FC<any>> = {
  TrendingDown, Swords, AlertTriangle, RefreshCw
};

const PainPoints = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'auto' });
    }
  };

  return (
    <section className="py-24 bg-[#050914] relative border-b border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Nega <span className="text-red-500">90%</span> sotuvchilar <br /> Marketpleysda yutqazishadi?
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Bozor shafqatsiz. Agar sizda aniq tizim bo'lmasa, quyidagi muammolarga duch kelishingiz aniq.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left: Pain Points */}
          <div className="space-y-6">
            {PAIN_POINTS.map((point, index) => {
              const Icon = iconMap[point.icon];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-red-500/30 transition-colors group"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                      <Icon className="w-6 h-6 text-red-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{point.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{point.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Right: The Solution Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-blue-900/20 to-brand-dark p-8 rounded-[2.5rem] border border-blue-500/30"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[80px] rounded-full"></div>

            <h3 className="text-2xl font-bold text-white mb-8 relative z-10">
              Market Pro Academy bilan siz nimalarni olasiz?
            </h3>

            <ul className="space-y-6 relative z-10">
              <li className="flex items-center gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-slate-200">Kafolatlangan TOP strategiyasi</span>
              </li>
              <li className="flex items-center gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-slate-200">Shaxsiy mentor va qo'llab-quvvatlash</span>
              </li>
              <li className="flex items-center gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-slate-200">Jarimasiz va xatosiz hujjatlar</span>
              </li>
              <li className="flex items-center gap-4">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-slate-200">Avtomatlashtirilgan savdo tizimi</span>
              </li>
            </ul>

            <div className="mt-10 p-6 bg-blue-600 rounded-2xl text-center shadow-lg shadow-blue-600/30">
              <p className="text-blue-100 text-sm mb-2 font-medium">Barchasini o'zgartirishga tayyormisiz?</p>
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, 'contact')}
                className="text-white font-bold text-xl block hover:scale-105 transition-transform cursor-pointer"
              >
                Hoziroq bog'laning
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;