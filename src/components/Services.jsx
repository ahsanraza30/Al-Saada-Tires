import React from 'react'
import { FaCog, FaWrench, FaBalanceScale, FaOilCan, FaBatteryFull, FaSyncAlt } from 'react-icons/fa'

const services = [
  {
    icon: <FaCog />,
    name: 'Wheel Alignment',
    desc: 'Precision alignment for safer handling',
    image: 'wheel-alignment.avif',
  },
  {
    icon: <FaWrench />,
    name: 'Tyre Repair',
    desc: 'Fast puncture repair & patching',
    image: 'tyre-repair.png',
  },
  {
    icon: <FaBalanceScale />,
    name: 'Balancing',
    desc: 'Smooth ride, zero vibration',
    image: 'wheel-balancing.jpg',
  },
  {
    icon: <FaOilCan />,
    name: 'Oil Change',
    desc: 'Full synthetic & conventional oils',
    image: 'oil-change.webp',
  },
  {
    icon: <FaBatteryFull />,
    name: 'Battery Service',
    desc: 'Test, replace & install batteries',
    image: 'battery.webp',
  },
  {
    icon: <FaSyncAlt />,
    name: 'Tyre Rotation',
    desc: 'Extend tyre life with regular rotation',
    image: 'rotate.jpg',
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
