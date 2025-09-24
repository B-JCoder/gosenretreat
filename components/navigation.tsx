"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "Contact", href: "/#contact" },
  ]

  return (
    <nav className="sticky top-0 left-0 w-full bg-white/20 backdrop-blur-md border-b border-white/30 shadow-md z-50">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/images/logodemo.png"
              alt="Gosen Retreat Logo"
              width={130}
              height={40}
              className="object-contain"
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-black hover:text-[#A8D5BA] transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          <Button
  className="bg-[#196A76] hover:bg-[#14575f] text-white rounded-full shadow-md"
  asChild
>
  <a href="/booking">Book Consultation</a>
</Button>

          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black hover:text-[#A8D5BA]"
            >
              {isMenuOpen ? (
                <span className="h-6 w-6 flex items-center justify-center text-xl">✕</span>
              ) : (
                <span className="h-6 w-6 flex items-center justify-center text-xl">☰</span>
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/80 backdrop-blur-md border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-black hover:text-[#A8D5BA] transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          <div className="px-3 py-2">
  <Button
    className="w-full bg-[#196A76] hover:bg-[#14575f] text-white rounded-full shadow-md"
    asChild
  >
    <a href="/booking">Book Consultation</a>
  </Button>
</div>

          </div>
        </div>
      )}
    </nav>
  )
}
