import React, { useEffect, useState } from 'react';
import { generateHeroImage } from '../services/geminiService';
import { Quote, CheckCircle, TrendingUp } from 'lucide-react';

const Mentor = () => {
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
        if (process.env.API_KEY) {
            const img = await generateHeroImage(); 
            setImage(img);
        }
    }
    fetchImage();
  }, []);

  return (
    <section className="py-24 bg-white text-brand-dark relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            <div className="lg:w-1/2 relative group">
                {/* 100M Badge */}
                <div className="absolute top-8 -right-4 z-20 bg-gradient-to-r from-yellow-500 to-amber-600 text-white p-4 rounded-l-xl shadow-xl transform group-hover:scale-105 transition-transform">
                    <div className="text-xs uppercase font-bold tracking-wider opacity-90">Yillik aylanma</div>
                    <div className="text-3xl font-extrabold flex items-center gap-1">
                        $100,000,000 <TrendingUp className="w-6 h-6" />
                    </div>
                </div>

                <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-slate-200 shadow-2xl relative z-10">
                    <img 
                        src={image || "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2940&auto=format&fit=crop"} 
                        alt="Mentor" 
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8 text-white pt-24">
                        <h3 className="text-3xl font-bold mb-1">Market Pro Asoschisi</h3>
                        <p className="text-yellow-400 font-bold text-lg flex items-center gap-2">
                            <CheckCircle className="w-5 h-5" /> 6 yillik tajriba
                        </p>
                    </div>
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-brand-blue rounded-[2rem] -z-0"></div>
            </div>

            <div className="lg:w-1/2 space-y-8">
                <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-bold text-sm">
                    TOP EKSPERT
                </div>
                <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight text-slate-900">
                    "$100mln lik natija <br/> <span className="text-brand-blue">tasodif emas."</span>
                </h2>
                
                <div className="relative pl-8 border-l-4 border-brand-accent">
                    <Quote className="absolute -top-4 -left-6 w-8 h-8 text-brand-accent bg-white" />
                    <p className="text-xl text-slate-700 italic font-medium leading-relaxed">
                        Ko'pchilik "kurs sotib qochishni" o'ylaydi. Mening yillik aylanmam <span className="font-bold text-brand-dark bg-yellow-200 px-1">$100,000,000</span> dan oshadi. Men uchun kurs sotish — bu daromad manbai emas, balki kuchli jamoa yig'ish vositasi. Menga shogird emas, biznes sheriklar kerak.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200 hover:border-blue-500 transition-colors">
                        <CheckCircle className="w-6 h-6 text-brand-blue" />
                        <span className="font-bold">Rossiyada 300+ proyekt</span>
                    </div>
                    <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200 hover:border-blue-500 transition-colors">
                        <CheckCircle className="w-6 h-6 text-brand-blue" />
                        <span className="font-bold">Shaxsiy nazorat</span>
                    </div>
                    <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200 hover:border-blue-500 transition-colors">
                        <CheckCircle className="w-6 h-6 text-brand-blue" />
                        <span className="font-bold">100% Amaliyot</span>
                    </div>
                    <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200 hover:border-blue-500 transition-colors">
                        <CheckCircle className="w-6 h-6 text-brand-blue" />
                        <span className="font-bold">Yuridik Kafolat</span>
                    </div>
                </div>

                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
                  className="bg-brand-dark text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl w-full sm:w-auto"
                >
                    Mentor bilan gaplashish
                </button>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Mentor;