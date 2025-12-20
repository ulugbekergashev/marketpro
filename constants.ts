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
    name: "Standart",
    price: "$999",
    period: "",
    duration: "1 oy + 1 oy texnik yordam",
    subtitle: "UZUM bilan ishga tushirish",
    features: [
      "UZUM platformasida ishlash",
      "Shartnoma tuzish va tovar tanlash",
      "Mahsulot kartochkalarini yaratish",
      "Assortiment tahlili va optimizatsiya",
      "Logistika turlari (FBS, FBO, DBS)",
      "Reklama sozlash bo'yicha qo'llanma",
      "Ijobiy sharhlar strategiyasi",
      "Xitoydan to'g'ridan-to'g'ri xaridlar",
      "MPstats - 1 oy bepul kirish",
      "Kurs oxirida sertifikat"
    ],
    highlight: false
  },
  {
    name: "Standart Plus",
    price: "$1999",
    period: "",
    duration: "1 oy + 1 oy texnik yordam",
    subtitle: "Ko'p platformali start",
    features: [
      "Barcha Standart paket imkoniyatlari",
      "Uzum, Ozon, Wildberries, Yandex Market",
      "Tovar xarid byudjeti: $1000-$1500",
      "Haftada 2 marta 2 soatlik darslar",
      "MPstats - 1 oy bepul kirish",
      "Kurs oxirida sertifikat"
    ],
    highlight: true
  },
  {
    name: "Biznes",
    price: "$2999",
    period: "",
    duration: "2 oy + 2 oy texnik yordam",
    subtitle: "Xalqaro darajaga chiqish",
    features: [
      "Standart va Standart Plus imkoniyatlari",
      "Shaxsiy kurator bilan ishlash",
      "Chuqur platformalar va strategiyalar",
      "Xitoy va Turkiyaga amaliy sayohatlar",
      "Biznes nonushta va kechki ovqatlar",
      "Biznes-forumlarda qatnashish",
      "Xitoydan to'g'ridan-to'g'ri buyurtmalar",
      "MPstats - 3 oy bepul kirish",
      "Haftada 3 marta 2 soatlik darslar",
      "Kurs oxirida sertifikat"
    ],
    highlight: false
  },
  {
    name: "VIP",
    price: "$3999",
    period: "",
    duration: "3 oy + 3 oy texnik yordam",
    subtitle: "Maksimal bilim va imkoniyatlar",
    features: [
      "Barcha paketlarning imkoniyatlari",
      "4 oylik bepul ta'lim kirish",
      "Yirik bozorlarga eksklyuziv sayohatlar",
      "Ekspertlar bilan biznes-rejalar ishlab chiqish",
      "Biznes nonushta va kechki ovqatlar",
      "Yirik forumlarda qatnashish",
      "Xitoydan to'g'ridan-to'g'ri buyurtmalar",
      "Haftada 3 marta 2 soatlik darslar",
      "MPstats - 4 oy bepul kirish",
      "Professionallikni tasdiqlovchi sertifikat"
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
    question: "Qaysi paket menga mos keladi?",
    answer: "Agar siz yangi boshlovchi bo'lsangiz va bitta platformada (UZUM) ishlashni xohlasangiz - Standart paket. Ko'p platformalarda ishlashni istasangiz - Standart Plus. Xalqaro tajriba va networking kerak bo'lsa - Biznes yoki VIP paketlarni tanlang."
  },
  {
    question: "Kursni tugatgandan keyin haqiqatan ham ish topib berasizmi?",
    answer: "Ha, bu bizning rasmiy kafolatimiz. Kursni muvaffaqiyatli tamomlab, imtihondan o'tgan har bir o'quvchini hamkor kompaniyalarimizga menejer yoki marketolog sifatida joylashtiramiz. Minimal maosh $1000 dan boshlanadi."
  },
  {
    question: "Men noldan boshlamoqchiman, menga to'g'ri keladimi?",
    answer: "Albatta! Barcha paketlar yangi boshlovchilar uchun moslashgan. Biz sizga mahsulot tanlashdan tortib birinchi sotuvgacha qadam-baqadam yo'l ko'rsatamiz. Standart paket aynan yangi boshlovchilar uchun yaratilgan."
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
    answer: "Ha, barcha paketlarda Xitoydan to'g'ridan-to'g'ri xaridlar bo'yicha yordam mavjud. Biz sizga ishonchli fabrikalar, transport kompaniyalari va bojxona rasmiylashtirish bo'yicha to'liq qo'llab-quvvatlash beramiz."
  }
];

export const STATS = [
  { label: "Muallif Oboroti", value: "$100M+" },
  { label: "Kafolat", value: "$1000+" },
  { label: "Mijozlar (RF)", value: "400+" },
  { label: "O'sish (6 oyda)", value: "61%" },
];

export const SYSTEM_INSTRUCTION = `
Siz Market Pro Academy kompaniyasining sun'iy intellekt asosidagi yordamchisisiz.
Sizning vazifangiz mijozlarga kompaniya kurslari, paketlari va afzalliklari haqida ma'lumot berishdir.
Quyidagi ma'lumotlardan foydalaning:

Kompaniya haqida:
Market Pro Academy - marketpleyslarda savdo qilishni o'rgatuvchi ta'lim kompaniyasi. 6 yillik tajriba. 400+ mijoz. 50+ xodim. Ofislar Toshkent, Samarqand va Moskvada.
Kurs muallifi va asoschi yillik aylanmasi $100 Million dollardan oshadi.

ASOSIY TAKLIF (KILLER OFFER):
Biz kursni muvaffaqiyatli bitirgan har bir o'quvchiga $1000+ maoshli ish topib berishga KAFOLAT beramiz.

Kurs Paketlari:
1. Standart ($999): 1 oy + 1 oy texnik yordam. UZUM platformasida ishlash, shartnoma, tovar tanlash, kartochkalar yaratish, logistika, reklama, Xitoydan xaridlar. MPstats 1 oy bepul.

2. Standart Plus ($1999) - ENG OMMABOP: 1 oy + 1 oy texnik yordam. Uzum, Ozon, Wildberries, Yandex Market. Tovar xarid byudjeti $1000-$1500. Haftada 2x2 soat darslar. MPstats 1 oy bepul.

3. Biznes ($2999): 2 oy + 2 oy texnik yordam. Shaxsiy kurator. Xitoy va Turkiyaga sayohatlar. Biznes nonushta/kechki ovqatlar. Forumlarda qatnashish. Haftada 3x2 soat. MPstats 3 oy bepul.

4. VIP ($3999): 3 oy + 3 oy texnik yordam. 4 oylik bepul ta'lim. Eksklyuziv sayohatlar. Ekspertlar bilan biznes-rejalar. Yirik forumlarda qatnashish. Haftada 3x2 soat. MPstats 4 oy bepul.

Barcha paketlarda:
- Kurs oxirida rasmiy sertifikat
- Xitoydan to'g'ridan-to'g'ri xaridlar bo'yicha yordam
- Kafolatlangan ish joylashtiruvi ($1000+ maosh)

Natijalar:
- Kursni tugatganlarning 95%i ish topadi
- O'rtacha ish haqi $1000-$2000
- Eng yaxshi o'quvchilar $3000+ daromad qilishadi

Muloqot uslubi:
Do'stona, professional, o'zbek tilida (lotin yozuvida). Qisqa va aniq javob bering.
Sotuvga undashga harakat qiling (Call to action).
Paketlar orasidagi farqlarni tushuntirib bering.
`;