import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <section className="Seiglie_Footer mt-5">
      <div className="row gx-0">
        <div className="col-lg-4 col-md-3 col-sm-6">
          Javier{" "}
          <a className="footer_Link" href="https://www.seiglie.com/">
            Seiglie
          </a>
          <br />
          <img
            className="footer_Logo"
            src="./rsc/img/seiglieWB.jpeg"
            alt="Seiglie logo"
          />
          <a
            href="https://www.buymeacoffee.com/seiglie"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
              alt="Buy Me A Coffee"
              className="coffee"
            />
          </a>
          <script
            type="text/javascript"
            src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js"
            data-name="bmc-button"
            data-slug="seiglie"
            data-color="#FFDD00"
            data-emoji=""
            data-font="Cookie"
            data-text="Buy me a coffee"
            data-outline-color="#000000"
            data-font-color="#000000"
            data-coffee-color="#ffffff"
          ></script>
          <br /> Madrid, Spain. {year}
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6 footer_TechWrap">
          <div className="row">
            <span className="footer_Tech">Tech:</span>
            <div className="col-6">
              <ul className="footer_Ul">
                <li className="footer_List">HTML</li>
                <li className="footer_List">CSS</li>
                <li className="footer_List">Javascript</li>
                <li className="footer_List">React</li>
                <li className="footer_List">PHP</li>
                <li className="footer_List">Figma</li>
              </ul>
            </div>
            <div className="col-6">
              <ul>
                <li className="footer_List">NodeJS</li>
                <li className="footer_List">Express</li>
                <li className="footer_List">Python</li>
                <li className="footer_List">Flask</li>
                <li className="footer_List">MySQL</li>
                <li className="footer_List">Sequelize</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-12">
          <ul className="p-0">
            Colab:
            <li className="footer_List">
              <a className="footer_Link" href="https://www.4geeksacademy.com/">
                4Geeks Academy
              </a>
            </li>
            <li className="footer_List">
              <a className="footer_Link" href="https://spain.girlsintech.org/">
                {" "}
                Girls in Tech Spain
              </a>
            </li>
            <li className="footer_List">
              <a className="footer_Link" href="https://www.torsionline.com/">
                {" "}
                Torsi
              </a>
            </li>
            <li className="footer_List">
              <a className="footer_Link" href="https://www.macplace.es/">
                {" "}
                MacPlace
              </a>
            </li>
            <li className="footer_List">
              <a className="footer_Link" href="https://www.eypasa.com/">
                {" "}
                Eypasa
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
