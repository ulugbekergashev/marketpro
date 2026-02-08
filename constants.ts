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
    description: "Do'konni noldan yoki mavjudini to'liq boshqarish. Strategiya, SEO, reklama, logistika va zaxiralar boshqaruvi.",
    price: "Individual",
    icon: "Store",
    details: [
      "Marketpleys strategiyasi va rivojlanish rejasi",
      "SEO: kalit so'zlar, pozitsiya nazorati va optimizatsiya",
      "Kartochkalarni yangilash va sotuvga moslash",
      "Assortiment, foyda va aylanma tahlili",
      "Reklama kampaniyalarini yuritish va optimizatsiya",
      "Logistika va zaxiralar boshqaruvi",
      "Haftalik hisobot va strategik yangilanishlar"
    ]
  },
  {
    title: "Mentorlik (2 oy)",
    description: "Mavjud do'kon asosida individual o'qitish va shaxsiy mentorlik sessiyalari.",
    price: "Individual",
    icon: "Users",
    details: [
      "Har kuni 2 soatlik mentorlik sessiyalari",
      "Do'konni chuqur tahlil qilish",
      "SEO va kartochkalarni real misollarda yaxshilash",
      "Reklama va savdo strategiyalarini qayta qurish",
      "Marketpleys funksiyalari va algoritmlarini amalda o'rganish",
      "Unit-ekonomika va foyda oshirish",
      "Qarorlarni tushuntirish bilan ishlab chiqish"
    ]
  },
  {
    title: "VIP Mentorlik (Yillik)",
    description: "Kompaniya CEO'si bilan shaxsiy mentorlik va 12 oylik strategik reja.",
    price: "Individual",
    icon: "Star",
    details: [
      "12 oylik strategik reja",
      "Mentorlik (2 oy) dagi barcha imkoniyatlar",
      "Biznesni mashtablash va tizimlashtirish",
      "Jamoani o'qitish",
      "Yuqori darajadagi kontaktlar va networking",
      "Murakkab qarorlar bo'yicha to'g'ridan-to'g'ri maslahat"
    ]
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
    title: "Marketpleyslarga kirish",
    desc: "Marketpleyslar nima va ular qanday ishlaydi. Rossiyadagi asosiy maydonlar (WB, Ozon, Yandex) va ularning xususiyatlari.",
    details: [
      "Marketpleys va internet-do'kon farqi",
      "WB, Ozon, Yandex Market tahlili",
      "Tovar uchun maydon tanlash"
    ],
    color: "blue"
  },
  {
    step: "Module 2",
    title: "SEO asoslari",
    desc: "Qidiruv algoritmlari bilan ishlash. Kartochkangizni qidiruvda TOPga olib chiqish sirlari.",
    details: [
      "Kalit so'zlarni to'g'ri tanlash",
      "WB, Ozon va Yandexda SEO farqlari",
      "SEO optimizatsiya strategiyasi"
    ],
    color: "purple"
  },
  {
    step: "Module 3",
    title: "Mahsulot kartochkalari",
    desc: "Mijozni bir ko'rishda jalb qiluvchi kontent yaratish. Foto, sarlavha va tavsiflar.",
    details: [
      "Sotuvchi infografika va foto",
      "Jozibador sarlavhalar yozish",
      "Konversiyani oshiruvchi tavsiflar"
    ],
    color: "pink"
  },
  {
    step: "Module 4",
    title: "Assortiment va ma'lumotlar tahlili",
    desc: "Raqamlar bilan ishlash. Qaysi tovar foyda keltirishini aniqlash va xitlarni topish.",
    details: [
      "Oborot va rentabellik tahlili",
      "Xit tovarlarni topish formulasi",
      "Excel va Google Sheetsda hisobotlar"
    ],
    color: "orange"
  },
  {
    step: "Module 5",
    title: "Marketpleyslarda logistika",
    desc: "Logistika modellarini tanlash va boshqarish. FBS, FBO va DBS modellarining afzalliklari.",
    details: [
      "Logistika modellarini tanlash",
      "Zaxiralarni boshqarish va yetkazib berish",
      "Qaytarishlar bilan ishlash"
    ],
    color: "green"
  },
  {
    step: "Module 6",
    title: "Reklama va targ'ibot",
    desc: "Ichki va tashqi reklama vositalari. Minimal budjet bilan maksimal natija.",
    details: [
      "Targeting va aksiyalar",
      "Reklama kampaniyalarini sozlash",
      "Tashqi trafik (SMM, Blogerlar)"
    ],
    color: "indigo"
  },
  {
    step: "Module 7",
    title: "Sharhlar va reputatsiya",
    desc: "Mijozlar ishonchini qozonish. Sharhlar orqali sotuvlarni oshirish.",
    details: [
      "Ijobiy sharhlar olish strategiyasi",
      "Negativ sharhlar bilan ishlash",
      "Brend reputatsiyasini qurish"
    ],
    color: "cyan"
  },
  {
    step: "Module 8",
    title: "Unit-ekonomika (2 dars)",
    desc: "Har bir tovarning rentabelligini hisoblash. Biznesingizni 'minus'ga kirmasligini ta'minlash.",
    details: [
      "Unit-ekonomika asoslari",
      "Samaradorlikni baholash",
      "Foydani optimallashtirish"
    ],
    color: "red"
  },
  {
    step: "Module 9",
    title: "Jarayonlarni avtomatlashtirish",
    desc: "Vaqtni tejash va samaradorlikni oshirish. Avtomatlashtirish vositalari va dasturlar.",
    details: [
      "Avtobidderlar va stavkalar",
      "Vazifalarni tizimlashtirish",
      "Analitika servislarini ulash"
    ],
    color: "teal"
  },
  {
    step: "Module 10",
    title: "Keyslar va xatolar tahlili",
    desc: "Real misollar orqali o'rganish. Yangi boshlovchilar yo'l qo'yadigan xatolar.",
    details: [
      "Muvaffaqiyatli va muvaffaqiyatsiz keyslar",
      "Tipik xatolar va ularning yechimi",
      "Shaxsiy keyslar muhokamasi"
    ],
    color: "yellow"
  },
  {
    step: "Module 11",
    title: "Amaliyot va savol-javob",
    desc: "Bilimlarni amalda qo'llash. Mashtablashtirish bo'yicha yakuniy tavsiyalar.",
    details: [
      "Yakuniy amaliy vazifa",
      "Savol-javob sessiyasi",
      "Mashtablashtirish strategiyasi"
    ],
    color: "emerald"
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
  "Raqobatchilar doimiy monitoringi",
  "Excel bo'yicha bazoviy kurs (BONUS)",
  "Xitoy bilan ishlash bo'yicha bazoviy kurs (BONUS)",
  "Blogerlar bn ishlash bo'yicha bazoviy kurs (BONUS)"
];

export const PRICING_PLANS = [
  {
    name: "Uzum + Yandex",
    price: "$1200",
    oldPrice: "$1500",
    period: "",
    subtitle: "Uzum, Yandex Market",
    marketplaces: ["Uzum", "Yandex Market"],
    features: [
      "Marketpleys asoslari va platforma tanlash",
      "Uzum va Yandex'da ishlash (shartnoma, sozlash, start)",
      "SEO: kalit so'zlar va qidiruvda chiqish",
      "Sotuvchi kartochkalar (foto, sarlavha, tavsif)",
      "Assortiment tahlili: xit va nolikvid",
      "Logistika: FBS, FBO, DBS",
      "Reklama sozlash va aksiyalar",
      "Sharhlar va reputatsiya",
      "Xitoydan to'g'ridan-to'g'ri xaridlar",
      "Unit-ekonomika asoslari",
      "Analitika servislaridan foydalanish: 2 oy bepul"
    ],
    highlight: false
  },
  {
    name: "WB + Ozon",
    price: "$1500",
    oldPrice: "$2000",
    period: "",
    subtitle: "Wildberries, Ozon",
    marketplaces: ["Wildberries", "Ozon"],
    features: [
      "Marketpleyslarda ishlash algoritmlari",
      "SEO va platforma qoidalari",
      "Kuchli kartochkalar yaratish",
      "Assortiment va savdo tahlili",
      "Logistika va qaytishlar",
      "Reklama kampaniyalarini",
      "Sharhlar bilan ishlash",
      "Xitoydan tovar tanlash",
      "Unit-ekonomika va rentabellik",
      "Real keyslar va xatolar",
      "Analitika servislaridan foydalanish: 2 oy bepul"
    ],
    highlight: false
  },
  {
    name: "WB + Uzum + Yandex",
    price: "$2000",
    oldPrice: "$3000",
    period: "",
    subtitle: "Wildberries, Uzum, Yandex",
    marketplaces: ["Wildberries", "Uzum", "Yandex"],
    features: [
      "3 platformada parallel ishlash",
      "SEO va algoritmlar farqi",
      "Professional kartochkalar",
      "Assortimentni chuqur tahlil qilish",
      "Logistika va zaxira boshqaruvi",
      "Reklama va savdo o'sishi",
      "Sharhlar orqali konversiya",
      "Unit-ekonomika va foyda hisoblash",
      "Avtomatlashtirish asoslari",
      "Analitika servislaridan foydalanish: 3 oy bepul"
    ],
    highlight: false
  },
  {
    name: "Ozon + Uzum + Yandex",
    price: "$2000",
    oldPrice: "$3000",
    period: "",
    subtitle: "Ozon, Uzum, Yandex",
    marketplaces: ["Ozon", "Uzum", "Yandex"],
    features: [
      "3 marketpleysda to'liq savdo tizimi",
      "SEO va qidiruv strategiyalari",
      "Sotuvchi kontent va kartochkalar",
      "Assortiment va aylanma tahlili",
      "Logistika optimallashtirish",
      "Reklama va aksiyalar",
      "Sharhlar va mijoz ishonchi",
      "Unit-ekonomika",
      "Avtomatlashtirishga kirish",
      "Analitika servislaridan foydalanish: 3 oy bepul"
    ],
    highlight: false
  },
  {
    name: "WB + Ozon + Yandex",
    price: "$2000",
    oldPrice: "$3000",
    period: "",
    subtitle: "Wildberries, Ozon, Yandex",
    marketplaces: ["Wildberries", "Ozon", "Yandex"],
    features: [
      "3 platformada professional savdo",
      "SEO va algoritmlar",
      "Kartochkalarni maksimal konversiya uchun sozlash",
      "Assortiment va foyda tahlili",
      "Logistika va qaytishlar",
      "Reklama strategiyasi",
      "Sharhlar va reputatsiya",
      "Unit-ekonomika",
      "Avtomatlashtirish asoslari",
      "Analitika servislaridan foydalanish: 3 oy bepul"
    ],
    highlight: false
  },
  {
    name: "Barcha Marketpleyslar",
    price: "$2500",
    oldPrice: "$4000",
    period: "",
    subtitle: "WB, Ozon, Uzum, Yandex",
    marketplaces: ["Wildberries", "Ozon", "Uzum", "Yandex"],
    features: [
      "Barcha platformalarda chuqur ishlash",
      "Individual kurator",
      "SEO, reklama va strategiyalarni chuqur o'rganish",
      "Assortiment va unit-ekonomika",
      "Avtomatlashtirish va analitika",
      "Xitoy va Turkiya bozorlarini o'rganish",
      "Biznes-nonushta va networking",
      "Biznes-forumlarda ishtirok",
      "Analitika servislaridan foydalanish: 4 oy bepul"
    ],
    highlight: false
  },
  {
    name: "Menegerlik Tarifi",
    price: "$2000",
    oldPrice: "$3500",
    period: "",
    subtitle: "WB, Ozon, Uzum, Yandex",
    marketplaces: ["Wildberries", "Ozon", "Uzum", "Yandex"],
    features: [
      "Marketpleys menejeri sifatida to'liq tayyorlov",
      "Barcha platformalarda professional boshqaruv",
      "SEO, reklama va analitika (chuqur)",
      "Unit-ekonomika va biznes qarorlar",
      "To'liq biznes boshqaruvi amaliyoti",
      "Ishga joylashish kafolati",
      "Oylik min. $1000 daromad",
      "4 oy bepul o'qish",
      "Analitika servislaridan foydalanish: 4 oy bepul"
    ],
    highlight: true
  },
  {
    name: "Kompleks Boshqaruv",
    price: "Individual",
    oldPrice: "",
    period: "",
    subtitle: "WB, Ozon, Uzum, Yandex",
    marketplaces: ["Wildberries", "Ozon", "Uzum", "Yandex"],
    features: [
      "Do'konni noldan yoki mavjudini to'liq boshqarish",
      "Marketpleys strategiyasi va rivojlanish rejasi",
      "SEO: kalit so'zlar, pozitsiya nazorati va optimizatsiya",
      "Kartochkalarni yangilash va sotuvga moslash",
      "Assortiment, foyda va aylanma tahlili",
      "Reklama kampaniyalarini yuritish va optimizatsiya",
      "Logistika va zaxiralar boshqaruvi",
      "Haftalik hisobot va strategik yangilanishlar"
    ],
    highlight: false
  },
  {
    name: "Mentorlik (2 oy)",
    price: "Individual",
    oldPrice: "",
    period: "",
    subtitle: "Sizning do'koningiz",
    marketplaces: ["Sizning do'koningiz"],
    features: [
      "Mavjud do'kon asosida individual o'qitish",
      "Har kuni 2 soatlik mentorlik sessiyalari",
      "Do'konni chuqur tahlil qilish",
      "SEO va kartochkalarni real misollarda yaxshilash",
      "Reklama va savdo strategiyalarini qayta qurish",
      "Marketpleys funksiyalari va algoritmlarini amalda o'rganish",
      "Unit-ekonomika va foyda oshirish",
      "Qarorlarni tushuntirish bilan ishlab chiqish"
    ],
    highlight: false
  },
  {
    name: "VIP Mentorlik (Yillik)",
    price: "Individual",
    oldPrice: "",
    period: "",
    subtitle: "Sizning do'koningiz + jamoa",
    marketplaces: ["Sizning do'koningiz + jamoa"],
    features: [
      "Kompaniya CEO'si bilan shaxsiy mentorlik",
      "12 oylik strategik reja",
      "Mentorlik (2 oy) dagi barcha imkoniyatlar",
      "Biznesni masshtablash va tizimlashtirish",
      "Jamoani o'qitish",
      "Yuqori darajadagi kontaktlar va networking",
      "Murakkab qarorlar bo'yicha to'g'ridan-to'g'ri maslahat"
    ],
    highlight: false
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
- Kurslar: Uzum+Yandex ($1200), WB+Ozon ($1500), WB+Uzum+Yandex ($2000), Ozon+Uzum+Yandex ($2000), WB+Ozon+Yandex ($2000), Barcha Marketpleyslar ($2500), Menegerlik Tarifi ($2000).
- Kafolat: Bitiruvchilarga $1000+ maoshli ish topib berish (Menegerlik tarifida).

B2B XIZMATLAR (SELLERS):
1. Kompleks Boshqaruv: Do'konni to'liq boshqarish.
2. Mentorlik (2 oy): Biznesni masshtablashtirish.
3. VIP Mentorlik (Yillik): CEO bilan shaxsiy ishlash.
- Kafolat: 15 kun ichida TOP savdolarga chiqish.

Muloqot uslubi:
Do'stona, professional, o'zbek tilida (lotin yozuvida). Qisqa va aniq javob bering.
Mijozning ehtiyojiga qarab (o'rganish yoki biznesni rivojlantirish) to'g'ri yo'nalish bering.
`;