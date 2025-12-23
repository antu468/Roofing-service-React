import './App.css'
import bg from "./assets/image 13.png"
import logo from "./assets/Frame 3.png"
import pic from "./assets/Group.png"
import pic1 from "./assets/Group (1).png"
import pic2 from "./assets/Vector.png"
import pic3 from "./assets/card2.png"
import pic4 from "./assets/Image.png"
import pic5 from "./assets/Image (1).png"
import pic6 from "./assets/Image (2).png"
import pic7 from "./assets/card1.png"

function App() {
  const companies = [
    "Premier Roofing Solutions",
    "Elite Roof Masters",
    "Reliable Roofing Co.",
    "Summit Roofing Experts",
  ];
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
      <section className="hero">

      </section>

      <section className="about-section">
        <div className="about-container">

          <div className="about-image">
            <img src={pic3} alt="Roofing Work" />
          </div>

          <div className="about-content">
            <span className="badge">● Who We Are ?</span>
            <h2>About RoofFixer</h2>

            <p>
              We're not just another roofing contractor we're a contractor certified by GAF,<br />
              serving both residential and commercial clients with precision, care, and<br />
              unmatched professionalism. Whether you're looking for a minor roof repair, a full<br />
              roof system replacement, or planning a new roofing project, our team is ready to<br />
              help every step of the way.

            </p>

            <p>
              We believe in transparency, honesty, and doing the job right the first time. From<br /> emergency storm response to large-scale <b>commercial roofing installations</b>, we've<br /> built our reputation on integrity and hard work.

            </p>

            <button className="learn-btn">Learn More ↗</button>
          </div>

        </div>
      </section>

      <div className="stats-wrapper">
        <div className="stats">
          <div className="stat top-60px lest-200px">
            <div className="value">10K+</div>
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

      <div className="content">
        <h2 className="text-7xl font-bold leading-tight">Comprehensive Roofing<br /> Services</h2>
        <div className="content-right">
          <h3 className="content-series-title">Services</h3>
          <p className="content-series-text">Infinity Roofer delivers a wide range of services designed to meet the specific needs of homeowners, property managers, and commercial developers.</p>
        </div>
      </div>

      <div className="services-section">
        <div className="service-card">
          <img src={pic4} alt="Roof Inspections" className="card-img" />
          <h4 className="card-title">Roof Inspections</h4>
          <p className="card-desc">A proper inspection is the cornerstone of a<br />
            roofing System. <b>More..</b></p>
          <button className="card-btn">Book Now <span className="btn-arrow">↗</span></button>
        </div>

        <div className="service-card">
          <img src={pic5} alt="Roof Repairs" className="card-img" />
          <h4 className="card-title">Roof Repairs</h4>
          <p className="card-desc">From cracked shingles to minor leaks, our licensed and certified roofing <b>More...</b></p>
          <button className="card-btn primary">Book Now <span className="btn-arrow">↗</span></button>
        </div>

        <div className="service-card">
          <div className="img-wrap">
            <img src={pic6} alt="Roof Replacement" className="card-img" />
            <button className="img-arrow" aria-hidden="true">→</button>
          </div>
          <h4 className="card-title">Roof Replacement</h4>
          <p className="card-desc">If your roof is over 20 years old or has sustained severe damage <b>More...</b></p>
          <button className="card-btn">Book Now <span className="btn-arrow">↗</span></button>
        </div>
      </div>
      <section className="frame">
        <div className="frame-container">

          <div className="frame-media">
            <img src={pic7} alt="Customer Reviews" className="frame-img" />
          </div>

          <div className="frame-content">
            <h2>Why Address Roof Issues <br />Early?</h2>

            <p>
              Waiting to fix your roof can turn a small issue into a full-blown crisis. Here's why early intervention is essential:
            </p>

            <div className="checklist">
              <div className="check-item">
                <span className="check-box">✓</span>
                <div>
                  <h4>Damage compounds over time.</h4>
                  <p>
                    A tiny leak can lead to rot, insulation loss, and foundation problems.
                  </p>
                </div>
              </div>

              <div className="check-item">
                <span className="check-box">✓</span>
                <div>
                  <h4>Insurance complications.</h4>
                  <p>
                    Failing to act may void your policy or limit coverage.
                  </p>
                </div>
              </div>

              <div className="check-item">
                <span className="check-box">✓</span>
                <div>
                  <h4>Higher costs.</h4>
                  <p>
                    Emergency services cost more than routine maintenance.
                  </p>
                </div>
              </div>
            </div>
            <button className="book-btn">Book Now ↗</button>
          </div>
        </div>
      </section>

      <section className="figma-section">
        <h1 className="figma-title">Top-Rated Roofing Companies</h1>
        <p className="figma-subtitle">
          Compare verified contractors with proven track records. All companies
          are licensed, insured, and ready to serve you.
        </p>

        <div className="figma-grid">
          {companies.map((name, i) => (
            <div className="figma-card" key={i}>
              <div className="card-top">
                <h3>{name}</h3>
                <div className="verified">
                  <img src={pic2} alt="Verified Contractors" />
                </div>
              </div>

              <div className="rating">
                ★ <b>4.9</b> <span>(342 reviews)</span>
              </div>

              <div className="details">
                <p>📍 Serving Metro Area</p>
                <p><b>📞 (555) 123-4567</b></p>
                <p>✉️ info@primerroofing.com</p>
                <p>🕒 25 years in business</p>
              </div>

              <div className="chips">
                <h2 className="chips">Specialities:</h2>
                <span>Residential</span>
                <span>Commercial</span>
                <span>Emergency Repairs</span>
              </div>

              <button className={i === 0 ? "cta active" : "cta"}>
                Request Quote from Premier
              </button>
            </div>
          ))}
        </div>

        <div className="show-more-wrapper">
          <button className="show-more-btn">Show More ↗</button>
        </div>

      </section>
    </>
  )
}

export default App
