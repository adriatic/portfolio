import React from "react";
import Title from "./Title";
import Project from "./Project";
import { Link } from "gatsby";

const Projects = ({ projects, title, showLink }) => {
  console.log("title=", title);
  console.log("showLink=", showLink);
  console.log("projects=", projects);

  return (
    <section className="section projects">
      <Title title={title} />
      {projects.map((project, index) => {
        return (
          <Project
            key={project.id}
            index={index}
            description={project.description}
            github={project.github}
            stack={project.stack}
            url={project.url}
            image={project.image}
            slug={project.slug}
          />
        );
      })}
      {showLink && (
        <Link to="/projects" className="btn center-btn">
          projects
        </Link>
      )}
    </section>
  );
};

export default Projects;
