import { FaFacebook,  FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
      <div className="mt-20 bg-black text-white  bg-opacity-90 py-12">
        <div className="container mobile_padding mx-auto">
          {" "}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h1 className="text-3xl">SpiceNirvana</h1>
              <p className="text-orange-400">
                Unleash your inner chef with our recipes.
              </p>
              <p>
                Cooking made easy with our recipe website! From quick weeknight
                meals to fancy feasts, we haveve got recipes that will make your
                taste buds dance. So whether you are a kitchen novice or a
                seasoned pro, our recipes are sure to impress. Do not believe
                us? Try them out for yourself and get ready to be wowed!
              </p>
            </div>
            <div>
              <h2 className="text-xl mb-4">Contact Us</h2>
              <p className="mb-4">Email: admin@spicenirvana.com </p>
              <p className="mb-4">Mobile: +880101010101 </p>
              <p>
                House #123, Road #ABC, Block DEF Gulshan 2, Dhaka 1206
                Bangladesh
              </p>
            </div>
            <div>
              <h2 className="text-xl mb-4">Usefull Links</h2>
              <ul>
                <li className="mb-4">
                  <Link className="hover:text-orange-400" to="/user-profile">
                    User Profile
                  </Link>
                </li>
                <li className="mb-4">
                  <Link className="hover:text-orange-400" to="/blog">
                    Blog
                  </Link>
                </li>
                <li className="mb-4">
                  <Link className="hover:text-orange-400" to="/about">
                    About
                  </Link>
                </li>
              </ul>
              <ul className="flex gap-4" >
                <li> <a className="text-3xl hover:text-orange-400" href="#">  <FaFacebook /> </a></li>
                <li> <a className="text-3xl hover:text-orange-400" href="#">  <FaTwitterSquare /> </a></li>
                <li> <a className="text-3xl hover:text-orange-400" href="#">  <FaInstagramSquare /> </a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Footer;