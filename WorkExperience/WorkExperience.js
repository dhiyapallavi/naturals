import React from "react";
import "./WorkExperience.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { MdGroupWork } from "react-icons/md";

const WorkExperience = () => {
  const data = [
    {
      companyname: "Entri elevate",
      position: "Full Stack Developer",
      des: "It is a long with Frontend.  ",
      year: "2022-2023",
      techskills: [
        {
          techname: "HTML5",
        },
        {
          techname: "CSS3",
        },
        {
          techname: "React JS",
        },
        {
          techname: "BOOTSTRAP5",
        },
        {
          techname: "JAVASCRIPT",
        },
      ],
    },

    {
      companyname: "Entri elevate",
      position: "Full Stack Developer",
      des: "It is a long with Backend. ",
      year: "2022-2023",

      techskills: [
        {
          techname: "Node JS",
        },
        {
          techname: "Express JS",
        },
        {
          techname: "Mongo DB",
        },
      ],
    },

    {
      companyname: "Motherson Automotive Engineering and technologies.",
      position: "Quality Inspector",
      des: "Identify potential areas of problems or impending accidents while audits address the root causes of these problems. ",
      year: "2017-2018",

      techskills: [
        {
          techname: "Analytic Skills",
        },
        {
          techname: "Hand/Eye Coordination",
        },
        {
          techname: "Reporting Skills",
        },
        {
          techname: " Documentation skill",
        },
        {
          techname: " Computer Skill"
        },
      ],
    },

    {
      companyname: "Ford India Pvt limited.",
      position: "Quality Inspector",
      des: "Identify potential areas of problems or impending accidents while audits address the root causes of these problems. " ,
      year: "2015-2017",

      techskills: [
        {
          techname: "Equipments Knowledge",
        },
        {
          techname:"Analytical skills",
        },
        {
          techname: "Problem Solving",
        },
      ],
    },

  ];

  const colors = [
    "#800000",
    "#FF8042",
    "#001CCE",
    "#4B088A",
    "#FF6347",
    "#FF1042",
  ];

  return (
    <div className="container workexperience-section" id="workexperience">
      <div className="section-title">
        <h5>Work Experience</h5>
        <span className="line"></span>
      </div>

      <div className="timeline-section">
        <VerticalTimeline lineColor="#FF1042">
          {data.map((item, index) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: colors[index], color: "#fff" }}
              contentArrowStyle={{ borderRight: "7px solid  #FFBB24" }}
              date={item.year}
              dateClassName="date-class"
              iconStyle={{ background: colors[index], color: "#fff" }}
              icon={<MdGroupWork />}
            >
              <h3 className="vertical-timeline-element-title">
                {item.companyname}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {item.position}
              </h4>

              <div className="row">
                {item.techskills.map((tec, index) => (
                  <div
                    className="col-xl-4 col-lg-4 col-md-6 col-sm-12"
                    key={index}
                  >
                    <div className="tech-skills">
                      <p>{tec.techname}</p>
                    </div>
                  </div>
                ))}
              </div>

              <p>{item.des}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>


      
    </div>
  );
};

export default WorkExperience;
