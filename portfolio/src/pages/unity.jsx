import "../app.css";
import { Link } from "react-router-dom";

function Unity() {
  return (
    <div className="uxPage">
      <div className="uxTop">
        <Link className="backBtn" to="/">← Back</Link>
      </div>

      <div className="uxCard">
        <div className="uxHeader">
          <div className="uxName">Unity Projects</div>
          <div className="uxRole">Game Development • Prototypes</div>
        </div>

        <div className="uxBody">
          <div className="uxLeft">
            <div className="uxImg">UNITY 1</div>
            <div className="uxImg">UNITY 2</div>
            <div className="uxImg">UNITY 3</div>
            <div className="uxImg">UNITY 4</div>
          </div>

          <div className="uxRight">
            <div className="uxSection">
              <div className="uxSectionTitle">Overview</div>
              <div className="uxText">
                These projects explore game mechanics, interaction, and basic
                gameplay systems built using Unity.
              </div>
            </div>

            <div className="uxSection">
              <div className="uxSectionTitle">Projects</div>

              <div className="uxJob">
                <div className="uxJobTitle">Game Prototype</div>
                <div className="uxJobMeta">Unity • C#</div>
                <div className="uxText">
                  Designed a simple game prototype focusing on player movement
                  and mechanics.
                </div>
              </div>

              <div className="uxJob">
                <div className="uxJobTitle">Interaction Demo</div>
                <div className="uxJobMeta">Physics • UI</div>
                <div className="uxText">
                  Implemented interaction systems and UI elements inside Unity.
                </div>
              </div>
            </div>

            <div className="uxSection">
              <div className="uxSectionTitle">Skills</div>

              <div className="uxSkills">
                <div className="uxSkillBox">
                  <div className="uxSkillTitle">Engine</div>
                  <div className="uxSkillText">Unity</div>
                </div>

                <div className="uxSkillBox">
                  <div className="uxSkillTitle">Programming</div>
                  <div className="uxSkillText">C#</div>
                </div>

                <div className="uxSkillBox">
                  <div className="uxSkillTitle">Gameplay</div>
                  <div className="uxSkillText">Movement • Mechanics</div>
                </div>

                <div className="uxSkillBox">
                  <div className="uxSkillTitle">Design</div>
                  <div className="uxSkillText">Game Flow • UI</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Unity;
