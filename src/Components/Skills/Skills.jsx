import React from "react";
import { Link } from "react-router-dom";
import htmlImg from "../../assets/icons/html.png";
import cssImg from "../../assets/icons/css.png";
import jsImg from "../../assets/icons/js.png";
import bsImg from "../../assets/icons/bootstrap.png";
import pyImg from "../../assets/icons/python.png";
import rsImg from "../../assets/icons/react.png";
import signImg from "../../assets/sign.png";
import sImg from "../../assets/s.jpg";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="container-fluid my-5 py-5 text-center" id="skills">
      <h3 className="py-5 ">
        My <span>Skillss</span>* {/* &#9733 &#9733 */}
      </h3>
      <div className="container my-5 py-5 text-center" id="skillsContainer">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6 my-3">
            <div className="row mx-3 align-items-center mb-5">
              <div className="col-6 col-lg-4 py-3 px-3">
                <Link to="#" className="text-decoration-none">
                  <img src={htmlImg} alt="HTML" className="img-fluid w-50" />
                  <h6 className="text-white mt-3">
                    <span>★★★★</span>★
                  </h6>
                </Link>
              </div>
              <div className="col-6 col-lg-4 py-3 px-3">
                <Link to="#" className="text-decoration-none">
                  <img src={cssImg} alt="CSS" className="img-fluid w-50" />
                  <h6 className="text-white mt-3">
                    <span>★★★</span>★★
                  </h6>
                </Link>
              </div>
              <div className="col-6 col-lg-4 py-3 px-3">
                <Link to="#" className="text-decoration-none">
                  <img
                    src={jsImg}
                    alt="JavaScript"
                    className="img-fluid w-50"
                  />
                  <h6 className="text-white mt-3">
                    <span>★★★</span>★★
                  </h6>
                </Link>
              </div>
              <div className="col-6 col-lg-4 py-3 px-3">
                <Link to="#" className="text-decoration-none">
                  <img src={bsImg} alt="Bootstrap" className="img-fluid w-50" />
                  <h6 className="text-white mt-3">
                    <span>★★★★</span>★
                  </h6>
                </Link>
              </div>
              <div className="col-6 col-lg-4 py-3 px-3">
                <Link to="#" className="text-decoration-none">
                  <img src={pyImg} alt="Python" className="img-fluid w-50" />
                  <h6 className="text-white mt-3">
                    <span>★★★</span>★★
                  </h6>
                </Link>
              </div>
              <div className="col-6 col-lg-4 py-3 px-3">
                <Link to="#" className="text-decoration-none">
                  <img src={rsImg} alt="React" className="img-fluid w-50" />
                  <h6 className="text-white mt-3">
                    <span>★★★</span>★★
                  </h6>
                </Link>
              </div>
            </div>
            <p className="my-3 mx-3" id="skillsText">
              Embrace growth, each step forward gets you closer transforming
              <span> mastery</span>. <br />
              Build upon your skills, transforming
              <span> 3s into 4s</span>, and <span>4s into 5s</span>, one at a
              time..!!
            </p>
            <img
              src={signImg}
              alt="sisi_tarak"
              className="img-fluid rounded w-50"
              id="sign"
            />
          </div>
          <div className="col-12 col-lg-6 my-3" id="skillImg">
            <img
              src={sImg}
              alt="sisi_tarak"
              className="img-fluid shadow rounded w-75"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
