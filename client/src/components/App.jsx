import React, { useEffect } from "react";
import HeroSection from "./HeroSection/HeroSection";
import AboutSection from "./AboutSection/AboutSection";
import ProjectsSection from "./ProjectsSection/ProjectsSection";
import $ from "jquery";

function App() {
  useEffect(() => {
    const width = $(window).width();
    const height = $(window).height();

    if (width < 1290 || height < 990) {
      $(".popUp").show();
    }
  });

  return (
    <>
      <div className="popUp" style={{ display: "none" }}>
        <div>
          <h1>This is a Desktop Site</h1>
          <h4>To view the website properly please view from a desktop.</h4>
        </div>
      </div>
      <div className="video-container">
        <video autoPlay loop muted>
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
