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
    name: "Uzum Yandex",
    price: "$1200",
    oldPrice: "$1500",
    period: "",
    subtitle: "2 ta marketpleys",
    features: [
      "Uzum va Yandex Market",
      "Mahsulot kartochkalari",
      "Shartnoma va hujjatlar",
      "Reklama boshqaruvi"
    ],
    highlight: false
  },
  {
    name: "WB Ozon",
    price: "$1500",
    oldPrice: "$2000",
    period: "",
    subtitle: "2 ta platformalar",
    features: [
      "Wildberries va Ozon",
      "Professional kartochka dizayni",
      "SEO optimizatsiya",
      "Raqobatchilar tahlili"
    ],
    highlight: false
  },
  {
    name: "WB Uzum Yandex",
    price: "$2000",
    oldPrice: "$3000",
    period: "",
    subtitle: "3 platformada ishga tushirish",
    features: [
      "Wildberries, Uzum, Yandex",
      "Kompleks reklama strategiyasi",
      "SEO va analitika",
      "Oylik hisobotlar"
    ],
    highlight: false
  },
  {
    name: "Ozon Uzum Yandex",
    price: "$2000",
    oldPrice: "$3000",
    period: "",
    subtitle: "3 platformali paket",
    features: [
      "Ozon, Uzum, Yandex",
      "Professional boshqaruv",
      "Marketing yechimlar",
      "Shaxsiy menejer"
    ],
    highlight: false
  },
  {
    name: "WB Ozon Yandex",
    price: "$2000",
    oldPrice: "$3000",
    period: "",
    subtitle: "3 platformalar",
    features: [
      "Wildberries, Ozon, Yandex",
      "Barcha kanallarda reklama",
      "Cross-platform analitika",
      "24/7 qo'llab-quvvatlash"
    ],
    highlight: false
  },
  {
    name: "WB, Ozon, Uzum, Yandex",
    price: "$2500",
    oldPrice: "$4000",
    period: "",
    subtitle: "Barcha platformalar",
    features: [
      "4 ta yetakchi marketpleys",
      "To'liq bozor qamrovi",
      "Premium reklama",
      "Shaxsiy account manager"
    ],
    highlight: false
  },
  {
    name: "Menegerlik Tarifi",
    price: "$2000",
    period: "",
    subtitle: "WB, Ozon, Uzum, Yandex + Ish ta'minoti",
    features: [
      "Barcha 4 platformada ishlash",
      "Oylik minimum $1000 daromad",
      "Ish topib berish kafolati",
      "To'liq biznes boshqaruvi",
      "Tovar tanlash va xarid",
      "Marketing va reklama"
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
  { label: "Muallif Oboroti", value: "$130M+" },
  { label: "Kafolat", value: "$1000+" },
  { label: "Mijozlar (RF)", value: "400+" },
  { label: "O'sish (6 oyda)", value: "70%" },
];

export const SYSTEM_INSTRUCTION = `
Siz Market Pro Academy kompaniyasining sun'iy intellekt asosidagi yordamchisisiz.
Sizning vazifangiz mijozlarga kompaniya xizmatlari, paketlari va afzalliklari haqida ma'lumot berishdir.
Quyidagi ma'lumotlardan foydalaning:

Kompaniya haqida:
Market Pro Academy - marketpleyslarda savdo qilishni o'rgatuvchi va savdoni boshqarishni taklif qiluvchi kompaniya. 7 yillik tajriba. 400+ mijoz. 50+ xodim. Ofislar Toshkent, Samarqand va Moskvada.
Kompaniya asoschilarining yillik aylanmasi $130 Million dollardan oshadi.

XIZMAT PAKETLARI:

1. Uzum Yandex ($1200, chegirmada $1500 dan): 
   2 ta marketpleys - Uzum va Yandex Market.

2. WB Ozon ($1500, chegirmada $2000 dan):
   Wildberries va Ozon.

3. WB Uzum Yandex ($2000, chegirmada $3000 dan):
   3 platformada - Wildberries, Uzum, Yandex.

4. Ozon Uzum Yandex ($2000, chegirmada $3000 dan):
   3 platformali paket - Ozon, Uzum, Yandex.

5. WB Ozon Yandex ($2000, chegirmada $3000 dan):
   3 platformalar - Wildberries, Ozon, Yandex.

6. WB, Ozon, Uzum, Yandex ($2500, chegirmada $4000 dan):
   Barcha 4 ta yetakchi marketpleys.

7. Menegerlik Tarifi ($2000 bir martalik to'lov) - ENG OMMABOP:
   MAXSUS TAKLIF! Barcha 4 platformada (WB, Ozon, Uzum, Yandex) ishlash.
   Biz sizga ish topib beramiz va oylik minimum $1000 daromad kafolatlaymiz.

Barcha paketlarda:
- Professional mahsulot kartochkalari
- SEO optimizatsiya
- Reklama boshqaruvi
- Texnik qo'llab-quvvatlash

Chegirmalar:
Hozirgi chegirma narxlari cheklangan muddat uchun amal qiladi!

Muloqot uslubi:
Do'stona, professional, o'zbek tilida (lotin yozuvida). Qisqa va aniq javob bering.
Sotuvga undashga harakat qiling (Call to action).
Eng ommabop paket sifatida "Menegerlik Tarifi" ni taklif qiling - bu $2000 evaziga $1000 lik oylik maoshli ish kafolati.
`;