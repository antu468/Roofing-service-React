import './App.css'
import { useState, useEffect } from 'react'
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
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const wrapper = document.querySelector('.stats-wrapper');
    if (!wrapper) return;

    const animateValue = (el, target, suffix, duration = 1400) => {
      const start = performance.now();
      const startVal = 0;
      const run = (now) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const current = Math.floor(startVal + (target - startVal) * progress);
        if (suffix === 'K+') {
          
          if (progress < 1) {
            el.textContent = current.toLocaleString();
          } else {
            el.textContent = Math.round(target / 1000) + 'K+';
          }
        } else if (suffix === '%') {
          el.textContent = Math.floor(current) + '%';
        } else if (suffix === '+') {
          el.textContent = Math.floor(current) + '+';
        } else {
          el.textContent = Math.floor(current).toString();
        }

        if (progress < 1) requestAnimationFrame(run);
      };
      requestAnimationFrame(run);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          wrapper.classList.add('in-view');

          const els = wrapper.querySelectorAll('.stat .value');
          els.forEach((el, idx) => {
            const target = parseInt(el.getAttribute('data-target') || '0', 10);
            const suffix = el.getAttribute('data-suffix') || '';
            // stagger start slightly by delaying the animation call
            setTimeout(() => animateValue(el, target, suffix), idx * 120);
          });

          observer.disconnect();
        }
      });
    }, { threshold: 0.25 });
    observer.observe(wrapper);
    return () => observer.disconnect();
  }, []);

  
  useEffect(() => {
    const el = document.getElementById('home');
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          el.classList.add('hero-in');
          obs.disconnect();
        }
      });
    }, { threshold: 0.05 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const [openFAQ, setOpenFAQ] = useState(0);

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


  const [showCompaniesPage, setShowCompaniesPage] = useState(false);
  const moreCompanies = [
    { id: 1, name: 'Atlas Roofing Co.', image: pic3 },
    { id: 2, name: 'GreenTop Contractors', image: pic4 },
    { id: 3, name: 'Metro Roof Masters', image: pic5 },
    { id: 4, name: 'Skyline Commercial', image: pic6 },
    { id: 5, name: 'Precision Roofers', image: pic7 },
    { id: 6, name: 'Everlast Roofing', image: pic2 },
    { id: 7, name: 'Urban Shield Roofing', image: pic },
    { id: 8, name: 'Summit Peak Roofing', image: pic1 },
    { id: 9, name: 'Atlas Roofing Co.', image: pic3 },
    { id: 10, name: 'GreenTop Contractors', image: pic4 },
    { id: 11, name: 'Metro Roof Masters', image: pic5 },
    { id: 12, name: 'Skyline Commercial', image: pic6 },
    { id: 13, name: 'Precision Roofers', image: pic7 },
    { id: 14, name: 'Everlast Roofing', image: pic2 },
    { id: 15, name: 'Urban Shield Roofing', image: pic },
    { id: 16, name: 'Summit Peak Roofing', image: pic1 },
    { id: 17, name: 'Skyline Commercial', image: pic6 },
    { id: 18, name: 'Atlas Roofing Co.', image: pic3 },
  ];


  const [showTestimonialsPage, setShowTestimonialsPage] = useState(false);
  const moreTestimonials = [
    { id: 1, company: 'Premier Roofing Solutions', image: pro1, rating: 4.9, reviews: 342, text: 'Top quality workmanship and fast response.' },
    { id: 2, company: 'Elite Roof Masters', image: pro2, rating: 4.8, reviews: 210, text: 'Very professional and trustworthy.' },
    { id: 3, company: 'Reliable Roofing Co.', image: pro3, rating: 4.7, reviews: 189, text: 'Great communication and fair pricing.' },
    { id: 4, company: 'Summit Roofing Experts', image: pic7, rating: 4.8, reviews: 154, text: 'Handled a large commercial job perfectly.' },
    { id: 5, company: 'Atlas Roofing Co.', image: pic3, rating: 4.6, reviews: 98, text: 'Quality materials and punctual crew.' },
    { id: 6, company: 'GreenTop Contractors', image: pic4, rating: 4.5, reviews: 76, text: 'Responsive and detail-oriented.' },
    { id: 7, company: 'Premier Roofing Solutions', image: pro1, rating: 4.9, reviews: 342, text: 'Top quality workmanship and fast response.' },
    { id: 8, company: 'Elite Roof Masters', image: pro2, rating: 4.8, reviews: 210, text: 'Very professional and trustworthy.' },
    { id: 9, company: 'Reliable Roofing Co.', image: pro3, rating: 4.7, reviews: 189, text: 'Great communication and fair pricing.' },
    { id: 10, company: 'Summit Roofing Experts', image: pic7, rating: 4.8, reviews: 154, text: 'Handled a large commercial job perfectly.' },
    { id: 11, company: 'Atlas Roofing Co.', image: pic3, rating: 4.6, reviews: 98, text: 'Quality materials and punctual crew.' },
    { id: 12, company: 'GreenTop Contractors', image: pic4, rating: 4.5, reviews: 76, text: 'Responsive and detail-oriented.' },
    { id: 13, company: 'Premier Roofing Solutions', image: pro1, rating: 4.9, reviews: 342, text: 'Top quality workmanship and fast response.' },
    { id: 14, company: 'Elite Roof Masters', image: pro2, rating: 4.8, reviews: 210, text: 'Very professional and trustworthy.' },
    { id: 15, company: 'Reliable Roofing Co.', image: pro3, rating: 4.7, reviews: 189, text: 'Great communication and fair pricing.' },
    { id: 16, company: 'Summit Roofing Experts', image: pic7, rating: 4.8, reviews: 154, text: 'Handled a large commercial job perfectly.' },
    { id: 17, company: 'Atlas Roofing Co.', image: pic3, rating: 4.6, reviews: 98, text: 'Quality materials and punctual crew.' },
    { id: 18, company: 'GreenTop Contractors', image: pic4, rating: 4.5, reviews: 76, text: 'Responsive and detail-oriented.' },
  ];

  // Testimonial pagination
  const [testimonialPage, setTestimonialPage] = useState(1);
  const testimonialsPerPage = 3;
  const totalTestimonialPages = 10; // UI shows 1..10 pages
  const nextTestimonialPage = () => setTestimonialPage(p => p === totalTestimonialPages ? 1 : p + 1);
  const prevTestimonialPage = () => setTestimonialPage(p => p === 1 ? totalTestimonialPages : p - 1);


  const scrollToQuoteForm = () => {
    const el = document.getElementById('quote-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      const input = el.querySelector('input');
      if (input) input.focus();
    }
  };

  // additional services to show when the last-image button is clicked
  const [showMoreServices, setShowMoreServices] = useState(false);

  // About details modal
  const [showAboutDetail, setShowAboutDetail] = useState(false);
  const moreServices = [
    { id: 1, name: 'Emergency Roof Repair', img: pic4 },
    { id: 2, name: 'Full Roof Replacement', img: pic5 },
    { id: 3, name: 'Gutter Installation', img: pic6 },
    { id: 4, name: 'Skylight Repair', img: pic7 },
    { id: 5, name: 'Commercial Roofing', img: pic3 },
    { id: 6, name: 'Roof Coating', img: pic2 },
  ];

  // compute current page items for testimonials (wrap if page exceeds data length)
  const getTestimonialPageItems = () => {
    if (!moreTestimonials || moreTestimonials.length === 0) return [];
    const start = ((testimonialPage - 1) * testimonialsPerPage) % moreTestimonials.length;
    const items = [];
    for (let i = 0; i < testimonialsPerPage; i++) {
      items.push(moreTestimonials[(start + i) % moreTestimonials.length]);
    }
    return items;
  };
  const testimonialPageItems = getTestimonialPageItems();

  return (
    <>
      <div id="home" className="bg-1 items-center justify-center flex">
        <img src={bg} alt="background" className="bg-img" />
      

        <header className="top-frame" role="banner">
          <div className="frame-left">
            <img src={logo} alt="RoofFixer logo" className="logo" />
          </div>

          <nav className="frame-nav" aria-label="Main navigation">
            <a href="#home" className="nav-item active" onClick={(e) => handleNavClick(e, 'home')}>Home</a>
            <a href="#services" className="nav-item" onClick={(e) => handleNavClick(e, 'services')}>Services</a>
            <a href="#companies" className="nav-item" onClick={(e) => handleNavClick(e, 'companies')}>Companies</a>
            <a href="#about" className="nav-item" onClick={(e) => handleNavClick(e, 'about')}>About</a>
            <a href="#contacts" className="nav-item" onClick={(e) => handleNavClick(e, 'contacts')}>Contacts</a>
            <a href="#reviews" className="nav-item" onClick={(e) => handleNavClick(e, 'reviews')}>Reviews</a>
          </nav>

          <div className="frame-cta">
            <button data-scroll className="booking-btn" aria-label="Free Booking">
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
              <button data-scroll className="btn btn-primary" onClick={(e) => handleNavClick(e, 'quote-form')}>Get Free Quotes <span className="arrow">→</span></button>
              <button data-scroll className="btn btn-outline" onClick={(e) => handleNavClick(e, 'companies')}>Compare Companies</button>
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

      <section id="about" className="about-section">
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

            <button data-scroll className="learn-btn" onClick={() => setShowAboutDetail(true)}>Learn More ↗</button>
          </div>

        </div>
      </section>

      <div className="stats-wrapper">
        <div className="stats">
          <div className="stat top-60px lest-200px">
            <div className="value" data-target="10000" data-suffix="K+">0</div>
            <div className="label">Happy Customers</div>
          </div>

          <div className="stat">
            <div className="value" data-target="450" data-suffix="+">0</div>
            <div className="label">Verified Contractors</div>
          </div>

          <div className="stat">
            <div className="value" data-target="99" data-suffix="%">0</div>
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

      <div id="services" className="services-section">
        <div className="service-card">
          <img src={pic4} alt="Roof Inspections" className="card-img" />
          <h4 className="card-title">Roof Inspections</h4>
          <p className="card-desc">A proper inspection is the cornerstone of a<br />
            roofing System. <b>More..</b></p>
          <button data-scroll className="card-btn">Book Now <span className="btn-arrow">↗</span></button>
        </div>

        <div className="service-card">
          <img src={pic5} alt="Roof Repairs" className="card-img" />
          <h4 className="card-title">Roof Repairs</h4>
          <p className="card-desc">From cracked shingles to minor leaks, our licensed and certified roofing <b>More...</b></p>
          <button data-scroll className="card-btn primary">Book Now <span className="btn-arrow">↗</span></button>
        </div>

        <div className="service-card">
          <div className="img-wrap">
            <img src={pic6} alt="Roof Replacement" className="card-img" />
            <button className="img-arrow" aria-label="Show more services" onClick={() => setShowMoreServices(true)}>→</button>
          </div>
          <h4 className="card-title">Roof Replacement</h4>
          <p className="card-desc">If your roof is over 20 years old or has sustained severe damage <b>More...</b></p>
          <button data-scroll className="card-btn">Book Now <span className="btn-arrow">↗</span></button>
        </div>
      </div>
      {showMoreServices && (
        <div className="services-modal-overlay" onClick={() => setShowMoreServices(false)}>
          <div className="services-modal" role="dialog" aria-modal="true" aria-label="More services" onClick={(e) => e.stopPropagation()}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12}}>
              <h3 style={{margin:0}}>More Services</h3>
              <button className="card-btn" onClick={() => setShowMoreServices(false)}>Close</button>
            </div>

            <div className="modal-grid">
              {moreServices.map((s) => (
                <div className="modal-service-card" key={s.id}>
                  <img src={s.img} alt={s.name} />
                  <h4>{s.name}</h4>
                  <p className="card-desc">Professional {s.name.toLowerCase()} with certified installers.</p>
                  <button className="card-btn">Book Now <span className="btn-arrow">↗</span></button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {showAboutDetail && (
        <div className="about-modal-overlay" onClick={() => setShowAboutDetail(false)}>
          <div className="about-modal" role="dialog" aria-modal="true" aria-label="About details" onClick={(e) => e.stopPropagation()}>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12}}>
              <h3 style={{margin:0}}>About RoofFixer — Details</h3>
              <button className="card-btn" onClick={() => setShowAboutDetail(false)}>Close</button>
            </div>

            <div style={{lineHeight: 1.6}}>
              <p><strong>Our Mission</strong>: Provide homeowners and businesses with fast, transparent access to vetted roofing contractors so they can make informed decisions.</p>
              <p><strong>Services Overview</strong>: We connect you with contractors for roof inspections, repairs, full replacements, commercial roofing, gutter work, skylights, and emergency services.</p>
              <p><strong>How it works</strong>: Submit your project through our quote form, receive multiple estimates from verified contractors, compare ratings and reviews, then request a booking. Our team verifies licenses and insurance for all partners.</p>
              <p><strong>Why choose us</strong>: Verified contractors, free service, fast response, and a satisfaction guarantee. We prioritize transparency and quality workmanship.</p>

              <h4>Page Sections</h4>
              <ul>
                <li><b>Hero</b> — Quick search & main CTAs</li>
                <li><b>About</b> — Company mission and values</li>
                <li><b>Services</b> — Core and expanded services</li>
                <li><b>Companies</b> — Top-rated contractors and full list</li>
                <li><b>Testimonials</b> — Client reviews and ratings</li>
                <li><b>Quote Form</b> — Request multiple quotes</li>
              </ul>

              <p style={{marginTop:12}}>If you want this content expanded (images, policy links, or team bios), tell me what to include and I will add it.</p>
            </div>
          </div>
        </div>
      )}
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
            <button data-scroll className="book-btn">Book Now ↗</button>
          </div>
        </div>
      </section>

      <section id="companies" className="figma-section">
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

              <button className={i === 0 ? "cta active" : "cta"} onClick={() => { setShowCompaniesPage(false); scrollToQuoteForm(); }}>
                Request Quote from Premier
              </button>
            </div>
          ))}
        </div>

        <div className="show-more-wrapper">
          <button data-scroll className="show-more-btn" onClick={() => setShowCompaniesPage(true)}>Show More ↗</button>
        </div>
      </section>

      {showCompaniesPage && (
        <section className="companies-page">
          <div className="companies-page-inner">
            <header className="companies-page-header">
              <h1>All Companies</h1>
              <div>
                <button className="card-btn" onClick={() => setShowCompaniesPage(false)}>Back</button>
              </div>
            </header>

            <p className="companies-page-sub">Browse more verified roofing companies. Click a card to request a quote.</p>

            <div className="companies-page-grid">
              {moreCompanies.map((c) => (
                <div className="figma-card" key={c.id} style={{display: 'flex', flexDirection: 'column'}}>
                  <div className="card-top">
                    <h3>{c.name}</h3>
                    <div className="verified"><img src={c.image} alt="logo" style={{width:20,height:20,objectFit:'cover'}}/></div>
                  </div>

                  <div className="rating">★ <b>4.8</b> <span>(120 reviews)</span></div>

                  <div className="details">
                    <p>📍 Serving Metro Area</p>
                    <p><b>📞 (555) 000-0000</b></p>
                    <p>✉️ contact@{c.name.replace(/\s+/g,'').toLowerCase()}.com</p>
                    <p>🕒 10+ years in business</p>
                  </div>

                  <div className="chips">
                    <h2 className="chips">Specialities:</h2>
                    <span>Residential</span>
                    <span>Commercial</span>
                    <span>Emergency</span>
                  </div>

                  <button className="cta" onClick={() => { setShowCompaniesPage(false); setTimeout(scrollToQuoteForm, 120); }}>Request Quote</button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section id="reviews" className="testimonial-section">
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
          <a href="#" className="view-all" onClick={(e) => { e.preventDefault(); setShowTestimonialsPage(true); }}>
            View All Testimonials ↗
          </a>
        </div>

        {/* CARDS */}
        <div className="testimonial-cards">
          {testimonialPageItems.map((t, idx) => (
            <TestimonialCard
              key={(t.id || idx) + "-p" + testimonialPage}
              title={<b>{t.company}</b>}
              text={t.text}
              name={t.company}
              location={`${t.rating} • ${t.reviews} reviews`}
              image={t.image}
            />
          ))}
        </div>

        {/* FOOTER NAV */}
        <div className="testimonial-footer">
          <span><b>{testimonialPage.toString().padStart(2, '0')}</b> of {totalTestimonialPages}</span>

          <div className="nav-buttons">
            <button aria-label="Previous testimonials" onClick={prevTestimonialPage}>←</button>
            <div className="nav-buttons1">
              <button aria-label="Next testimonials" onClick={nextTestimonialPage}>→</button>
            </div>
          </div>
        </div>
      </section>

      {showTestimonialsPage && (
        <section className="testimonials-page">
          <div className="testimonials-page-inner">
            <header className="companies-page-header">
              <h1>All Testimonials</h1>
              <div>
                <button className="card-btn" onClick={() => setShowTestimonialsPage(false)}>Back</button>
              </div>
            </header>

            <p className="companies-page-sub">Read more verified reviews and ratings from roofing companies.</p>

            <div className="testimonials-page-grid">
              {moreTestimonials.map((t) => (
                <div key={t.id} className="testimonial-card" style={{display: 'flex', flexDirection: 'column'}}>
                  <div className="stars">★ ★ ★ ★ ★</div>
                  <h3>{t.company}</h3>
                  <p className="review">{t.text}</p>

                  <div className="author" style={{marginTop: 'auto'}}>
                    <img src={t.image} alt={t.company} className="avatar" />
                    <div>
                      <strong>{t.company}</strong>
                      <span>{t.rating} • {t.reviews} reviews</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

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
          <div id="quote-form" className="form-card">
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

      <footer id="contacts" className="footer">
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
