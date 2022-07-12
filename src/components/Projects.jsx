import styled from "styled-components";
import projectsData from "../data/projectsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

const ProjectsPage = styled.section`
  padding-left: 11.7vw;
  padding-right: 3vw;
  padding-top: 5vw;
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20vw;
`;

const PageTitle = styled.div`
  font-size: 2vw;
  padding-top: 3vw;
`;

const Project = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5vw 0vw;
  ${({ odd }) =>
    odd &&
    `
      flex-direction: row-reverse;
  `}
`;

const Img = styled.img`
  width: 60%;
  height: 100%;
  border-radius: 10px;
  padding: 1vw;
  background-color: #fdfdfd;
  box-shadow: 1px 3px 4px #e0e0e0;
`;

const Info = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 600;
  width: 35%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.div`
  font-family: "Black Han Sans", sans-serif;
  font-size: 1.3vw;
  font-weight: 600;
`;

const Description = styled.div``;

const Skills = styled.div`
  display: flex;
`;

const Skill = styled.div`
  font-size: 1.1vw;
  border: 3px solid #2f2f2f;
  border-radius: 5px;
  padding: 0.3rem 0.8rem;
  margin-right: 1vw;
  cursor: default;
`;

const Links = styled.div`
  display: flex;
`;

function Projects() {
  return (
    <ProjectsPage id="projects">
      <PageTitle>
        <FontAwesomeIcon icon={faCode} /> Projects
      </PageTitle>
      {projectsData.map((project, index) => (
        <Project odd={index % 2 === 1}>
          <Img src={`../assets/${project.img}.png`} />
          <Info>
            <Title>{project.title}</Title>
            <Description>{project.description}</Description>
            <Skills>
              {project.skills.map((skill) => {
                return <Skill>{skill}</Skill>;
              })}
            </Skills>
            <Links>
              <a
                href={project.github}
                target="_blank"
                style={{
                  marginRight: "1vw",
                  color: "inherit",
                }}
              >
                <FontAwesomeIcon
                  icon={faGithubSquare}
                  style={{ fontSize: "2vw" }}
                />
              </a>
              <a
                href={project.website}
                target="_blank"
                style={{
                  color: "inherit",
                }}
              >
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  style={{ fontSize: "2vw" }}
                />
              </a>
            </Links>
          </Info>
        </Project>
      ))}
    </ProjectsPage>
  );
}

export default Projects;
