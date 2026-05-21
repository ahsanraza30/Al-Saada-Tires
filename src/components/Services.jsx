import React from 'react'
import { FaCog, FaWrench, FaBalanceScale, FaOilCan, FaBatteryFull, FaSyncAlt } from 'react-icons/fa'

const services = [
  {
    icon: <FaCog />,
    name: 'Wheel Alignment',
    desc: 'Precision alignment for safer handling',
    image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: <FaWrench />,
    name: 'Tyre Repair',
    desc: 'Fast puncture repair & patching',
    image: 'https://images.pexels.com/photos/4489732/pexels-photo-4489732.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: <FaBalanceScale />,
    name: 'Balancing',
    desc: 'Smooth ride, zero vibration',
    image: 'https://images.pexels.com/photos/3807386/pexels-photo-3807386.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: <FaOilCan />,
    name: 'Oil Change',
    desc: 'Full synthetic & conventional oils',
    image: 'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: <FaBatteryFull />,
    name: 'Battery Service',
    desc: 'Test, replace & install batteries',
    image: 'https://images.pexels.com/photos/3807256/pexels-photo-3807256.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: <FaSyncAlt />,
    name: 'Tyre Rotation',
    desc: 'Extend tyre life with regular rotation',
    image: 'https://images.pexels.com/photos/4489765/pexels-photo-4489765.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
]

export default function Services() {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="tag">Our Services</div>
        <h2 className="section-title dark">Full Care for Your Vehicle</h2>
        <p className="section-sub">From alignment to battery — everything under one roof.</p>

        <div className="services-grid">
          {services.map((s) => (
            <article className="service-card" key={s.name}>
              <div className="service-img-wrap">
                <img src={s.image} alt={s.name} loading="lazy" />
                <div className="service-img-overlay" />
                <div className="service-img-icon">{s.icon}</div>
              </div>
              <div className="service-body">
                <h3>{s.name}</h3>
                <p>{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
