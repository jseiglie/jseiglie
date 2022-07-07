import React from "react";


const About = () => {
  return (
    
    <section id="about" className="container-fluid about_section">
      <div className="about_Info">
        <div className="row about_wrapper">

          <p className="text_Intro">
            <span className="about_Hola">Hola!</span> soy Javier. <br />
            Desarrollador de Aplicaciones Web (Full Stack) y profesor asistente de
            programación.
          </p>
          <p className="text_normal">
            Hay una frase que me llama mucho la atención: 
            <br /> <br />
            <span className="d-flex about_quote">
              <q><em>No trabajes duro, trabaja inteligente</em></q>
            </span>
            </p>
            <p className="text_normal">
            <br />y es exactamente lo que me propongo con cada trabajo que
            realizo; brindar soluciones sencillas, elegantes y eficientes  que cumplan con
            las necesidades del proyecto y cliente final. 
          </p>
          
          <a href="#hablamos" className="text_Link text_hablamos">Hablamos?</a>
        </div>
      </div>
    </section>
  );
};

export default About;
