import { Modal } from "antd";
import { Project } from "../content/data";

type ProjectModalProps = {
  open: boolean;
  onOk: () => void;
  onCancel: () => void;
  project: Project | null;
};

const ProjectModal = ({ open, onOk, onCancel, project }: ProjectModalProps) => {
  return (
    <Modal open={open} onOk={onOk} onCancel={onCancel} width={800}>
      {project && (
        <div
          style={{
            lineHeight: 1.6,
            gap: 16,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h4>{project?.title}</h4>
          <p>
            <em>
              {project.detail.startDate} – {project.detail.endDate} | Team size:{" "}
              {project.detail.teamSize} | Role: {project.detail.role}
            </em>
          </p>
          <p>
            <strong>Organization:</strong> {project.detail.organization}
          </p>
          <p>
            <strong>Description:</strong>
            <br />
            {project.description}
          </p>
          <p>
            <strong>My responsibility:</strong>
          </p>
          <ul style={{ paddingLeft: "20px" }}>
            {project.detail.myResponsiblity.map((r, idx) => (
              <li key={idx}>{r}</li>
            ))}
          </ul>
          <p>
            <strong>Tech stack:</strong> {project.detail.techStack}
          </p>
          {project.github && (
            <p>
              <strong>GitHub:</strong>{" "}
              {typeof project.github === "string" ? (
                <a href={project.github} target="_blank" rel="noreferrer">
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
              <a href={project.demo} target="_blank" rel="noreferrer">
                {project.demo}
              </a>
            </p>
          )}
          {project.news && (
            <p>
              <strong>News:</strong>{" "}
              <a href={project.news} target="_blank" rel="noreferrer">
                {project.news}
              </a>
            </p>
          )}
        </div>
      )}
    </Modal>
  );
};

export default ProjectModal;
