# Astrology Landing Page

Responsive landing page built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS (ShadCN UI)**.  
The project includes mock APIs for the Hero section and Client Testimonials.

---

## 🚀 Tech Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS + ShadCN UI
- Lucide React (Icons)
- Swiper.js / Keen Slider (Carousel)

---

## 📂 Project Structure
src/
components/
landing/
Hero.tsx
Stats.tsx
Services.tsx
Testimonials.tsx
Offer.tsx
pages/
api/
hero.ts
testimonials.ts


---

## ⚡ Features
- **Hero Section (API driven)** → Title, subtitle, CTA button, astrologer image & trust badges.
- **Testimonials (API driven)** → Carousel with smooth sliding, autoplay & navigation arrows.
- **Statistics Section** → Key stats (sessions, experience).
- **Services Section** → Grid of service cards with icons & descriptions.
- **Offer Section** → Countdown timer with CTA button.
- Fully responsive (mobile → desktop).
- Dark mode support (`dark:` variants).
- Accessible (semantic HTML, alt tags, aria attributes).

---

## 🔧 Getting Started
Clone the repo and run locally:

```bash
git clone https://github.com/ankit11556/astrology-landing-page.git
cd astrology-landing-page
npm install
npm run dev

Visit: http://localhost:3000

---
🌐 API Endpoints

/api/hero → Returns hero section data

/api/testimonials → Returns client testimonials data

