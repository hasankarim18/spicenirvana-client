import { useState } from "react";
import HeaderBg from "./HeaderBg";
import Navigation from "./Navigation";
import TopHeader from "./TopHeader";
import MobileMenu from "./MobileMenu";


const Header = () => {
  const [isShow, setIsShow] = useState(false)

   const navArr = [
     {
       path: "/",
       name: "home",
     },
     {
       path: "/blog",
       name: "blog",
     },
     {
       path: "/user-profile",
       name: "user profile",
     },
   ];

    const handleNavbar = () => {
      setIsShow((prev) => !prev);
    };

    return (
      <div className="relative">
        <div className={`relative z-20  ${!isShow ? "overflow-hidden" : ""} `}>
          <HeaderBg />
          <TopHeader />
          <Navigation
            navArr={navArr}
            isShow={isShow}
            handleNavbar={handleNavbar}
          />
        </div>
        <div className="relative transition-all duration-700 top-0 z-10">
          <div style={{transitionDuration:"5000"}}
            className={` absolute ${
              isShow ? " top-0 z-10 " : "-z-10 -top-96"
            } bg-opacity-90 bg-green-500 left-0 flex justify-start w-full transition-all  `}
          >
            <div className="container mobile_padding mx-auto">
              <MobileMenu menus={navArr} />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Header;