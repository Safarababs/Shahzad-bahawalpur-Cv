import React from "react";
import Header from "../pages/Header";
import About from "../pages/About";
import Experience from "../pages/Experience";
import Contact from "../pages/Contact";
import Education from "../pages/Education";
import Home from "../pages/Home";


function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Experience />
      <Education />
     
      <Contact />
      <div style={{textAlign:"center"}}>
      <p style={{ display: "inline" }}>
          © Copyright{" "}
          <p style={{ display: "inline" }}>2022-{new Date().getFullYear()}</p> | all
          rights reserverd by{" "}
          <a
            href="https://safarababs.github.io/safarweb/"
            rel="noreferrer"
            target="_blank"
            style={{  color:"blue", textDecoration:"underline" }}
          >
           shahzad aslam
          </a>
        </p>
      </div>
      
    </>
  );
}

export default App;
