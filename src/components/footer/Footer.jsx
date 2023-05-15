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
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11971.25788851041!2d2.167728225610341!3d41.39983530703617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2dcd83dfb93%3A0x9bd8aac21bc3c950!2sBas%C3%ADlica%20de%20la%20Sagrada%20Fam%C3%ADlia!5e0!3m2!1ses!2ses!4v1684138457115!5m2!1ses!2ses"
          width="350"
          height="200"
          style={{border:0}}
          loading="lazy"
        ></iframe>
      </div>
      <div className="contenedor-urgencias">
        <h6>Urgencias al: </h6> <h6> +34 685595741</h6>
      </div>
    </div>
  );
}
