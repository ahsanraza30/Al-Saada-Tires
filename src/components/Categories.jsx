import { useNavigate } from 'react-router-dom'
import { FaCar, FaTachometerAlt, FaMountain, FaGem, FaArrowRight } from 'react-icons/fa'

const categories = [
  {
    title: 'Luxury Tyres',
    description: 'Silent, smooth, premium comfort.',
    icon: <FaGem />,
    image: 'c-tesla-1.png',
    brand: 'continental',
  },
  {
    title: 'Sports Tyres',
    description: 'Precision performance at high speed.',
    icon: <FaTachometerAlt />,
    image: 'pzero-1.jpg',
    brand: 'pirelli',
  },
   {
    title: 'SUV Tyres',
    description: 'Grip and stability for every terrain.',
    icon: <FaCar />,
    image: 'suv-1.png',
    brand: 'michelin',
  },
  {
    title: 'Off-Road Tyres',
    description: 'Conquer rough and rocky roads.',
    icon: <FaMountain />,
    image: 'bg-1.jpg',
    brand: 'bridgestone',
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
