import React, { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle2, PlayCircle, Sparkles, Briefcase } from 'lucide-react';
import { generateHeroImage } from '../services/geminiService';
import { motion } from 'framer-motion';

const Hero = () => {
  const [heroImage, setHeroImage] = useState<string | null>(null);
  const [isLoadingImage, setIsLoadingImage] = useState(true);

  useEffect(() => {
    const fetchImage = async () => {
      if (process.env.API_KEY) {
        const img = await generateHeroImage();
        if (img) setHeroImage(img);
      }
      setIsLoadingImage(false);
    };
    fetchImage();
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'auto' });
    }
  };

  return (
    <section className="relative min-h-screen bg-[#020617] text-white overflow-hidden flex items-center pt-8 pb-12 lg:pt-20">
      {/* Dynamic Background - Simplified */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[80px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/50 to-[#020617]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Content Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ willChange: 'transform, opacity' }}
            className="order-2 lg:order-1 space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-5 py-2 shadow-lg shadow-blue-500/10">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-xs md:text-sm font-bold text-blue-100 tracking-wide uppercase">Marketpleysda Professional Yechimlar</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight uppercase">
              O'rganing yoki <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-400 to-white drop-shadow-2xl">
                Biznesingizni TOPga
              </span> <br />
              Olib Chiqing
            </h1>

            <p className="text-base md:text-lg text-slate-400 max-w-lg leading-relaxed font-medium">
              Noldan professional darajagacha <span className="text-white font-bold">Ta'lim</span> yoki mavjud biznesingiz uchun <span className="text-blue-400 font-bold">Kompleks Boshqaruv</span>. Biz bilan marketpleyslarda muvaffaqiyatga erishing.
            </p>

            <div className="flex flex-col w-full sm:w-auto sm:flex-row gap-4 pt-4">
              <a
                href="#pricing"
                onClick={(e) => handleScroll(e, 'pricing')}
                className="group relative w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-[0_0_40px_rgba(37,99,235,0.3)] hover:shadow-[0_0_60px_rgba(37,99,235,0.5)] flex items-center justify-center gap-2 cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-100 group-hover:opacity-90 transition-opacity"></div>
                <span className="relative flex items-center gap-2 uppercase tracking-wider text-sm">
                  Kurslarni Ko'rish <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a
                href="#sellers"
                onClick={(e) => handleScroll(e, 'sellers')}
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/10 text-white font-semibold py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span className="relative flex items-center gap-2 uppercase tracking-wider text-sm">
                  <Briefcase className="w-5 h-5 group-hover:text-blue-400 transition-colors" />
                  B2B Xizmatlar
                </span>
              </a>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-6 text-sm text-slate-400 font-medium">
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/5">
                <CheckCircle2 className="w-5 h-5 text-blue-500" /> $1000+ ISH KAFOLATI
              </div>
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/5">
                <CheckCircle2 className="w-5 h-5 text-blue-500" /> 15 KUNLIK NATIJA
              </div>
            </div>
          </motion.div>

          {/* Image Right (AI Generated) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ willChange: 'transform, opacity' }}
            className="order-1 lg:order-2 relative h-[400px] lg:h-[650px] flex items-center justify-center mt-8 lg:mt-0"
          >
            {/* Decorative circles behind image - Simplified */}
            <div className="absolute w-[350px] lg:w-[600px] h-[350px] lg:h-[600px] border border-white/5 rounded-full"></div>

            {/* Glow effect - Simplified */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 blur-[60px] rounded-full"></div>

            <div className="relative z-10 w-full max-w-[320px] lg:max-w-[500px] aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#0B1121] group">
              {isLoadingImage ? (
                <div className="w-full h-full flex flex-col items-center justify-center bg-slate-800 animate-pulse">
                  <Sparkles className="w-12 h-12 text-slate-600 mb-4" />
                  <p className="text-slate-500 text-sm">Mentor surati yuklanmoqda...</p>
                </div>
              ) : <img
                src="/images/hero-final.png"
                alt="Market Pro Mentor"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700"
              />
              }

              {/* Floating Badge */}
              <div className="absolute bottom-4 lg:bottom-8 left-4 lg:left-8 right-4 lg:right-8 bg-[#1a2332] border border-white/20 p-4 lg:p-5 rounded-2xl flex items-center justify-between shadow-xl">
                <div>
                  <p className="text-[10px] lg:text-xs text-blue-200 uppercase tracking-wider font-bold mb-1">Asosiy Maqsad</p>
                  <p className="font-black text-white text-lg lg:text-2xl">$2000+ DAROMAD</p>
                </div>
                <div className="bg-blue-600 text-white font-bold text-[10px] lg:text-xs px-3 py-1.5 rounded-lg shadow-lg shadow-blue-600/50">
                  KAFOLAT
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;