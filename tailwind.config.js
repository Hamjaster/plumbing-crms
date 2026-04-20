/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        panel: '0 20px 60px rgba(0, 0, 0, 0.45)',
      },
      keyframes: {
        sweep: {
          '0%': { transform: 'translateX(-110%)' },
          '100%': { transform: 'translateX(110%)' },
        },
      },
      animation: {
        sweep: 'sweep 2.8s linear infinite',
      },
    },
  },
  plugins: [],
}

