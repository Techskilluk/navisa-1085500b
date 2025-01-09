import { FC } from 'react';

interface AuthFormHeaderProps {
  preserveFormData?: boolean;
}

export const AuthFormHeader: FC<AuthFormHeaderProps> = ({ preserveFormData }) => (
  <div className="text-center space-y-4">
    <img src="/navisa-logo.svg" alt="Navisa" className="h-12 mx-auto" />
    <h2 className="text-3xl font-bold text-primary">
      {preserveFormData ? "Save Your Progress" : "Welcome Back"}
    </h2>
    <p className="text-muted">
      {preserveFormData 
        ? "Create an account or sign in to save your eligibility assessment results"
        : "Sign in to continue your journey"}
    </p>
  </div>
);