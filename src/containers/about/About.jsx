import React from "react";
import './About.scss'

export default function About() {
  return (
    <div className="contenedor-about">
      <div className="imagen-profesionales">
        <img src="../../../images/profesionales.png" alt="imagen-profesionales"  />
      </div>
      <div className="texto-nosotros">
        <h4>
          Un espacio abierto, con un mobiliario confortable y una iluminación e
          interiorismo diseñado para tu total comodidad. 
          Recepción: Nuestro
          servicio de recepción te procurará todas las atenciones para que se
          sienta como en casa.</h4><h4> Gabinetes:  Contamos con gabinetes dentales
          amplios, modernos y equipados con la última tecnología, para obtener
          la mayor precisión en el diagnóstico y el tratamiento.</h4> <h4> Quirófano: 
          Disponemos de un gabinete quirúrgico en el que podemos realizar
          intervenciones complejas que incluyen la cirugía oral y maxilofacial.
          Provistos de aparatología para aplicar sedación consciente o anestesia
          general. </h4>
          <h4>Radiología: La clínica Bergés Nieto es una de las pocas
          clínicas dentales de Sant Feliu de Llobregat con equipo de TAC 3D para
          el diagnóstico y tratamientos más seguros para sus pacientes. Una
          moderna herramienta de trabajo que obtiene imágenes de última
          generación con una excelente resolución y con bajas dosis de radiación
          para el paciente.
        </h4>
      </div>
    </div>
  );
}
