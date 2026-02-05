import "../app.css";
import { Link } from "react-router-dom";

function Web() {
  return (
    <div className="uxPage">
      <div className="uxTop">
        <Link className="backBtn" to="/">← Back</Link>
      </div>

      <div className="uxCard">
        <div className="uxHeader">
          <div className="uxName">Web and Mobile Development</div>
          <div className="uxRole">Frontend • React • Websites</div>
        </div>

        <div className="uxBody">
          <div className="uxLeft">
            <div className="uxImg">WEB 1</div>
            <div className="uxImg">WEB 2</div>
            <div className="uxImg">WEB 3</div>
            <div className="uxImg">WEB 4</div>
          </div>

          <div className="uxRight">
            <div className="uxSection">
              <div className="uxSectionTitle">Overview</div>
              <div className="uxText">
                This section highlights my web development and mobile app projects, focusing on
                responsive design, clean UI, and functional websites.
              </div>
            </div>

            <div className="uxSection">
              <div className="uxSectionTitle">Projects</div>

              <div className="uxJob">
                <div className="uxJobTitle">Website Project</div>
                <div className="uxJobMeta">HTML • CSS • JavaScript</div>
                <div className="uxText">
                  Built responsive websites with clean layouts and interactive
                  components.
                </div>
              </div>

              <div className="uxJob">
                <div className="uxJobTitle">React Application</div>
                <div className="uxJobMeta">React • Components • State</div>
                <div className="uxText">
                  Developed single-page applications using React and reusable
                  components.
                </div>
              </div>
            </div>

            <div className="uxSection">
              <div className="uxSectionTitle">Skills</div>

              <div className="uxSkills">
                <div className="uxSkillBox">
                  <div className="uxSkillTitle">Frontend</div>
                  <div className="uxSkillText">HTML • CSS • JavaScript</div>
                </div>

                <div className="uxSkillBox">
                  <div className="uxSkillTitle">Frameworks</div>
                  <div className="uxSkillText">React • Bootstrap</div>
                </div>

                <div className="uxSkillBox">
                  <div className="uxSkillTitle">Tools</div>
                  <div className="uxSkillText">VS Code • Git</div>
                </div>

                <div className="uxSkillBox">
                  <div className="uxSkillTitle">Concepts</div>
                  <div className="uxSkillText">Responsive Design • UI</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Web;
