import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const AboutPage = styled.section`
  padding-left: 10.7vw;
  padding-right: 2vw;
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 599px) {
    padding: 0vw 10vw;
    margin: 0;
  }
`;

const Title = styled.div`
  font-size: 2vw;
  padding: 3vw 0vw;
  @media screen and (max-width: 599px) {
    font-size: 6vw;
    padding-bottom: 9vw;
  }
`;

const Content = styled.div`
  padding-left: 3vw;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const Name = styled.div`
  font-size: 1.3vw;
  @media screen and (max-width: 599px) {
    font-size: 3.9vw;
  }
`;

const Item = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 600;
  font-size: 1.1vw;
  margin: 0.3vw 0vw;
  @media screen and (max-width: 599px) {
    font-size: 3.3vw;
  }
`;

function About() {
  return (
    <AboutPage id="about">
      <Title>
        <FontAwesomeIcon icon={faCode} /> ABOUT
      </Title>
      <Content>
        <Name>김성우 (Paul)</Name>
        <Item>• 신입 프론트엔드 개발자</Item>
        <Item>• 2001.02.14</Item>
        <Item>• 홍콩과기대학교 컴퓨터공학과 재학중 (2학년 마치고 휴학)</Item>
        <Item>• paulkim9292@gmail.com</Item>
      </Content>
    </AboutPage>
  );
}

export default About;
