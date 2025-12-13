import React, { useState } from 'react';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-brand-dark to-[#050914] text-white">
      <div className="container mx-auto px-6">
        <div className="bg-blue-600 rounded-[3rem] p-10 md:p-20 relative overflow-hidden">
          {/* Decor */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                Biznesingizni <br/> bugun boshlang
              </h2>
              <p className="text-blue-100 mb-10 text-lg max-w-md">
                Formani to'ldiring va menejerlarimiz 15 daqiqa ichida sizga aloqaga chiqib, bepul audit o'tkazib berishadi.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 text-blue-100">
                   <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                   </div>
                   <span className="font-bold text-xl">+998 (90) 123-45-67</span>
                </div>
                <div className="flex items-center gap-4 text-blue-100">
                   <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5" />
                   </div>
                   <span className="font-medium">Toshkent, Samarqand, Moskva</span>
                </div>
              </div>
            </div>

            <div className="bg-white text-slate-900 p-8 rounded-3xl shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Ariza qoldirish</h3>
              {submitted ? (
                <div className="bg-green-100 text-green-700 p-8 rounded-2xl text-center">
                  <div className="text-4xl mb-2">🎉</div>
                  <h4 className="font-bold text-xl mb-2">Rahmat!</h4>
                  <p>Arizangiz qabul qilindi.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Ismingiz</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all font-medium"
                      placeholder="Ismingizni kiriting"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Telefon raqam</label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all font-medium"
                      placeholder="+998"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-brand-dark hover:bg-slate-800 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 group"
                  >
                    Yuborish <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;