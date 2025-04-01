import "./App.css";
import logo from "./assets/main.png";
import ig from "./assets/ig.png";
import snap from "./assets/snap.png";
import whatsapp from "./assets/whatsapp.png";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

function App() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    console.log("Initializing particles...");
    initParticlesEngine(async (engine) => {
      console.log("Particles engine loaded.");
      await loadFull(engine);
    })
      .then(() => {
        console.log("Particles initialized successfully.");
        setInit(true);
      })
      .catch((err) => console.error("Error loading particles:", err));
  }, []);

  const options = useMemo(
    () => ({
      background: {
        color: { value: "#fff" },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "repulse" },
        },
        modes: {
          push: { quantity: 4 },
          repulse: { distance: 200, duration: 0.4 },
        },
      },
      particles: {
        color: { value: "#000" },
        links: {
          color: "#000",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: { default: "bounce" },
          random: false,
          speed: 6,
          straight: false,
        },
        number: { density: { enable: true }, value: 80 },
        opacity: { value: 0.5 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 5 } },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <>
      {/* Debugging */}
      {console.log("Rendering App Component")}

      {/* Particles Background */}
      <Particles id="tsparticles" options={options} />

      {/* Main Content */}
      <div className="main-box">
        <div className="logo">
          <img src={logo} alt="logo_aunty_adelaja" />
        </div>
        <div className="links">
          <button className="ig">
            <img src={ig} className="social-logo" alt="Instagram" />
            <a
              href="https://www.instagram.com/auntyadelaja_official/"
              target="_blank"
              rel="noopener noreferrer"
            >
              AUNTY ADÉLÀJÀ
            </a>
          </button>
          <button className="snap">
            <img src={snap} className="social-logo" alt="Snapchat" />
            <a
              href="https://www.snapchat.com/add/adelaja_olamide"
              target="_blank"
              rel="noopener noreferrer"
            >
              ADÉLÀJÀ OLAMIDE
            </a>
          </button>
          <button className="wa">
            <img src={whatsapp} className="social-logo" alt="WhatsApp" />
            <a
              href="https://wa.me/09072095067"
              target="_blank"
              rel="noopener noreferrer"
            >
              09072095067
            </a>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
