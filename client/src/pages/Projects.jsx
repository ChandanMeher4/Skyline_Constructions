import { useEffect, useState } from "react";
import axios from "axios";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/projects")
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="projects-page">
      <h2>Our Portfolio</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <div key={project._id} className="project-card">
            <img src={project.imageUrl} alt={project.title} />
            <div style={{ padding: "15px" }}>
              <h3>{project.title}</h3>

              <p
                style={{
                  fontSize: "0.9em",
                  color: "#666",
                  fontStyle: "italic",
                }}
              >
                By {project.companyName}
              </p>

              <p>{project.description}</p>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "0.85em",
                  marginTop: "10px",
                  color: "#555",
                }}
              >
                <span>📍 {project.location}</span>
                <span>💰 {project.priceRange || "N/A"}</span>
              </div>

              <span
                className="category"
                style={{ marginTop: "10px", display: "inline-block" }}
              >
                {project.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
