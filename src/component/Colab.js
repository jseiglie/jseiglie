import React from "react";

const Colab = () => {
  const address = "./rsc/img/colab/";
  const colab = [
    {
      img: `4Geeks.jpg`,
      alt: "4Geeks Academy",
      url: "https://4geeksacademy.com/",
    },
    {
      img: `gites.jpg`,
      alt: "Girls in Tech Spain",
      url: "https://spain.girlsintech.org/",
    },
    { img: `bola_opt.png`, alt: "MacPlace", url: "https://macplace.es/" },
    { img: `eypasa.png`, alt: "Eypasa", url: "https://eypasa.com/" },
    {
      img: `torsi.png`,
      alt: "Torsi English School",
      url: "https://torsionline.com/",
    },
  ];

  const show = (data) =>
    data.map((item, i) => (
      <div key={i} className=" col-lg-3 col-sm-6">

      <a className="colab_ImgLink " href={data.url} target="_blank" rel="noreferrer">
        <img
          className="colab_img "
          
          src={`${address + item.img}`}
          alt={item.alt}
          />
      </a>
          </div>
    ));

  return (
    <section className="row">
      <h1 className="colab_Title">&lt;Colab/&gt;</h1>
      <div className="container colab_Wrapper">
        <div className="row colab_Holder">{show(colab)}</div>
      </div>
    </section>
  );
};

export default Colab;
