import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote, Star, ArrowUpRight, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  return (
    <section id="results" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-blue-500 font-bold tracking-wider uppercase text-sm mb-2 block">Real Keyslar</span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Biz gapirmaymiz, <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">biz isbotlaymiz</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Har bir raqam ortida – mashaqqatli mehnat va to'g'ri strategiya yotibdi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gradient-to-br from-[#0F1623] to-[#1a2332] rounded-3xl border border-white/10 overflow-hidden group hover:border-blue-500/40 transition-all duration-500 hover:shadow-[0_0_40px_rgba(37,99,235,0.15)] flex flex-col h-full relative"
            >
              {/* Gradient Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>

              <div className="p-8 flex flex-col flex-1 relative z-10">
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl text-white leading-tight">{item.name}</h4>
                      <p className="text-sm text-blue-400 font-medium">{item.role}</p>
                    </div>
                  </div>
                </div>

                {/* Main Stat */}
                <div className="mb-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-6 rounded-2xl border border-blue-500/20">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-slate-400 text-sm font-semibold uppercase tracking-wider">Natija</span>
                    <ArrowUpRight className="w-6 h-6 text-green-400" />
                  </div>
                  <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">{item.result}</div>
                  <div className="text-base font-bold text-white">{item.revenue}</div>
                </div>

                <p className="text-slate-300 text-base leading-relaxed mb-6 flex-1 relative pl-6">
                  <Quote className="absolute top-0 left-0 w-5 h-5 text-blue-500/30" />
                  {item.desc}
                </p>

                <div className="flex items-center gap-1 text-yellow-400">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
