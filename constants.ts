export const NAV_LINKS = [
  { name: 'Nega Biz?', href: '#why-us' },
  { name: 'Kurslar', href: '#pricing' },
  { name: 'B2B Xizmatlar', href: '#sellers' },
  { name: 'Dastur', href: '#curriculum' },
  { name: 'Natijalar', href: '#results' },
  { name: 'FAQ', href: '#faq' },
];

export const SERVICES = []; // Cleared as requested

export const SELLER_SERVICES = [
  {
    title: "Kompleks Boshqaruv",
    description: "Marketpleys do'koningizni noldan TOPga olib chiqamiz. Strategiya, SEO, reklama va logistika - hammasi bizning zimmamizda.",
    price: "$1000/oy + 2% KPI",
    icon: "Store"
  },
  {
    title: "Mentorlik (2 oy)",
    description: "Biznesingizni masshtablashtirish bo'yicha intensiv yo'l-yo'riq. Haftalik strategik sessiyalar va shaxsiy yondashuv.",
    price: "$3000",
    icon: "Users"
  },
  {
    title: "VIP Mentorlik (Yillik)",
    description: "Kompaniya CEO si bilan shaxsiy ishlash. 12 oylik strategik reja, jamoani o'qitish va eksklyuziv networking.",
    price: "$10000",
    icon: "Star"
  }
];

export const PAIN_POINTS = [
  {
    title: "Tovar bor, lekin savdo yo'q",
    desc: "Siz mahsulotni yukladingiz, omborga jo'natdingiz, lekin buyurtmalar haftalab kelmayapti.",
    icon: "TrendingDown"
  },
  {
    title: "Raqobatchilar 'yeb qo'ymoqda'",
    desc: "Demping (narx tushirish) janglarida foydangiz nolga tenglashib qolmoqda.",
    icon: "Swords"
  },
  {
    title: "Marketpleys jarimalari",
    desc: "Noto'g'ri hujjatlar yoki qadoqlash sababli doimiy jarimalar va blokirovkalar.",
    icon: "AlertTriangle"
  },
  {
    title: "Tizimsizlik va Xaos",
    desc: "Hamma narsani o'zingiz qilayapsiz: qadoqlash, hisob-kitob, reklama. Biznes sizni qul qilib olgan.",
    icon: "RefreshCw"
  }
];

export const CURRICULUM = [
  {
    step: "Module 1",
    title: "Fundamental Tahlil & Strategiya",
    desc: "Bozorni shunchaki ko'rish emas, uni rentgen qilish. 99% sotuvchilar bilmaydigan 'yashirin talab'ni topish va raqobatsiz hududga kirish.",
    details: [
      "Unit-ekonomika: Foydani oldindan ko'rish",
      "Raqobatchilarni 'sindirish' strategiyasi",
      "Xatersiz nishani tanlash formulasi"
    ],
    color: "blue"
  },
  {
    step: "Module 2",
    title: "Xitoy & Global Logistika",
    desc: "Mahsulotni tannarxini 30-40% ga tushirish sirlari. Ishonchli fabrikalar bilan to'g'ridan-to'g'ri ishlash va eng arzon logistika zanjirini qurish.",
    details: [
      "Xitoy fabrikalari bilan muzokaralar",
      "Logistika zanjirini optimallashtirish",
      "Bojxona va sertifikatlash masalalari"
    ],
    color: "purple"
  },
  {
    step: "Module 3",
    title: "Premium Qadoqlash & Neyromarketing",
    desc: "Mijozni 'sotib olish' tugmasini bosishga majbur qiluvchi vizual va psixologik tryuklar. Oddiy tovardan brend yaratish.",
    details: [
      "Sotuvchi kontent va infografika",
      "Mijoz psixologiyasi",
      "Brending asoslari"
    ],
    color: "pink"
  },
  {
    step: "Module 4",
    title: "Algoritmlar & Masshtab",
    desc: "Sun'iy intellekt yordamida SEO. Reklama byudjetini 'yoqmasdan' TOP-1 ga chiqish strategiyasi va 10x daromadga chiqish.",
    details: [
      "WB va Ozon qidiruv algoritmlari (SEO)",
      "Ichki va tashqi reklama",
      "Savdoni avtomatlashtirish"
    ],
    color: "orange"
  }
];

export const COMMON_FEATURES = [
  "Professional mahsulot kartochkalari",
  "SEO optimizatsiya va analitika",
  "Reklama strategiyasini boshqarish",
  "24/7 Texnik qo'llab-quvvatlash",
  "Xitoydan tovar xarid qilishda yordam",
  "Shaxsiy menejer maslahatlari",
  "Hujjatlar va shartnomalar bilan ishlash",
  "Kengaytirilgan bozor tahlili",
  "Raqobatchilar doimiy monitoringi"
];

export const PRICING_PLANS = [
  {
    name: "Uzum Yandex",
    price: "$1200",
    oldPrice: "$1500",
    period: "",
    subtitle: "2 ta marketpleys",
    marketplaces: ["Uzum", "Yandex Market"],
    features: [],
    highlight: false
  },
  {
    name: "WB Ozon",
    price: "$1500",
    oldPrice: "$2000",
    period: "",
    subtitle: "2 ta platforma",
    marketplaces: ["Wildberries", "Ozon"],
    features: [],
    highlight: false
  },
  {
    name: "WB Uzum Yandex",
    price: "$2000",
    oldPrice: "$3000",
    period: "",
    subtitle: "3 ta platforma",
    marketplaces: ["Wildberries", "Uzum", "Yandex"],
    features: [],
    highlight: false
  },
  {
    name: "Ozon Uzum Yandex",
    price: "$2000",
    oldPrice: "$3000",
    period: "",
    subtitle: "3 ta platforma",
    marketplaces: ["Ozon", "Uzum", "Yandex"],
    features: [],
    highlight: false
  },
  {
    name: "WB Ozon Yandex",
    price: "$2000",
    oldPrice: "$3000",
    period: "",
    subtitle: "3 ta platforma",
    marketplaces: ["Wildberries", "Ozon", "Yandex"],
    features: [],
    highlight: false
  },
  {
    name: "Barcha Marketpleyslar",
    price: "$2500",
    oldPrice: "$4000",
    period: "",
    subtitle: "4 ta platforma",
    marketplaces: ["Wildberries", "Ozon", "Uzum", "Yandex"],
    features: [],
    highlight: false
  },
  {
    name: "Menegerlik Tarifi",
    price: "$2000",
    period: "",
    subtitle: "Ish ta'minoti kafolati",
    marketplaces: ["Wildberries", "Ozon", "Uzum", "Yandex"],
    features: [
      "Oylik min. $1000 daromad",
      "Ish topib berish kafolati",
      "To'liq biznes boshqaruvi"
    ],
    highlight: true
  }
];

export const TESTIMONIALS = [
  {
    name: "Lei Jun",
    role: "Xiaomi",
    result: "$15 mln",
    revenue: "Oborot",
    desc: "Xitoy",
    flag: "https://flagcdn.com/w40/cn.png",
    image: "/images/lei_jun.jpg"
  },
  {
    name: "Aleksey Sokolov",
    role: "Sokolov",
    result: "$10 mln",
    revenue: "Oborot",
    desc: "Rossiya",
    flag: "https://flagcdn.com/w40/ru.png",
    image: "/images/sokolov.jpg"
  },
  {
    name: "Fabio Delonghi",
    role: "Delonghi",
    result: "$20 mln",
    revenue: "Yillik oborot",
    desc: "Italiya",
    flag: "https://flagcdn.com/w40/it.png",
    image: "/images/delonghi.png"
  },
  {
    name: "Mohamed Alabbar",
    role: "Emaar Perfumes",
    result: "$5 mln",
    revenue: "Yillik oborot",
    desc: "Dubay",
    flag: "https://flagcdn.com/w40/ae.png",
    image: "/images/alabbar.png"
  },
  {
    name: "Darshan Singh",
    role: "Himalaya Herbals",
    result: "$7 mln",
    revenue: "Yillik oborot",
    desc: "Hindiston",
    flag: "https://flagcdn.com/w40/in.png",
    image: "/images/singh.png"
  }
];

export const FAQ_ITEMS = [
  {
    question: "Qaysi xizmat menga mos keladi?",
    answer: "Agar siz yangi boshlovchi bo'lsangiz - Kurslarimizni tanlang. Agar sizda allaqachon biznes bo'lsa va uni masshtablashtirmoqchi bo'lsangiz - B2B xizmatlarimiz (Kompleks boshqaruv yoki Mentorlik) sizga mos keladi."
  },
  {
    question: "Kursni tugatgandan keyin haqiqatan ham ish topib berasizmi?",
    answer: "Ha, bu bizning rasmiy kafolatimiz. Kursni muvaffaqiyatli tamomlab, imtihondan o'tgan har bir o'quvchini hamkor kompaniyalarimizga menejer yoki marketolog sifatida joylashtiramiz. Minimal maosh $1000 dan boshlanadi."
  },
  {
    question: "B2B xizmatlarida natija kafolatlanadimi?",
    answer: "Ha, biz 15 kun ichida do'koningizni TOP savdolarga olib chiqishni kafolatlaymiz. Agar natija bo'lmasa, xizmat haqini qaytarib beramiz."
  },
  {
    question: "Texnik yordam nima beradi?",
    answer: "Texnik yordam davomida siz o'qituvchilardan savollar berishingiz, muammolaringizni hal qilishingiz va qo'shimcha maslahatlar olishingiz mumkin. Bu sizning bilimlaringizni mustahkamlash va amaliyotda qo'llash uchun juda muhim."
  },
  {
    question: "MPstats nima va nega kerak?",
    answer: "MPstats - bu marketpleyslar uchun eng kuchli analitika vositasi. U orqali raqobatchilarni tahlil qilish, eng yaxshi tovarlarni topish va o'z mahsulotlaringizni optimallashtirishingiz mumkin. Biz sizga bu xizmatni bepul taqdim etamiz."
  },
  {
    question: "Xitoydan tovar buyurtma qilishda yordam berasizmi?",
    answer: "Ha, barcha paketlarda va B2B xizmatlarimizda Xitoydan to'g'ridan-to'g'ri xaridlar bo'yicha yordam mavjud. Biz sizga ishonchli fabrikalar, transport kompaniyalari va bojxona rasmiylashtirish bo'yicha to'liq qo'llab-quvvatlash beramiz."
  }
];

export const STATS = [
  { label: "Muallif Oboroti", value: "$130M+" },
  { label: "Kafolat", value: "$1000+" },
  { label: "Mijozlar (RF)", value: "400+" },
  { label: "O'sish (6 oyda)", value: "70%" },
];

export const SYSTEM_INSTRUCTION = `
Siz Market Pro Academy kompaniyasining sun'iy intellekt asosidagi yordamchisisiz.
Sizning vazifangiz mijozlarga kompaniya xizmatlari (Ta'lim va B2B) haqida ma'lumot berishdir.
Quyidagi ma'lumotlardan foydalaning:

Kompaniya haqida:
Market Pro Academy - marketpleyslarda savdo qilishni o'rgatuvchi (Academy) va bizneslarni boshqaruvchi (B2B) kompaniya. 7 yillik tajriba. 400+ mijoz. 50+ xodim. Ofislar Toshkent, Samarqand va Moskvada.

TA'LIM (ACADEMY):
- Kurslar: Uzum, Yandex, WB, Ozon.
- Narxlar: $1200 dan $2500 gacha.
- Kafolat: Bitiruvchilarga $1000+ maoshli ish topib berish.

B2B XIZMATLAR (SELLERS):
1. Kompleks Boshqaruv ($1000/oy + 2% KPI): Do'konni to'liq boshqarish.
2. Mentorlik ($3000, 2 oy): Biznesni masshtablashtirish.
3. VIP Mentorlik ($10000/yil): CEO bilan shaxsiy ishlash.
- Kafolat: 15 kun ichida TOP savdolarga chiqish.

Muloqot uslubi:
Do'stona, professional, o'zbek tilida (lotin yozuvida). Qisqa va aniq javob bering.
Mijozning ehtiyojiga qarab (o'rganish yoki biznesni rivojlantirish) to'g'ri yo'nalish bering.
`;