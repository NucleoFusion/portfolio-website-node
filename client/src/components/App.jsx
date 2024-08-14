import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import AboutSection from "./AboutSection/AboutSection";
import ProjectsSection from "./ProjectsSection/ProjectsSection";

function App() {
  return (
    <>
      <div className="video-container">
        <video width="1920" height="1080vh" autoPlay loop muted>
          <source
            src="./video/3176015-hd_1920_1080_25fps.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <hr style={{ color: "#abb2bf" }} />
    </>
  );
}

export default App;
