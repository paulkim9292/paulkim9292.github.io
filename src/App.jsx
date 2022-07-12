import React from "react";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Hello from "./components/Hello";
import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <Hello />
      <About />
      <Skills />
      <Projects />
      <div className="footer">Designed & Built by Sungwoo Kim</div>
    </div>
  );
}

export default App;
