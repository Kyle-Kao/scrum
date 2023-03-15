/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'desktop': '1440px',
      'desktoplg': '1920px'
    },
    extend: {
      colors: {
        'green': '#00FFE0',
        'dark-green': '#008D96',
        'bg-dark': '#0A0D14',
      },
      backgroundImage: {
        'loading-bg': 'linear-gradient(to bottom, #00FFE0 , #000 16%)',
        'progress-rate': 'linear-gradient(270deg, #00FFE0 0%, rgba(0, 255, 224, 0) 100%)',
        'btn-color': 'linear-gradient(0deg, rgba(0, 255, 224, 0) 0%, #00FFE0 100%)',
      },
      boxShadow: {
        'greenBlur': '0px 0px 8px 4px rgba(0, 255, 224, 0.95)',
      },
      spacing: {
        '0auto': '0 auto',
        '4percent': '4%',
        '8percent': '8%',
        '18percent': '18%',
        '20percent': '20%',
        '22percent': '22%',
        'btn-p': '12px 50px',
        'tag-p': '12px 25px',
        'p145': '145px 100px 0',
        'p100': '40px 100px',
        '36px': '36px'
      },
      transitionDelay: {
        '1500': '1500ms',
        '2000': '2000ms',
        '2500': '2500ms',
        '3000': '3000ms'
      },
      width: {
        '997': '997px',
        '908': '908px',
        '320': '320px',
        '324': '324px',
        '467': '467px',
        '500': '500px'
      },
      height: {
        '83': '83px',
        '152': '152px',
        '224': '224px',
        '430': '430px',
        '304': '304px',
        '454': '454px',
        '596': '596px'
      },
      keyframes: {
        letterFadeIn: {
          '0%': { height: '0%', opacity: '0' },
          '100%': { height: '100%', opacity: '1' }
        },
        showHole: {
          '0%': { transform: "rotateY(90deg)" },
          '100%': { transform: "rotateY(0deg)" }
        },
        showPo: {
          '0%': { top: '-100%', opacity: '0' },
          '100%': { top: '34px', opacity: '1' },
        },
        contentPo: {
          '0%': { top: '-100%', opacity: '0' },
          '100%': { top: '50px', opacity: '1' }
        },
        fadeOpacity: {
          '0%': {  opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      animation: {
        letterFadeIn: 'letterFadeIn 1s 2.5s ease-in-out backwards',
        showHole: 'showHole 1s linear',
        showPo: 'showPo 1s 1.2s ease-in-out forwards',
        contentPo: 'contentPo 1.5s 2s ease-in-out forwards',
        fadeOpacity: 'fadeOpacity 1.5s 3.5s ease-in-out forwards'
      },
    },
  },
  plugins: [],
}
