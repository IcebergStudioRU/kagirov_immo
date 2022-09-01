import React from "react";
import { ReactComponent as Logo } from "../../assets/loader2/svg/logo-loader2.svg";
const Loader2 = () => {
  return (
    <div className="bg-slate-900 h-screen">
      <div className="max-w-mobileContainer mx-auto">
        <div className="flex justify-center h-screen items-center">
          <Logo className="scale-150"/>
        </div>
      </div>
    </div>
  );
};

export default Loader2;
