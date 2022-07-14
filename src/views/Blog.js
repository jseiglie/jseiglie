import React from "react";
import Footer from "../component/Blog/Footer";
import Navigation from "../component/Blog/Blog_Navigation";
import TabComponent from "../component/Blog/TabComponent";

const Blog = () => {
  return (
    <>
      <div id="#home">
        <div className="navigation_Wrapper sticky-top ">
          <Navigation />
        </div>
      </div>
      <h1 className="metele">&lt;Métele/&gt;</h1>
      <TabComponent/>
      <Footer />
    </>
  );
};

export default Blog;
