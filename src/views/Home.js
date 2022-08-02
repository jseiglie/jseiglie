import React from "react";
import About from "../component/About";
import Colab from "../component/Colab";
import Contact from "../component/Contact";
import Footer from "../component/Footer";
import Navigation from "../component/Navigation";
import Tech from "../component/Tech";


const Home = () => {
  return (
    <>
    
      <div id="#home">
        <div className="navigation_Wrapper sticky ">
          <Navigation />
        </div>
        <About />
        <Tech />
        <Contact />
        <Colab />
        <Footer />
      </div>

    </>
  );
};

export default Home;
