import React from "react";

const Header = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">Notes App</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-3">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Notes</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Create Note</a>
      </div>
    </div>
  );
};

export default Header;
