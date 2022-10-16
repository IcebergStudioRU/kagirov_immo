import React, { useContext } from "react";
import { ContextGlobal } from "../../context/GlobalContextComponent";
import { ReactComponent as Logo } from "../../assets/loader/svg/logo-loader.svg";
import { motion } from "framer-motion";
import { getText } from "../../utils/firebase";

const Loader = () => {
  const { setLoader, language, setLanguage, loaded, setText, text, mobileMenu } =
    useContext(ContextGlobal);
  const body = document.querySelector("body");
  const gg = () => {
      body.style.overflow = `scroll`;
  }
  // const changeLanguage = (language) => {
  //   setLanguage(language);
  //   getText(language).then((response) => {
  //     setText({...response})
  //   })
  // };

  return (
    <div className="bg-slate-900 h-screen">
      <div className="max-w-mobileContainer mx-auto px-5 pt-20 pb-8 ">
        <motion.div
          animate={{
            opacity: [0, 1, 1],
            y: [200, 200, 0],
            scale: [1.5, 1.5, 1],
          }}
          transition={{ times: [0, 0.6, 1], duration: 3, type: "tween" }}
          className="flex justify-center mb-16"
        >
          <Logo />
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6, type: "tween" }}
          className="mb-16 flex"
        >
          <motion.li
            onClick={() => {
              setLanguage("EN");
            }}
            whileHover={{ y: -10 }}
            className="flex flex-col items-center"
          >
            <p className=" text-white mb-6 text-xl font-Montserrat text-center flex items-center h-24">
              Please select your language
            </p>
            <button className="w-8 h-8 rounded-full border border-white text-white">
              EN
            </button>
          </motion.li>
          <motion.li
            onClick={() => {
              setLanguage("DE");
            }}
            whileHover={{ y: -10 }}
            className="flex flex-col items-center"
          >
            <p className=" text-white mb-6 text-xl font-Montserrat text-center flex items-center h-24">
              Bitte wählen Sie Ihre Sprache
            </p>
            <button className="w-8 h-8 rounded-full border border-white text-white">
              DE
            </button>
          </motion.li>
          <motion.li
            whileHover={{ y: -10 }}
            className="flex flex-col items-center"
            onClick={() => {
              setLanguage("RU");
            }}
          >
            <p className="text-white mb-6 text-xl font-Montserrat text-center flex items-center h-24">
              Пожалуйста выберите ваш язык
            </p>
            <button className="w-8 h-8 rounded-full border border-white text-white">
              RU
            </button>
          </motion.li>
        </motion.ul>

        {language && loaded && text && (
          <motion.div
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="flex justify-center"
          >
          <div onClick={gg}>
            <button
              onClick={() => setLoader(false)}
              className="p-2 bg-screenBorderBottom rounded-lg text-white"
            >
              {text.loader}
            </button>
          </div>
          </motion.div>
        )}

        {language && !loaded && (
          <p className="flex justify-center text-white text-xl">
            Дождитесь загрузки ресурсов
          </p>
        )}
      </div>
    </div>
  );
};

export default Loader;
