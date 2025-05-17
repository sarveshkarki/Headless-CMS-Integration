# ⚡ Electrician Website

A modern, responsive electrician service website built using **Next.js**, **Tailwind CSS**, and a **Headless WordPress CMS**. This project demonstrates a clean integration between a custom backend and a performant frontend hosted on **Vercel**.

---

## 🚀 Tech Stack

- **Frontend**: [Next.js (App Router)](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management & Data Fetching**: [TanStack Query (React Query)](https://tanstack.com/query/latest)
- **CMS**: [WordPress (ACF)](https://www.advancedcustomfields.com/) as a Headless CMS
- **Hosting**: [Vercel](https://vercel.com/)
- **Package Manager**: [pnpm](https://pnpm.io/)

---

## 🔗 CMS Endpoint

Data is fetched from a headless WordPress instance:

```
https://sarvesh.digital6.au/index.php?rest_route=/acf/v3/pages/9
```

---

## 🧠 Features

- 🔄 Dynamic sections rendered based on backend data:
  - Hero
  - About
  - Services
  - Testimonials
- 🧩 Custom React hook (`useHomepageSections`) for fetching content using TanStack Query
- 🖼 Skeleton components for a smooth loading experience
- 📱 Fully responsive and accessible UI
- 🧼 Clean code structure with modular, reusable components

---

## 📦 Getting Started

### 1. Clone the repo

```bash
git clone <your-repo-url>
cd <project-folder>
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Start development server

```bash
pnpm run dev
```

---

## 🗂 Folder Structure

```bash
app/
  ├── page.tsx           # Main page logic with section rendering
  ├── providers.ts       # Query provider setup

components/
  ├── hero/
  ├── about/
  ├── services/
  ├── testimonials/
  ├── footer/
  ├── navbar/
  └── skeleton/          # Loading state components

hooks/
  └── useHomepageSection.ts  # TanStack Query hook for CMS integration
```

---

## 🧠 Why This Approach?

### ✅ Separation of Concerns

Content is fully managed in WordPress (ACF), while the frontend is completely decoupled, ensuring maintainability and flexibility.

### 🚀 Scalability

Adding, reordering, or removing homepage sections is done directly in the WordPress backend – no code changes required.

### 🔁 Reusability

The `useHomepageSections` hook and dynamic section renderer make the app highly component-driven and extendable.

### ⚡ Performance

Using TanStack Query with caching and server-side optimization ensures fast load times. Vercel handles blazing-fast deployments.

### 🛠 Developer Experience

Modern stack with TypeScript, Tailwind CSS, modular architecture, and sensible defaults for scalability and team collaboration.
