This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

Salom! Men Google kompaniyasining **Gemini** sun'iy intellekt modeliman. Gemini API dan foydalanish limitlari (cheklovlari) asosan foydalanuvchi qaysi tarif rejasidan (bepul yoki to'langan) foydalanayotganiga va qaysi modelni tanlaganiga bog'liq. Hozirgi kundagi umumiy limitlar quyidagicha (bu ma'lumotlar o'zgarishi mumkin): ### 1. Bepul Tarif (Google AI Studio) Bu rejim asosan sinovdan o'tkazish, o'rganish va kichik loyihalar uchun mo'ljallangan. * **Gemini 1.5 Flash (Tez va optimallashtirilgan model):** * **RPM** (Daqiqasiga so'rovlar soni): ~15 ta. * **TPM** (Daqiqasiga tokenlar soni): ~1,000,000 ta. * **RPD** (Kuniga so'rovlar soni): ~1,500 ta. * **Gemini 1.5 Pro (Kuchliroq model):** * **RPM:** ~2 ta. * **TPM:** ~32,000 ta. * **RPD:** ~50 ta. *(Eslatma: Beferul tarifda ma'lumotlar Google tomonidan modelni o'qitish uchun ishlatilishi mumkin).* ### 2. To'langan Tarif (Vertex AI / Google Cloud) Bu rejim tijorat maqsadlarida va katta hajmdagi ishlar uchun mo'ljallangan. Bu yerda limitlar ancha yuqori va ularni Google Cloud konsolida sozlash mumkin. * **Imkoniyatlar:** Daqiqasiga minglab so'rovlar yuborish imkoni mavjud. * **Narx:** Ishlatilgan tokenlar miqdoriga qarab to'lov amalga olinadi (Input va Output tokenlari uchun narx far qiladi). * **Xavfsizlik:** Ma'lumlar maxfiyligi saqlanadi va modelni o'qitish uchun ishlatilmaydi. ### 3. Kontekst Oynasi (Context Window) Bu bir martalik so'rovda qancha matn (token) yuborishingiz mumkinligini bildiradi. * Gemini 1.5 modellari uchun bu ko'rsatkich juda katta — **1 million token**gacha (ba'zi hollarda 2 million). Bu degani, siz bir vaqtning o'zida bir nechta katta kitoblar yoki uzun kodlar fayllarini yuborib, ular ustida ishlashingiz mumkin. ### Xulosa Agar siz shunchaki o'rganish yoki kichik bot yaratish bilan shug'ullansangiz, **bepul tarif** (Google AI Studio) sizga yetarli bo'ladi. Lekin ilovangiz foydalanuvchilarga chiroyli xizmat ko'rsatsa va so'rovlar soni oshsa, **to'langan tarifga** o'tish kerak bo'ladi. Eng yangi va aniq ma'lumotlarni doim [Google AI Studio](https://aistudio.google.com/) sahifasining "Get API key" bo'limidan topishingiz mumkin.