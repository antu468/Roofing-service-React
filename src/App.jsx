import './App.css'
import bg from "./assets/image 13.png"
import logo from "./assets/Frame 3.png"

function App() {
  return (
    <>
      <div className="bg-1 items-center justify-center flex">
        <img src={bg} alt="background" className="bg-img" />

        <header className="top-frame" role="banner">
          <div className="frame-left">
            <img src={logo} alt="RoofFixer logo" className="logo" />
          </div>

          <nav className="frame-nav" aria-label="Main navigation">
            <a className="nav-item active">Home</a>
            <a className="nav-item">Services</a>
            <a className="nav-item">Companies</a>
            <a className="nav-item">About</a>
            <a className="nav-item">Contacts</a>
            <a className="nav-item">Reviews</a>
          </nav>

          <div className="frame-cta">
            <button className="booking-btn" aria-label="Free Booking">
              <svg className="phone-svg" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.12 1.21.45 2.39.97 3.5a2 2 0 0 1-.45 2.11L9.91 11.09a16 16 0 0 0 6 6l1.76-1.76a2 2 0 0 1 2.11-.45c1.11.52 2.29.85 3.5.97A2 2 0 0 1 22 16.92z" fill="#0B1224"/>
              </svg>
              <span className="btn-text">Free Booking</span>
            </button>
          </div>
        </header>
      </div>
    </>
  )
}

export default App
