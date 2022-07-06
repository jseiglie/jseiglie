import React from "react";

const Contact = () => {
  return (
    <section className="container" id="#contact">
      <h1 className="colab_Title">&lt;Hablamos?/&gt;</h1>

      <div className="container contact_Wrapper">
        <div className="row">
          <p>Con sólo un click:</p>
          <div className="col contact_accordion">
            <div
              className="accordion accordion-flush"
              id="accordionFlushExample"
            >
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
                    <i className="fa-solid fa-mobile-screen contact_Icon"></i>{" "}
                    Por Teléfono
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <a className="nav-link navLink" href="tel:+34722390929">
                      +34 722 390 929
                    </a>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    <i className="fa-regular fa-envelope contact_Icon"></i> Por
                    Correo
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <a
                      className="nav-link navLink"
                      href="mailto:javier@seiglie.com"
                    >
                      javier@seiglie.com
                    </a>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    <i className="fa-brands fa-whatsapp contact_Icon"></i>{" "}
                    WhatsApp
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <a
                      className="nav-link navLink"
                      href="https://wa.me/+34722390929?text="
                      target="_blank"
                      rel="noreferrer"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <img className="img-fluid img-thumbnail contacto_Img" src="./rsc/img/javier.jpg" alt="Javier Seiglie" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
