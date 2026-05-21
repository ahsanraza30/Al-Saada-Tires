import React, { useState, useEffect, useCallback } from 'react'
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa'

const reviews = [
  {
    id: 1,
    name: 'Nora Al-Qahtani',       // tes1 = larki
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
  const [dir, setDir] = useState('next')
  const [animating, setAnimating] = useState(false)

  const goTo = useCallback((index, direction = 'next') => {
    if (animating) return
    setDir(direction)
    setAnimating(true)
    setTimeout(() => {
      setCurrent(index)
      setAnimating(false)
    }, 350)
  }, [animating])

  const prev = () => goTo((current - 1 + reviews.length) % reviews.length, 'prev')
  const next = useCallback(() => goTo((current + 1) % reviews.length, 'next'), [current, goTo])

  useEffect(() => {
    const t = setInterval(next, 5500)
    return () => clearInterval(t)
  }, [next])

  const r = reviews[current]

  return (
    <section id="reviews" className="reviews-section">
      <div className="container">
        <div className="tag">Customer Reviews</div>
        <h2 className="section-title dark">What Our Customers Say</h2>
        <p className="section-sub">Real feedback from drivers across Qatar.</p>

        <div className="testimonial-wrap">
          <div className={`testimonial-card ${animating ? `slide-out-${dir}` : `slide-in-${dir}`}`}>

            {/* Left — photo with name overlay */}
            <div className="testimonial-photo-col">
              <div className="testimonial-photo">
                <img src={r.image} alt={r.name} />
                <div className="testimonial-photo-overlay">
                  <strong>{r.name}</strong>
                  <span>{r.role}</span>
                </div>
              </div>
            </div>

            {/* Right — review content */}
            <div className="testimonial-content-col">
              <FaQuoteLeft className="t-quote" />
              <div className="t-stars">{'★'.repeat(r.rating)}</div>
              <p className="t-text">"{r.text}"</p>
              <div className="t-divider" />
              <div className="t-meta">
                <strong>{r.name}</strong>
                <span>{r.role}</span>
              </div>
            </div>
          </div>

          {/* Bottom controls */}
          <div className="testimonial-footer">
            {/* Thumbnails */}
            <div className="t-thumbs">
              {reviews.map((rev, i) => (
                <button
                  key={rev.id}
                  className={`t-thumb ${i === current ? 'active' : ''}`}
                  onClick={() => goTo(i, i > current ? 'next' : 'prev')}
                  aria-label={rev.name}
                >
                  <img src={rev.image} alt={rev.name} />
                </button>
              ))}
            </div>

            {/* Arrows + dots */}
            <div className="t-nav">
              <button className="t-arrow" onClick={prev} aria-label="Previous">
                <FaChevronLeft />
              </button>
              <div className="t-dots">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    className={`t-dot ${i === current ? 'active' : ''}`}
                    onClick={() => goTo(i, i > current ? 'next' : 'prev')}
                  />
                ))}
              </div>
              <button className="t-arrow" onClick={next} aria-label="Next">
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
