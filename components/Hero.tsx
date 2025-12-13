import React, { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle2, PlayCircle, Sparkles, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import { generateHeroImage } from '../services/geminiService';

const Hero = () => {
  const [heroImage, setHeroImage] = useState<string | null>(null);
  const [isLoadingImage, setIsLoadingImage] = useState(true);

  useEffect(() => {
    const fetchImage = async () => {
      // Check if we have an API key available to avoid errors on demo without key
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
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-brand-dark text-white overflow-hidden flex items-center pt-24 pb-12 lg:pt-32">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-10000"></div>
         <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen"></div>
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content Left */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-1.5 backdrop-blur-md"
            >
              <Briefcase className="w-4 h-4 text-green-400" />
              <span className="text-sm font-bold text-green-100">Bitiruvchilarga $1000 lik ish KAFOLATI</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-7xl font-extrabold leading-[1.1]"
            >
              Marketpleysda <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-white text-glow">
                TOP Mutaxassis
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-400 max-w-lg leading-relaxed"
            >
              Biznesingizni yo'lga qo'ying yoki bizning o'quv dasturimizni tugatib, <span className="text-white font-bold border-b border-green-500 text-green-400">kafolatlangan $1000</span> maoshli ishga joylashing.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a 
                href="#contact" 
                onClick={(e) => handleScroll(e, 'contact')}
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-2xl transition-all shadow-[0_0_40px_rgba(37,99,235,0.3)] hover:shadow-[0_0_60px_rgba(37,99,235,0.5)] flex items-center justify-center gap-2 cursor-pointer"
              >
                Kursga Yozilish
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="#results" 
                onClick={(e) => handleScroll(e, 'results')}
                className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold py-4 px-8 rounded-2xl transition-all flex items-center justify-center gap-2 backdrop-blur-sm cursor-pointer"
              >
                <PlayCircle className="w-5 h-5" />
                Natijalarni ko'rish
              </a>
            </motion.div>

            <div className="flex gap-6 pt-4 text-sm text-slate-400 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" /> Ish bilan ta'minlash
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" /> Rasmiy shartnoma
              </div>
            </div>
          </div>

          {/* Image Right (AI Generated) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            {/* Decorative circles behind image */}
            <div className="absolute w-[500px] h-[500px] border border-white/5 rounded-full animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute w-[400px] h-[400px] border border-blue-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>

            <div className="relative z-10 w-full max-w-md aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900">
               {isLoadingImage ? (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-slate-800 animate-pulse">
                    <Sparkles className="w-12 h-12 text-slate-600 mb-4" />
                    <p className="text-slate-500 text-sm">Mentor surati yuklanmoqda (AI)...</p>
                  </div>
               ) : heroImage ? (
                  <img 
                    src={heroImage} 
                    alt="Market Pro Mentor" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
               ) : (
                  // Fallback image if AI generation fails or no key
                  <img 
                    src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2940&auto=format&fit=crop" 
                    alt="Default Mentor" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0"
                  />
               )}
               
               {/* Floating Badge */}
               <div className="absolute bottom-6 left-6 right-6 glass-card p-4 rounded-xl flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-400">Asosiy Maqsad</p>
                    <p className="font-bold text-white">$1000+ Daromad</p>
                  </div>
                  <div className="bg-green-500 text-white font-bold text-xs px-2 py-1 rounded">
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