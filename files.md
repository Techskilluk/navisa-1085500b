# Navisa Application Development Guidelines

## Table of Contents
1. [Project Structure](#project-structure)
2. [Coding Standards](#coding-standards)
3. [Component Guidelines](#component-guidelines)
4. [State Management](#state-management)
5. [Authentication & Authorization](#authentication--authorization)
6. [Styling Guidelines](#styling-guidelines)
7. [Error Handling](#error-handling)
8. [Testing](#testing)
9. [Performance](#performance)

## Project Structure

### Directory Organization
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

### Naming Conventions
- Components: PascalCase (e.g., `UserProfile.tsx`)
- Hooks: camelCase with 'use' prefix (e.g., `useAuth.ts`)
- Utilities: camelCase (e.g., `formatDate.ts`)
- Types: PascalCase with type suffix (e.g., `UserType.ts`)

## Coding Standards

### TypeScript Best Practices
- Always define proper types for props and state
- Avoid using `any` type
- Use interface for object types
- Use type for union types and simple types
- Use proper type imports/exports

Example:
```typescript
interface UserProps {
  id: string;
  name: string;
  email: string;
}

type UserRole = 'admin' | 'user' | 'guest';
```

### Component Structure
```typescript
import { type FC } from 'react';
import { cn } from '@/lib/utils';

interface ComponentProps {
  // props definition
}

const Component: FC<ComponentProps> = ({ prop1, prop2 }) => {
  // component logic
  return (
    // JSX
  );
};

export default Component;
```

## Component Guidelines

### Component Creation Rules
1. One component per file
2. Keep components focused and single-responsibility
3. Maximum of 200 lines per component
4. Extract complex logic into custom hooks
5. Use composition over inheritance

### Props Guidelines
- Use proper TypeScript interfaces for props
- Document complex props with JSDoc comments
- Use default props when appropriate
- Destructure props in component parameters

## State Management

### Local State
- Use `useState` for simple component state
- Use `useReducer` for complex state logic
- Keep state as close to where it's used as possible

### Global State
- Use Tanstack Query for server state
- Follow proper query key conventions
- Implement proper error handling
- Use proper cache invalidation strategies

Example:
```typescript
const { data, isLoading } = useQuery({
  queryKey: ['users', userId],
  queryFn: () => fetchUser(userId),
});
```

## Authentication & Authorization

### Supabase Integration
- Use the provided Supabase client
- Implement proper error handling
- Follow RLS policies
- Use proper type definitions

Example:
```typescript
import { supabase } from '@/integrations/supabase/client';

const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  // Handle response
};
```

## Styling Guidelines

### Tailwind CSS Usage
- Use Tailwind utility classes
- Follow mobile-first approach
- Use proper spacing scale
- Implement proper responsive design

### Component Styling
- Use shadcn/ui components when possible
- Extend components using Tailwind classes
- Use proper color scheme variables
- Implement dark mode support

Example:
```typescript
<div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
  {/* Component content */}
</div>
```

## Error Handling

### Error Boundaries
- Implement error boundaries for component trees
- Use proper error logging
- Provide user-friendly error messages
- Handle network errors gracefully

### Form Validation
- Use proper form validation libraries
- Implement proper error messages
- Use proper input validation
- Handle submission errors

## Testing

### Component Testing
- Write unit tests for components
- Test component behavior
- Test component rendering
- Test component interactions

### Integration Testing
- Test component integration
- Test data flow
- Test user interactions
- Test error scenarios

## Performance

### Optimization Techniques
- Use proper code splitting
- Implement proper lazy loading
- Use proper caching strategies
- Optimize images and assets

### Monitoring
- Implement proper logging
- Monitor performance metrics
- Track user interactions
- Monitor error rates

## Git Workflow

### Branch Naming
- feature/feature-name
- bugfix/bug-description
- hotfix/issue-description

### Commit Messages
- Use conventional commits
- Include ticket numbers
- Keep commits focused
- Write clear descriptions

## Documentation

### Code Documentation
- Use JSDoc comments
- Document complex logic
- Document component props
- Document utility functions

### API Documentation
- Document API endpoints
- Document request/response formats
- Document error responses
- Include example usage

## Security

### Best Practices
- Implement proper authentication
- Follow security best practices
- Use proper encryption
- Handle sensitive data properly

### Data Protection
- Follow data protection laws
- Implement proper data handling
- Use proper data encryption
- Handle user data properly

## Deployment

### Environment Setup
- Use proper environment variables
- Configure proper build settings
- Implement proper CI/CD
- Use proper deployment strategies

### Monitoring
- Monitor application health
- Track error rates
- Monitor performance
- Track user engagement

This document serves as a living guide and should be updated as new patterns and best practices emerge. All team members should follow these guidelines to maintain consistency and quality across the application.