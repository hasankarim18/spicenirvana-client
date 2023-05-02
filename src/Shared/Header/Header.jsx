import { useContext, useState } from "react";
import HeaderBg from "./HeaderBg";
import Navigation from "./Navigation";
import TopHeader from "./TopHeader";
import MobileMenu from "./MobileMenu";
import {AuthContext } from '../../Provider/AuthProvider'


const Header = () => {
  const [isShow, setIsShow] = useState(false)

    const { user } = useContext( AuthContext );

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
            user={user}
            navArr={navArr}
            isShow={isShow}
            handleNavbar={handleNavbar}
          />
        </div>
        <div className="relative transition-all duration-700 top-0 z-10">
          <div
            className={` absolute ${
              isShow ? " top-0 z-10 " : "-z-10 -top-96"
            } bg-opacity-90 bg-green-500 left-0 flex justify-start w-full transition-all duration-1000  `}
          >
            <div className="container mobile_padding mx-auto">
              <MobileMenu user={user} menus={navArr} />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Header;