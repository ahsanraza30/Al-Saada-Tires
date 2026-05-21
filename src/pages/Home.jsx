import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Brands from '../components/Brands'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Services from '../components/Services'
import Reviews from '../components/Reviews'
import Gallery from '../components/Gallery'
import Contact from '../components/Contact'
import SiteFooter from '../components/SiteFooter'
import WhatsappFloat from '../components/WhatsappFloat'

const menuItems = [
  { id: 'home',       label: 'Home' },
  { id: 'categories', label: 'Tyres' },
  { id: 'services',   label: 'Services' },
  { id: 'reviews',    label: 'Reviews' },
  { id: 'gallery',    label: 'Gallery' },
  { id: 'contact',    label: 'Contact' },
]

const products = [
  {
    name: 'RXL Trail Sport', size: '245/45 R19', brand: 'Pirelli',
    price: 'QAR 1,850', stock: 'In Stock',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'ProGrip Max', size: '265/60 R18', brand: 'Michelin',
    price: 'QAR 2,050', stock: 'Low Stock',
    image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'RoadMaster X', size: '275/40 R20', brand: 'Continental',
    price: 'QAR 1,990', stock: 'In Stock',
    image: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=800&q=80',
  },
  {
    name: 'GripForce GT', size: '305/35 R21', brand: 'Bridgestone',
    price: 'QAR 2,320', stock: 'In Stock',
    image: 'https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=800&q=80',
  },
]

const reviews = [
  { id: 1, name: 'Saif Al-Harbi',     rating: 5, text: 'Great pricing and fast fitment. My SUV feels more stable than ever. Highly recommend!' },
  { id: 2, name: 'Fatima Al-Mutairi', rating: 5, text: 'Professional team, honest advice, and the tyres look amazing on my car. Will come back.' },
  { id: 3, name: 'Omar Al-Shehri',    rating: 5, text: 'Quick service and genuine products. Al Saada Tyres is the best shop in Riyadh.' },
]

const galleryItems = [
  '/hero.jpg',
  'https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=900&q=80',
]

export default function Home() {
  const [loaded, setLoaded] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 500)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const ids = menuItems.map((m) => m.id)
    const onScroll = () => {
      const y = window.scrollY + 100
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id)
        if (el && y >= el.offsetTop) { setActiveSection(id); break }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <div className={`page-loader ${loaded ? 'hidden' : ''}`}>
        <div className="loader-ring" />
        <div className="loader-label">Al Saada Tyres</div>
      </div>

      <Header menuItems={menuItems} activeSection={activeSection} scrollTo={scrollTo} />

      <main className="site-main">
        <Hero scrollTo={scrollTo} />
        <Brands />
        <Categories />
        <Products products={products} />
        <Services />
        <Reviews />
        <Gallery items={galleryItems} />
        <Contact scrollTo={scrollTo} />
      </main>

      <SiteFooter />
      <WhatsappFloat />
    </>
  )
}
