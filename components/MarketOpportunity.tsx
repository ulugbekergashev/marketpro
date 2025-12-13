import React from 'react';
import { TrendingUp, ArrowUpRight, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';

const MarketOpportunity = () => {
  return (
    <section className="py-24 bg-[#0B0F19] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 font-bold px-4 py-1.5 rounded-full text-sm mb-6 border border-blue-500/20">
              <BarChart3 className="w-4 h-4" />
              <span>Bozor Tahlili 2024-2025</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Raqamlar <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">aldamaydi</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              KPMG va mustaqil ekspertlar tahliliga ko'ra, O'zbekistonda elektron tijorat bozori eng tez o'suvchi sektorga aylandi. 
              <br/><br/>
              An'anaviy savdodan farqli o'laroq, marketpleyslarda har yili <b>2-3 barobar</b> o'sish kuzatilmoqda. 
              Hozir boshlaganlar bozorning eng "qaymoqli" davriga ulgurishadi.
            </p>
            
            <div className="space-y-4">
              <div className="bg-white/5 p-4 rounded-xl border border-white/5 flex items-center justify-between group hover:border-blue-500/30 transition-colors">
                <div>
                  <div className="text-white font-bold text-lg">Wildberries</div>
                  <div className="text-sm text-slate-500">O'zbekiston bo'yicha buyurtmalar</div>
                </div>
                <div className="text-right">
                    <span className="text-green-400 font-bold text-xl flex items-center justify-end gap-1">+215% <TrendingUp className="w-5 h-5"/></span>
                    <span className="text-xs text-slate-500">yillik o'sish</span>
                </div>
              </div>

              <div className="bg-white/5 p-4 rounded-xl border border-white/5 flex items-center justify-between group hover:border-purple-500/30 transition-colors">
                <div>
                  <div className="text-white font-bold text-lg">Uzum Market</div>
                  <div className="text-sm text-slate-500">Faol xaridorlar bazasi</div>
                </div>
                <div className="text-right">
                    <span className="text-purple-400 font-bold text-xl flex items-center justify-end gap-1">600k+ <TrendingUp className="w-5 h-5"/></span>
                    <span className="text-xs text-slate-500">oylik faol mijoz</span>
                </div>
              </div>

              <div className="bg-white/5 p-4 rounded-xl border border-white/5 flex items-center justify-between group hover:border-green-500/30 transition-colors">
                <div>
                  <div className="text-white font-bold text-lg">Sof Foyda (Marja)</div>
                  <div className="text-sm text-slate-500">O'rtacha ko'rsatkich</div>
                </div>
                <div className="text-right">
                    <span className="text-green-400 font-bold text-xl flex items-center justify-end gap-1">35-45% <TrendingUp className="w-5 h-5"/></span>
                    <span className="text-xs text-slate-500">rentabellik</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative pt-12">
             {/* Abstract Chart Visualization */}
             <div className="aspect-square bg-gradient-to-br from-[#0F1623] to-[#020617] rounded-3xl border border-white/10 p-8 relative overflow-hidden flex items-end shadow-2xl">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                
                {/* Graph Lines Grid */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between pointer-events-none opacity-20">
                    <div className="w-full h-px bg-white border-dashed border-t"></div>
                    <div className="w-full h-px bg-white border-dashed border-t"></div>
                    <div className="w-full h-px bg-white border-dashed border-t"></div>
                    <div className="w-full h-px bg-white border-dashed border-t"></div>
                    <div className="w-full h-px bg-white border-dashed border-t"></div>
                </div>

                {/* Bars */}
                <div className="w-full h-full flex items-end justify-between gap-4 relative z-10">
                    <motion.div 
                    initial={{ height: "0%" }} whileInView={{ height: "25%" }} transition={{ duration: 0.8 }}
                    className="flex-1 bg-slate-700/30 rounded-t-lg relative group border-t border-x border-white/10"
                    >
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-slate-500 font-bold text-sm">2022</div>
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white/50 text-xs rotate-[-90deg] origin-center mb-4">$150M</div>
                    </motion.div>

                    <motion.div 
                    initial={{ height: "0%" }} whileInView={{ height: "45%" }} transition={{ duration: 0.8, delay: 0.1 }}
                    className="flex-1 bg-blue-900/40 rounded-t-lg relative group border-t border-x border-blue-500/20"
                    >
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-blue-400 font-bold text-sm">2023</div>
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white/70 text-xs rotate-[-90deg] origin-center mb-4">$300M</div>
                    </motion.div>

                    <motion.div 
                    initial={{ height: "0%" }} whileInView={{ height: "70%" }} transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-1 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg relative group shadow-[0_0_50px_rgba(37,99,235,0.3)]"
                    >
                        <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">Siz shu yerdasiz</div>
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-white font-bold text-sm">2024</div>
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white font-bold text-sm rotate-[-90deg] origin-center mb-6">$500M+</div>
                    </motion.div>

                    <motion.div 
                    initial={{ height: "0%" }} whileInView={{ height: "100%" }} transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex-1 bg-gradient-to-t from-green-500 to-emerald-400 rounded-t-lg relative group shadow-[0_0_50px_rgba(16,185,129,0.3)]"
                    >
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 text-brand-dark font-extrabold rotate-[-90deg] whitespace-nowrap tracking-widest opacity-50">MAQSAD</div>
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-green-400 font-bold text-sm">2027</div>
                         <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-brand-dark font-bold text-sm rotate-[-90deg] origin-center mb-6">$1B+</div>
                    </motion.div>
                </div>
             </div>
             
             {/* Floating Badge */}
             <div className="absolute top-24 -left-6 bg-[#1E293B] border border-white/10 p-4 rounded-xl shadow-2xl animate-float z-20">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-green-500" />
                    </div>
                    <div>
                        <p className="text-slate-400 text-xs uppercase font-bold">Yillik o'sish</p>
                        <p className="text-white font-bold text-xl">45.2%</p>
                    </div>
                </div>
             </div>

             <div className="absolute -bottom-6 -right-6 bg-brand-accent text-brand-dark font-bold p-6 rounded-2xl shadow-xl transform rotate-3 z-20">
                <p className="text-4xl tracking-tight">$500M</p>
                <p className="text-xs uppercase tracking-wider font-extrabold opacity-80">Joriy Bozor Hajmi</p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MarketOpportunity;