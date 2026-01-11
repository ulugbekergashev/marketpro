import React from 'react';
import { Briefcase, CheckCircle2, FileSignature, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const JobGuarantee = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'auto' });
    }
  };

  return (
    <section
      className="py-20 bg-gradient-to-r from-blue-900 to-brand-dark relative border-y border-white/5 overflow-hidden"
      style={{ contentVisibility: 'auto', containIntrinsicSize: '600px' } as any}
    >
      {/* Background patterns - Simplified */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-green-500/5 rounded-full blur-[80px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-[#0F1623] border border-blue-500/30 rounded-[2.5rem] p-8 md:p-12 shadow-[0_0_50px_rgba(37,99,235,0.15)]">
          <div className="flex flex-col lg:flex-row items-center gap-12">

            {/* Left: Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-3/5 space-y-6"
            >
              <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider border border-green-500/20">
                <ShieldCheck className="w-4 h-4" /> Rasmiy Kafolat
              </div>

              <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                Kursni bitiring va <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300">
                  $1000 maoshli ishga ega bo'ling
                </span>
              </h2>

              <p className="text-slate-300 text-lg leading-relaxed">
                Biz o'z metodikamizga shu qadar ishonamizki, natija uchun to'liq javobgarlikni bo'ynimizga olamiz.
                Siz shunchaki o'qiysiz va imtihon topshirasiz — biz esa sizni hamkor kompaniyalarga ishga joylaymiz.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl">
                  <FileSignature className="w-6 h-6 text-blue-400" />
                  <span className="text-white font-medium">Shartnoma asosida</span>
                </div>
                <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl">
                  <Briefcase className="w-6 h-6 text-blue-400" />
                  <span className="text-white font-medium">Hamkorlar bazasi</span>
                </div>
              </div>
            </motion.div>

            {/* Right: Visual Offer Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-2/5 w-full"
            >
              <div
                className="bg-gradient-to-br from-white to-slate-200 text-brand-dark rounded-2xl p-8 shadow-2xl relative transition-transform duration-500"
              >
                <div className="absolute top-4 right-4 text-6xl opacity-10 font-black">JOB</div>

                <div className="border-b-2 border-dashed border-slate-300 pb-6 mb-6">
                  <h3 className="text-2xl font-bold mb-1">JOB OFFER</h3>
                  <p className="text-slate-500 text-sm uppercase tracking-widest">Ishga taklifnoma</p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between">
                    <span className="text-slate-600 font-medium">Lavozim:</span>
                    <span className="font-bold">Marketolog / Menejer</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 font-medium">Oylik maosh:</span>
                    <span className="font-extrabold text-green-600 bg-green-100 px-2 rounded">$1000 dan boshlab</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 font-medium">Holati:</span>
                    <span className="text-blue-600 font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4" /> Kafolatlangan
                    </span>
                  </div>
                </div>

                <a
                  href="#contact-form"
                  onClick={(e) => handleScroll(e, 'contact-form')}
                  className="block w-full bg-brand-dark text-white text-center py-4 rounded-xl font-bold hover:bg-blue-900 transition-colors cursor-pointer"
                >
                  O'rin band qilish
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default JobGuarantee;