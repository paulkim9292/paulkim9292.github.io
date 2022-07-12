import styled from "styled-components";
import projectsData from "../data/projectsData";

const ProjectsPage = styled.section`
  padding-left: 8.7vw;
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
`;

const PageTitle = styled.div`
  font-size: 2vw;
  font-weight: 600;
`;

const Project = styled.div`
  /* background-color: aliceblue;
  border-radius: 20px; */
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
  width: 50%;
  height: 100%;
  border-radius: 10px;
  margin: 1vw;
  box-shadow: 1px 3px 4px #e0e0e0;
`;

const Info = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.div`
  font-size: 1.3vw;
  font-weight: 600;
`;

const Description = styled.div``;

const Skills = styled.div`
  display: flex;
`;

const Skill = styled.div`
  border: 3px solid #2f2f2f;
  border-radius: 5px;
  padding: 0.3rem 0.8rem;
  margin-right: 1vw;
  cursor: default;
  transition: all 0.5s;
  &:hover {
    background-color: #2f2f2f;
    color: #fdfdfd;
    transition: all 0.5s;
  }
`;

function Projects() {
  return (
    <ProjectsPage id="projects">
      <PageTitle>Projects</PageTitle>
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
          </Info>
        </Project>
      ))}
    </ProjectsPage>
  );
}

export default Projects;
