# State Management Guidelines

## Local State
- Use `useState` for simple component state
- Use `useReducer` for complex state logic
- Keep state close to where it's used

## Global State
- Use Tanstack Query for server state
- Follow query key conventions
- Implement proper error handling
- Use proper cache invalidation

## Change Management for State
- Document state dependencies
- Keep state updates isolated
- Use proper TypeScript types
- Implement proper error boundaries
- Monitor performance impact