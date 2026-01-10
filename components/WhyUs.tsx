import React from 'react';
import { ShieldCheck, Award, Users, TrendingUp, Globe, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const reasons = [
  {
    title: "7 Yillik Tajriba",
    desc: "Biz kecha paydo bo'lgan kurs emasmiz. 7 yildan beri e-commerce bozoridamiz.",
    icon: Award,
    color: "blue"
  },
  {
    title: "400+ Muvaffaqiyatli Keys",
    desc: "Rossiya va O'zbekiston bozorida 400 dan ortiq bizneslarni oyoqqa turg'izdik.",
    icon: Users,
    color: "green"
  },
  {
    title: "Real Ekspertlar",
    desc: "Nazariyotchilar emas, amaliyotchilar dars beradi. 50+ shtatdagi xodimlar.",
    icon: Briefcase,
    color: "purple"
  },
  {
    title: "To'liq Ekosistema",
    desc: "Faqat bilim emas, logistika, ombor va analitika xizmatlarini ham taqdim etamiz.",
    icon: Globe,
    color: "orange"
  },
  {
    title: "Yuridik Kafolat",
    desc: "Natija bo'lmasa pulingizni qaytarish yoki bepul qayta o'qitish shartnomada bor.",
    icon: ShieldCheck,
    color: "red"
  },
  {
    title: "Tezkor Natija",
    desc: "Bizning metodika orqali o'rtacha 2 oyda biznesingiz TOP savdolarga chiqadi.",
    icon: TrendingUp,
    color: "cyan"
  }
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 bg-[#050914] relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Nega aynan <span className="text-blue-500">Market Pro?</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Bozorda kurslar ko'p, lekin tizimlar kam. Biz sizga shunchaki bilim emas, ishlaydigan biznes mashinasini beramiz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/5 p-8 rounded-3xl hover:bg-white/10 hover:border-blue-500/30 transition-all group"
            >
              <div className={`w-14 h-14 rounded-2xl bg-${item.color}-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <item.icon className={`w-7 h-7 text-${item.color}-500`} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;