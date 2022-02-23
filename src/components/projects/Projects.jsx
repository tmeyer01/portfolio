import "./projects.scss";
import { useState } from "react";
import { projectsData } from "../../projectData";
import downArrow from '../../images/colorarrow.png'
import leftArrow from '../../image/left.png'
import rightArrow from '../../image/right.png'
import gitHubImage from '../../image/github.png'
import websiteImage from '../../image/www.png'

export default function Projects() {
  const [currentProject, setCurrentProject] = useState(0);

  const handleClick = (way) => {
    way === "left"
      ? setCurrentProject(currentProject > 0 ? currentProject - 1 : 2)
      : setCurrentProject(
          currentProject < projectsData.length - 1 ? currentProject + 1 : 0
        );
  };

  return (
    <div className="projects" id="projects">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentProject * 100}vw)` }}
      >
        {projectsData.map((projectsData) => (
          <div className="container" key={projectsData.id}>
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <h2>{projectsData.title}</h2>

                  <p>{projectsData.description}</p>

                  <div className="imgContainer">
                    <a
                      href={projectsData.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={gitHubImage} alt="github" />
                    </a>

                    {projectsData.liveSite && (
                      <a
                        href={projectsData.liveSite}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={websiteImage}
                          alt={projectsData.title}
                        />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="right">
                <iframe
                  width="560"
                  height="315"
                  src={projectsData.video}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        ))}
      </div>

      <img
        src={leftArrow}
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src={rightArrow}
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />

      <a href="#contact" className="down">
        <img src={downArrow} alt="icondown" />
      </a>
    </div>
  );
}
