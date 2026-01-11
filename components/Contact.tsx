import React, { useState } from 'react';
import { MapPin, Phone, ArrowRight } from 'lucide-react';
import { sendToTelegram } from '../services/telegram';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Telegram'ga yuborish
      const success = await sendToTelegram({
        name: formData.name,
        phone: formData.phone,
      });

      if (success) {
        setSubmitted(true);
        setFormData({ name: '', phone: '' });

        // 3 soniyadan keyin success xabarini yashirish
        setTimeout(() => {
          setSubmitted(false);
        }, 3000);
      } else {
        setError('Xatolik yuz berdi. Iltimos, qaytadan urinib ko\'ring.');
      }
    } catch (err) {
      setError('Xatolik yuz berdi. Iltimos, qaytadan urinib ko\'ring.');
      console.error('Form submission error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-brand-dark to-[#050914] text-white"
      style={{ contentVisibility: 'auto', containIntrinsicSize: '800px' } as any}
    >
      <div className="container mx-auto px-6">
        <div className="bg-blue-600 rounded-[3rem] p-10 md:p-20 relative overflow-hidden">
          {/* Decor - Simplified */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                Biznesingizni <br /> bugun boshlang
              </h2>
              <p className="text-blue-100 mb-10 text-lg max-w-md">
                Formani to'ldiring va menejerlarimiz 15 daqiqa ichida sizga aloqaga chiqib, bepul audit o'tkazib berishadi.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 text-blue-100">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-xl">+998 97 124 76 97</span>
                </div>
                <div className="flex items-start gap-4 text-blue-100">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-3 font-medium">
                    <div className="flex items-center gap-2">
                      <img src="https://flagcdn.com/w40/uz.png" alt="Uzbekistan" className="w-5 h-auto rounded-sm shadow-sm" />
                      <span>Samarqand: Ibn Sina 7</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <img src="https://flagcdn.com/w40/uz.png" alt="Uzbekistan" className="w-5 h-auto rounded-sm shadow-sm" />
                      <span>Toshkent: Sergeli 7 82</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <img src="https://flagcdn.com/w40/ru.png" alt="Russia" className="w-5 h-auto rounded-sm shadow-sm" />
                      <span>Moskva: Montajnaya 7s8</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <img src="https://flagcdn.com/w40/ru.png" alt="Russia" className="w-5 h-auto rounded-sm shadow-sm" />
                      <span>Moskva: TC Krona, Kronshtadtskiy bulvar 7s3</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="contact-form" className="bg-white text-slate-900 p-8 rounded-3xl shadow-2xl scroll-mt-20">
              <h3 className="text-2xl font-bold mb-6">Ariza qoldirish</h3>

              {submitted ? (
                <div className="bg-green-100 text-green-700 p-8 rounded-2xl text-center">
                  <div className="text-4xl mb-2">🎉</div>
                  <h4 className="font-bold text-xl mb-2">Rahmat!</h4>
                  <p>Arizangiz qabul qilindi. Tez orada siz bilan bog'lanamiz!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="bg-red-100 text-red-700 p-4 rounded-xl text-sm">
                      {error}
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Ismingiz</label>
                    <input
                      type="text"
                      required
                      disabled={loading}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="Ismingizni kiriting"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Telefon raqam</label>
                    <input
                      type="tel"
                      required
                      disabled={loading}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                      placeholder="+998 97 124 76 97"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-brand-dark hover:bg-slate-800 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Yuborilmoqda...
                      </>
                    ) : (
                      <>
                        Yuborish <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
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