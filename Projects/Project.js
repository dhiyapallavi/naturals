import React from "react";
 import ProjectList from "./ProjectList";
import "./Project.css";

const Project = () => {
  const data = [
    {
      name: "MERN Stack Naturals",
      des: " throughout Naturals website as same ",
      techused: [
        {
          techname: "HTML5",
        },
        {
          techname: "CSS3",
        },
        {
          techname: "JavaScript",
        },
        {
          techname: "Bootstrap 5",
        },
      ],
    },

    {
      name: "MERN Stack Celebrity Website",
      des: " Celebrity website ",
      techused: [
        {
          techname: "HTML5",
        },
        {
          techname: "CSS3",
        },
        {
          techname: "JavaScript",
        },
        {
          techname: "Bootstrap 5",
        },
      ],
    },

    {
      name: "MERN Stack Portfolio",
      des: "  Portfolio ",
      techused: [
        {
          techname: "HTML5",
        },
        {
          techname: "CSS3",
        },
        {
          techname: "JavaScript",
        },
        {
          techname: "Bootstrap5",
        },
    
      ],
    },
  ];

  return (
    <div className="container" id="project">
      <div className="section-title">
        <h5>Projects</h5>
        <span className="line"></span>
      </div>

      <div className="row">
        {data.map((item, index) => (
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12" key={index}>

            <ProjectList  {...item} />
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
