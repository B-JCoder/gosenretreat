import Image from "next/image"
import { Mail, Phone, Video, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-white text-black border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Image
                src="/images/gosen-logo-full.png"
                alt="Gosen Retreat"
                width={180}
                height={60}
                className="h-14 w-auto"
              />
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed max-w-md">
              Gosen Retreat is dedicated to providing exceptional mental health care through personalized,
              compassionate, and accessible remote psychiatric services.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="ghost" className="text-gray-600 hover:bg-gray-100 hover:text-black p-2">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-600 hover:bg-gray-100 hover:text-black p-2">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-600 hover:bg-gray-100 hover:text-black p-2">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-600 hover:bg-gray-100 hover:text-black p-2">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-black">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-600 hover:text-black transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-600 hover:text-black transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-600 hover:text-black transition-colors">
                  Services
                </a>
              </li>
           
              <li>
                <a href="/booking" className="text-gray-600 hover:text-black transition-colors">
                  Book Appointment
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-black transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-black">Stay Connected</h4>
            <p className="text-gray-600 mb-4 text-sm">
              Subscribe to our newsletter for mental wellness tips and updates.
            </p>
            <div className="space-y-3">
              <Input
                placeholder="Your email address"
                className="bg-gray-50 border-gray-300 text-black placeholder:text-gray-500 focus:bg-white"
              />
              <Button className="w-full bg-[#A8D5BA] text-white hover:bg-[#96c7a8]">Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600">
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              <a href="tel:954-366-8644" className="hover:text-black transition-colors">
                954-366-8644
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              <a href="mailto:Robertcarine@hotmail.com" className="hover:text-black transition-colors">
                Robertcarine@hotmail.com
              </a>
            </div>
            <div className="flex items-center">
              <Video className="w-4 h-4 mr-2" />
              <span>Remote-Only Practice</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>&copy; 2025 Gosen Retreat. All rights reserved.</p>
         
        </div>
      </div>
    </footer>
  )
}
