import React from "react";
import "./Projects.css";
import proImg1 from "../../assets/project 1.jpg";
import proImg2 from "../../assets/project 2.png";
import proImg3 from "../../assets/project 3.png";
import proImg4 from "../../assets/project 4.png";

const Projects = () => {
  return (
    <div className="container-fluid my-5 py-5 text-center" id="projects">
      <h3 className="py-5 ">
        My <span>Projectss</span>...
      </h3>
      <div className="container my-5">
        <div className="row">
          <div className="col-12 col-md-6 px-4 py-4">
            <img
              src={proImg1}
              alt="Project 1"
              className="img-fluid shadow rounded projImg"
            />
          </div>
          <div className="col-12 col-md-6 px-4 py-4">
            <img
              src={proImg2}
              alt="Project 1"
              className="img-fluid shadow rounded projImg"
            />
          </div>
          <div className="col-12 col-md-6 px-4 py-4">
            <img
              src={proImg4}
              alt="Project 1"
              className="img-fluid shadow rounded projImg"
            />
          </div>
          <div className="col-12 col-md-6 px-4 py-4">
            <img
              src={proImg3}
              alt="Project 1"
              className="img-fluid shadow rounded projImg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
