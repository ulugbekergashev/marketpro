import React from 'react';
import { SERVICES } from '../constants';
import { Store, Search, Megaphone, BarChart, Truck, Headset, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap: Record<string, React.FC<any>> = {
  Store, Search, Megaphone, BarChart, Truck, Headset
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-brand-dark relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-blue-500 font-bold tracking-wider uppercase text-sm mb-2 block">Xizmatlar</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Biznesingiz uchun <br/> <span className="text-slate-500">kompleks yechimlar</span>
            </h2>
          </div>
          <button className="hidden md:flex items-center gap-2 text-white border-b border-blue-500 pb-1 hover:text-blue-400 transition-colors">
            Barcha xizmatlar <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 rounded-3xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-blue-500/30 transition-all duration-300 relative overflow-hidden"
              >
                {/* Glow effect on hover */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/20 blur-[50px] rounded-full group-hover:bg-blue-600/40 transition-all"></div>

                <div className="w-14 h-14 bg-brand-dark border border-white/10 rounded-2xl flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-blue-500" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm mb-6">{service.description}</p>
                
                <div className="flex items-center gap-2 text-sm font-bold text-white/50 group-hover:text-white transition-colors">
                  Batafsil <ArrowUpRight className="w-4 h-4" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;