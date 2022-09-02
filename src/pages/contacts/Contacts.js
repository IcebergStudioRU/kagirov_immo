import React, { useEffect, useContext } from "react";

import { ReactComponent as Telegram } from "../../assets/contacts/svg/telegram.svg";
import { ReactComponent as WhatsApp } from "../../assets/contacts/svg/WhatsApp.svg";
import { ReactComponent as Instagram } from "../../assets/contacts/svg/instagram.svg";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import { ContextGlobal } from "../../context/GlobalContextComponent";
import Loader from "../../components/loader/Loader";
import Loader2 from "../../components/loader2/Loader2";
const Contacts = () => {
  const { loader, loader2, setLoader2 } = useContext(ContextGlobal);
  useEffect(() => {
    setLoader2(false);
  });

    if (loader) {
      return <Loader exit={{ opacity: 0 }} />;
    }

    if (loader2) {
      return <Loader2 />;
    }

  return (
    <div className="relative">
      <div className="bg-contactsBg bg-cover bg-no-repeat mb:h-screen tl:h-screen">
        <div className="bg-contactsCoating mb:h-screen tl:h-screen">
          <div className="mb:max-w-mobileContainer tl:max-w-tabletContainer mx-auto px-5 pb-24 pt-7">
            <div className="flex justify-between">
              <h1 className="text-contactsColor font-Montserrat mb:text-2xl tl:text-3xl font-normal mb:mb-20 tl:mb-32">
                Contacts
              </h1>
              <Link
                to="/"
                className="text-contactsColor font-Montserrat text-xl font-normal mb:mb-20 tl:mb-32"
              >
                Back
              </Link>
            </div>
            <div className="mb:mb-5 tl:mb-10">
              <a
                className="text-contactsColor font-Montserrat mb:text-base tl:text-xl"
                href="tel:+79688588238"
              >
                <span className="font-semibold">Phone:</span> +7 999 999 00 00
              </a>
            </div>
            <p className="text-contactsColor font-Montserrat mb:text-base tl:text-xl mb:mb-28 tl:mb-36">
              <span className="font-semibold">Address:</span> 10 East 76th St.
            </p>
            <div className="flex justify-center">
              <Telegram className="mb:mr-3 tl:mr-6 mb:w-21 mb:h-21 tl:w-34 tl:h-34" />
              <WhatsApp className="mb:mr-3 tl:mr-6 mb:w-21 mb:h-21 tl:w-34 tl:h-34" />
              <Instagram className=" mb:w-21 mb:h-21 tl:w-34 tl:h-34"/>
            </div>
            <div className="absolute bottom-0 w-full left-0 h-0">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
