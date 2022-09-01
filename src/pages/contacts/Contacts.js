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
      <div className="bg-contactsBg bg-cover bg-no-repeat h-screen">
        <div className="bg-contactsCoating h-screen">
          <div className="max-w-mobileContainer mx-auto px-5 pb-24 pt-7">
            <div className="flex justify-between">
              <h1 className="text-contactsColor font-Montserrat text-2xl font-normal mb-20">
                Contacts
              </h1>
              <Link
                to="/"
                className="text-contactsColor font-Montserrat text-xl font-normal mb-20"
              >
                Back
              </Link>
            </div>
            <div className="mb-5">
              <a
                className="text-contactsColor font-Montserrat text-base"
                href="tel:+79688588238"
              >
                <span className="font-semibold">Phone:</span> +7 999 999 00 00
              </a>
            </div>
            <p className="text-contactsColor font-Montserrat text-base mb-28">
              <span className="font-semibold">Address:</span> 10 East 76th St.
            </p>
            <div className="flex justify-center">
              <Telegram className="mr-3" />
              <WhatsApp className="mr-3" />
              <Instagram />
            </div>
            <div className="absolute bottom-0 w-full left-0">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
