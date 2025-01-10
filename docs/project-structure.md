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

## Change Management Rules

### 1. Component Organization
- Group related components in feature-specific folders
- Keep shared components in common directory
- Document component dependencies

### 2. Code Modification Rules
- Create new components instead of modifying existing ones
- Use composition to extend functionality
- Keep changes isolated to specific features
- Document all dependencies and side effects

### 3. File Structure
- One component per file
- Group related utilities
- Separate business logic from UI components
- Maintain clear import/export structure

### 4. State Management
- Document state flow
- Keep state changes traceable
- Use appropriate state management patterns

### 5. Integration Points
- Document all external dependencies
- Keep integration layer separate
- Handle errors appropriately