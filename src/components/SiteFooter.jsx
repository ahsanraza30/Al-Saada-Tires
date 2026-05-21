import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaChevronRight, FaTrophy } from 'react-icons/fa'

export default function SiteFooter() {
  return (
    <footer className="site-footer">

      {/* ── UPPER DARK SECTION ── */}
      <div className="footer-upper">

        {/* ── BRAND ROW ── */}
        <div className="footer-brand-row">
          <img src="/al saada logo.png" alt="Al Saada Tyres" className="footer-logo" />
          <p className="footer-tagline">
            Premium tyres &amp; expert fitment across Qatar.
            Your safety is our priority — every road, every season.
          </p>
          <div style={{display:'flex', flexDirection:'row', flexWrap:'nowrap', gap:'8px', alignItems:'center'}}>
            <span className="footer-badge"><FaTrophy className="footer-badge-ico" /> Trusted Since 2010</span>
            <span className="footer-badge"><FaMapMarkerAlt className="footer-badge-ico" /> Qatar, Doha</span>
          </div>
        </div>

        {/* ── LINKS ROW ── */}
        <div className="footer-links-row">

          <div className="footer-col">
            <h4 className="footer-col-heading"><span className="footer-heading-bar" />Quick Links</h4>
            <nav className="footer-nav">
              {['Home', 'Tyres', 'Services', 'Gallery', 'Contact'].map((item, i) => (
                <a key={i} href={`#${item.toLowerCase()}`} className="footer-nav-link">
                  <FaChevronRight className="footer-nav-ico" />{item}
                </a>
              ))}
            </nav>
          </div>

          <div className="footer-col">
            <h4 className="footer-col-heading"><span className="footer-heading-bar" />Our Brands</h4>
            <nav className="footer-nav">
              {['Michelin', 'Bridgestone', 'Pirelli', 'Continental', 'Yokohama'].map((b, i) => (
                <a key={i} href="#brands" className="footer-nav-link">
                  <FaChevronRight className="footer-nav-ico" />{b}
                </a>
              ))}
            </nav>
          </div>

          <div className="footer-col footer-col-contact">
            <h4 className="footer-col-heading"><span className="footer-heading-bar" />Contact Us</h4>
            <ul className="footer-contact-list">
              <li>
                <div className="footer-contact-icon-wrap"><FaPhone /></div>
                <div>
                  <span className="footer-contact-label">Phone</span>
                  <a href="tel:+97466414281" className="footer-contact-value">+974 6641 4281</a>
                </div>
              </li>
              <li>
                <div className="footer-contact-icon-wrap"><FaEnvelope /></div>
                <div>
                  <span className="footer-contact-label">Email</span>
                  <a href="mailto:awadsadah@gmail.com" className="footer-contact-value">awadsadah@gmail.com</a>
                </div>
              </li>
              <li>
                <div className="footer-contact-icon-wrap"><FaMapMarkerAlt /></div>
                <div>
                  <span className="footer-contact-label">Location</span>
                  <span className="footer-contact-value">Qatar, Doha</span>
                </div>
              </li>
              <li>
                <div className="footer-contact-icon-wrap"><FaClock /></div>
                <div>
                  <span className="footer-contact-label">Hours</span>
                  <span className="footer-contact-value">Sat–Thu · 8AM–11PM</span>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* ── YELLOW BOTTOM BAR ── */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <span className="footer-copy">© 2025 Al Saada Tyres. All rights reserved.</span>
        </div>
      </div>

    </footer>
  )
}
