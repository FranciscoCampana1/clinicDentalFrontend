import Carousel from "react-bootstrap/Carousel";
import React from "react";
import './Home.scss'

export default function Home() {
  return (
    <div className="contenedor-home">
      <div className="contenedor-title">
           <h1> Clinica Dental Sonrilandia </h1>
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
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../../../images/imagen-caroussel-2.jpg"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="../../../images/imagen-caroussel-3.jpg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div>
        <div>mapa de ubicacion</div>
      </div>
    </div>
  );
}
