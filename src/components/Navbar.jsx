import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBagShopping, FaCompass, FaHeart } from "react-icons/fa6";

const Navbar = () => {
  const [active, setActive] = useState("explore");
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 mx-auto h-[74px] max-w-[425px] bg-white px-7">
      <ul className="flex h-full w-full items-center justify-around">
        <li>
          <NavLink to="/food-hub/" onClick={() => setActive("explore")}>
            <FaCompass
              className={`text-[32px]  ${active === "explore" ? "text-orange" : "text-grey"}`}
            />
          </NavLink>
        </li>
        <li>
          <NavLink to="shop" onClick={() => setActive("shop")}>
            <FaBagShopping
              className={`relative bottom-1 text-4xl ${active === "shop" ? "text-orange" : "text-grey"}`}
            />
          </NavLink>
        </li>
        <li>
          <NavLink to="favorit" onClick={() => setActive("favorit")}>
            <FaHeart
              className={`text-[32px]  ${active === "favorit" ? "text-orange" : "text-grey"}`}
            />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
