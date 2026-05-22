import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsappFloat() {
  return (
    <a
      className="wa-float"
      href="https://wa.me/97466424281?text=Hello%20Al%20Saada%20Tyres"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  )
}
