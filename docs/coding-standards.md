# Coding Standards

## TypeScript Best Practices
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

## Component Structure
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