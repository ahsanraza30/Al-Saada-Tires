import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaWhatsapp, FaArrowRight, FaArrowLeft, FaCar, FaTruck, FaShuttleVan,
         FaBolt, FaLeaf, FaShieldAlt, FaCog, FaChevronDown, FaChevronUp,
         FaMapMarkerAlt, FaPhone, FaEnvelope, FaStar } from 'react-icons/fa'
import WhatsappFloat from '../components/WhatsappFloat'
import '../continental.css'

// ── DATA ──────────────────────────────────────────────────────────────

const products = [
  {
    name: 'MaxContact MC6',
    tag: 'Superior dry handling and braking',
    image: 'continental-1.webp',
    type: 'Car',
    desc: 'Designed for excellent dry performance with precise handling and short braking distances.',
  },
  {
    name: 'UltraContact UC6',
    tag: 'For ultimate everyday driving',
    image: 'Continental-2.webp',
    type: 'Car',
    desc: 'A perfect balance of safety, comfort and fuel efficiency for everyday roads.',
  },
  {
    name: 'SportContact 7',
    tag: 'Stick to your dream',
    image: 'continental-3.png',
    type: 'Car',
    desc: 'Maximum performance tyre for sports cars — extreme grip and precision at high speed.',
  },
  {
    name: 'ComfortContact CC6',
    tag: 'A truly comfortable tyre',
    image: 'continental-4.jpg',
    type: 'Car',
    desc: 'Low rolling noise and outstanding comfort for a relaxed driving experience.',
  },
  {
    name: 'CrossContact LX25',
    tag: 'Adventure meets efficiency',
    image: 'continental-6.webp',
    type: 'SUV',
    desc: 'Perfect balance of on-road comfort and all-terrain capability for your SUV.',
  },
  {
    name: 'VanContact 200',
    tag: 'Durability for the long haul',
    image: 'continental-7.webp',
    type: 'Van',
    desc: 'High mileage van tyre with excellent load capacity and all-weather reliability.',
  },
]

const technologies = [
  {
    icon: <FaBolt />,
    title: 'Electric Vehicles',
    desc: 'Continental develops EV-optimised tyres with low rolling resistance and extra load capacity to support the electric revolution.',
    color: '#ffa500',
  },
  {
    icon: <FaLeaf />,
    title: 'Sustainability Future',
    desc: 'Committed to using sustainable materials and reducing CO₂ emissions — building a greener future one tyre at a time.',
    color: '#4ade80',
  },
  {
    icon: <FaCog />,
    title: 'Extended Mobility Solutions',
    desc: 'Run-flat and Self-Supporting Runflat (SSR) technology lets you drive safely even after a puncture — no spare tyre needed.',
    color: '#60a5fa',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Tyre Knowledge & Safety',
    desc: 'Continental educates drivers on proper tyre maintenance, tread depth checks, and seasonal tyre changes to maximise safety.',
    color: '#f472b6',
  },
]

const faqs = [
  {
    q: 'How do I find the right Continental tyre for my vehicle?',
    a: 'Check the tyre size on your vehicle\'s door jamb or owner manual (e.g. 195/55 R15). Then browse our tyre collection or contact our dealers in Qatar.',
  },
  {
    q: 'Are Continental tyres available for electric vehicles?',
    a: 'Yes. Continental offers a full range of EV-optimised tyres including the EcoContact 6 and ContiSportContact series, engineered for the extra weight and torque of EVs.',
  },
  {
    q: 'What is the warranty on Continental tyres in Qatar?',
    a: 'Continental tyres sold through authorised dealers in Qatar come with a manufacturer warranty. Contact your nearest dealer for specific terms.',
  },
  {
    q: 'How often should I replace my tyres?',
    a: 'Tyres should be inspected every year and replaced when tread depth drops below 1.6mm. In Qatar\'s climate, we recommend checking more frequently due to extreme heat.',
  },
  {
    q: 'What is Run-Flat technology?',
    a: 'Run-Flat tyres have reinforced sidewalls that allow you to continue driving at up to 80 km/h for up to 80 km after a puncture — giving you time to reach a service centre safely.',
  },
]

const blogs = [
  {
    date: '26 Feb 2026',
    title: 'UltraContact UC6 Explained: Comfort, Control, and Longevity',
    excerpt: 'Discover why the UltraContact UC6 has become the top choice for everyday drivers across Qatar, combining wet safety with outstanding mileage.',
    image: 'continental-8.jpg',
  },
  {
    date: '27 Nov 2025',
    title: 'Comprehensive Guide to Choosing the Right Tyre for Your Vehicle',
    excerpt: 'From reading tyre sizes to understanding load ratings — everything you need to know before your next tyre purchase.',
    image: 'continental-9.webp',
  },
  {
    date: '15 Aug 2025',
    title: 'The Benefits of Using Eco-Friendly Tyres for Sustainable Mobility',
    excerpt: 'Continental\'s green tyre technology reduces fuel consumption and CO₂ emissions without compromising on performance.',
    image: 'continental-10.jpg',
  },
]

const vehicleTypes = ['Car', 'SUV', 'Van']

// ── COMPONENT ─────────────────────────────────────────────────────────

export default function ContinentalPage() {
  const navigate = useNavigate()
  const [activeVehicle, setActiveVehicle] = useState('Car')
  const [openFaq, setOpenFaq] = useState(null)
  const [activeTech, setActiveTech] = useState(0)

  const filteredProducts = products.filter(p => p.type === activeVehicle)

  const waMsg = (product) =>
    `https://wa.me/97466424281?text=Hello%20Al%20Saada%20Tyres%2C%20I%20am%20interested%20in%20Continental%20${encodeURIComponent(product.name)}`

  return (
    <div className="cp-page">

      {/* ── TOPBAR ── */}
      <header className="cp-topbar">
        <button className="cp-back" onClick={() => navigate('/')}>
          <FaArrowLeft />
          <span>Back to Home</span>
        </button>
        <img src="/continental-nav.png" alt="Continental" className="cp-logo" />
        <a href="https://wa.me/97466424281" target="_blank" rel="noreferrer" className="cp-wa-btn">
          <FaWhatsapp /> WhatsApp
        </a>
      </header>

      {/* ── HERO ── */}
      <section className="cp-hero">
        <div className="cp-hero-bg" />
        <div className="cp-hero-overlay" />
        <div className="cp-hero-content">
          <span className="cp-hero-eyebrow">Official Continental Dealer — Qatar, Doha</span>
          <h1 className="cp-hero-h1">Drive Your<span> Passion.</span></h1>
          <p className="cp-hero-desc">
            Our business is much more than just tyres. Since 1871, Continental has been
            engineering excellence — for every road, every vehicle, every driver.
          </p>

          {/* Tyre finder */}
          <div className="cp-finder">
            <p className="cp-finder-label">I am looking for tyres for:</p>
            <div className="cp-finder-tabs">
              {vehicleTypes.map(v => (
                <button
                  key={v}
                  className={`cp-finder-tab ${activeVehicle === v ? 'active' : ''}`}
                  onClick={() => setActiveVehicle(v)}
                >
                  {v === 'Car' && <FaCar />}
                  {v === 'SUV' && <FaTruck />}
                  {v === 'Van' && <FaShuttleVan />}
                  {v}
                </button>
              ))}
            </div>
            <a href="#products" className="cp-finder-cta">
              See Results <FaArrowRight />
            </a>
          </div>

          <div className="cp-hero-stats">
            <div className="cp-hero-stat"><strong>150+</strong><em>Years of Innovation</em></div>
            <div className="cp-hero-stat"><strong>800+</strong><em>Car Models</em></div>
            <div className="cp-hero-stat"><strong>1/3</strong><em>New Cars Worldwide</em></div>
            <div className="cp-hero-stat"><strong>5★</strong><em>Qatar Rating</em></div>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section id="products" className="cp-products">
        <div className="cp-container">
          <div className="cp-section-header">
            <div>
              <div className="cp-tag">Explore Products</div>
              <h2 className="cp-section-title">Continental Tyre Collection</h2>
            </div>
            <div className="cp-vehicle-tabs">
              {vehicleTypes.map(v => (
                <button
                  key={v}
                  className={`cp-vehicle-tab ${activeVehicle === v ? 'active' : ''}`}
                  onClick={() => setActiveVehicle(v)}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          <div className="cp-products-grid">
            {filteredProducts.map((p, i) => (
              <article className="cp-product-card" key={i}>
                <div className="cp-product-img">
                  <img src={`/${p.image}`} alt={p.name} loading="lazy" />
                  <span className="cp-product-badge">{p.type}</span>
                </div>
                <div className="cp-product-body">
                  <p className="cp-product-tag">{p.tag}</p>
                  <h3 className="cp-product-name">{p.name}</h3>
                  <p className="cp-product-desc">{p.desc}</p>
                  <a href={waMsg(p)} target="_blank" rel="noreferrer" className="cp-enquire-btn">
                    <FaWhatsapp /> Enquire Now
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECHNOLOGY ── */}
      <section className="cp-tech">
        <div className="cp-container">
          <div className="cp-tag cp-tag-light">The Technology</div>
          <h2 className="cp-section-title cp-title-light">Beyond Just Tyres</h2>
          <p className="cp-section-sub">
            Continental works on developing new technologies that improve and enhance tyre performance.
          </p>

          <div className="cp-tech-grid">
            {technologies.map((t, i) => (
              <div
                key={i}
                className={`cp-tech-card ${activeTech === i ? 'active' : ''}`}
                onClick={() => setActiveTech(i)}
              >
                <div className="cp-tech-icon" style={{ color: t.color }}>{t.icon}</div>
                <h3>{t.title}</h3>
                <p>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ORIGINAL EQUIPMENT ── */}
      <section className="cp-oe">
        <div className="cp-container cp-oe-inner">
          <div className="cp-oe-text">
            <div className="cp-tag">Original Equipment</div>
            <h2 className="cp-section-title cp-section-title--dark">Feel What It Means to Be The Family</h2>
            <p className="cp-oe-desc">
              Many cars on the road have Continental parts. Worldwide car manufacturers trust
              our products — Continental tyres are fitted on every third new car in over 800 models.
              No matter what car you have, Continental tyres are reliable and ensure safety.
            </p>
            <a
              href="https://wa.me/97466424281?text=Hello%2C%20I%20need%20Continental%20OE%20tyres"
              target="_blank" rel="noreferrer"
              className="cp-oe-btn"
            >
              <FaWhatsapp /> Ask About OE Tyres
            </a>
          </div>
          <div className="cp-oe-visual">
            <img src="/continental-11.webp" alt="Continental OE" loading="lazy" />
            <div className="cp-oe-badge">
              <strong>1/3</strong>
              <span>New Cars Globally</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="cp-reviews">
        <div className="cp-container">
          <div className="cp-tag">Customer Reviews</div>
          <h2 className="cp-section-title cp-section-title--dark">What Our Customers Say</h2>
          <div className="cp-reviews-grid">
            {[
              { name: 'Nora Al-Qahtani', role: 'Luxury Car Owner', img: '/tes1.jpg', text: 'The SportContact 7 completely transformed my driving. Precise, grippy and quiet.' },
              { name: 'Saif Al-Harbi',   role: 'SUV Owner',        img: '/tes2.jpg', text: 'CrossContact LX25 on my SUV — amazing stability on both highway and rough roads.' },
              { name: 'Omar Al-Shehri',  role: 'Regular Customer', img: '/tes3.jpg', text: 'UltraContact UC6 gives great value. Comfortable ride and excellent wet grip.' },
            ].map((r, i) => (
              <div className="cp-review-card" key={i}>
                <div className="cp-review-stars">{'★'.repeat(5)}</div>
                <p className="cp-review-text">"{r.text}"</p>
                <div className="cp-review-author">
                  <img src={r.img} alt={r.name} className="cp-review-avatar" />
                  <div>
                    <strong>{r.name}</strong>
                    <span>{r.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOGS ── */}
      <section className="cp-blogs">
        <div className="cp-container">
          <div className="cp-section-header">
            <div>
              <div className="cp-tag">Latest News</div>
              <h2 className="cp-section-title cp-section-title--dark">From the Continental Blog</h2>
            </div>
          </div>
          <div className="cp-blogs-grid">
            {blogs.map((b, i) => (
              <article className="cp-blog-card" key={i}>
                <div className="cp-blog-img">
                  <img src={`/${b.image}`} alt={b.title} loading="lazy" />
                  <span className="cp-blog-date">{b.date}</span>
                </div>
                <div className="cp-blog-body">
                  <h3>{b.title}</h3>
                  <p>{b.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="cp-faq">
        <div className="cp-container cp-faq-inner">
          <div className="cp-faq-header">
            <div className="cp-tag cp-tag-light">FAQ</div>
            <h2 className="cp-section-title cp-title-light">We Promise Best Solutions</h2>
          </div>
          <div className="cp-faq-list">
            {faqs.map((f, i) => (
              <div key={i} className={`cp-faq-item ${openFaq === i ? 'open' : ''}`}>
                <button className="cp-faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span>{f.q}</span>
                  {openFaq === i ? <FaChevronUp /> : <FaChevronDown />}
                </button>
                {openFaq === i && <div className="cp-faq-a">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="cp-contact">
        <div className="cp-container">
          <div className="cp-tag">Customer Care</div>
          <h2 className="cp-section-title cp-section-title--dark">Just Ask — We're Here to Help</h2>
          <p className="cp-contact-sub">We are happy to answer all your questions and support you with our tyre expertise.</p>

          <div className="cp-contact-grid">
            <div className="cp-contact-cards">
              <div className="cp-contact-card">
                <FaPhone className="cp-contact-ico" />
                <div>
                  <strong>Phone</strong>
                  <a href="tel:+97466424281">+974 6642 4281</a>
                </div>
              </div>
              <div className="cp-contact-card">
                <FaWhatsapp className="cp-contact-ico" />
                <div>
                  <strong>WhatsApp</strong>
                  <a href="https://wa.me/97466424281" target="_blank" rel="noreferrer">+974 6642 4281</a>
                </div>
              </div>
              <div className="cp-contact-card">
                <FaEnvelope className="cp-contact-ico" />
                <div>
                  <strong>Email</strong>
                  <a href="mailto:awadsadah@gmail.com">awadsadah@gmail.com</a>
                </div>
              </div>
              <div className="cp-contact-card">
                <FaMapMarkerAlt className="cp-contact-ico" />
                <div>
                  <strong>Location</strong>
                  <span>Qatar, Doha</span>
                </div>
              </div>
              <div className="cp-contact-btns">
                <a href="https://wa.me/97466424281?text=Hello%20Continental%20Qatar" target="_blank" rel="noreferrer" className="cp-btn-wa">
                  <FaWhatsapp /> WhatsApp Now
                </a>
              </div>
            </div>
            <div className="cp-map">
              <iframe
                title="Continental Qatar Dealer"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.8!2d51.4617741!3d25.2429298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45db23a1dcb1a1%3A0xf72e838523f3023d!2sAl%20Saada%20Tires!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="cp-footer">
        <div className="cp-footer-inner">
          <div className="cp-footer-brand">
            <img src="/continental-nav.png" alt="Continental" className="cp-footer-logo" />
            <p>Premium Continental tyres available at Al Saada Tyre Shop, Qatar, Doha.</p>
          </div>
          <div className="cp-footer-col">
            <h4>Products</h4>
            <a href="#products">MaxContact MC6</a>
            <a href="#products">UltraContact UC6</a>
            <a href="#products">SportContact 7</a>
            <a href="#products">ComfortContact CC6</a>
            <a href="#products">CrossContact LX25</a>
          </div>
          <div className="cp-footer-col">
            <h4>Quick Links</h4>
            <a href="#products">Tyres</a>
            <a href="#tech">Technology</a>
            <a href="#faq">FAQ</a>
            <a href="#contact">Contact</a>
            <button onClick={() => navigate('/')}>Al Saada Home</button>
          </div>
          <div className="cp-footer-col">
            <h4>Contact</h4>
            <span>+974 6642 4281</span>
            <span>awadsadah@gmail.com</span>
            <span>Qatar, Doha</span>
            <span>Sat–Thu · 8AM–11PM</span>
          </div>
        </div>
        <div className="cp-footer-bottom">
          © 2025 Al Saada Tyres — Authorised Continental Dealer, Qatar. All rights reserved.
        </div>
      </footer>

      <WhatsappFloat />
    </div>
  )
}
