/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)'
        },
        contrast: {
          DEFAULT: 'var(--contrast)',
          foreground: 'var(--contrast-foreground)'
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)'
        },
        loud: {
          DEFAULT: 'var(--loud)',
          foreground: 'var(--loud-foreground)'
        },
      }
    }
  },
  plugins: []
};
