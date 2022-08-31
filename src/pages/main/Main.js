import React, { useContext } from "react";
import Footer from "../../components/footer/Footer.js";
import WhyUs from "../../components/whyUs/WhyUs.js";
import Form from "../../components/form/Form.js";
import Review from "../../components/review/Review.js";
import FlatsPreview from "../../components/flatsPreview/FlatsPreview.js";
import AboutMe from "../../components/aboutMe/AboutMe.js";
import Screen from "../../components/screen/Screen.js";
import Header from "../../components/header/Header.js";
import MobileMenu from "../../components/mobileMenu/MobileMenu.js";
import Loader from "../../components/loader/Loader.js";
import { ContextGlobal } from "../../context/GlobalContextComponent.js";
import { motion, AnimatePresence } from "framer-motion";

const Main = () => {
  const { loader } = useContext(ContextGlobal);

  if (loader) {
    return (
      <AnimatePresence>
        <Loader exit={{opacity: 0}} />
      </AnimatePresence>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <MobileMenu />
      <Screen>
        <Header />
      </Screen>
      <AboutMe />
      <FlatsPreview />
      <Review />
      <Form />
      <WhyUs />
      <Footer />
    </motion.div>
  );
};

export default Main;
