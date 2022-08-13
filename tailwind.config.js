module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'Roboto': ['Roboto', 'sans-serif']
    },  
    extend: {
      colors: {
        'headerBg': 'rgba(32, 39, 48, 0.7);',
        'aboutMeBg': '#202730',
        'screenBorderBottom': 'rgba(32, 39, 48, 0.7);',
        'imgZelimBorderBottom': 'rgba(14, 14, 14, 0.9);'
      },
      maxWidth :{
        'mobileContainer': "480px",
        'tabletContainer': "768px",
        'desktopContainer': "1200px"


      },
      height: {
        '420': '420px',
        '600': '600px',
        '27': '27px'
      },
      width:{
        '100%': '100%'
      },
      backgroundImage: {
        'screenImage': "url('../src/components/pages/main/screen/image/screen-image.jpg')",
        'aboutMeImage': "url('../src/components/pages/main/aboutMe/svg/svg-stripes.svg')",
      }, 
      spacing: {
        '297': '297px',
      }
      
    },
    
  },
  plugins: [],
}
