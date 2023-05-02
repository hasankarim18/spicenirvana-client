import { Link } from 'react-router-dom';
import './Header.css'
import spice2 from '../../assets/spice2.png'


const TopHeader = () => {
    return (
      <div className="top_header relative  ">
        <div className="sm:container h-20 mobile_padding mx-auto flex relative justify-between  items-center ">
          <div className="relative ">
            <Link
              className="text-4xl font-semibold relative inline-block z-1 "
              to="/"
            >
              SpiceNirvana
            </Link>
            <img
              style={{ zIndex: "-10" }}
              className=" w-3/4 absolute -top-4  "
              src={spice2}
              alt=""
            />
          </div>
        </div>
      </div>
    );
};

export default TopHeader;