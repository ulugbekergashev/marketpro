# 🤖 Telegram Bot Sozlash Qo'llanmasi

Bu qo'llanma sizga Telegram bot yaratish va MarketPro Academy saytingiz bilan bog'lash bo'yicha batafsil ko'rsatmalar beradi.

## 📋 Bosqichlar

### 1️⃣ Telegram Bot Yaratish (2 daqiqa)

1. **Telegram'da BotFather'ni oching:**
   - Telegram'da `@BotFather` ni qidiring va ochish
   - Yoki bu linkni bosing: https://t.me/BotFather

2. **Yangi bot yarating:**
   - `/newbot` buyrug'ini yuboring
   - Bot uchun **nom** kiriting (masalan: `MarketPro Academy Bot`)
   - Bot uchun **username** kiriting (masalan: `marketpro_academy_bot`)
   - Username `bot` bilan tugashi kerak

3. **Bot Token'ni saqlang:**
   - BotFather sizga token beradi, masalan:
   ```
   7891234567:AAHdqTcvCH1vGWJxfSeofSAs0K5PALDsaw
   ```
   - Bu token'ni xavfsiz joyga nusxalab qo'ying! ⚠️

---

### 2️⃣ Chat ID Olish (1 daqiqa)

**Variant A: Shaxsiy botga yuborish**

1. Yaratgan botingizni oching
2. `/start` buyrug'ini yuboring
3. Brauzerda quyidagi URL'ni oching (TOKEN o'rniga o'z tokeningizni qo'ying):
   ```
   https://api.telegram.org/bot<TOKEN>/getUpdates
   ```
   Masalan:
   ```
   https://api.telegram.org/bot7891234567:AAHdqTcvCH1vGWJxfSeofSAs0K5PALDsaw/getUpdates
   ```

4. Natijada `"chat":{"id":123456789,...}` ko'rinishida **Chat ID** topasiz
5. Bu raqamni saqlang (masalan: `123456789`)

**Variant B: Kanal/Guruhga yuborish** (Tavsiya qilinadi ✅)

1. Telegram'da yangi **kanal** yoki **guruh** yarating
2. Botingizni **admin** qilib qo'shing
3. Kanalga biror xabar yuboring
4. Yuqoridagi URL orqali `getUpdates` qiling
5. Chat ID ni oling (kanal uchun `-100` bilan boshlanadi, masalan: `-1001234567890`)

---

### 3️⃣ Loyihaga Sozlash (30 soniya)

1. **`.env.local` faylini oching** (yoki yarating):
   ```bash
   c:\Users\ASUS I7\Desktop\marketpro\.env.local
   ```

2. **Quyidagi qatorlarni qo'shing** (o'z ma'lumotlaringizni kiriting):
   ```env
   VITE_TELEGRAM_BOT_TOKEN=7891234567:AAHdqTcvCH1vGWJxfSeofSAs0K5PALDsaw
   VITE_TELEGRAM_CHAT_ID=123456789
   ```

3. **Faylni saqlang**

---

### 4️⃣ Ishga Tushirish va Test Qilish

1. **Dev serverni qayta ishga tushiring:**
   ```bash
   npm run dev
   ```

2. **Saytni oching:**
   - Brauzerda `http://localhost:5173` ga o'ting

3. **Formani to'ldiring:**
   - Contact bo'limiga o'ting
   - Ism va telefon raqam kiriting
   - "Yuborish" tugmasini bosing

4. **Telegram'ni tekshiring:**
   - Botingiz yoki kanalingizda yangi xabar paydo bo'lishi kerak:
   ```
   🎯 YANGI ARIZA!

   👤 Ism: Test User
   📞 Telefon: +998 90 123 45 67

   📅 Vaqt: 17.12.2024, 19:38
   🌐 Sahifa: MarketPro Academy
   ```

---

## ✅ Muvaffaqiyatli Sozlash Belgilari

- ✅ Forma yuborilganda "Yuborilmoqda..." loading ko'rsatiladi
- ✅ Telegram'ga xabar keladi
- ✅ "Rahmat! Arizangiz qabul qilindi" xabari chiqadi
- ✅ Forma tozalanadi

---

## ❌ Muammolarni Hal Qilish

### Xabar kelmayapti?

1. **Token va Chat ID to'g'riligini tekshiring**
   - `.env.local` faylida xatolik yo'qligini tekshiring
   - Token'da bo'sh joy yoki qo'shimcha belgilar yo'qligini tekshiring

2. **Serverni qayta ishga tushiring**
   - `.env.local` o'zgarganda server qayta ishga tushishi kerak
   - Terminal'da `Ctrl+C` bosing va `npm run dev` qayta ishga tushiring

3. **Brauzer konsolini tekshiring**
   - F12 bosing va Console'ni oching
   - Qizil xatoliklar bormi tekshiring

4. **Bot admin ekanligini tekshiring**
   - Agar kanal/guruhga yuborayotgan bo'lsangiz
   - Bot admin huquqlariga ega bo'lishi kerak

### "Property 'env' does not exist" xatoligi?

- `vite-env.d.ts` fayli yaratilganligini tekshiring
- TypeScript serverni qayta ishga tushiring

---

## 🔒 Xavfsizlik

- ⚠️ **Token va Chat ID ni hech qachon GitHub'ga yuklmang!**
- ✅ `.env.local` fayli `.gitignore` da mavjud
- ✅ Faqat production'da environment variables ishlatiladi

---

## 🚀 Production'ga Deploy Qilish

Vercel, Netlify yoki boshqa platformaga deploy qilayotganda:

1. **Environment Variables qo'shing:**
   - Platform settings'ga o'ting
   - Environment Variables bo'limini toping
   - Quyidagilarni qo'shing:
     - `VITE_TELEGRAM_BOT_TOKEN` = sizning tokeningiz
     - `VITE_TELEGRAM_CHAT_ID` = sizning chat ID'ingiz

2. **Deploy qiling**

---

## 📞 Yordam

Agar muammo yuzaga kelsa:
- Barcha bosqichlarni qaytadan tekshiring
- Console'dagi xatoliklarni o'qing
- Token va Chat ID to'g'riligini ikki marta tekshiring

**Omad! 🎉**
