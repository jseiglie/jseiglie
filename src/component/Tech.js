import React from "react";

const Tech = () => {
  const address = "./rsc/img/";
  const front = [
    { img: `htmlcss.png`, alt: "HTML CSS" },
    { img: `js.png`, alt: "JavaScript" },
    { img: `react.png`, alt: "React" },
    { img: `php.png`, alt: "PHP" },
    { img: `figma.png`, alt: "Figma" },
  ];
  const back = [
    { img: `express.png`, alt: "NodeJS Express" },
    { img: `python.png`, alt: "Python" },
    { img: `flask.png`, alt: "Flask" },
    { img: `mysql.jpg`, alt: "MySQL" },
    { img: `sequelize.svg`, alt: "Sequelize" },
  ];

  const show = (data) =>
    data.map((item, i) => (
      <img
        className="tech_img col-3 col-sm-6"
        key={i}
        src={`${address + item.img}`}
        alt={item.alt}
        ></img>
    ));

  return (
    <section className="container-fluid tech_section" id="tech"> 
      <h1 className="tech_Title">&lt;Tech/&gt;</h1>
      <div className="tech_wrapper">
        <div className="row tech_Holder">{show(front)}</div>
        <div className="row tech_Holder">{show(back)}</div>
      </div>
    </section>
  );
};

export default Tech;
