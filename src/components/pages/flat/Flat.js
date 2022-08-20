import React from "react";
const Flat = ({ flat }) => {
  return (
    <>
      <div className="max-w-mobileContainer mx-auto p-5 flex justify-center">
          <div className="w-160 h-215 relative flex items-center justify-center">
            <div className="absolute flex w-800 left-160">
              <div className="bg-red-500 w-160 h-215 ">

              </div>
              <div className="bg-blue-500 w-160 h-215 ">

              </div>
              <div className="bg-green-500 w-160 h-215 ">

              </div>
              <div className="bg-orange-500 w-160 h-215 ">

              </div>
              <div className="bg-purple-500 w-160 h-215 ">

              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default Flat;
