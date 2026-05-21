import React from 'react'

const brands = [
  { name: 'Michelin',    logo: '/micheline-logo.png' },
  { name: 'Bridgestone', logo: 'bridgestone.png' },
  { name: 'Pirelli',     logo: 'pirelli-logo.png' },
  { name: 'Continental', logo: '/continental.png' },
  { name: 'Yokohama',    logo: 'yokohama.png' },
  { name: 'Dunlop',      logo: 'dunlop.png' },
  { name: 'Goodyear',    logo: 'goodyear.png' },
  { name: 'Hankook',     logo: 'hankook.png' },
]

export default function Brands() {
  const doubled = [...brands, ...brands, ...brands]
  return (
    <section id="brands" className="brands-strip">
      <div className="brands-track">
        {doubled.map((b, i) => (
          <div className="brand-item" key={i}>
            <img
              src={b.logo}
              alt={b.name}
              className="brand-logo-img"
              onError={(e) => {
                e.target.style.display = 'none'
                e.target.parentElement.querySelector('.brand-name-text').style.display = 'block'
              }}
            />
            <span className="brand-name-text" style={{ display: 'none' }}>{b.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
