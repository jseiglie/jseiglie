import React from "react";

const Colab = () => {
  const address = "./rsc/img/colab/";
  const colabs = [
    {
      img: `4Geeks.jpg`,
      alt: "4Geeks Academy",
      url: "https://www.4geeksacademy.com/",
    },
    {
      img: `gites.jpg`,
      alt: "Girls in Tech Spain",
      url: "https://www.spain.girlsintech.org/",
    },
    { img: `bola_opt.png`, alt: "MacPlace", url: "https://www.macplace.es/" },
    { img: `eypasa.png`, alt: "Eypasa", url: "https://www.eypasa.com/" },
    {
      img: `torsi.png`,
      alt: "Torsi English School",
      url: "https://www.torsionline.com/",
    },
  ];

  const show = (data) =>
    data.map((item, i) => (
      <div key={i} className=" col-lg-3 col-sm-6">
        <a
          className="colab_ImgLink "
          href={data.url}
          target="_blank"
          rel="noopener"
        >
          <img
            className="colab_img"
            src={`${address + item.img}`}
            alt={item.alt}
          />
        </a>
      </div>
    ));

  return (
    <section id="colab" className="row gx-0">
      <h1 className="colab_Title">&lt;Colab/&gt;</h1>
      <div className="container colab_Wrapper">
        <div className="row colab_Holder">{show(colabs)}</div>
      </div>
    </section>
  );
};

export default Colab;
