import React, { useState, useEffect, useCallback } from 'react'
import { FaChevronLeft, FaChevronRight, FaStar, FaQuoteRight } from 'react-icons/fa'

const reviews = [
  {
    id: 1,
    name: 'Nora Al-Qahtani',
    role: 'Luxury Car Owner',
    image: '/tes1.jpg',
    rating: 5,
    text: 'Excellent service! They recommended the perfect luxury tyres for my car. Smooth and quiet ride now. Highly recommend!',
  },
  {
    id: 2,
    name: 'Saif Al-Harbi',
    role: 'SUV Owner',
    image: '/tes2.jpg',
    rating: 5,
    text: 'Great pricing and fast fitment. My SUV feels more stable than ever. The team was professional and quick.',
  },
  {
    id: 3,
    name: 'Omar Al-Shehri',
    role: 'Regular Customer',
    image: '/tes3.jpg',
    rating: 5,
    text: 'Quick service and genuine products. Al Saada Tyres is the best tyre shop in Qatar. Will always come back.',
  },
  {
    id: 4,
    name: 'Khalid Al-Dosari',
    role: 'Truck Owner',
    image: '/tes4.jpg',
    rating: 5,
    text: 'They fitted heavy-duty tyres on my truck perfectly. Very knowledgeable staff and very fair prices.',
  },
  {
    id: 5,
    name: 'Ahmed Al-Rashidi',
    role: 'Off-Road Enthusiast',
    image: '/tes5.png',
    rating: 5,
    text: 'Got my off-road tyres fitted here. The team really knows their stuff. Fast, clean, and professional work.',
  },
  {
    id: 6,
    name: 'Faisal Al-Mutairi',
    role: 'Verified Customer',
    image: '/tes6.webp',
    rating: 5,
    text: 'Amazing experience from start to finish. Best tyre prices in Doha and the installation was perfect.',
  },
]

export default function Reviews() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [dir, setDir] = useState('next')

  const goTo = useCallback((index, direction = 'next') => {
    if (animating) return
    setDir(direction)
    setAnimating(true)
    setTimeout(() => { setCurrent(index); setAnimating(false) }, 400)
  }, [animating])

  const prev = () => goTo((current - 1 + reviews.length) % reviews.length, 'prev')
  const next = useCallback(() => goTo((current + 1) % reviews.length, 'next'), [current, goTo])

  useEffect(() => {
    const t = setInterval(next, 5500)
    return () => clearInterval(t)
  }, [next])

  const r = reviews[current]

  return (
    <section id="reviews" className="rv-section">

      {/* ── BG image — full bleed ── */}
      <div
        className={`rv-bg ${animating ? 'rv-bg-out' : 'rv-bg-in'}`}
        style={{ backgroundImage: `url(${r.image})` }}
      />
      <div className="rv-bg-overlay" />

      <div className="rv-inner">

        {/* ── Header ── */}
        <div className="rv-header">
          <span className="rv-tag">Customer Reviews</span>
          <h2 className="rv-title">What Our Customers Say</h2>
        </div>

        {/* ── Main card ── */}
        <div className={`rv-card ${animating ? `rv-out-${dir}` : `rv-in-${dir}`}`}>

          {/* Avatar */}
          <div className="rv-avatar-wrap">
            <div className="rv-avatar">
              <img src={r.image} alt={r.name} />
            </div>
            <div className="rv-avatar-ring" />
          </div>

          {/* Content */}
          <div className="rv-body">
            {/* Stars */}
            <div className="rv-stars">
              {Array.from({ length: r.rating }).map((_, i) => (
                <FaStar key={i} className="rv-star" />
              ))}
            </div>

            {/* Quote icon */}
            <FaQuoteRight className="rv-quote-icon" />

            {/* Text */}
            <p className="rv-text">{r.text}</p>

            {/* Author */}
            <div className="rv-author">
              <span className="rv-author-name">{r.name}</span>
              <span className="rv-author-role">{r.role}</span>
            </div>
          </div>
        </div>

        {/* ── Controls ── */}
        <div className="rv-controls">

          {/* Thumbnails */}
          <div className="rv-thumbs">
            {reviews.map((rev, i) => (
              <button
                key={rev.id}
                className={`rv-thumb ${i === current ? 'active' : ''}`}
                onClick={() => goTo(i, i > current ? 'next' : 'prev')}
                aria-label={rev.name}
              >
                <img src={rev.image} alt={rev.name} />
              </button>
            ))}
          </div>

          {/* Arrows */}
          <div className="rv-arrows">
            <button className="rv-arrow" onClick={prev} aria-label="Previous">
              <FaChevronLeft />
            </button>
            <span className="rv-counter">{current + 1} / {reviews.length}</span>
            <button className="rv-arrow" onClick={next} aria-label="Next">
              <FaChevronRight />
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}
