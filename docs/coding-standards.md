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

## Change Management Guidelines

### 1. Scope Definition
- Before making changes, clearly define the scope of the modification
- List all components and files that will be affected
- Document any potential side effects

### 2. Component Isolation
- Keep components small and focused on a single responsibility
- Use composition over inheritance
- Avoid modifying shared components unless absolutely necessary
- Create new components instead of modifying existing ones when adding features

### 3. State Management
- Keep state as close as possible to where it's used
- Use context sparingly and only for truly global state
- Document all state dependencies clearly

### 4. Testing Impact
- Consider the impact on existing tests
- Add new tests for new functionality
- Update affected tests when modifying existing code

### 5. Change Documentation
- Document all changes in commit messages
- Update relevant documentation
- Add inline comments for complex logic

### 6. Code Review Guidelines
- Review changes for scope creep
- Ensure changes are isolated to intended areas
- Verify no unintended side effects
- Check for proper error handling
- Validate type safety

### 7. Feature Flags
- Use feature flags for major changes
- Implement gradual rollouts for significant updates
- Plan rollback strategies

### 8. Performance Considerations
- Profile performance before and after changes
- Monitor bundle size impact
- Optimize renders and prevent unnecessary updates

### 9. Accessibility
- Maintain accessibility standards
- Test with screen readers
- Ensure keyboard navigation works

### 10. Version Control
- Create feature branches for changes
- Use meaningful commit messages
- Keep commits focused and atomic