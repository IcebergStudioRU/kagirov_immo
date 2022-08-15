module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'Roboto': ['Roboto', 'sans-serif'],
      'AvenirNext': ['Avenir Next', 'sans-serif']
    },  
    extend: {
      colors: {
        'headerBg': 'rgba(32, 39, 48, 0.7);',
        'aboutMeBg': '#202730',
        'screenBorderBottom': 'rgba(32, 39, 48, 0.7);',
        'imgZelimBorderBottom': 'rgba(14, 14, 14, 0.9);',
        'productBg': 'rgba(180, 179, 179, 0.15);',
        'flatsAddressBg': 'rgba(0, 0, 0, 0.5);',
        'QuotesBg': '#202730',
        'bullets': '#284264',
        'formCoating': 'rgba(248, 245, 245, 0.88);',
        'inputFormBorderColor': '#797878',
        'formTextColor': '#474747',
        'formBtnColor': '#1B1A1A'
        
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
        'quotesMeImage': "url('../src/components/pages/main/quotes/svg/svg-stripes.svg')",
        'formImage': "url('../src/components/pages/main/form/img/formBg.png')",
        'whyUsImage': "url('../src/components/pages/main/whyUs/img/WhyUsBg.jpg')"
      }, 
      spacing: {
        '297': '297px',
      },
      boxShadow: {
        'numShadow': '2px 0 #3A4D5A, -2px 0 #3A4D5A, 0 2px #3A4D5A, 0 -2px #3A4D5A, 1px 1px #3A4D5A, -1px -1px #3A4D5A, 1px -1px #3A4D5A, -1px 1px #3A4D5A;'
      }
      
    },
    
  },
  plugins: [],
}
