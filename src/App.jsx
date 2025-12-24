import './App.css'
import { useState } from 'react'
import { CheckCircle, ShieldCheck, Home } from 'lucide-react'
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
import pro1 from "./assets/Profile.png"
import pro2 from "./assets/Profile (1).png"
import pro3 from "./assets/Profile (2).png"

function App() {
  const [openFAQ, setOpenFAQ] = useState(0); // 0 means first FAQ is open

  const companies = [
    "Premier Roofing Solutions",
    "Elite Roof Masters",
    "Reliable Roofing Co.",
    "Summit Roofing Experts",
  ];

  const faqs = [
    {
      question: "What's the difference between a contractor certified by GAF and a regular roofer?",
      answer: "A contractor certified by GAF has undergone comprehensive training, adheres to strict installation best practices, and meets ongoing performance standards established by North America's largest roofing manufacturer."
    },
    {
      question: "How long does a typical residential roofing project take?",
      answer: "Simply fill out our online form or call us directly. We'll schedule a free inspection and provide a detailed quote within 24 hours. No hidden fees or obligations – our service is completely free."
    },
    {
      question: "How much does a custom home typically cost?",
      answer: "Yes, all our roofing contractors are fully licensed, insured, and certified by GAF. We only work with verified professionals. Your property is protected with comprehensive insurance coverage."
    },
    {
      question: "How do you find a roofing contractor you can trust?",
      answer: "We serve the entire metro area and surrounding regions. Contact us to check if we service your specific location."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

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

      <section className="testimonial-section">
        {/* TOP BAR */}
        <div className="testimonial-header">
          <div>
            <h2 className="testimonial-title">What Our Clients Say</h2>
            <p className="testimonial-sub">
              Read the success stories and heartfelt testimonials from our valued
              clients. Discover why they chose Estarein for their real estate
              needs.
            </p>
          </div>
          <a href="#" className="view-all">
            View All Testimonials ↗
          </a>
        </div>

        {/* CARDS */}
        <div className="testimonial-cards">
          <TestimonialCard
            title={<b>Exceptional Service!</b>}
            text="I can only say wonderful things about our experience with JD! They are passionate, patient, knowledgeable and incredibly dedicated to their work and their clients."
            name="Wade Warren"
            location="USA, California"
            image={pro1}
          />

          <TestimonialCard
            title={<b>Efficient and Reliable</b>}
            text="We built a beautiful custom home with Jackson Dwellings (The Shed House). We could not be happier. It was built in a"
            name="Emelie Thomson"
            location="USA, Florida"
            image={pro2}
          />

          <TestimonialCard
            title={<b>Trusted Advisors</b>}
            text="JD built our dream country-style home in Gisborne and we couldn't be happier with the result. We received excellent communication throughout the build."
            name="John Mans"
            location="USA, Nevada"
            image={pro3}
          />
        </div>

        {/* FOOTER NAV */}
        <div className="testimonial-footer">
          <span><b>01</b> of 10</span>

          <div className="nav-buttons">
            <button>←</button>
            <div className="nav-buttons1">
              <button>→</button>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <div className="faq-container">
          <div className="faq-header">
            <span className="faq-badge">● FAQ</span>
            <h2>Answers to your<br /> roofing questions</h2>
            <p>Find answers to common questions about Roofing services, property<br /> listings, and the real estate process. We're here to provide clarity and<br /> assist you every step of the way.</p>
          </div>

          <div className="faq-content">
            {faqs.map((faq, index) => (
              <div className="faq-item" key={index}>
                <div className="faq-question" onClick={() => toggleFAQ(index)}>
                  <h3>{faq.question}</h3>
                  <span className="faq-toggle">
                    {openFAQ === index ? '−' : '+'}
                  </span>
                </div>
                {openFAQ === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="main-wrapper">
        <div className="container">

          {/* LEFT SIDE */}
          <div className="left">
            <h1>
              Get Your Free Roofing <br /> Quotes
            </h1>
            <p className="sub-text">
              Fill out the form and receive multiple competitive quotes from verified
              contractors in your area. No obligation, completely free.
            </p>

            <div className="features">
              <Feature
                icon={<CheckCircle size={22} />}
                title="Fast Response Time"
                desc="Receive quotes from multiple contractors within 24 hours"
              />
              <Feature
                icon={<ShieldCheck size={22} />}
                title="Verified Contractors Only"
                desc="All contractors are licensed, insured, and background-checked"
              />
              <Feature
                icon={<Home size={22} />}
                title="No Obligation"
                desc="Compare quotes and choose the best fit for your project"
              />
            </div>

            <div className="why-box">
              <h3>Why Roofing Services</h3>
              <ul>
                <li>●100% Free with no hidden charges</li>
                <li>●All Contractors are licensed and insured</li>
                <li>●No Obligation to accept any quotes</li>
                <li>●Average saving of $1,000 - $1,200</li>
                <li>●24 hours response guarantee</li>
              </ul>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="form-card">
            <h2>Request Your Free Quotes</h2>
            <p className="form-sub">
              Tell us about your roofing project and we'll connect you with the best contractors
            </p>

            <form>
              <div className="row">
                <Input label="First name" placeholder="First name" />
                <Input label="Last name" placeholder="Last name" />
              </div>

              <Input label="Email" placeholder="you@company.com" />
              <Input label="Phone number" placeholder="+1 (555) 000-0000" />

              <div className="input-box">
                <label>Project Type</label>
                <select>
                  <option>Select project type</option>
                  <option>Roof Repair</option>
                  <option>Roof Replacement</option>
                  <option>New Roof</option>
                </select>
              </div>

              <Input label="Property Address" placeholder="123 Main St, City, State ZIP" />

              <div className="input-box">
                <label>Project Details</label>
                <textarea rows="4" placeholder="Tell us more about your roofing needs..." />
              </div>

              <div className="check-row">
                <input type="checkbox" />
                <span>You agree to our friendly privacy policy.</span>
              </div>

              <button type="submit">Get My Free Quotes →</button>
            </form>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-container">

          {/* LOGO & ABOUT */}
          <div className="footer-col logo-col">
            <div className="logo">
              <img src={logo} alt="RoofFixer logo" />
            </div>
            <p>
              Stay updated with our latest Roof Service tips, service updates, and helpful
              articles on maintaining a spotless home.
            </p>
          </div>

          {/* COMPANY */}
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Our Team</li>
            </ul>
          </div>

          {/* KNOW MORE */}
          <div className="footer-col">
            <h4>Know More</h4>
            <ul>
              <li>Support</li>
              <li>Privacy Policy</li>
              <li>Terms & conditions</li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div className="footer-col">
            <h4>Newsletter</h4>
            <div className="newsletter">
              <input type="email" placeholder="Email Goes here" />
            </div>
            <button className="send-btn">Send</button>
            <div className="footer-bottom">
              <p className="newsletter-para" style={{ maxWidth: '1100px', margin: '12px auto 0', borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                2025 “RoofFixer” All Rights Received.
              </p>
            </div>

          </div>

        </div>

      </footer>

    </>
  )
}

function Feature({ icon, title, desc }) {
  return (
    <div className="feature-box">
      <div className="feature-icon">{icon}</div>
      <div>
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
    </div>
  );
}

function Input({ label, placeholder }) {
  return (
    <div className="input-box">
      <label>{label}</label>
      <input type="text" placeholder={placeholder} />
    </div>
  );
}
function TestimonialCard({ title, text, name, location, image }) {
  return (
    <div className="testimonial-card">
      <div className="stars">
        ★ ★ ★ ★ ★
      </div>

      <h3>{title}</h3>
      <p className="review">{text}</p>

      <div className="author">
        <img src={image} alt={name} className="avatar"></img>
        <div>
          <strong>{name}</strong>
          <span>{location}</span>
        </div>
      </div>
    </div>
  );

}

export default App
