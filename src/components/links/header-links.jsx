import { NavLink } from "react-router-dom";
import navConfig from "../../config/nav-config";
import { cn } from "../../lib/utils";

const HeaderLinks = () => {
  return (
    <div className="flex items-center justify-center space-x-6">
      {navConfig.haderLinks.map((link, key) => (
        <NavLink
          key={key}
          to={link.path}
          className={({ isActive }) =>
            cn(
              "text-sm font-light text-gray-200 hover:text-pink-500 transition-all tracking-wider",
              isActive && "text-pink-500"
            )
          }
        >
          {link.title}
        </NavLink>
      ))}
    </div>
  );
};

export default HeaderLinks;
