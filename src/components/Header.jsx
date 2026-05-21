import { useState, useEffect } from 'react'

export default function Header({ menuItems, activeSection, scrollTo }) {
  const [open, setOpen] = useState(false)

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const handleNav = (id) => {
    scrollTo(id)
    setOpen(false)
  }

  return (
    <>
      <header className="topbar">
        <a href="#home" className="brand-logo" onClick={(e) => { e.preventDefault(); handleNav('home') }}>
          <img src="/continental-nav.png" alt="Al Saada Tyres" className="logo-image" />
        </a>

        {/* Desktop nav */}
        <nav className="nav-links">
          {menuItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={activeSection === item.id ? 'active' : ''}
              onClick={() => handleNav(item.id)}
            >
              {item.label}
            </button>
          ))}
          <button type="button" className="nav-cta" onClick={() => handleNav('contact')}>
            Get a Quote
          </button>
        </nav>

        {/* Hamburger button — mobile only, hide when open */}
        <button
          className={`hamburger ${open ? 'hamburger-hidden' : ''}`}
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <span className="ham-line" />
          <span className="ham-line" />
          <span className="ham-line" />
        </button>
      </header>

      {/* Mobile drawer overlay */}
      <div className={`mobile-overlay ${open ? 'visible' : ''}`} onClick={() => setOpen(false)} />

      {/* Mobile drawer — left side */}
      <nav className={`mobile-drawer ${open ? 'is-open' : ''}`}>
        <div className="mobile-drawer-header">
          <img src="/continental-nav.png" alt="Al Saada Tyres" className="mobile-drawer-logo" />
          <button className="mobile-drawer-close" onClick={() => setOpen(false)} aria-label="Close menu">
            ✕
          </button>
        </div>
        <ul className="mobile-nav-list">
          {menuItems.map((item, i) => (
            <li key={item.id} style={{ '--i': i }}>
              <button
                type="button"
                className={`mobile-nav-btn ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => handleNav(item.id)}
              >
                {item.label}
                <span className="mobile-nav-arrow">→</span>
              </button>
            </li>
          ))}
        </ul>
        <div className="mobile-drawer-footer">
          <button
            type="button"
            className="mobile-cta"
            onClick={() => handleNav('contact')}
          >
            Get a Quote
          </button>
          <p className="mobile-drawer-info">+974 6641 4281 · Qatar, Doha</p>
        </div>
      </nav>
    </>
  )
}
