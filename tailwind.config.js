export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        'purple': '#6B46C1',  // Custom color, if needed
        'dusk': '#4A5568',    // Custom color, if needed
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'spin-reverse': 'spin 3s linear infinite reverse',
      },
    },
  },
  plugins: [],
};
