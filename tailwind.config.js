export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-orange': '#FF5F01;',
        'dark-orange': '#FF5F01;',
        'white': '#FFFFFF;',
        'transparent': 'transparent',
        'black': '#000000',
        'light-black': '#383838',
        'dark': '#121514;',
        'deep-grey':'#A3A3A3',
        'darklight-grey': '#E6E5E5',
        'light-grey': '#E9E9E9',
        'lighter-grey': '#F0F0F0',
        'grey': '#FFFFFF',
        'reddish': '#E76B6B',
        'greenish': '#11A958',
        'yellowish': '#BA9512'
      },
      fontFamiy: {
         'general-sans-semibold': ["Semibold"],
         'general-sans-bold': ["Bold"],
         'gilroy-extrabold': ["Extrabold"],
         'gilroy-light': ["Light"]
      }
    },
  },
  plugins: [],
}