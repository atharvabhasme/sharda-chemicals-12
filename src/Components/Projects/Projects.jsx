import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiagramProject, faUserTie, faMedal, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import "./Projects.css";

const Projects = () => {
  return (
    // Main Projects Section
    <div className="projects">
      <h2>Key Highlights of Sharda Chemicals</h2>
      
      {/* Projects Container */}
      <div className="projects-container">
        <div className="projects-box">
          
          {/* Projects Box 1 */}
          <div className="project-box-1">
            <div className="project-box-heading">
              <FontAwesomeIcon icon={faDiagramProject} style={{ color: "#d4af37" }} />
              <h4>Projects</h4>
            </div>
            <p className="project-box-desc">500+ Completed</p>
          </div>
          
          {/* Projects Box 2 */}
          <div className="project-box-2">
            <div className="project-box-heading">
              <FontAwesomeIcon icon={faUserTie} style={{ color: "#d4af37" }} />
              <h4>Clients Served</h4>
            </div>
            <p className="project-box-desc">10000+ Served</p>
          </div>
          
          {/* Projects Box 3 */}
          <div className="project-box-3">
            <div className="project-box-heading">
              <FontAwesomeIcon icon={faMedal} style={{ color: "#d4af37" }} />
              <h4>Experience</h4>
            </div>
            <p className="project-box-desc">20 Years of Work Experience</p>
          </div>
          
          {/* Projects Box 4 */}
          <div className="project-box-4">
            <div className="project-box-heading">
              <FontAwesomeIcon icon={faPeopleGroup} style={{ color: "#d4af37" }} />
              <h4>Our Team</h4>
            </div>
            <p className="project-box-desc">Passionate to work</p>
          </div>
        </div>
      </div>
      
      {/* Tagline Section */}
      <div className="tag-line">
        <h4>Sharda Chemicals : Where Quality Meets Reliability and Trust. 🏭</h4>
      </div>
    </div>
  );
};

export default Projects;
