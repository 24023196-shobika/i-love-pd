import "../app.css";
import { Link } from "react-router-dom";

function Unity() {
  return (
    <div className="uxPage">
      <div className="uxTop">
        <Link className="backBtn" to="/">← Back</Link>
      </div>

      <div className="uxCard">
        {/* HEADER */}
        <div className="uxHeader">
          <div className="uxName">Unity Projects</div>
          <div className="uxRole">Game Development • Prototypes</div>
        </div>

        {/* VIDEO AT TOP */}
        <div className="unityVideoTop">
          <video
            className="unityVideo"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/unity-demo.mp4" type="video/mp4" />
          </video>
          <div className="unityVideoCaption">UNITY GAMEPLAY DEMO</div>
        </div>

        {/* CONTENT BELOW */}
        <div className="uxContentBelow">
          <div className="uxSection">
            <div className="uxSectionTitle">Overview</div>
            <div className="uxText">
              These projects explore game mechanics, interaction, and gameplay
              systems built using Unity and C#.
            </div>
          </div>

          <div className="uxSection">
            <div className="uxSectionTitle">Projects</div>

            <div className="uxJob">
              <div className="uxJobTitle">Game Prototype</div>
              <div className="uxJobMeta">Unity • C#</div>
              <div className="uxText">
                Built a playable prototype focusing on movement, physics,
                and player interaction.
              </div>
            </div>

            <div className="uxJob">
              <div className="uxJobTitle">Interaction Demo</div>
              <div className="uxJobMeta">Physics • UI</div>
              <div className="uxText">
                Implemented UI systems and interactive mechanics inside Unity.
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
  );
}

export default Unity;
