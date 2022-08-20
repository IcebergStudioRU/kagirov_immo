module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
      Montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {
      zIndex: {
        "-1": "-1",
      },
      colors: {
        headerBg: "rgba(32, 39, 48, 0.7);",
        aboutMeBg: "#202730",
        screenBorderBottom: "rgba(32, 39, 48, 0.7);",
        imgZelimBorderBottom: "rgba(14, 14, 14, 0.9);",
        productBg: "rgba(180, 179, 179, 0.15);",
        flatsAddressBg: "rgba(0, 0, 0, 0.5);",
        QuotesBg: "#202730",
        bullets: "#284264",
        formCoating: "rgba(248, 245, 245, 0.88);",
        inputFormBorderColor: "#797878",
        formTextColor: "#474747",
        formBtnColor: "#1B1A1A",
        screenBtnBg: "#384A63",
        seeMoreBg: 'rgba(255, 255, 255, 0.67);'
      },
      maxWidth: {
        mobileContainer: "480px",
        tabletContainer: "768px",
        desktopContainer: "1200px",
      },
      height: {
        "100%": "100%",
        420: "420px",
        600: "600px",
        27: "27px",
        309: "309px",
        300: "300px",
        391: "391px",
        63: "63px",
        380: "380px",
        215: "215px",
       
      },
      width: {
        "100%": "100%",
        250: '250px',
        300: '300px',
        380: "380px",
        160: "160px",
        480: "480px",
        '60%': '60%'
      },
      backgroundImage: {
        screenImage:
          "url('../src/components/pages/main/screen/image/screen-image.jpg')",
        aboutMeImage:
          "url('../src/components/pages/main/aboutMe/svg/svg-stripes.svg')",
        quotesMeImage:
          "url('../src/components/pages/main/quotes/svg/svg-stripes.svg')",
        formImage: "url('../src/components/pages/main/form/img/formBg.png')",
        whyUsImage: "url('../src/components/pages/main/whyUs/img/WhyUsBg.jpg')",
        flats1Bg: "url('../src/components/pages/flats/products/img/flat1.png')",
        flats2Bg: "url('../src/components/pages/flats/products/img/flat2.png')",
        flats3Bg: "url('../src/components/pages/flats/products/img/flat3.png')",
        mobileMenuBg:
          "url('../src/components/mobileMenu/images/mobile-menu_bg.jpg')",
      },
      spacing: {
        297: "297px",
        250: "50px",
        245: "245px",
        160: "160px",
        320: "320px"
      },
      boxShadow: {
        numShadow:
          "2px 0 #3A4D5A, -2px 0 #3A4D5A, 0 2px #3A4D5A, 0 -2px #3A4D5A, 1px 1px #3A4D5A, -1px -1px #3A4D5A, 1px -1px #3A4D5A, -1px 1px #3A4D5A;",
      },
    },
  },
  plugins: [],
};
