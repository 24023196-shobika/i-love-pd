import "./app.css";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

import UXUI from "./pages/uxui";
import Web from "./pages/web";
import Unity from "./pages/unity";
import Artworks from "./pages/artworks";

function App() {
  const [selected, setSelected] = useState(0);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="menuPage">
            <div className="bgImage"></div>
            <div className="bgShade"></div>

            <div className="uiWrap">
              <div className="topRight">Profile 1</div>

              <div className="titleBlock">
                <div className="titleLogo">YOUR TITLE</div>
                <div className="titleSub">PORTFOLIO MENU</div>
              </div>

              <div className="menuBlock" id="menu">
                <div className="highlight" style={{ top: selected * 56 + "px" }}></div>

                <a className="menuItem" href="#about" onMouseEnter={() => setSelected(0)}>
                  About Me
                </a>

                <a className="menuItem" href="#projects" onMouseEnter={() => setSelected(1)}>
                  My Projects
                </a>

                <a className="menuItem" href="#contact" onMouseEnter={() => setSelected(2)}>
                  Contact Me
                </a>
              </div>

              <div className="bottomHints">
                <div className="hintBox">Back : ESC</div>
                <div className="hintBox">Select : CLICK</div>
              </div>
            </div>

            <div className="sections">
              {/* ABOUT */}
              <section id="about" className="sectionCard">
                <div className="sectionHead">
                  <h2>About Me</h2>
                  <div className="sectionSub">4 photo slots (placeholders)</div>
                </div>

                <div className="photoGrid">
                  <div className="photoBox">PHOTO 1</div>
                  <div className="photoBox">PHOTO 2</div>
                  <div className="photoBox">PHOTO 3</div>
                  <div className="photoBox">PHOTO 4</div>
                </div>

                <p className="sectionText">
                  My name is shobika.
                  i am a student studying digital design and development at singapore polytechnic.
                  i love art and music and have a passion for creating digital experiences.
                  i love gaming and have always been fascinated by game design and development.
                  through my studies, i have gained skills in web development, UX/UI design, and game development using various tools and technologies.
                  i enjoy working on projects that allow me to combine my creativity with technical skills to create engaging and interactive experiences.
                  in my free time, i like to explore new design trends, experiment with digital art, and play video games.
                  i am excited to continue learning and growing as a digital designer and developer.
                </p>
              </section>

              {/* PROJECTS */}
              <section id="projects" className="sectionCard">
                <div className="sectionHead">
                  <h2>My Projects</h2>
                  <div className="sectionSub">Click to open each page</div>
                </div>

                <div className="categoryRow">
                  <Link className="catCard" to="/uxui">
                    <div className="catTop">
                      <div className="catTitle">UX / UI</div>
                      <div className="catTag">Open</div>
                    </div>
                    <div className="catBody">Screens, wireframes, app designs</div>
                  </Link>

                  <Link className="catCard" to="/web">
                    <div className="catTop">
                      <div className="catTitle">WEB and Mobile</div>
                      <div className="catTag">Open</div>
                    </div>
                    <div className="catBody">Websites, React projects, landing pages</div>
                  </Link>

                  <Link className="catCard" to="/unity">
                    <div className="catTop">
                      <div className="catTitle">UNITY</div>
                      <div className="catTag">Open</div>
                    </div>
                    <div className="catBody">Game prototypes, mechanics, demos</div>
                  </Link>

                  <Link className="catCard" to="/artworks">
                    <div className="catTop">
                      <div className="catTitle">ARTWORKS</div>
                      <div className="catTag">Open</div>
                    </div>
                    <div className="catBody">Posters, edits, digital art, design work</div>
                  </Link>
                </div>
              </section>

              {/* CONTACT */}
              <section id="contact" className="sectionCard">
                <div className="sectionHead">
                  <h2>Contact Me</h2>
                  <div className="sectionSub">Phone • Email • Google Docs</div>
                </div>

                <div className="contactGrid">
                  <div className="contactItem">
                    <div className="contactLabel">Phone</div>
                    <div className="contactValue">+65 93570038</div>
                  </div>

                  <div className="contactItem">
                    <div className="contactLabel">Email</div>
                    <div className="contactValue">shobi2946j@gmail.com</div>
                  </div>

                 <a
  className="contactItem linkCard"
  href="https://docs.google.com/forms/d/e/1FAIpQLSc4nPp8DNsf3FS8yCTOB_Tqu_Ji96HfF2YFJwTp-zECgkpgsw/viewform?usp=publish-editor"
  target="_blank"
  rel="noreferrer"
>
  <div className="contactLabel">Google Form</div>
  <div className="contactValue">contact me here</div>
</a>
                </div>
              </section>
            </div>
          </div>
        }
      />

      <Route path="/uxui" element={<UXUI />} />
      <Route path="/web" element={<Web />} />
      <Route path="/unity" element={<Unity />} />
      <Route path="/artworks" element={<Artworks />} />
    </Routes>
  );
}

export default App;
