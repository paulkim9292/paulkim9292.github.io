import styled from "styled-components";
import Lottie from "lottie-react";
import animation from "../programming-computer.json";

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
`;

const TitleUp = styled.div`
  margin: 1vw 0vw;
`;

const TitleDown = styled.div`
  font-size: 3vw;
`;

function Hello() {
  return (
    <HelloPage id="hello">
      <TitleUp style={{ fontSize: "1.9vw", transform: "rotate(10deg)" }}>
        "왜?"라는 질문을 끊임없이 던지며
      </TitleUp>
      <TitleUp style={{ fontSize: "2.3vw", transform: "rotate(-5deg)" }}>
        코딩이 즐거운
      </TitleUp>
      <TitleUp style={{ fontSize: "2vw", transform: "rotate(5deg)" }}>
        프론트엔드 개발자를 꿈꾸는
      </TitleUp>
      <Lottie animationData={animation} loop={true} style={{ width: "25vw" }} />
      <TitleDown>김성우입니다.</TitleDown>
    </HelloPage>
  );
}

export default Hello;
