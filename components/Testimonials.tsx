import React, { useEffect, useState } from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote, Star, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { generateTestimonialImages } from '../services/geminiService';

const Testimonials = () => {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImages = async () => {
        if (process.env.API_KEY) {
            const imgs = await generateTestimonialImages();
            setImages(imgs);
        }
        setLoading(false);
    }
    loadImages();
  }, []);

  return (
    <section id="results" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
             <span className="text-blue-500 font-bold tracking-wider uppercase text-sm mb-2 block">Real Keyslar</span>
             <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
                Biz gapirmaymiz, <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">biz isbotlaymiz</span>
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
              className="bg-[#0F1623] rounded-3xl border border-white/5 overflow-hidden group hover:border-blue-500/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(37,99,235,0.1)] flex flex-col h-full"
            >
              {/* Card Header with Image */}
              <div className="p-6 pb-0 flex items-center gap-4">
                 <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-500 p-0.5">
                    {loading ? (
                        <div className="w-full h-full bg-slate-800 animate-pulse rounded-full"></div>
                    ) : (
                        <img 
                            src={images[index] || "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=800&auto=format&fit=crop"} 
                            alt={item.name} 
                            className="w-full h-full object-cover rounded-full bg-slate-800"
                        />
                    )}
                 </div>
                 <div>
                    <h4 className="font-bold text-lg text-white leading-tight">{item.name}</h4>
                    <p className="text-xs text-slate-400 uppercase tracking-wide">{item.role}</p>
                 </div>
              </div>

              <div className="p-8 pt-6 flex flex-col flex-1">
                 {/* Main Stat */}
                 <div className="mb-6 bg-white/5 p-4 rounded-2xl border border-white/5">
                    <div className="flex justify-between items-end mb-1">
                        <span className="text-slate-400 text-sm">Natija:</span>
                        <ArrowUpRight className="w-5 h-5 text-green-500" />
                    </div>
                    <div className="text-4xl font-extrabold text-white mb-1">{item.result}</div>
                    <div className="text-sm font-medium text-blue-400">{item.revenue}</div>
                 </div>

                 <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1 italic relative">
                    <Quote className="absolute -top-2 -left-2 w-6 h-6 text-white/5 transform -scale-x-100" />
                    "{item.desc}"
                 </p>

                 <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
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
