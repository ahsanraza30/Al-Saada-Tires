import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Products({ products = [] }) {
  const navigate = useNavigate()

  return (
    <section id="featured" className="products-section">
      <div className="container">
        <div className="products-header">
          <div>
            <div className="tag">Featured Tyres</div>
            <h2 className="section-title dark">Top-Selling Tyres</h2>
          </div>
          <p className="section-sub">Handpicked by our experts — best performance, best value.</p>
        </div>

        <div className="products-grid">
          {products.map((p, i) => (
            <article className="product-card" key={i}>
              <div className="product-img">
                <img src={p.image} alt={p.name} loading="lazy" />
                <span className="product-badge">{p.brand}</span>
                <span className="product-stock-badge">{p.stock}</span>
              </div>
              <div className="product-body">
                <div className="product-brand-tag">{p.brand}</div>
                <h3>{p.name}</h3>
                <p className="product-size-tag">{p.size}</p>
                <div className="product-footer">
                  <span className="product-price">{p.price}</span>
                  <button
                    type="button"
                    className="btn-enquire"
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'instant' })
                      navigate(`/tyres?brand=${p.brand.toLowerCase()}`)
                    }}
                  >
                    Enquire
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
