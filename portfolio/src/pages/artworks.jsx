import "../app.css";
import { Link } from "react-router-dom";

function Artworks() {
  return (
    <div className="uxPage">
      <div className="uxTop">
        <Link className="backBtn" to="/">← Back</Link>
      </div>

      <div className="uxCard">
        <div className="uxHeader">
          <div className="uxName">Artworks</div>
          <div className="uxRole">Digital Art • Visual Design</div>
        </div>

        <div className="uxBody">
          <div className="uxLeft">
            <div className="uxImg">ART 1</div>
            <div className="uxImg">ART 2</div>
            <div className="uxImg">ART 3</div>
            <div className="uxImg">ART 4</div>
          </div>

          <div className="uxRight">
            <div className="uxSection">
              <div className="uxSectionTitle">Overview</div>
              <div className="uxText">
                A collection of digital artworks, posters, and creative design
                experiments.
              </div>
            </div>

            <div className="uxSection">
              <div className="uxSectionTitle">Works</div>

              <div className="uxJob">
                <div className="uxJobTitle">Poster Design</div>
                <div className="uxJobMeta">Digital • Visual</div>
                <div className="uxText">
                  Designed posters focusing on color, typography, and layout.
                </div>
              </div>

              <div className="uxJob">
                <div className="uxJobTitle">Creative Edits</div>
                <div className="uxJobMeta">Photoshop • Illustration</div>
                <div className="uxText">
                  Created digital edits and visual compositions.
                </div>
              </div>
            </div>

            <div className="uxSection">
              <div className="uxSectionTitle">Skills</div>

              <div className="uxSkills">
                <div className="uxSkillBox">
                  <div className="uxSkillTitle">Design</div>
                  <div className="uxSkillText">Composition • Color</div>
                </div>

                <div className="uxSkillBox">
                  <div className="uxSkillTitle">Tools</div>
                  <div className="uxSkillText">Photoshop • Canva</div>
                </div>

                <div className="uxSkillBox">
                  <div className="uxSkillTitle">Style</div>
                  <div className="uxSkillText">Digital • Experimental</div>
                </div>

                <div className="uxSkillBox">
                  <div className="uxSkillTitle">Output</div>
                  <div className="uxSkillText">Posters • Edits</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Artworks;
