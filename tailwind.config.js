/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    container: {
      padding: '2rem',
    },
    extend: {
      fontFamily: {
        cabin: ['var(--font-cabin)'],
        'source-code': ['var(--font-source-code)'],
      },
      colors: {
        background: 'rgba(var(--background), <alpha-value>)',
        foreground: 'rgba(var(--foreground), <alpha-value>)',
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
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
