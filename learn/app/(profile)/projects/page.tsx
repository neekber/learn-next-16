"use client";

import React from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Portfolio Website",
      status: "Completed",
    },
    {
      id: 2,
      name: "E-Commerce App",
      status: "In Progress",
    },
    {
      id: 3,
      name: "Task Manager",
      status: "Pending",
    },
  ];

  return (
    <>
      <style>{`
        .page {
          padding: 30px;
          font-family: Arial, sans-serif;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-top: 20px;
        }

        .project-card {
          background: white;
          padding: 20px;
          border-radius: 12px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .status {
          margin-top: 10px;
          display: inline-block;
          padding: 5px 10px;
          border-radius: 20px;
          background: #dbeafe;
          color: #2563eb;
          font-size: 14px;
        }
      `}</style>

      <div className="page">
        <h1>Projects</h1>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <h3>{project.name}</h3>
              <span className="status">{project.status}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
