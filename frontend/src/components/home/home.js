import React from "react";
import Header from "../layout/Header/header";
import Maincontent from "../layout/Container/maincontent";
import Footer from "../layout/Footer/footer";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Maincontent />
      <Footer />
    </div>
  );
};

export default Home;
