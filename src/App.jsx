import "./App.css";
import logo from "./assets/main.png";
import ig from "./assets/ig.png";
import snap from "./assets/snap.png";
import whatsapp from "./assets/whatsapp.png";
import img from "./assets/laja.jpeg";

function App() {
  return (
    <div className="main-body">
      <div className="card">
        <div className="right">
          <div className="logo">
            <img src={logo} alt="logo" srcset="" />
          </div>
          <div className="text">
            <h1 className="title">
              Aunty Adélàjà – The Essence of Timeless Elegance
            </h1>
            {/* <p className="text">
              Aunty Adélàjà is a luxury fashion house specializing in bespoke,
              bridal, and couture designs. Merging tradition with innovation, we
              craft elegant, tailored pieces with premium fabrics and impeccable
              detail.
            </p>
            <ul>
              <li>
                <b>Couture & Bridal</b> – Exquisite gowns and statement designs
              </li>
              <li>
                <b>Bespoke Creations</b> – Tailored perfection for any occasion
              </li>
              <li>
                <b>Ready-to-Wear</b> – Effortless everyday elegance
              </li>
              <li>
                <b>Luxury Accessories</b> – Finishing touches that elevate your
                style
              </li>
            </ul> */}
            <div className="grid-container">
              <b className="grid-item">Couture & Bridal</b>
              <b className="grid-item">Bespoke Creations</b>
              <b className="grid-item">Ready-to-Wear</b>
              <b className="grid-item">Luxury Accessories</b>
            </div>

            <div className="h2">Our Socials</div>
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
        </div>
      </div>
    </div>
  );
}

export default App;
