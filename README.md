# Electrician Website

A modern, responsive electrician service website built using **Next.js**, **Tailwind CSS**, and a **Headless WordPress CMS**. This project demonstrates a clean integration between a custom backend and a performant frontend hosted on **Vercel**.

---

## 🚀 Tech Stack

- **Frontend**: [Next.js](https://nextjs.org/) (App Router), [Tailwind CSS](https://tailwindcss.com/)
- **State Management & Data Fetching**: [TanStack Query (React Query)](https://tanstack.com/query/latest)
- **CMS**: [WordPress (ACF)](https://www.advancedcustomfields.com/) as Headless CMS
- **Hosting**: [Vercel](https://vercel.com/)
- **Package Manager**: [pnpm](https://pnpm.io/)

---

## 🔗 CMS Endpoint

The data is fetched from a headless WordPress instance:

---

## 🧠 Features

- Dynamic sections rendered based on backend data:
  - Hero
  - About
  - Services
  - Testimonials
- Custom React hook (`useHomepageSections`) for fetching content using TanStack Query
- Skeleton components for smooth loading experience
- Fully responsive and accessible UI
- Clean code structure with modular components

---

## 📦 Getting Started

### 1. Clone the repo

```bash
git clone <your-repo-url>
cd <project-folder>
pnpm install
pnpm run dev

Folder Structure
app/
  ├── page.tsx  # Main page logic
  ├── providers.ts
components/
  ├── hero/
  ├── about/
  ├── services/
  ├── testimonials/
  ├── footer/
  ├── navbar/
  └── skeleton/       # Loading states
hooks/
  └── useHomepageSection.ts

```
