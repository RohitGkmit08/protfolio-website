import { projectsData } from "../../data/projects";
import "./Projects.css";

function Projects() {
  return (
    <section className="projects dark" id="projects" aria-labelledby="projects-heading">
      <div className="container">
        
        <header className="section-header">
          <span className="section-number">03 / ENTRIES</span>
          <h2 className="section-title" id="projects-heading">Projects</h2>
        </header>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <article className="project-card" key={project.id}>
              
              <header className="project-header">
                <span className="project-number">{project.entryNo}</span>
                
                <div className="project-links">
                  {project.github.frontend && !project.github.backend && (
                    <a 
                      className="project-link" 
                      href={project.github.frontend} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={`${project.title} GitHub repository (opens in new tab)`}
                    >
                      GitHub ↗
                    </a>
                  )}

                  {project.github.frontend && project.github.backend && (
                    <>
                      <a 
                        className="project-link" 
                        href={project.github.frontend} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label={`${project.title} frontend repository (opens in new tab)`}
                      >
                        Frontend ↗
                      </a>
                      <a 
                        className="project-link" 
                        href={project.github.backend} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label={`${project.title} backend repository (opens in new tab)`}
                      >
                        Backend ↗
                      </a>
                    </>
                  )}
                </div>
              </header>

              <h3 className="project-title">{project.title}</h3>

              <div className="project-details">
                
                <aside className="project-column built-with" aria-label="Technologies used">
                  <div className="project-column-label">Built with</div>
                  <p>{project.builtWith}</p>
                </aside>

                <aside className="project-column delivered" aria-label="Features delivered">
                  <div className="project-column-label">Delivered</div>
                  <p>{project.delivered}</p>
                </aside>

              </div>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span className="project-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;
