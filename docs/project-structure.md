# Project Structure Guidelines

## Directory Organization
```
src/
├── components/        # Reusable UI components
│   ├── ui/           # shadcn/ui components
│   └── common/       # Common components used across features
├── pages/            # Page components and routes
├── hooks/            # Custom React hooks
├── lib/              # Utility functions and helpers
├── types/            # TypeScript type definitions
├── integrations/     # Third-party integrations (Supabase, etc.)
└── styles/           # Global styles and Tailwind configurations
```

## Naming Conventions
- Components: PascalCase (e.g., `UserProfile.tsx`)
- Hooks: camelCase with 'use' prefix (e.g., `useAuth.ts`)
- Utilities: camelCase (e.g., `formatDate.ts`)
- Types: PascalCase with type suffix (e.g., `UserType.ts`)