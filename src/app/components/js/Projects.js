import Link from "next/link";
import { useEffect, useState } from 'react';
import styles from "./../css/project.css";

export default function Projects() {

    const [projects, setProjects] = useState([]);
    
      useEffect(() => {
        const fetchProjects = async () => {
          try {
            const res = await fetch("https://strapi-production-d8f9.up.railway.app/api/projects?populate=*");
            const data = await res.json();
            setProjects(data.data);
          } catch (error) {
            console.error("Failed to fetch partners:", error);
          }
        };
    
        fetchProjects();
      }, []); 
    
    return (
        <ul className="project-list">
             {projects.map((project) => (
                <li key={project.id} className="project-list--item">
                    <a href={project.attributes.URL} className="project-list--link">
                                    <img className="project-list--picture"
                        src={project.attributes.Thumbnail.data.attributes.url}
                        alt={project.attributes.Title}
                        />
                        <div className="project-list--container">
                        <p className="project-list--client">
                    {project.attributes.Client}
                    </p>
                    <h2 className="project-list--title">{project.attributes.Title}</h2> 
                    <p className="project-list--text">
                    {project.attributes.Description}
                    </p>
                    <span className="project-list--tag">{project.attributes.Tags}</span>
                    </div>
                    </a>
                    
                    <hr></hr>
                </li>
           
             ))}
        </ul>
  );
}

