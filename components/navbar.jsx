'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { Button } from './ui/button'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Accueil', href: '#' },
    { label: 'Nos voitures', href: '#fleet' },
    { label: 'Pourquoi nous', href: '#why' },
    { label: 'Avis clients', href: '#testimonials' },
    { label: 'Contact', href: '#footer' },
  ]

  return (
    <motion.nav 
      className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-2xl font-bold text-primary">⦰</div>
            <span className="text-xl font-bold text-foreground">Atlas Drive</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* CTA & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:block"
            >
              <Button 
                className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2"
              >
                <Phone size={16} />
                <span>Appeler</span>
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden text-foreground"
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden pb-4"
          >
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="block py-2 text-sm font-medium text-foreground hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
