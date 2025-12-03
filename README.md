# FemiFlash Dashboard

Modern admin dashboard built with Next.js 16, Redux Toolkit, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
app/                    # Next.js routes
  ├── dashboard/        # Dashboard page
  ├── users/           # Users management
  └── ...              # Other routes

src/
  ├── components/      # Shared UI components
  │   ├── ui/         # Button, Input, Card, Table, etc.
  │   └── layout/     # Sidebar, Header
  ├── features/        # Feature modules (dashboard, users, etc.)
  │   ├── dashboard/  # Dashboard components & Redux slice
  │   └── users/      # Users components & Redux slice
  ├── store/          # Redux store & typed hooks
  ├── types/          # TypeScript types
  ├── data/           # Mock data
  ├── constants/      # Colors, navigation
  └── styles/         # CSS variables
```

## 🎨 Design Tokens

| Element | Color |
|---------|-------|
| Sidebar BG | `#D1D5DB` |
| Sidebar Active | `#003425` |
| Surface | `#FFFFFF` |
| Chart Primary | `#7987FF` |
| Pagination | `#4361EE` |

## ✅ Features

- **Dashboard**: Stats cards, charts, activity table
- **Users**: Search, filtering, pagination
- **Redux**: Typed hooks, feature slices
- **Components**: Reusable UI library

## 🛠️ Tech Stack

- Next.js 16
- Redux Toolkit
- TypeScript
- Tailwind CSS 4
- Recharts

## 📝 Adding Features

1. Create feature folder in `src/features/[name]/`
2. Add Redux slice with actions/reducers
3. Create components
4. Add types in `src/types/`
5. Create route in `app/[name]/page.tsx`

## 🔗 Commands

```bash
npm run dev      # Development
npm run build    # Production build
npm run start    # Start production
npm run lint     # Lint code
```

---

Built with Next.js and Redux Toolkit
