/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'blue': '#007ace',
      'midnight': '#121063',
      'metal': '#e5e7eb',
      "lsil": '#94a3b8',
      'tahiti': '#3ab7bf',
      'silver': '#f1f5f9',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
    },
    backgroundImage: {
      'profile1': "url('https://th.bing.com/th?id=OIF.4PMjvK%2f8qHRyoSlxgKDgAw&w=166&h=295&c=7&r=0&o=5&pid=1.7')",
      'footer-texture': "url('/img/footer-texture.png')",
    },
  

    extend: {},
  },
  plugins: [],
}

