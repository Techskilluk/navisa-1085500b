import { FC } from 'react';

interface AuthFormHeaderProps {
  preserveFormData?: boolean;
  view?: string;
}

export const AuthFormHeader: FC<AuthFormHeaderProps> = ({ preserveFormData, view }) => (
  <div className="text-center space-y-4">
    <img src="/navisa-logo.svg" alt="Navisa" className="h-12 mx-auto" />
    <h2 className="text-3xl font-bold text-primary">
      {preserveFormData 
        ? "Save Your Progress"
        : view === 'sign_up'
          ? "Create an Account to Begin Your Journey"
          : "Welcome Back"}
    </h2>
    <p className="text-muted">
      {preserveFormData 
        ? "Create an account or sign in to save your eligibility assessment results"
        : view === 'sign_up'
          ? "Sign up to start exploring visa pathways"
          : "Sign in to continue your journey"}
    </p>
  </div>
);