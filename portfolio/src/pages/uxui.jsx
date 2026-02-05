import "../app.css";
import { Link } from "react-router-dom";

function UXUI() {
  return (
    <div className="uxPage">
      <div className="uxTop">
        <Link className="backBtn" to="/">← Back</Link>
      </div>

      <div className="uxCard">
        {/* Header */}
        <div className="uxHeader">
          <div className="uxName">YOUR NAME</div>
          <div className="uxRole">UX/UI Designer • Product Design</div>
        </div>

        {/* Body */}
        <div className="uxBody">
          {/* Left image strip */}
          <div className="uxLeft">
            <div className="uxImg">PHOTO 1</div>
            <div className="uxImg">PHOTO 2</div>
            <div className="uxImg">PHOTO 3</div>
            <div className="uxImg">PHOTO 4</div>
          </div>

          {/* Right content */}
          <div className="uxRight">
            <div className="uxSection">
              <div className="uxSectionTitle">Professional Profile</div>
              <div className="uxText">
                Write a short profile about your UX/UI journey here. Mention your strengths,
                what you enjoy designing, and what kind of work you want.
              </div>
            </div>

            <div className="uxSection">
              <div className="uxSectionTitle">Experience</div>

              <div className="uxJob">
                <div className="uxJobTitle">UX/UI Project – (Project Name)</div>
                <div className="uxJobMeta">2024 – Present</div>
                <div className="uxText">
                  Describe what you designed, your process (research → wireframe → UI),
                  and the outcome. Add tools you used too.
                </div>
              </div>

              <div className="uxJob">
                <div className="uxJobTitle">Design Case Study – (Project Name)</div>
                <div className="uxJobMeta">2023 – 2024</div>
                <div className="uxText">
                  Explain the problem, your solution, and what you learned.
                </div>
              </div>
            </div>

            <div className="uxSection">
              <div className="uxSectionTitle">Skills</div>

              <div className="uxSkills">
                <div className="uxSkillBox">
                  <div className="uxSkillTitle">Design</div>
                  <div className="uxSkillText">Wireframes • UI Design • Prototyping</div>
                </div>

                <div className="uxSkillBox">
                  <div className="uxSkillTitle">Tools</div>
                  <div className="uxSkillText">Figma • Adobe XD • Canva</div>
                </div>

                <div className="uxSkillBox">
                  <div className="uxSkillTitle">Research</div>
                  <div className="uxSkillText">User flows • Heuristics • Testing</div>
                </div>

                <div className="uxSkillBox">
                  <div className="uxSkillTitle">Other</div>
                  <div className="uxSkillText">Presentation • Teamwork • Documentation</div>
                </div>
              </div>
            </div>

            
            </div>
          </div>
        </div>
      </div>
  );
}

export default UXUI;
