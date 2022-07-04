import React from "react";
import About from "../component/About";
import Colab from "../component/Colab";
import Contacto from "../component/Contacto";
import Footer from "../component/Footer";
import Navigation from "../component/Navigation";
import Tech from "../component/Tech";


const Home = () => {
  return (
    <>
    
      <div id="#home">
        <div className="navigation_Wrapper sticky-top ">
          <Navigation />
        </div>
        <About />
        <Tech />
        <Contacto />
        <Colab />
        <Footer />
      </div>

    </>
  );
};

export default Home;
