import { useState, useEffect, useRef } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { FaArrowLeft, FaWhatsapp, FaSearch, FaTimes, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaChevronRight, FaTrophy, FaChevronDown } from 'react-icons/fa'
import brandsData from '../data/tyresData'
import SiteFooter from '../components/SiteFooter'

export default function TyresPage() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const brandFromUrl = searchParams.get('brand') 

  const getInitialBrand = () => {
    if (brandFromUrl) {
      const found = brandsData.find((b) => b.id === brandFromUrl || b.name.toLowerCase() === brandFromUrl)
      if (found) return found.id
    }
    return brandsData[0].id
  }

  const [activeBrand, setActiveBrand] = useState(getInitialBrand)
  const [search, setSearch] = useState('')
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  useEffect(() => {
    if (brandFromUrl) {
      const found = brandsData.find((b) => b.id === brandFromUrl || b.name.toLowerCase() === brandFromUrl)
      if (found) setActiveBrand(found.id)
    }
  }, [brandFromUrl])

  const brand = brandsData.find((b) => b.id === activeBrand)
  const filtered = brand.tyres.filter(
    (t) =>
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.size.toLowerCase().includes(search.toLowerCase())
  )

  const waMsg = (tyre) =>
    `https://wa.me/97466424281?text=Hello%20Al%20Saada%20Tyres%2C%20I%20am%20interested%20in%20${encodeURIComponent(
      brand.name + ' ' + tyre.name + ' ' + tyre.size
    )}`

  return (
    <div className="tp-page">

      {/* ── TOPBAR ── */}
      <header className="tp-topbar">
        <button className="tp-back" onClick={() => navigate('/')}>
          <FaArrowLeft /> <span className="tp-back-text">Back to Home</span>
        </button>
        <div style={{flex:1}} />
        <img src="/continental-nav.png" alt="Al Saada Tyres" className="tp-logo" />
      </header>

      {/* ── HERO STRIP ── */}
      <div className="tp-hero-strip">
        <div className="tp-hero-strip-inner">
          <span className="tp-hero-tag">All Brands · All Sizes</span>
          <h1 className="tp-hero-title">Browse Our Tyre Collection</h1>
          <p className="tp-hero-sub">Select a brand to explore 12 premium tyres with sizes and pricing.</p>
        </div>
      </div>

      {/* ── BRAND SELECTOR ── */}
      <div className="tp-brand-tabs-wrap">
        {/* Desktop — pill grid */}
        <div className="tp-brand-grid">
          {brandsData.map((b) => (
            <button
              key={b.id}
              className={`tp-brand-pill ${activeBrand === b.id ? 'active' : ''}`}
              onClick={() => { setActiveBrand(b.id); setSearch(''); window.scrollTo({ top: 0, behavior: 'instant' }) }}
            >
              {b.name}
            </button>
          ))}
        </div>

        {/* Mobile — custom dropdown */}
        <div className="tp-brand-dropdown-wrap" ref={dropdownRef}>
          <button
            className="tp-brand-dropdown-btn"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <span>{brandsData.find(b => b.id === activeBrand)?.name}</span>
            <FaChevronDown className={`tp-dropdown-arrow ${dropdownOpen ? 'open' : ''}`} />
          </button>
          {dropdownOpen && (
            <ul className="tp-brand-dropdown-list">
              {brandsData.map((b) => (
                <li key={b.id}>
                  <button
                    className={`tp-brand-dropdown-item ${activeBrand === b.id ? 'active' : ''}`}
                    onClick={() => { setActiveBrand(b.id); setSearch(''); setDropdownOpen(false) }}
                  >
                    {activeBrand === b.id && <span className="tp-dropdown-dot" />}
                    {b.name}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* ── MAIN ── */}
      <div className="tp-main">

        {/* Brand info + search row */}
        <div className="tp-content-header">
          <div className="tp-brand-info">
            <h2 className="tp-brand-name">{brand.name} Tyres</h2>
            <p className="tp-brand-desc">{brand.desc}</p>
          </div>
          <div className="tp-search-box">
            <FaSearch className="tp-search-ico" />
            <input
              type="text"
              placeholder="Search name or size..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="tp-search-input"
            />
            {search && (
              <button className="tp-search-clear" onClick={() => setSearch('')}>
                <FaTimes />
              </button>
            )}
          </div>
        </div>

        {/* Count */}
        <p className="tp-count">
          Showing <strong>{filtered.length}</strong> tyres for <strong>{brand.name}</strong>
        </p>

        {/* Grid */}
        <div className="tp-grid">
          {filtered.map((tyre, i) => (
            <article className="tp-card" key={i}>
              <div className="tp-card-img">
                <img src={tyre.image} alt={tyre.name} loading="lazy" />
                <span className="tp-card-brand">{brand.name}</span>
                <span className={`tp-card-stock ${tyre.stock === 'In Stock' ? 'in' : 'low'}`}>
                  {tyre.stock}
                </span>
              </div>
              <div className="tp-card-body">
                <h3 className="tp-card-name">{tyre.name}</h3>
                <p className="tp-card-size">{tyre.size}</p>
                <div className="tp-card-footer">
                  <span className="tp-card-price">{tyre.price}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="tp-empty">
            <span>🔍</span>
            <p>No tyres found for "<strong>{search}</strong>"</p>
            <button onClick={() => setSearch('')}>Clear Search</button>
          </div>
        )}

        {/* ── CTA BUTTONS ── */}
        <div className="tp-cta-row">
          <a
            href={`https://wa.me/97466424281?text=Hello%20Al%20Saada%20Tyres%2C%20I%20want%20to%20enquire%20about%20${encodeURIComponent(brand.name + ' Tyres')}`}
            target="_blank"
            rel="noreferrer"
            className="tp-cta-btn tp-cta-wa"
          >
            <FaWhatsapp />WhatsApp
          </a>
          <a href="tel:+97466424281" className="tp-cta-btn tp-cta-call">
            <FaPhone /> Call Us
          </a>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <SiteFooter />
    </div>
  )
}
