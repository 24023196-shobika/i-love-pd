import { useRef } from "react";
import "./App.css";

function App() {
  const nextSectionRef = useRef(null);

  // Scroll to next section when Start button is clicked
  const handleStartClick = () => {
    nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app">
      {/* HERO SECTION */}
      <section className="hero">
        {/* Start button at bottom center */}
        <div className="start-button" onClick={handleStartClick}>
          START
        </div>
      </section>

      {/* NEXT SECTION WITH 2x2 BOXES */}
      <section className="boxes-section" ref={nextSectionRef}>
        <div className="boxes-grid">
          <div className="box">BOX 1 - TEXT HERE</div>
          <div className="box">BOX 2 - TEXT HERE</div>
          <div className="box">BOX 3 - TEXT HERE</div>
          <div className="box">BOX 4 - TEXT HERE</div>
        </div>
      </section>
    </div>
  );
}

export default App;
