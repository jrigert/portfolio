const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    container: {
      padding: '2rem',
    },
    extend: {
      fontFamily: {
        body: ['var(--font-body)'],
        heading: ['var(--font-heading)'],
      },
      colors: {
        background: 'rgba(var(--background), <alpha-value>)',
        foreground: 'rgba(var(--foreground), <alpha-value>)',
        ['background-secondary']:
          'rgba(var(--background-secondary), <alpha-value>)',
        ['foreground-secondary']:
          'rgba(var(--foreground-secondary), <alpha-value>)',
        white: 'rgba(var(--white), <alpha-value>)',
        black: 'rgba(var(--black), <alpha-value>)',
        ['cyan-light']: 'rgba(var(--cyan-light), <alpha-value>)',
        primary: {
          DEFAULT: 'rgba(var(--primary), <alpha-value>)',
          foreground: 'rgba(var(--primary-foreground), <alpha-value>)',
        },
        contrast: {
          DEFAULT: 'rgba(var(--contrast), <alpha-value>)',
          foreground: 'rgba(var(--contrast-foreground), <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'rgba(var(--secondary), <alpha-value>)',
          foreground: 'rgba(var(--secondary-foreground), <alpha-value>)',
        },
        loud: {
          DEFAULT: 'rgba(var(--loud), <alpha-value>)',
          foreground: 'rgba(var(--loud-foreground), <alpha-value>)',
        },
        gray: {
          DEFAULT: 'rgba(var(--gray), <alpha-value>)',
          foreground: 'rgba(var(--gray-foreground), <alpha-value>)',
        },
        'dark-blue': {
          DEFAULT: 'rgba(var(--dark-blue), <alpha-value>)',
          foreground: 'rgba(var(--dark-blue-foreground), <alpha-value>)',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
      },
      transitionDuration: {
        1500: '1500ms',
        2000: '2000ms',
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('light', ':is(.light &)');
      addVariant('high-contrast', ':is(.highContrast &)');
    }),
  ],
};
