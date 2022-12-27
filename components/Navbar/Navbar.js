import React, { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";
const Navbar = () => {
  const [profileModalActive, setProfileModalActive] = useState(false);

  return (
    <div className="w-screen h-[58px] fixed top-0 left-0 right-0 flex items-center justify-center bg-White z-20 border-2  text-Black shadow-md">
      <div className="w-full max-w-[1200px] flex justify-between px-2">
        <p className="text-2xl  font-black uppercase">LOGO</p>
        <div className="flex gap-4 items-center justify-center">
          <p>Select College</p>
          <div className="relative flex items-center justify-center">
            {profileModalActive && (
              <div className="absolute right-0 flex flex-col items-stretch w-48 gap-3 p-2 text-Black top-10 bg-white">
                <p className="pb-3 text-xl font-semibold border-b-2">
                  Student Name
                </p>
                <button className="w-full text-base transition-all duration-300 bg-GreenSec hover:bg-WhiteSec px-3 py-1.5 text-left font-semibold">
                  Show Profile
                </button>
                <button className="flex gap-2 items-center w-full text-base transition-all duration-300 bg-GreenSec hover:bg-WhiteSec px-3 py-1.5 text-left font-semibold">
                  Logout <BiLogOut className="text-xl" />
                </button>
              </div>
            )}

            <button onClick={() => setProfileModalActive(!profileModalActive)}>
              <BsPersonCircle className="text-3xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
