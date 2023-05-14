import Carousel from "react-bootstrap/Carousel";
import React from "react";
import "./Home.scss";

export default function Home() {
  return (
    <div className="contenedor-home">
      <div className="contenedor-title">
        <h1>All Smiles Clínica Dental</h1>
      </div>
      <div>
        <div>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../../../images/imagen-carousseel-1.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../../../images/imagen-caroussel-2.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../../../images/imagen-caroussel-3.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
