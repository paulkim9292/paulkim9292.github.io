import styled from "styled-components";

const HelloPage = styled.section`
  height: 150vh;
  padding-left: 8.7vw;
`;

function Hello() {
  return (
    <HelloPage id="hello">프론트엔드 개발자를 꿈꾸는 김성우입니다</HelloPage>
  );
}

export default Hello;
