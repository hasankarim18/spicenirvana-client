
import { Link, NavLink } from "react-router-dom";
import { Bars3BottomRightIcon, Bars3Icon } from "@heroicons/react/24/solid";
import { toast } from "react-toastify";



const Navigation = ({ isShow, handleNavbar, navArr, user, logout }) => {
  //const [isShow, setIsShow] = useState(false);
  const notify = ()=> toast('Sign out successful')
  const logoutHandler = ()=> {
    logout()
    .then(()=> {
      notify()
    })
    .catch((error)=> {
      console.log(error);
    })
  }

  return (
    <div
      style={{ height: "63px" }}
      className="flex  w-full justify-between items-center relative bg-opacity-70 bg-green-500 text-white pt-2 pb-2 "
    >
      <div className="flex w-full relative items-center z-20 justify-between mobile_padding sm:container mx-auto">
        <nav className="hidden md:block">
          <ul className="flex h-full items-center gap-4 text-xl font-semibold">
            {navArr.map((item, i) => {
              return (
                <li key={i}>
                  <NavLink
                    style={{ textTransform: "capitalize" }}
                    className="nav-link"
                    to={item.path}
                  >
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
              <Bars3Icon className="h-10 w-10 text-gray-500" />
            ) : (
              <Bars3BottomRightIcon className="h-10 w-10 text-gray-500" />
            )}
          </span>
        </div>
        {!user ? (
          <>
            <span className="w-10 h-10"></span>
            <Link
              to="/login"
              className="btn bg-rose-400 border-0 tracking-wide btn-sm"
            >
              Login
            </Link>
          </>
        ) : (
          <div className="flex items-center gap-2 ">
            <div className="bg-white rounded-full w-12 flex items-center justify-center  h-12  ">
              <Link to="/user-profile">
                <img
                  title="user Name"
                  className="w-10 h-10 cursor-pointer "
                  src={user.photoURL || "/assets/user.png"}
                  alt="users name"
                />
              </Link>
            </div>
            <button onClick={logoutHandler} className="btn btn-sm ">
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navigation;