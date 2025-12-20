# 🚀 Vercel'ga Deploy Qilish Qo'llanmasi

## ✅ GitHub'ga yuklandi!

Kod muvaffaqiyatli GitHub'ga yuklandi:
- Repository: `ulugbekergashev/marketpro`
- Branch: `main`
- Commit: Telegram integration va pricing yangilanishlari

---

## 🌐 Vercel'da Deploy Qilish

### Variant 1: Vercel Dashboard orqali (Oson) ✅

1. **Vercel'ga kiring:** https://vercel.com/dashboard

2. **Loyihangizni toping:**
   - Agar loyiha allaqachon ulangan bo'lsa, avtomatik deploy boshlanadi
   - Agar yo'q bo'lsa, "New Project" bosing

3. **GitHub repository'ni ulang:**
   - "Import Git Repository" ni tanlang
   - `ulugbekergashev/marketpro` ni tanlang
   - "Import" bosing

4. **Environment Variables qo'shing:**
   
   **MUHIM!** ⚠️ Deploy qilishdan oldin quyidagi environment variables'ni qo'shish kerak:

   - Settings → Environment Variables ga o'ting
   - Quyidagilarni qo'shing:

   ```
   Name: VITE_TELEGRAM_BOT_TOKEN
   Value: [Sizning bot tokeningiz]
   Environment: Production, Preview, Development (hammasini belgilang)
   ```

   ```
   Name: VITE_TELEGRAM_CHAT_ID
   Value: [Sizning chat ID'ingiz]
   Environment: Production, Preview, Development (hammasini belgilang)
   ```

5. **Deploy qiling:**
   - "Deploy" tugmasini bosing
   - 2-3 daqiqa kutib turing
   - Deploy tugagach, link olasiz!

---

### Variant 2: Vercel CLI orqali (Advanced)

Agar CLI ishlatmoqchi bo'lsangiz:

```bash
# Vercel CLI o'rnatish
npm install -g vercel

# Login qilish
vercel login

# Deploy qilish
vercel

# Environment variables qo'shish
vercel env add VITE_TELEGRAM_BOT_TOKEN
vercel env add VITE_TELEGRAM_CHAT_ID

# Production'ga deploy
vercel --prod
```

---

## 🔧 Mijoz uchun sozlash

Agar mijozingiz o'z Telegram'iga xabar olishini xohlasa:

### 1️⃣ Mijoz o'z botini yaratadi
- Telegram'da `@BotFather` ga o'tadi
- `/newbot` buyrug'i bilan bot yaratadi
- Token oladi

### 2️⃣ Mijoz o'z guruhini yaratadi
- Yangi guruh ochadi
- Botni guruhga qo'shadi va admin qiladi
- Chat ID oladi (`TELEGRAM_SETUP.md` ga qarang)

### 3️⃣ Vercel'da Environment Variables o'zgartiradi
- Vercel Dashboard → Settings → Environment Variables
- `VITE_TELEGRAM_BOT_TOKEN` ni o'z tokeni bilan almashtiradi
- `VITE_TELEGRAM_CHAT_ID` ni o'z guruh ID bilan almashtiradi
- **Redeploy qiladi** (Settings → Deployments → ... → Redeploy)

---

## ✅ Tekshirish

Deploy tugagach:

1. **Saytni oching** (Vercel bergan link)
2. **Contact formani to'ldiring**
3. **Telegram guruhingizni tekshiring** - xabar kelishi kerak!

---

## 🔒 Xavfsizlik

- ✅ `.env.local` `.gitignore` da - GitHub'ga yuklanmaydi
- ✅ Environment variables faqat Vercel'da
- ✅ Token va Chat ID xavfsiz

---

## 📞 Yordam

Agar deploy'da muammo bo'lsa:

1. Vercel Logs'ni tekshiring (Dashboard → Deployments → Logs)
2. Environment Variables to'g'ri kiritilganligini tekshiring
3. Redeploy qiling

**Omad! 🎉**
