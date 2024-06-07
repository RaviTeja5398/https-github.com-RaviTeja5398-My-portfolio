import * as React from "react";
import { Link } from "react-router-dom";
import "./Cover.css";
import sisiImg from "../../assets/sisi_tarak.png";
import resume from "../../assets/resume/Resume.pdf";

const Cover = () => {
  return (
    <div className="container py-5 mb-5 my-5" id="home">
      <div className="row align-items-center my-5 py-5">
        <div className="col-lg-7 py-5 order-2 order-lg-1 px-4">
          <h4 className="font-weight-bold">Hello, Its me</h4>
          <h2 className="font-weight-bold">sisi_tarak</h2>
          <h4 className="font-weight-bold mb-4 pb-2">
            I'm a <span>Web Developer</span>
          </h4>
          <p className="font-weight-normal">
            I'm a Student. Insterested in Web Development and Freelancing
          </p>

          <div className="social-media py-3">
            <Link
              to="https://www.linkedin.com/in/sisitarak/"
              target="_blank"
              className="mx-2"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </Link>
            <Link
              to="https://github.com/sisi-tarak/"
              target="_blank"
              className="mx-2"
            >
              <i className="fa-brands fa-github"></i>
            </Link>
            <Link
              to="https://www.instagram.com/sisi_tarakk/"
              target="_blank"
              className="mx-2"
            >
              <i className="fa-brands fa-instagram"></i>
            </Link>
          </div>
          <a href={resume} download="resume.pdf">
            <button className="button my-3">Download Resume🫠</button>
          </a>
        </div>
        <div className="col-12 col-lg-4 offset-lg-1 text-center order-1 order-lg-2 py-5">
          <img src={sisiImg} alt="sisi_tarak" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Cover;
