import { useState, useEffect, useRef } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { FaArrowLeft, FaWhatsapp, FaSearch, FaTimes, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaChevronRight, FaTrophy, FaChevronDown, FaExpand } from 'react-icons/fa'
import brandsData from '../data/tyresData'
import SiteFooter from '../components/SiteFooter'

// ── Lightbox Component ──
function Lightbox({ src, alt, name, size, price, brandName, stock, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const waLink = `https://wa.me/97466424281?text=Hello%20Al%20Saada%20Tyres%2C%20I%20am%20interested%20in%20${encodeURIComponent(brandName + ' ' + name + ' ' + size)}`
  const isInStock = stock === 'In Stock'

  return (
    <div className="lb-overlay" onClick={onClose}>
      {/* Ambient blurred bg */}
      <div className="lb-ambient" style={{ backgroundImage: `url(${src})` }} />

      {/* Modal */}
      <div className="lb-modal" onClick={e => e.stopPropagation()}>

        {/* ── LEFT: full image panel ── */}
        <div className="lb-panel-img">
          {/* floating brand watermark */}
          <span className="lb-watermark">{brandName}</span>
          {/* image */}
          <img src={src} alt={alt} className="lb-photo" />
          {/* rolling shadow */}
          <div className="lb-tyre-shadow" />
          {/* bottom gradient */}
          <div className="lb-panel-gradient" />
          {/* bottom label */}
          <div className="lb-panel-label">
            <span className="lb-panel-name">{name}</span>
            <span className="lb-panel-size">{size}</span>
          </div>
        </div>

        {/* ── RIGHT: details panel ── */}
        <div className="lb-panel-info">

          {/* top: close btn */}
          <div className="lb-info-top">
            <div className={`lb-stock-pill ${isInStock ? 'pill-in' : 'pill-low'}`}>
              <span className="lb-pill-dot" />
              {stock}
            </div>
            <button className="lb-close-btn" onClick={onClose} aria-label="Close">
              <FaTimes />
            </button>
          </div>

          {/* main content */}
          <div className="lb-info-body">
            <p className="lb-info-brand">{brandName}</p>
            <h2 className="lb-info-title">{name}</h2>

            {/* spec row */}
            <div className="lb-spec-row">
              <div className="lb-spec-item">
                <span className="lb-spec-label">SIZE</span>
                <span className="lb-spec-val">{size}</span>
              </div>
              <div className="lb-spec-sep" />
              <div className="lb-spec-item">
                <span className="lb-spec-label">TYPE</span>
                <span className="lb-spec-val">Premium</span>
              </div>
              <div className="lb-spec-sep" />
              <div className="lb-spec-item">
                <span className="lb-spec-label">ORIGIN</span>
                <span className="lb-spec-val">Original</span>
              </div>
            </div>

            {/* price */}
            <div className="lb-price-section">
              <span className="lb-price-lbl">PRICE</span>
              <div className="lb-price-wrap">
                <span className="lb-price-main">{price}</span>
              </div>
            </div>
          </div>

          {/* actions */}
          <div className="lb-info-actions">
            <a href={waLink} target="_blank" rel="noreferrer" className="lb-action-wa">
              <FaWhatsapp />
              <span>Order on WhatsApp</span>
            </a>
            <a href="tel:+97466424281" className="lb-action-call">
              <FaPhone />
            </a>
          </div>

          {/* esc hint */}
          <p className="lb-esc-hint">Press <kbd>ESC</kbd> to close</p>
        </div>

      </div>
    </div>
  )
}

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
  const [lightbox, setLightbox] = useState(null) // { src, alt }
  const dropdownRef = useRef(null)

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
        <button className="tp-back" onClick={() => navigate('/')} aria-label="Back to Home">
          <FaArrowLeft />
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
              <div
                className="tp-card-img tp-card-img-clickable"
                onClick={() => setLightbox({ src: tyre.image, alt: tyre.name, name: tyre.name, size: tyre.size, price: tyre.price, brandName: brand.name, stock: tyre.stock })}
                title="Click to view image"
              >
                <img src={tyre.image} alt={tyre.name} loading="lazy" />
                <span className="tp-card-brand">{brand.name}</span>
                <span className={`tp-card-stock ${tyre.stock === 'In Stock' ? 'in' : 'low'}`}>
                  {tyre.stock}
                </span>
                <span className="tp-card-zoom-hint"><FaExpand /></span>
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

      {/* ── LIGHTBOX ── */}
      {lightbox && (
        <Lightbox
          src={lightbox.src}
          alt={lightbox.alt}
          name={lightbox.name}
          size={lightbox.size}
          price={lightbox.price}
          brandName={lightbox.brandName}
          stock={lightbox.stock}
          onClose={() => setLightbox(null)}
        />
      )}
    </div>
  )
}
