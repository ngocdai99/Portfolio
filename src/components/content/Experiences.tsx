import { useState } from "react";
import ProjectModal from "../modal/ProjectModal";
import data, { Project } from "./data";

const Experiences = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const showModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <ProjectModal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        project={selectedProject}
      />

      <div className="arlo_tm_section" id="experiences">
        <div className="arlo_tm_services_wrap">
          <div className="container">
            <div className="arlo_tm_title_holder">
              <h3>Working Experiences</h3>
              <span>Meet my working experiences</span>
            </div>
            <div className="list_wrap">
              <ul>
                {data.slice(0, 2).map((project: Project, index: number) => (
                  <li
                    key={index}
                    onClick={() => showModal(project)}
                    style={{ cursor: "pointer" }}
                  >
                    <div className="inner">
                      <div className="icon">
                        <span
                          className="material-icons"
                          style={{ fontSize: 40, color: "orange" }}
                        >
                          {project.image}
                        </span>
                      </div>
                      <div className="title_service">
                        <h3>{project.title}</h3>
                      </div>
                      <p>
                        <em>
                          {project.detail.startDate} – {project.detail.endDate}{" "}
                          | Team size: {project.detail.teamSize} | Role:{" "}
                          {project.detail.role}
                        </em>
                      </p>

                      <p>
                        <strong>Description:</strong>
                        <br />
                        {project.description}
                      </p>

                      <p>
                        <strong>Tech stack:</strong> {project.detail.techStack}
                      </p>
                      {project.github && (
                        <p>
                          <strong>GitHub:</strong>{" "}
                          {typeof project.github === "string" ? (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {project.github}
                            </a>
                          ) : (
                            <>
                              {project.github.frontend && (
                                <>
                                  Frontend:{" "}
                                  <a
                                    href={project.github.frontend}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    {project.github.frontend}
                                  </a>
                                  <br />
                                </>
                              )}
                              {project.github.backend && (
                                <>
                                  Backend:{" "}
                                  <a
                                    href={project.github.backend}
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    {project.github.backend}
                                  </a>
                                  <br />
                                </>
                              )}
                            </>
                          )}
                        </p>
                      )}
                      {project.demo && (
                        <p>
                          <strong>Demo:</strong>{" "}
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {project.demo}
                          </a>
                        </p>
                      )}
                      {project.news && (
                        <p>
                          <strong>News:</strong>{" "}
                          <a
                            href={project.news}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {project.news}
                          </a>
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experiences;
