import './projects.scss'
import { useState } from 'react';
import { projectsData } from "../../projectData";

export default function Projects() {
  
  const [currentProject, setCurrentProject] = useState(0);

  const handleClick = (way) => {
    way === "left"
      ? setCurrentProject(currentProject > 0 ? currentProject - 1 : 2)
      : setCurrentProject(currentProject < projectsData.length - 1 ? currentProject + 1 : 0);
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
                  {projectsData.liveSite && <p>link</p> } 
                  <div className="imgContainer">
                    <a
                      href={projectsData.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="./images/icons/github.png" alt="github" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="right">
                {/* <img src={data.img} alt={data.title} /> */}

                <iframe
                  width="560"
                  height="315"
                  src={projectsData.video}
                  title="YouTube video player"
                  // frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                {/* GIT HUB */}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <img 
      alt="" 
      className="arrow left"
      onClick={()=> handleClick("left")}
      />
    <img 
      alt="" 
      className="arrow right"
      onClick={()=> handleClick()}
    /> */}

      <img
        src="./images/icons/left.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="./images/icons/right.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />

      <a href="#contact" className="down">
        <img src="/images/icons/colorarrow.png" alt="icondown" />
      </a>
    </div>
  )
}
