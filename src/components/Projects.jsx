/* eslint-disable jsx-a11y/anchor-is-valid */
import { Image } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

function Projects() {
  const [projects] = useState([
    { stackImg:["https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",],
      title: "Nordstrom Rack clone",
      img: "/projects/1.png",
      gLink: "https://github.com/Surendrakumar878/Masai_Product_Unit2",
      lLink: "https://unrivaled-tiramisu-dc2e1b.netlify.app/",
      decs:"Free shipping. Free returns. All the time. Shop online for shoes, clothing, jewelry, dresses, makeup and more from top brands. Make returns in store or by mail."
    },
    {  stackImg:"https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
      title: "Cricbuzz Clone",
      img: "/projects/2.png",
      gLink: "https://github.com/VijaySingh8650/cricbuzz/",
      lLink: "https://guileless-rabanadas-3377d4.netlify.app/",
      decs:"Cricbuzz is an Indian cricket news website owned by Times Internet. It features, news, articles and live coverage of cricket matches including videos, text commentary, player stats and team rankings."
    },
    { stackImg:"https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
      title: "BellaVitaOrganic Clone",
      img: "/projects/3.png",
      gLink: "https://github.com/Shimbhu77/taboo-mine-9522",
      lLink: "https://elegant-lily-59df11.netlify.app/",
      decs:"An online eCommerce website sell the natural and ayurvedic cosmetics and skin care products to customer in Online A collaborative project built by a team of 4 Member executed in 4 days."
    },
  ]);
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="title">
          <h3>Featured Projects</h3>
          <a
            href="https://github.com/Surendrakumar878"
            target="_blank"
            className="btn"
            rel="noreferrer"
          >
            View All
          </a>
        </div>
        <div className="projects-wrapper">
          {projects.map((project, i) => (
            <div className="project" key={i}>
              <div className="img-container">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="description">
                <h4>{project.title}</h4>
                <div className="links">
                  <a href={project.gLink} target="_blank" rel="noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href={project.lLink} target="_blank" rel="noreferrer">
                    <i className="fa fa-globe"></i>
                  </a>
                  
                </div>
                
              </div>
              <p>
              
{project.decs}
              </p>
              <div><Image width="70px" src={project.stackImg} alt="" /></div>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
}

export default Projects;
