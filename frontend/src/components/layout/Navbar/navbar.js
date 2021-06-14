import React from "react";
import image from "../images/icon-hamburger.svg";

const Navbar = () => {
  return (
    <nav className="navbar-expand-md navbar">
      <img
        src={image}
        className="img-fluid butn navbar-toggler"
        type="button"
        data-target="#menu"
        data-toggle="collapse"
        alt="icon-img"
      />
      <div id="menu" class="collapse navbar-collapse">
        <ul className="navbar-nav w-100 justify-content-end px-3">
          <li className="">
            <a
              href="#"
              className="nav-link mx-auto px-3 text-center text-primary"
            >
              Demos
            </a>
          </li>
          <li className="">
            <a href="#" className="nav-link mx-auto px-3 text-dark text-center">
              Pages
            </a>
          </li>
          <li className="">
            <a href="#" className="nav-link mx-auto px-3 text-dark text-center">
              Support
            </a>
          </li>
        </ul>
        <button className="justify-content-end px-3 button">
          <span className="buttonText">Get Started</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
