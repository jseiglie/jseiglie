import React from "react";


const About = () => {
  return (
    
    <section id="#about" className="container-fluid">
      <div className="about_Info">
        <div className="row about_wrapper">

          <p className="text_Intro">
            <span className="about_Hola">Hola!</span> soy Javier. <br />
            Desarrollador de Aplicaciones Web (Full Stack) y profesor asistente de
            programación.
          </p>
          <p className="text_normal">
            Existe un proverbio que dice
            <br /> <br />
            <span className="d-flex about_quote">
              <q><em>No trabajes duro, trabaja inteligente</em></q>
            </span>
            </p>
            <p className="text_normal">
            <br />Lo que me propongo con cada trabajo que
            realizo; brindar soluciones sencillas y elegantes que cumplan con
            las necesidades del proyecto.
          </p>
          
          <a href="#contacto" className="text_Link text_hablamos">Hablamos?</a>
        </div>
      </div>
    </section>
  );
};

export default About;
