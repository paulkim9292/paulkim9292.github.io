# 포트폴리오 웹사이트

React JS로 만든 반응형 포트폴리오 웹사이트입니다.

https://paulkim9292.github.io/

## 개발환경

<p>
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
<img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white">
<img src="https://img.shields.io/badge/Styled-Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
</p>

## 사용한 기술

- 쇼핑몰 프로젝트를 진행하며 module.css의 단점들이 눈에 들어오기 시작했고 그 결과 포트폴리오에는 styled components (CSS in JS) 사용
- react-router의 HashLink를 이용한 컴포넌트간 이동
- useMediaQuery hook을 이용한 반응형 디자인

## 구조

```
paulkim9292.github.io
├─public
│ ├─assets                      # 프로젝트 페이지에 들어갈 png 파일들
│ │     ├─...
│ ├─favicon
│ │     ├─...
│ ├─index.html
│ ├─manifest.json
├─src
│ ├─components
│ │     ├─About.jsx
│ │     ├─Hello.jsx
│ │     ├─NavBar.jsx
│ │     ├─Projects.jsx
│ │     ├─Skills.jsx
│ ├─data
│ │     ├─projectsData.jsx      # 프로젝트 array 변수
│ ├─App.css
│ ├─App.jsx
│ ├─index.js
│ ├─programming-computer.json   # Hello 페이지에 들어가는 애니메이션
├─.gitignore
├─README.md
├─package-lock.json
├─package.json
```
