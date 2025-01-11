'use client'
import React, { useState, useEffect, useRef } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const navRef = useRef(null)
  const pathname = usePathname()

  const serviceLinks = [
    { href: '/services/design', label: 'Design Services' },
    { href: '/services/tailoring', label: 'Tailoring' },
    { href: '/services/consulting', label: 'Fashion Consulting' },
  ]

  const pageLinks = [
    { href: '/blog', label: 'Blog' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/team', label: 'Our Team' },
  ]

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMenuOpen(false)
        setActiveDropdown(null)
      }
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        setActiveDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    setActiveDropdown(null)
  }

  const toggleDropdown = (dropdown) => {
    if (window.innerWidth < 768) {
      setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
    }
  }

  return (
    <>
      {/* Backdrop for mobile menu */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      <nav ref={navRef} className="relative z-50">
        <div className="flex justify-between items-center px-4 md:px-8 py-6">
          <Link href="/" className="text-white text-3xl font-extralight tracking-wider z-50">
            Textiln
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="text-white lg:hidden p-2 hover:bg-white/10 rounded-md
              transition-colors active:scale-95 z-50"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Navigation Links */}
          <div className={`
            fixed lg:relative 
            inset-y-0 right-0 
            w-[280px] lg:w-auto
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'} 
            transform transition-transform duration-300 ease-in-out lg:transition-none
            lg:flex lg:items-center 
            bg-[#1a1a1a] lg:bg-transparent
            pt-20 lg:pt-0 px-6 lg:px-0
            space-y-6 lg:space-y-0 lg:space-x-12 
            text-gray-400 text-sm
            z-40
          `}>
            <Link 
              href="/" 
              className={`block lg:inline-block transition-colors
                ${pathname === '/' ? 'text-white' : 'hover:text-white'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </Link>
            <Link 
              href="/about" 
              className={`block lg:inline-block transition-colors
                ${pathname === '/about' ? 'text-white' : 'hover:text-white'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button 
                onClick={() => toggleDropdown('services')}
                onMouseEnter={() => window.innerWidth >= 1024 && setActiveDropdown('services')}
                onMouseLeave={() => window.innerWidth >= 1024 && setActiveDropdown(null)}
                className="flex items-center w-full lg:w-auto hover:text-white transition-colors"
              >
                SERVICES
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200
                  ${activeDropdown === 'services' ? 'rotate-180' : ''}`} 
                />
              </button>
              <div 
                onMouseEnter={() => window.innerWidth >= 1024 && setActiveDropdown('services')}
                onMouseLeave={() => window.innerWidth >= 1024 && setActiveDropdown(null)}
                className={`
                  ${activeDropdown === 'services' ? 'block' : 'hidden'} 
                  lg:absolute lg:top-full lg:left-0 
                  bg-[#1a1a1a] border border-gray-800 lg:border-gray-700
                  min-w-[200px] py-2 mt-2 lg:mt-1
                  rounded-md lg:shadow-lg
                `}
              >
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2 hover:bg-gray-800/50 hover:text-white transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Pages Dropdown - Similar structure to Services */}
            <div className="relative group">
              <button 
                onClick={() => toggleDropdown('pages')}
                onMouseEnter={() => window.innerWidth >= 1024 && setActiveDropdown('pages')}
                onMouseLeave={() => window.innerWidth >= 1024 && setActiveDropdown(null)}
                className="flex items-center w-full lg:w-auto hover:text-white transition-colors"
              >
                PAGES
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200
                  ${activeDropdown === 'pages' ? 'rotate-180' : ''}`} 
              />
              </button>
              <div 
                onMouseEnter={() => window.innerWidth >= 1024 && setActiveDropdown('pages')}
                onMouseLeave={() => window.innerWidth >= 1024 && setActiveDropdown(null)}
                className={`
                  ${activeDropdown === 'pages' ? 'block' : 'hidden'} 
                  lg:absolute lg:top-full lg:left-0 
                  bg-[#1a1a1a] border border-gray-800 lg:border-gray-700
                  min-w-[200px] py-2 mt-2 lg:mt-1
                  rounded-md lg:shadow-lg
                `}
              >
                {pageLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2 hover:bg-gray-800/50 hover:text-white transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link 
              href="/contact" 
              className={`block lg:inline-block transition-colors
                ${pathname === '/contact' ? 'text-white' : 'hover:text-white'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT
            </Link>
          </div>

          {/* CTA Button */}
          <Link 
            href="/contact" 
            className="hidden lg:block text-white border border-gray-600 px-6 py-2.5 text-sm 
              hover:bg-white hover:text-black transition-all duration-200
              active:scale-95"
          >
            LET'S TALK
          </Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar
