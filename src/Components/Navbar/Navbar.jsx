import React from "react";
// import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  const navigation = [
    { list: "Home", href: "#" },
    { list: "About", href: "/ok" },
    { list: "Contact", href: "ok/" },
  ];

  return (
    <div className="nav-bar flex justify-between align-center w-[100vw] bg-[#3e0283] p-5">
      <div className="icon"></div>
      <div className="">
        {navigation.map((item) => (
          <NavLink
            key={item.list}
            to={item.href}
            className={({ isActive }) => {
              return (
                "mx-4 px-2 text-sm transition-all ease-in duration-200 " +
                (isActive
                  ? "border-b-[1px] border-r-[1px] border-[#fff] text-white rounded-md hover:bg-[#8338ec] hover:text-white"
                  : "text-white")
              );

              // console.log(item.href + " " + isActive);
            }}
          >
            {item.list}
          </NavLink>
        ))}
      </div>

      <button className="text-white border border-white rounded-md px-2 py-1 hover:bg-[#8338ec] transition-all ease-in duration-200">
        Logout
      </button>
    </div>
  );
}

export default Navbar;
