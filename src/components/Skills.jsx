import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import {
  faJsSquare,
  faReact,
  faCss3Alt,
  faHtml5,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";

const SkillsPage = styled.section`
  padding-left: 11.7vw;
  padding-right: 3vw;
  padding-top: 5vw;
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
`;

const Title = styled.div`
  font-size: 2vw;
  padding: 3vw 0vw;
`;

const SkillContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  align-items: center;
`;

const SkillIcon = styled.div`
  transition: all 0.3s;
`;

const Skill = styled.div`
  margin: 1rem;
  background: linear-gradient(
    0deg,
    rgba(57, 24, 187, 0.7) 0%,
    rgba(199, 103, 168, 0.7) 100%
  );
  border-radius: 20px;
  width: 10vw;
  height: 15vw;
  &:hover ${SkillIcon} {
    transform: scale(0.8);
    transition: all 0.3s;
  }
`;

const SkillTitle = styled.div`
  padding: 1vw 0vw;
  font-size: 1.3vw;
  display: flex;
  justify-content: center;
`;

function Skills() {
  return (
    <SkillsPage>
      <Title>
        <FontAwesomeIcon icon={faCode} /> Skills
      </Title>
      <SkillContainer>
        <Skill>
          <SkillTitle>JavaScript</SkillTitle>
          <SkillIcon>
            <FontAwesomeIcon
              icon={faJsSquare}
              style={{ fontSize: "10vw", width: "100%" }}
            />
          </SkillIcon>
        </Skill>
        <Skill>
          <SkillTitle>React.js</SkillTitle>
          <SkillIcon>
            <FontAwesomeIcon
              icon={faReact}
              style={{ fontSize: "10vw", width: "100%" }}
            />
          </SkillIcon>
        </Skill>
        <Skill>
          <SkillTitle>CSS3</SkillTitle>
          <SkillIcon>
            <FontAwesomeIcon
              icon={faCss3Alt}
              style={{ fontSize: "10vw", width: "100%" }}
            />
          </SkillIcon>
        </Skill>
        <Skill>
          <SkillTitle>HTML5</SkillTitle>
          <SkillIcon>
            <FontAwesomeIcon
              icon={faHtml5}
              style={{ fontSize: "10vw", width: "100%" }}
            />
          </SkillIcon>
        </Skill>
        <Skill>
          <SkillTitle>Git</SkillTitle>
          <SkillIcon>
            <FontAwesomeIcon
              icon={faGitAlt}
              style={{ fontSize: "10vw", width: "100%" }}
            />
          </SkillIcon>
        </Skill>
      </SkillContainer>
    </SkillsPage>
  );
}

export default Skills;
