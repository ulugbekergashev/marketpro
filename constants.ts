export const NAV_LINKS = [
  { name: 'Nega Biz?', href: '#why-us' },
  { name: 'Dastur', href: '#curriculum' },
  { name: 'Natijalar', href: '#results' },
  { name: 'Tariflar', href: '#pricing' },
  { name: 'FAQ', href: '#faq' },
];

export const SERVICES = []; // Cleared as requested

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

export const PRICING_PLANS = [
  {
    name: "Kompleks kuzatuv",
    price: "$1000",
    period: "/ oy",
    subtitle: "+ aylanmadan 2% KPI",
    features: [
      "Uzoq muddatli hamkorlik",
      "Shartnoma asosida",
      "Do'konni to'liq boshqarish",
      "Muntazam hisobotlar",
      "Reklama strategiyasi"
    ],
    highlight: false
  },
  {
    name: "1 Oylik Mentoring",
    price: "$2000",
    period: "",
    subtitle: "Tezkor start uchun",
    features: [
      "1 oy davomida qo'llab-quvvatlash",
      "Biznes jarayonlarini yo'lga qo'yish",
      "Xatarlarni kamaytirish",
      "Jamoani shakllantirish yordami"
    ],
    highlight: true
  },
  {
    name: "Yillik Mentoring (VIP)",
    price: "$10,000",
    oldPrice: "$18,000",
    period: "/ yil",
    subtitle: "Shaxsiy mentor - Bosh direktor",
    features: [
      "12 oylik uzoq muddatli strategiya",
      "Bosh direktor bilan sessiyalar",
      "KPI doimiy nazorati",
      "Jamoani o'qitish va tizimlashtirish",
      "Biznesni avtonom holatga keltirish"
    ],
    highlight: false
  }
];

export const TESTIMONIALS = [
  {
    name: "Bogdanov D.K.",
    role: "Uy tekstili",
    result: "+150%",
    revenue: "1.2 mlrd so'm/oy",
    desc: "6 oyda Wildberries’da 150% o‘sishga erishdi. Kartochkalarni optimallashtirish va to‘g‘ri reklama strategiyasi natijasida.",
    imagePrompt: "Portrait of a happy middle-aged russian businessman, wearing casual shirt, office background, high quality"
  },
  {
    name: "Surnina O.V.",
    role: "Kosmetika brendi",
    result: "$1M",
    revenue: "Yillik aylanma",
    desc: "Ozon va Wildberries orqali bozorda muvaffaqiyatli start oldi. Birinchi yilda katta natija.",
    imagePrompt: "Portrait of a successful young business woman, blonde hair, professional blazer, confident smile, studio lighting"
  },
  {
    name: "Sharipov U.Sh.",
    role: "Elektronika do‘koni",
    result: "60%",
    revenue: "Konversiya oshdi",
    desc: "Yandex.Marketda 50–60% konversiya o‘sishi. Izohlar bilan ishlash va SEO optimizatsiya orqali.",
    imagePrompt: "Portrait of a smart uzbek male entrepreneur, glasses, modern office background, looking at tablet"
  }
];

export const FAQ_ITEMS = [
  {
    question: "Natija bo'lmasa pul qaytariladimi?",
    answer: "Ha, biz shartnomada KPI ko'rsatkichlarini belgilaymiz. Agar bizning aybimiz bilan belgilangan natijaga erishilmasa, biz kafolat majburiyatlarini bajaramiz."
  },
  {
    question: "Haqiqatan ham $1000 lik ish topib berasizmi?",
    answer: "Ha, bu bizning rasmiy kafolatimiz. Kursni muvaffaqiyatli tamomlab, imtihondan o'tgan har bir o'quvchini hamkor kompaniyalarimizga menejer yoki marketolog sifatida joylashtiramiz."
  },
  {
    question: "Men noldan boshlamoqchiman, menga to'g'ri keladimi?",
    answer: "Albatta. '2 Oylik Mentoring' paketi aynan yangi boshlovchilar uchun moslashgan. Biz sizga mahsulot tanlashdan tortib birinchi sotuvgacha yordam beramiz."
  },
  {
    question: "Sizning xizmat haqingiz qimmat emasmi?",
    answer: "Bozorda arzon mutaxassislar ko'p, lekin ular ko'pincha sizning byudjetingizni yoqib yuborishadi. Bizning narxlarimiz tajriba va kafolatlangan natijaga asoslangan. Bitta to'g'ri tanlangan tovar sizga bu pulni 1 oyda qaytarib berishi mumkin."
  },
  {
    question: "Jarayon qancha vaqt oladi?",
    answer: "O'rtacha hisobda do'konni noldan ishga tushirish va birinchi sotuvlarni olish uchun 15-20 kun ketadi. Top savdoga chiqish uchun 2-3 oy talab qilinishi mumkin."
  }
];

export const STATS = [
  { label: "Muallif Oboroti", value: "$100M+" },
  { label: "Kafolat", value: "$1000+" },
  { label: "Mijozlar (RF)", value: "300+" },
  { label: "O'sish (6 oyda)", value: "61%" },
];

export const SYSTEM_INSTRUCTION = `
Siz Market Pro Academy kompaniyasining sun'iy intellekt asosidagi yordamchisisiz.
Sizning vazifangiz mijozlarga kompaniya xizmatlari, narxlari va afzalliklari haqida ma'lumot berishdir.
Quyidagi ma'lumotlardan foydalaning:

Kompaniya haqida:
Market Pro Academy - marketpleyslarda savdo qilishni o'rgatuvchi va xizmat ko'rsatuvchi kompaniya. 6 yillik tajriba. 300+ mijoz. 50+ xodim. Ofislar Toshkent, Samarqand va Moskvada.
Kurs muallifi va asoschi yillik aylanmasi $100 Million dollardan oshadi.

ASOSIY TAKLIF (KILLER OFFER):
Biz kursni muvaffaqiyatli bitirgan har bir o'quvchiga $1000 maoshli ish topib berishga KAFOLAT beramiz.

Xizmatlar:
- Do'kon yaratish va sozlash
- SEO optimizatsiya
- Raqobatchilar tahlili
- Reklama va targ'ibot
- Logistika va ombor
- Texnik yordam

Tariflar:
1. Kompleks kuzatuv (Eng ommabop): $1000/oy + 2% KPI.
2. 2 oylik mentoring: $3000.
3. Yillik Mentoring (VIP): $10,000. Bosh direktor shaxsan shug'ullanadi.

Natijalar:
- 15 kunda TOPga chiqish kafolati.
- O'rtacha mijoz 6 oyda 61% o'sadi.
- 92% mijozlar qaytib keladi.

Muloqot uslubi:
Do'stona, professional, o'zbek tilida (lotin yozuvida). Qisqa va aniq javob bering.
Sotuvga undashga harakat qiling (Call to action).
`;