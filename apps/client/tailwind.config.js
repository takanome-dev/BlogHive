/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        slate: {
          1: '#D9EAFB',
          2: '#C3D6EF',
          3: '#B6CBE3',
          4: '#7F97B9',
          5: '#4D678C',
          6: '#334764',
          7: '#253650',
          8: '#152338',
          9: '#0B142A',
        },
      },
      backgroundImage: {
        card: 'linear-gradient(115.8deg, #0061FF -21.78%, #60EFFF 99.47%)',
      },
    },
  },
  plugins: [],
};
