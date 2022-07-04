import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <section className="Seiglie_Footer">
      <div className="row">
        <div className="col-4">
          Javier{" "}
          <a className="footer_Link" href="https://www.seiglie.com/">
            Seiglie
          </a>
          <br/>
          <img className="footer_Logo" src="./rsc/img/seiglieWB.jpeg" alt="Seiglie logo"/>
          <br /> Madrid, Spain. {year}
        </div>
        <div className="col-4 footer_TechWrap">
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
        <div className="col-4">
          <ul>
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
