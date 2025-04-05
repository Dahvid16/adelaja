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
            <div className="grid-container">
              <button
                className="ig grid-item"
                onClick={() =>
                  (window.location.href =
                    "https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fauntyadelaja_official%2F&is_from_rle")
                }
              >
                <img src={ig} className="social-logo" alt="Instagram" />
              </button>
              <button
                className="snap grid-item"
                onClick={() =>
                  (window.location.href =
                    "https://www.snapchat.com/add/adelaja_olamide")
                }
              >
                <img src={snap} className="social-logo" alt="Snapchat" />
              </button>

              <button
                className="wa grid-item"
                onClick={() =>
                  (window.location.href =
                    "https://api.whatsapp.com/send/?phone=09072095067&text&type=phone_number&app_absent=0")
                }
              >
                <img src={whatsapp} className="social-logo" alt="WhatsApp" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="left">
        <h1 className="titles">The Essence of Timeless Elegance</h1>
      </div>
      <img className="f-img" src={logo} />
    </div>
  );
}

export default App;
