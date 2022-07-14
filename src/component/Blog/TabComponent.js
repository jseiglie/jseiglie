import React from "react";

const TabComponent = () => {
  return (
    <>
      <div className="row">
        <ul className="nav nav-tabs tab_wrap" id="myTab" role="tablist">
          <li className="nav-item " role="presentation">
            <a
              className="nav-link link_code active"
              id="home-tab"
              data-bs-toggle="tab"
              href="#home"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              <span className="link_text"> &lt;Al Código/&gt;</span>
            </a>
          </li>
          <li className="nav-item " role="presentation">
            <a
              className="nav-link link_pojetcs"
              id="profile-tab"
              data-bs-toggle="tab"
              href="#profile"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              <span className="link_text"> &lt;A Proyectos/&gt;</span>
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link link_idea"
              id="contact-tab"
              data-bs-toggle="tab"
              href="#contact"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
            >
              <span className="link_text"> &lt;A Sugerencias/&gt;</span>
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link link_tech"
              id="blog_tech-tab"
              data-bs-toggle="tab"
              href="#blog_tech"
              role="tab"
              aria-controls="blog_tech"
              aria-selected="false"
            >
              <span className="link_text"> &lt;A Tech/&gt;</span>
            </a>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            {" "}
            asdasdasdad...
          </div>
          <div
            className="tab-pane fade"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            ..sdfsdfsdfsdf.
          </div>
          <div
            className="tab-pane fade"
            id="contact"
            role="tabpanel"
            aria-labelledby="contact-tab"
          >
            ..cvbcvbcvbcvb.
          </div>
          <div
            className="tab-pane fade"
            id="blog_tech"
            role="tabpanel"
            aria-labelledby="blog_tech-tab"
          >
            ..techies.
          </div>
        </div>
      </div>
    </>
  );
};

export default TabComponent;
