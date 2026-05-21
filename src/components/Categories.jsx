import { useNavigate } from 'react-router-dom'
import { FaCar, FaTachometerAlt, FaMountain, FaGem, FaArrowRight } from 'react-icons/fa'

const categories = [
  {
    title: 'SUV Tyres',
    description: 'Grip and stability for every terrain.',
    icon: <FaCar />,
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&q=80',
    brand: 'michelin',
  },
  {
    title: 'Sports Tyres',
    description: 'Precision performance at high speed.',
    icon: <FaTachometerAlt />,
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80',
    brand: 'pirelli',
  },
  {
    title: 'Off-Road Tyres',
    description: 'Conquer rough and rocky roads.',
    icon: <FaMountain />,
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
    brand: 'bridgestone',
  },
  {
    title: 'Luxury Tyres',
    description: 'Silent, smooth, premium comfort.',
    icon: <FaGem />,
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=800&q=80',
    brand: 'continental',
  },
]

export default function Categories() {
  const navigate = useNavigate()

  const handleClick = (brand) => {
    navigate(`/tyres?brand=${brand}`)
  }

  return (
    <section id="categories" className="categories-section">
      <div className="container">
        <div className="cat-header">
          <div>
            <div className="tag">Tyre Categories</div>
            <h2 className="section-title dark">Find Your Perfect Tyre</h2>
          </div>
          <p className="section-sub">From SUVs to sports cars — every size, every terrain.</p>
        </div>

        <div className="cat-grid">
          {categories.map((item, i) => (
            <article
              className="cat-card"
              key={item.title}
              onClick={() => handleClick(item.brand)}
              style={{ cursor: 'pointer' }}
            >
              <img className="cat-bg-img" src={item.image} alt={item.title} loading="lazy" />
              <div className="cat-card-bg" />
              <div className="cat-card-num">0{i + 1}</div>
              <div className="cat-card-icon-wrap">{item.icon}</div>
              <div className="cat-card-body">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="cat-card-arrow"><FaArrowRight /></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
