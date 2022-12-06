import React from "react";
import About from "./../About/About";
import Footer from "./../Footer/Footer";
import Home from "./../Home/Home";
import Portfolio from "./../Portfolio/Portfolio";
import Profile from "./../Profile/Profile";
import Social from "./../Social/Social";
import Work from "./../Work/Work";

const Index = () => {
  return (
    <div className="Index">
      <Home />
      <Work />
      <Portfolio />
      <Profile />
      <About />
      <Social />
      <Footer />
    </div>
  );
};

export default Index;
