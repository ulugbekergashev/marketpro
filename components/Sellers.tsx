import React from 'react';
import { SELLER_SERVICES } from '../constants';
import { Store, Users, Star, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap: Record<string, React.FC<any>> = {
    Store, Users, Star
};

const Sellers = () => {
    return (
        <section id="sellers" className="py-24 bg-[#0B0F19] relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[100px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-3xl mb-16">
                    <span className="text-blue-500 font-bold tracking-wider uppercase text-sm mb-4 block">Sellerlar uchun</span>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase">
                        Mavjud biznesingizni <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">TOPga olib chiqamiz</span>
                    </h2>
                    <p className="text-slate-400 text-lg leading-relaxed">
                        Sizda allaqachon tovar bormi, lekin savdolar ko'ngildagidek emasmi? Bizning professional jamoamiz do'koningizni to'liq boshqaruvga oladi va 15 kun ichida natija ko'rsatadi.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {SELLER_SERVICES.map((service, index) => {
                        const Icon = iconMap[service.icon];
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group p-8 rounded-[2.5rem] bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-300 relative overflow-hidden flex flex-col h-full"
                            >
                                <div className="w-16 h-16 bg-blue-600/10 border border-blue-500/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                    <Icon className="w-8 h-8 text-blue-500" />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">{service.title}</h3>
                                <p className="text-slate-400 leading-relaxed mb-8 flex-1">{service.description}</p>

                                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                                    <div>
                                        <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-1">Narxi</p>
                                        <p className="text-xl font-black text-white">{service.price}</p>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                                        <ArrowUpRight className="w-5 h-5 text-white" />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Guarantee Banner */}
                <div className="mt-16 p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border border-blue-500/30 relative overflow-hidden">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                        <div className="flex-1">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">15 kun ichida TOP savdolarga chiqish kafolati</h3>
                            <p className="text-blue-100/70 text-lg">
                                Biz shunchaki maslahat bermaymiz, biz natija uchun ishlaymiz. Agar 15 kun ichida do'koningizda ijobiy o'zgarish sezmasangiz, xizmat haqini qaytarib beramiz.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 w-full md:w-auto">
                            <div className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-xl border border-white/10">
                                <CheckCircle2 className="w-5 h-5 text-blue-400" />
                                <span className="text-white font-bold text-sm uppercase">92% Mijoz Sodiqligi</span>
                            </div>
                            <div className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-xl border border-white/10">
                                <CheckCircle2 className="w-5 h-5 text-blue-400" />
                                <span className="text-white font-bold text-sm uppercase">Rasmiy Shartnoma</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sellers;
