module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'headerBg': 'rgba(32, 39, 48, 0.7);',
        'aboutMeBg': '#202730'
      },
      maxWidth :{
        'mobileContainer': "480px",
        'tabletContainer': "768px",
        'desktopContainer': "1200px"


      },
      height: {
        '420': '420px',
        '550': '550px',
      },
      backgroundImage: {
        'screenImage': "url('../src/components/pages/main/screen/image/screen-image.jpg')",
        'aboutMeImage': "url('../src/components/pages/main/aboutMe/svg/svg-stripes.svg')",
      }
    },
    
  },
  plugins: [],
}
