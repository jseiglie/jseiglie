import React from "react";
import { Link } from "react-router-dom";
import RRSS from "../RRSS";

const Navigation = () => {
  return (
    <>
      <nav>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          <span>
            BL
            <img
              src="./rsc/img/seiglieWB.jpeg"
              alt="Seiglie"
              width="80px"
              height="80px"
            />
            G
          </span>
        </button>
      </nav>
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header menu_Head">
          <div
            className="close-container menu_Close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <div className="leftright"></div>
            <div className="rightleft"></div>
            <label className="close">close</label>
          </div>
        </div>
        <div className="offcanvas-body nav_Wrapper">
          <ul className="navWrap">
            <Link className="nav-link navLink mainText" to={"/"}>
              <li className="nav-item navItem">Portfolio</li>
            </Link>
            <Link className="nav-link navLink mainText" to={"/#tech"}>
              <li className="nav-item navItem"></li>
            </Link>
            <Link className="nav-link navLink mainText" to={"/#hablamos"}>
              <li className="nav-item navItem"></li>
            </Link>
            <Link className="nav-link navLink mainText" to={"/#colab"}>
              <li className="nav-item navItem"></li>
            </Link>
            <Link className="nav-link navLink mainText" to={"/#projects"}>
              <li className="nav-item navItem"></li>
            </Link>
          </ul>
        </div>
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed RRSS_btn"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                RRSS
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <RRSS />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navigation;
