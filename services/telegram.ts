// Telegram Bot API service
interface TelegramMessage {
    name: string;
    phone: string;
}

export const sendToTelegram = async (data: TelegramMessage): Promise<boolean> => {
    const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

    // Agar token yoki chat ID bo'lmasa, xatolik qaytarish
    if (!botToken || !chatId) {
        console.error('Telegram bot token yoki chat ID topilmadi!');
        return false;
    }

    // Xabar matni formatlash
    const message = `
🎯 YANGI ARIZA!

👤 Ism: ${data.name}
📞 Telefon: ${data.phone}

📅 Vaqt: ${new Date().toLocaleString('uz-UZ', {
        timeZone: 'Asia/Tashkent',
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    })}
🌐 Sahifa: MarketPro Academy
  `.trim();

    try {
        const response = await fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: message,
                    parse_mode: 'HTML',
                }),
            }
        );

        const result = await response.json();

        if (!response.ok) {
            console.error('Telegram API xatolik:', result);
            return false;
        }

        return result.ok;
    } catch (error) {
        console.error('Telegram xabar yuborishda xatolik:', error);
        return false;
    }
};
