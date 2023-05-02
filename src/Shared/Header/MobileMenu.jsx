import { NavLink } from "react-router-dom";


const MobileMenu = ({menus}) => {
    return (
      <div>
        <ul className="flex flex-col pt-3 pb-3 h-full items-start justify-start gap-4 text-xl font-semibold">
          {menus.map((item, i) => {
            return (
              <li className="text-capitalize text-white " key={i}>
                <NavLink style={{textTransform:"capitalize"}} className="nav-link" to={item.path}>
                  {item.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    );
};

export default MobileMenu;