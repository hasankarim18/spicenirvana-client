import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { Bars3BottomRightIcon, Bars3Icon } from "@heroicons/react/24/solid";



const Navigation = ({ isShow, handleNavbar, navArr }) => {
  //const [isShow, setIsShow] = useState(false);

 

  console.log(navArr);

  const { user } = useContext(AuthContext);

  console.log(user);

  return (
    <div className=" relative bg-opacity-70 bg-green-500 text-white pt-2 pb-2 ">
      <div className="flex relative z-20 justify-between mobile_padding sm:container mx-auto">
        <nav className="hidden md:block">
          <ul className="flex h-full items-center gap-4 text-xl font-semibold">
            {navArr.map((item, i) => {
              return (
                <li key={i}>
                  <NavLink className="nav-link" to={item.path}>
                    {item.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="flex items-center md:hidden  ">
          <span className="cursor-pointer" onClick={handleNavbar}>
            {!isShow ? (
              <Bars3Icon class="h-10 w-10 text-gray-500" />
            ) : (
              <Bars3BottomRightIcon class="h-10 w-10 text-gray-500" />
            )}
          </span>
        </div>
        {user ? (
          <button className="btn bg-rose-400 border-0 tracking-wide btn-sm">
            Login
          </button>
        ) : (
          <div className="flex items-center gap-2 ">
            <div className="bg-white rounded-full w-12 flex items-center justify-center  h-12  ">
              <Link to="/user-profile">
                <img
                  title="user Name"
                  className="w-10 h-10 cursor-pointer "
                  src="/assets/user.png"
                  alt="users name"
                />
              </Link>
            </div>
            <button className="btn btn-sm ">Logout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navigation;