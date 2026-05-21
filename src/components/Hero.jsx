import React from 'react'
import { FaWhatsapp, FaArrowRight } from 'react-icons/fa'

export default function Hero({ scrollTo }) {
  return (
    <section id="home" className="hero">
      <div className="hero-bg-img" />
      <div className="hero-overlay" />

      <div className="hero-content">
        <div className="hero-eyebrow">⚡ Premium Tyre Shop — Qatar, Doha</div>

        <h1 className="hero-h1">
          Drive Safe.
          <span>Drive Smart.</span>
        </h1>

        <p className="hero-desc">
          Same-day tyre replacement, expert wheel alignment, and genuine brands.
          Trusted by 1,200+ drivers across Qatar.
        </p>

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
    </section>
  )
}
