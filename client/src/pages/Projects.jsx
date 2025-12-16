import { useEffect, useState } from 'react';
import axios from 'axios';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/projects')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="projects-page">
      <h2>Our Portfolio</h2>
      <div className="project-grid">
        {projects.map(project => (
          <div key={project._id} className="project-card">
            <img src={project.imageUrl} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span className="category">{project.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;