import { useState, useEffect } from "react";
import "./Navigation.css";

function Navigation() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = ["stack", "work", "projects", "contact"];
    
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: "-25% 0px -55% 0px", 
      threshold: 0.1,
    });

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // 3. Stop scrolling if the user clicks a link of the section they are already looking at
  const handleNavClick = (e, id) => {
    if (activeSection === id) {
      e.preventDefault();
    }
  };

  return (
    <>
      {/* (Visible on Desktop) */}
      <aside className="navigation-rail" aria-label="Global sidebar navigation">
        <div className="navigation-rail-logo">RS</div>

        <nav className="navigation-rail-menu" aria-label="Sidebar section links">
          <a 
            href="#stack" 
            className={`navigation-rail-link ${activeSection === "stack" ? "active" : ""}`} 
            onClick={(e) => handleNavClick(e, "stack")}
          >
            01 STACK
          </a>
          <a 
            href="#work" 
            className={`navigation-rail-link ${activeSection === "work" ? "active" : ""}`} 
            onClick={(e) => handleNavClick(e, "work")}
          >
            02 WORK
          </a>
          <a 
            href="#projects" 
            className={`navigation-rail-link ${activeSection === "projects" ? "active" : ""}`} 
            onClick={(e) => handleNavClick(e, "projects")}
          >
            03 PROJECTS
          </a>
          <a 
            href="#contact" 
            className={`navigation-rail-link ${activeSection === "contact" ? "active" : ""}`} 
            onClick={(e) => handleNavClick(e, "contact")}
          >
            04 CONTACT
          </a>
        </nav>

        <div className="navigation-rail-indicator" aria-hidden="true" />
      </aside>

      {/* (Visible on Mobile/Tablet) */}
      <nav className="floating-pill-nav" aria-label="Floating navigation">
        <div className="floating-pill-status">
            <span className="status-dot" aria-hidden="true"></span>
            <span className="status-text">Available for work</span>
        </div>

        <div className="floating-pill-menu">
          <a 
            href="#projects" 
            className={`floating-pill-link ${activeSection === "projects" ? "active" : ""}`} 
            onClick={(e) => handleNavClick(e, "projects")}
          >
            Projects
          </a>
          <a 
            href="https://github.com/RohitGkmit08" 
            target="_blank" 
            rel="noopener noreferrer"
            className="floating-pill-link"
            aria-label="GitHub profile (opens in new tab)"
          >
            GitHub
          </a>
          <a 
            href="#contact" 
            className={`floating-pill-link ${activeSection === "contact" ? "active" : ""}`} 
            onClick={(e) => handleNavClick(e, "contact")}
          >
            Contact
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
