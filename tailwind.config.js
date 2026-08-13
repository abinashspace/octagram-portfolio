/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        podium: ['"Archivo Black"', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        caveat: ['Caveat', 'cursive'],
      },
      colors: {
        paper: {
          DEFAULT: '#FCFDFF',
        },
        surface: {
          DEFAULT: '#FFFFFF',
        },
        ink: {
          DEFAULT: '#172033',
          muted: '#718096',
        },
        border: {
          DEFAULT: '#E8EDF5',
        },
        primary: {
          DEFAULT: '#3B82F6',
          hover: '#2563EB',
        },
        accent: {
          DEFAULT: '#93C5FD',
          soft: '#EFF6FF',
          border: '#DBEAFE',
        },
      },
      boxShadow: {
        glow: '0 20px 45px -18px rgba(59,130,246,0.45), 0 0 0 1px rgba(59,130,246,0.15)',
        card: '0 10px 30px rgba(59,130,246,0.08)',
      },
      maxWidth: {
        container: '1360px',
      },
    },
  },
  plugins: [],
};
