'use client'

import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="w-full max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - Top Left Corner */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center">
              <img
                src="/avixrlogo.png"
                alt="AVIXR Logo"
                className="cursor-pointer"
                style={{
                  height: '48px',
                  width: 'auto',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
              Home
            </a>
            <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
              About
            </a>
            <a href="#services" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
              Services
            </a>
            <a href="#digital-marketing" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
              Digital Marketing
            </a>
            <a href="#projects" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
              Projects
            </a>
            <a href="#contact" className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors font-medium">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
                Home
              </a>
              <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
                About
              </a>
              <a href="#services" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
                Services
              </a>
              <a href="#digital-marketing" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
                Digital Marketing
              </a>
              <a href="#projects" className="text-gray-700 hover:text-gray-900 transition-colors font-medium">
                Projects
              </a>
              <a href="#contact" className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors font-medium text-center">
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

