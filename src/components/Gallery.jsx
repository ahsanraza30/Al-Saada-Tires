import React from 'react'

export default function Gallery({ items = [] }) {
  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="tag">Gallery</div>
        <h2 className="section-title dark">Real Installs & Workshop Shots</h2>
        <p className="section-sub">See our work in action — quality you can see.</p>

        <div className="gallery-grid">
          {items.slice(0, 5).map((src, i) => (
            <figure className="g-item" key={i}>
              <img src={src} alt={`gallery ${i + 1}`} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
