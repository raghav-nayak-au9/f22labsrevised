import React from "react";
import Logo from "../../logo/logo";
import Navbar from "../Navbar/navbar";

const Header = () => {
  return (
    <div className="header">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-3 mt-2 mx-auto">
          <Logo />
        </div>
        <div className="col-12 col-sm-12 col-md-7 mx-auto mt-2">
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default Header;
