# FemiFlash Dashboard

A modern, industry-standard admin dashboard built with Next.js 16, TypeScript, Redux Toolkit, and Tailwind CSS.

## 🏗️ Project Structure

```
femiflash-dashboard/
├── app/                          # Next.js App Router pages
│   ├── dashboard/                # Dashboard route
│   ├── users/                    # Users management route
│   ├── subscriptions/            # Subscriptions route
│   ├── revenue/                  # Revenue analytics route
│   ├── notifications/            # Notifications route
│   ├── templates/                # Templates route
│   ├── published/                # Published content route
│   ├── settings/                 # Settings route
│   ├── layout.tsx                # Root layout with sidebar
│   └── page.tsx                  # Home (redirects to dashboard)
├── src/
│   ├── components/
│   │   ├── ui/                   # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Table.tsx
│   │   │   ├── Pagination.tsx
│   │   │   └── Badge.tsx
│   │   └── layout/               # Layout components
│   │       ├── Sidebar.tsx
│   │       └── Header.tsx
│   ├── features/                 # Feature-based modules
│   │   ├── dashboard/
│   │   │   ├── components/       # Dashboard-specific components
│   │   │   ├── slice.ts          # Redux slice
│   │   │   └── index.ts
│   │   ├── users/
│   │   │   ├── components/
│   │   │   ├── slice.ts
│   │   │   └── index.ts
│   │   ├── subscriptions/
│   │   ├── revenue/
│   │   ├── notifications/
│   │   ├── templates/
│   │   ├── published/
│   │   └── settings/
│   ├── store/                    # Redux store configuration
│   │   ├── index.ts              # Store setup
│   │   ├── hooks.ts              # Typed Redux hooks
│   │   └── ReduxProvider.tsx     # Redux Provider wrapper
│   ├── types/                    # TypeScript type definitions
│   │   ├── common.ts
│   │   ├── user.ts
│   │   ├── subscription.ts
│   │   ├── revenue.ts
│   │   ├── dashboard.ts
│   │   └── index.ts
│   ├── data/                     # Mock/seed data
│   │   ├── users.ts
│   │   ├── dashboard.ts
│   │   └── index.ts
│   ├── constants/                # Application constants
│   │   ├── colors.ts             # Color palette
│   │   └── navigation.ts         # Navigation items
│   └── styles/
│       └── variables.css         # CSS custom properties
├── public/                       # Static assets
├── package.json
├── tsconfig.json
└── README.md
```

## 🎨 Design System

### Color Palette

- **Sidebar Background**: `#D1D5DB`
- **Sidebar Button (Active)**: `#003425`
- **Surface/Card**: `#FFFFFF`
- **Input Background**: `rgba(255, 255, 255, 0.102)` / `#FFFFFF1A`
- **Chart Primary**: `#7987FF`
- **Pagination Primary**: `#4361EE`
- **Status Active**: `#10B981`
- **Status Inactive**: `#EF4444`

All colors are defined in `src/constants/colors.ts` and `src/styles/variables.css`.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the dashboard.

### Build for Production

```bash
npm run build
npm start
```

## 📦 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS 4
- **Charts**: Recharts
- **Icons**: Lucide React

## 🔑 Key Features

### Dashboard
- 4 key metrics cards (Total Users, Active Subscriptions, Monthly Revenue, Websites Published)
- User Growth Analytics chart with time period filters
- Monthly Revenue bar chart with filters
- Recent Activity table with plan filters and pagination

### Users Management
- Search functionality
- Filter by plan (All, Starter, Professional, Business)
- Sortable table with user details
- Pagination
- Status badges (Active/Inactive)

### Other Routes
- Subscriptions, Revenue, Notifications, Templates, Published, Settings routes scaffolded and ready for implementation

## 🧩 Component Architecture

### Shared UI Components (`src/components/ui/`)
All reusable, atomic components:
- **Button**: Multiple variants (primary, secondary, outline, ghost)
- **Input**: With label, error states, and icon support
- **Card**: Container with customizable padding and shadow
- **Table**: Composable table with Header, Body, Row, Head, Cell
- **Pagination**: Dynamic page navigation
- **Badge**: Plan and status badges with color coding

### Layout Components (`src/components/layout/`)
- **Sidebar**: Navigation with active state highlighting
- **Header**: Page title, subtitle, search, admin profile

### Feature Components (`src/features/[feature]/components/`)
Feature-specific components co-located with their Redux slices and logic.

## 📊 State Management

Redux Toolkit is used for global state management with feature-based slices:

- `dashboard` - Dashboard stats, charts, filters
- `users` - Users list, filters, pagination
- `subscriptions` - Subscription data
- `revenue` - Revenue analytics

### Usage Example

```tsx
import { useAppSelector, useAppDispatch } from '@/src/store/hooks';
import { setSearchFilter } from '@/src/features/users/slice';

function MyComponent() {
  const dispatch = useAppDispatch();
  const { list, filters } = useAppSelector((state) => state.users);
  
  const handleSearch = (query: string) => {
    dispatch(setSearchFilter(query));
  };
  
  return (
    // Component JSX
  );
}
```

## 🔧 Development Guidelines

### Adding a New Feature

1. Create feature folder in `src/features/[feature-name]/`
2. Add Redux slice: `slice.ts`
3. Create components in `components/` subfolder
4. Define types in `src/types/[feature-name].ts`
5. Add mock data in `src/data/[feature-name].ts`
6. Create route page in `app/[feature-name]/page.tsx`
7. Update navigation in `src/constants/navigation.ts`
8. Register slice in `src/store/index.ts`

### File Naming Conventions

- Components: PascalCase (e.g., `UserTable.tsx`)
- Utilities: camelCase (e.g., `formatDate.ts`)
- Types: PascalCase interfaces/types (e.g., `User`, `DashboardStats`)
- Constants: UPPER_SNAKE_CASE for values, camelCase for files

### Import Pattern

Use barrel exports (`index.ts`) for cleaner imports:

```tsx
// Good
import { UsersTable, UsersFilters } from '@/src/features/users';

// Avoid
import { UsersTable } from '@/src/features/users/components/UsersTable';
import { UsersFilters } from '@/src/features/users/components/UsersFilters';
```

## 📝 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🎯 Roadmap

- [ ] Add authentication and authorization
- [ ] Implement real API integration
- [ ] Add data export functionality
- [ ] Add user creation/editing forms
- [ ] Implement subscription management
- [ ] Add revenue analytics features
- [ ] Create notification system
- [ ] Build template library
- [ ] Add dark mode support

## 📄 License

Private project for FemiFlash.

## 👥 Contributors

Built with industry best practices and modern React patterns.
