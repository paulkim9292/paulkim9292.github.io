import styled from "styled-components";
import Lottie from "lottie-react";
import animation from "../programming-computer.json";
import { useMediaQuery } from "react-responsive";

const HelloPage = styled.section`
  padding-left: 8.7vw;
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  @media screen and (max-width: 599px) {
    padding: 0;
    margin: 0;
  }
`;

const TitleUp = styled.div`
  margin: 1vw 0vw;
  font-size: ${(props) => props.fontSize};
  transform: rotate(${(props) => props.rotate});
  @media screen and (max-width: 599px) {
    font-size: ${(props) => props.mobileFontSize};
    margin: 2.5vw 0vw;
  }
`;

const TitleDown = styled.div`
  font-size: 3vw;
  @media screen and (max-width: 599px) {
    font-size: 9vw;
  }
`;

const Animation = styled(Lottie)`
  width: 25vw;
  @media screen and (max-width: 599px) {
    width: 75vw;
  }
`;

function Hello() {
  return (
    <HelloPage id="hello">
      <TitleUp fontSize="1.9vw" mobileFontSize="5.7vw" rotate="10deg">
        "왜?"라는 질문을 끊임없이 던지며
      </TitleUp>
      <TitleUp fontSize="2.3vw" mobileFontSize="6.9vw" rotate="-5deg">
        코딩이 즐거운
      </TitleUp>
      <TitleUp fontSize="2vw" mobileFontSize="6vw" rotate="5deg">
        프론트엔드 개발자를 꿈꾸는
      </TitleUp>
      <Animation animationData={animation} loop={true} />
      <TitleDown>김성우입니다.</TitleDown>
    </HelloPage>
  );
}

export default Hello;
