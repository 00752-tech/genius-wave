'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'

export function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-4 right-4 z-50 transition-all duration-300 ${isScrolled ? 'scale-100' : 'scale-0'}`}>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-all duration-300"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </Button>
      {isOpen && (
        <div className="absolute top-16 right-0 bg-white rounded-lg shadow-xl p-4 min-w-[200px]">
          <ul className="space-y-2">
            <li><a href="#home" className="block py-2 px-4 hover:bg-blue-100 rounded transition-colors duration-200">Home</a></li>
            <li><a href="#features" className="block py-2 px-4 hover:bg-blue-100 rounded transition-colors duration-200">Features</a></li>
            <li><a href="#benefits" className="block py-2 px-4 hover:bg-blue-100 rounded transition-colors duration-200">Benefits</a></li>
            <li><a href="#testimonials" className="block py-2 px-4 hover:bg-blue-100 rounded transition-colors duration-200">Testimonials</a></li>
          </ul>
        </div>
      )}
    </nav>
  )
}

