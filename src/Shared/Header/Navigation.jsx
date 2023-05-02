import { NavLink } from "react-router-dom";


const Navigation = () => {
    return (
      <div className=" bg-opacity-70 bg-green-500 text-white pt-2 pb-2 ">
        <div className="flex justify-between mobile_padding sm:container mx-auto">
          <div>
            <ul className="flex gap-4 text-xl font-semibold">
              <li>
                <NavLink to="/">Home </NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blog </NavLink>
              </li>
              <li>
                <NavLink to="/user-profile">User Profile </NavLink>
              </li>
            </ul>
          </div>
          <div>user img</div>
        </div>
      </div>
    );
};

export default Navigation;