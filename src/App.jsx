import './App.css'
import bg from "./assets/image 13.png"
import logo from "./assets/Frame 3.png"
import pic from "./assets/Group.png"
import pic1 from "./assets/Group (1).png"
import pic2 from "./assets/Vector.png"
import pic3 from "./assets/card2.png"

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
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.12 1.21.45 2.39.97 3.5a2 2 0 0 1-.45 2.11L9.91 11.09a16 16 0 0 0 6 6l1.76-1.76a2 2 0 0 1 2.11-.45c1.11.52 2.29.85 3.5.97A2 2 0 0 1 22 16.92z" fill="#0B1224" />
              </svg>
              <span className="btn-text">Free Booking</span>
            </button>
          </div>
        </header>

        <section className="hero-frame" role="region" aria-label="Hero">
          <div className="hero-content">
            <h1 className="hero-title">Find Your Perfect<br /> Roofing Company<br /> in Seconds</h1>
            <p className="hero-sub">Compare top-rated roofing contractors in your area.Get multiple<br /> quotes,read verified reviews,and make an informed decision all in<br /> one place.</p>

            <div className="hero-ctas">
              <button className="btn btn-primary">Get Free Quotes <span className="arrow">→</span></button>
              <button className="btn btn-outline">Compare Companies</button>
            </div>

            <ul className="hero-features" aria-hidden="true">
              <li><img src={pic} alt="Fast Response" className="dot" />Fast Response</li>
              <li><img src={pic1} alt="Verified Contractors" className="dot" />Verified Contractors</li>
              <li><img src={pic2} alt="Free Services" className="dot" />100% Free Services</li>
            </ul>
          </div>
        </section>
      </div>

      {/* HERO / BACKGROUND SECTION */}
      <section className="hero">
        
      </section>

      {/* ABOUT SECTION (background image er niche) */}
      <section className="about-section">
        <div className="about-container">

          {/* LEFT IMAGE */}
          <div className="about-image">
            <img src={pic3} alt="Roofing Work" />
          </div>

          {/* RIGHT CONTENT */}
          <div className="about-content">
            <span className="badge">● Who We Are ?</span>
            <h2>About RoofFixer</h2>

            <p>
              We're not just another roofing contractor we're a contractor
              certified by GAF, serving both residential and commercial clients
              with precision, care, and unmatched professionalism.
            </p>

            <p>
              Whether you're looking for a minor roof repair, a full roof system
              replacement, or planning a new roofing project, our team is ready
              to help every step of the way.
            </p>

            <button className="learn-btn">Learn More ↗</button>
          </div>

        </div>
      </section>

      <div className="stats-wrapper">
        <div className="stats">
          <div className="stat top-60px lest-200px">
            <div className="value">120K</div>
            <div className="label">Happy Customers</div>
          </div>

          <div className="stat">
            <div className="value">450+</div>
            <div className="label">Verified Contractors</div>
          </div>

          <div className="stat">
            <div className="value">99%</div>
            <div className="label">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
