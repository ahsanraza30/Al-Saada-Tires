import React from 'react'
import { FaWhatsapp, FaPhone, FaEnvelope, FaClock, FaArrowRight } from 'react-icons/fa'

export default function Contact({ scrollTo }) {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="tag">Contact Us</div>
        <h2 className="section-title dark">Ready to Upgrade Your Tyres?</h2>
        <p className="section-sub">Visit us, call us, or just send a WhatsApp — we respond fast.</p>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon"><FaPhone /></div>
              <div>
                <strong>Phone</strong>
                <span>+974 6642 4281</span>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon"><FaEnvelope /></div>
              <div>
                <strong>Email</strong>
                <span>awadsadah@gmail.com</span>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon"><FaClock /></div>
              <div>
                <strong>Working Hours</strong>
                <span>Sat – Thu: 8:00 AM – 11:00 PM</span>
              </div>
            </div>

            <div className="contact-btns">
              <a
                href="https://wa.me/97466424281?text=Hello%20Al%20Saada%20Tyres"
                target="_blank"
                rel="noreferrer"
                className="btn-wa"
              >
                <FaWhatsapp /> WhatsApp Now
              </a>
              <button type="button" className="btn-ghost btn-ghost-dark" onClick={() => scrollTo && scrollTo('services')}>
                Book a Service <FaArrowRight />
              </button>
            </div>
          </div>

          <div className="map-wrap">
            <iframe
              title="Al Saada Tyres location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.8!2d51.4617741!3d25.2429298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45db23a1dcb1a1%3A0xf72e838523f3023d!2sAl%20Saada%20Tires!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
