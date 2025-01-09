import { ThemeSupa } from "@supabase/auth-ui-shared";

export const authUiConfig = {
  theme: ThemeSupa,
  variables: {
    default: {
      colors: {
        brand: '#141413',
        brandAccent: '#8989DE',
        inputBackground: 'white',
        inputBorder: '#E6E4DD',
        inputText: '#141413',
        inputPlaceholder: '#828179',
        messageText: '#828179',
        anchorTextColor: '#8989DE',
        dividerBackground: '#E6E4DD',
      },
      space: {
        inputPadding: '1rem',
        buttonPadding: '1.25rem',
      },
      borderWidths: {
        buttonBorderWidth: '0px',
        inputBorderWidth: '1px',
      },
      radii: {
        borderRadiusButton: '1.2rem',
        buttonBorderRadius: '1.2rem',
        inputBorderRadius: '1.2rem',
      },
      fontSizes: {
        baseInputSize: '1rem',
        baseButtonSize: '1rem',
      },
    },
  },
  className: {
    container: 'space-y-6',
    button: 'w-full bg-primary text-white hover:bg-primary/90 transition-colors duration-200 font-medium',
    input: 'w-full border-secondary hover:border-accent focus:border-accent transition-colors duration-200',
    label: 'text-sm font-medium text-primary',
    message: 'text-sm text-muted',
    anchor: 'text-accent hover:text-accent/80 transition-colors duration-200',
    divider: 'my-6 border-t border-secondary',
  },
};