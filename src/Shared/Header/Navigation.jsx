import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const Navigation = () => {

  const {user} = useContext(AuthContext)

  console.log(user);

    return (
      <div className=" bg-opacity-70 bg-green-500 text-white pt-2 pb-2 ">
        <div className="flex justify-between mobile_padding sm:container mx-auto">
          <div>
            <ul className="flex gap-4 text-xl font-semibold">
              <li>
                <NavLink className="nav-link" to="/">
                  Home{" "}
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/blog">
                  Blog{" "}
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/user-profile">
                  User Profile{" "}
                </NavLink>
              </li>
            </ul>
          </div>
          {!user ? (
            <button className="btn btn-primary">Login</button>
          ) : (
            <>
              <div>user img</div>
              <button className="btn btn-accent">Logout</button>
            </>
          )}
        </div>
      </div>
    );
};

export default Navigation;