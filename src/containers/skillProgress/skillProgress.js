import React, {useState, useContext} from "react";
import "./Progress.scss";
import {illustration, portfolioProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import Build from "../../assets/lottie/build";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function StackProgress() {
  const {isDark} = useContext(StyleContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!portfolioProjects || !portfolioProjects.display) {
    return null;
  }

  const projects = portfolioProjects.projects;

  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(prev + 1, projects.length - 1));
  };

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="skills-container project-portfolio-section">
        <div className="skills-bar">
          <div className="portfolio-header-container">
            <h1 className="skills-heading">My Project Portofolio</h1>
            <div className="carousel-nav-buttons">
              <button 
                onClick={handlePrev} 
                disabled={currentIndex === 0}
                className={`nav-btn prev-btn ${currentIndex === 0 ? "disabled" : ""}`}
                aria-label="Previous Project"
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <button 
                onClick={handleNext} 
                disabled={currentIndex >= projects.length - 1}
                className={`nav-btn next-btn ${currentIndex >= projects.length - 1 ? "disabled" : ""}`}
                aria-label="Next Project"
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
          
          <div className="carousel-outer-wrapper">
            <div 
              className="carousel-inner-slider"
              style={{
                transform: `translateX(calc(-1 * ${currentIndex} * (var(--card-width) + var(--card-gap))))`
              }}
            >
              {projects.map((project, i) => (
                <div 
                  key={i} 
                  className={`portfolio-card ${isDark ? "portfolio-card-dark" : "portfolio-card-light"}`}
                >
                  <div className="portfolio-card-content">
                    <div className="card-header-row">
                      {project.logo ? (
                        <div className="card-logo-container">
                          {typeof project.logo === "string" && (project.logo.startsWith("fa") || project.logo.startsWith("devicon")) ? (
                            <i className={`${project.logo} card-logo-icon`}></i>
                          ) : (
                            <img src={project.logo} alt="" className="card-logo-img" />
                          )}
                        </div>
                      ) : null}
                      <h3 className={isDark ? "card-title-dark" : "card-title-light"}>
                        {project.title}
                      </h3>
                    </div>
                    <p className={`card-desc ${isDark ? "desc-dark" : "desc-light"}`}>
                      {project.description}
                    </p>
                    <div className="card-techs">
                      {project.techStack.map((tech, idx) => (
                        <span 
                          key={idx} 
                          className={`tech-tag ${isDark ? "tag-dark" : "tag-light"}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="portfolio-card-footer">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`card-link-btn ${isDark ? "btn-dark" : "btn-light"}`}
                    >
                      View Project <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="skills-image">
          {illustration.animated ? (
            <DisplayLottie animationData={Build} />
          ) : (
            <img
              alt="Skills"
              src={require("../../assets/images/skill.svg")}
            />
          )}
        </div>
      </div>
    </Fade>
  );
}
