import HeaderBg from "./HeaderBg";
import Navigation from "./Navigation";
import TopHeader from "./TopHeader";


const Header = () => {
    return (
      <div className="relative overflow-hidden ">
        <HeaderBg />
        <TopHeader />
        <Navigation />
      </div>
    );
};

export default Header;