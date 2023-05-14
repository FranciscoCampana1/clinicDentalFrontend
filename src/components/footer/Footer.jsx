import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <div className="contenedor-footer">
      <div className="contenedor-redes">
        <a href="" target="_blank" class="m-3 link">
          <img
            src="../../../images/intagram.jpg"
            alt="imagenInstagram"
            width="30"
          />{" "}
          Instagram
        </a>
        <a href="" target="_blank" class="m-3 link">
          <img
            src="../../../images/facebook.jpg"
            alt="imagenFacebook"
            width="28px"
          />{" "}
          Facebook
        </a>
      </div>
      <div>
        <h4>Mapa Google</h4>
      </div>
      <div className="contenedor-urgencias">
        <h6>Urgencias al: </h6> <h6> +34 685595741</h6>
      </div>
    </div>
  );
}
