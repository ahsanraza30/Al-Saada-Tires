import { useState, useEffect } from 'react'
import { FaWhatsapp, FaArrowRight, FaBolt, FaTrophy, FaWrench, FaStar, FaMapMarkerAlt } from 'react-icons/fa'

const slides = [
  {
    image: '/hero.jpg',
    icon: <FaBolt />,
    tag: 'Premium Tyre Shop — Qatar, Doha',
    title1: 'Drive Safe.',
    title2: 'Drive Smart.',
    desc: 'Same-day tyre replacement, expert wheel alignment, and genuine brands. Trusted by 1,200+ drivers across Qatar.',
  },
  {
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1600&q=80',
    icon: <FaTrophy />,
    tag: 'Top Tyre Brands in Qatar',
    title1: 'Premium Tyres.',
    title2: 'Best Prices.',
    desc: 'Michelin, Pirelli, Continental, Bridgestone & more. All genuine, all in stock.',
  },
  {
    image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1600&q=80',
    icon: <FaWrench />,
    tag: 'Expert Fitment Service',
    title1: 'Expert Team.',
    title2: 'Fast Fitment.',
    desc: 'Professional wheel balancing, alignment, and tyre rotation — done right, done fast.',
  },
  {
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1600&q=80',
    icon: <FaStar />,
    tag: '5-Star Rated Service',
    title1: 'Trusted By',
    title2: '1,200+ Drivers.',
    desc: 'Join thousands of satisfied customers who trust Al Saada Tyres for their vehicles.',
  },
  {
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1600&q=80',
    icon: <FaMapMarkerAlt />,
    tag: 'Qatar, Doha',
    title1: 'Your Safety',
    title2: 'Our Priority.',
    desc: 'Open Sat–Thu, 8AM to 11PM. Walk in or WhatsApp us for a quick appointment.',
  },
]

export default function Hero({ scrollTo }) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const t = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length)
    }, 5000)
    return () => clearInterval(t)
  }, [])

  const slide = slides[current]

  return (
    <section id="home" className="hero">

      {/* Background images */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="hero-bg-img"
          style={{
            backgroundImage: `url(${s.image})`,
            opacity: i === current ? 0.38 : 0,
            transition: 'opacity 1s ease',
          }}
        />
      ))}

      <div className="hero-overlay" />

      {/* Content */}
      <div className="hero-content">
        <div className="hero-eyebrow" key={`eyebrow-${current}`}>
          <span className="hero-eyebrow-icon">{slide.icon}</span>
          {slide.tag}
        </div>

        <h1 className="hero-h1" key={`h1-${current}`}>
          {slide.title1}
          <span>{slide.title2}</span>
        </h1>

        <p className="hero-desc" key={`desc-${current}`}>{slide.desc}</p>

        <div className="hero-actions">
          <button type="button" className="btn-fill" onClick={() => scrollTo('categories')}>
            Shop Tyres <FaArrowRight />
          </button>
          <a
            href="https://wa.me/97466414281?text=Hello%20Al%20Saada%20Tyres"
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
          >
            <FaWhatsapp /> WhatsApp Us
          </a>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <strong>1,200<span>+</span></strong>
            <em>Tyres Fitted</em>
          </div>
          <div className="hero-stat">
            <strong>8<span>+</span></strong>
            <em>Top Brands</em>
          </div>
          <div className="hero-stat">
            <strong>24<span>/7</span></strong>
            <em>Support</em>
          </div>
          <div className="hero-stat">
            <strong>5<span>★</span></strong>
            <em>Rated</em>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="hero-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero-dot ${i === current ? 'active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

    </section>
  )
}
