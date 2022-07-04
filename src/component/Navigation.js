import React from "react";
import RRSS from "./RRSS";
import { HashLink } from "react-router-hash-link";


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
            <img
              src="./rsc/img/seiglieWB.jpeg"
              alt="Seiglie"
              width="80px"
              height="80px"
            />
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
          <span></span>
          <button
            type="button"
            className=" menu_Close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <i className="fa-solid fa-xmark menu_CloseIcon"></i>
          </button>
        </div>
        <div className="offcanvas-body nav_Wrapper">
          <ul className="navWrap">
            <li className="nav-item navItem">
            <HashLink to="#about">About</HashLink>
              {/* <a className="nav-link navLink mainText" href="#about">
                About
              </a> */}
            </li>
            <li className="nav-item navItem">

              <HashLink to="#tech">Tech</HashLink>

              {/* <a className="nav-link navLink mainText" href="#tech">
                Tech
              </a> */}
            </li>
           
            <li className="nav-item navItem">
              <a className="nav-link navLink mainText" href="#contacto">
                Hablamos?
              </a>
            </li>
            <li className="nav-item navItem">
              <a className="nav-link navLink mainText" href="#colab">
                Colab
              </a>
            </li>

            <li className="nav-item navItem">
              <a className="nav-link navLink mainText" href="#projects">
                Projects
              </a>
            </li>
          </ul>
        </div>

        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed"
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
