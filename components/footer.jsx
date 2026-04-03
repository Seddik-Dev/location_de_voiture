'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    'À propos': [
      { label: 'Qui sommes-nous', href: '#' },
      { label: 'Notre histoire', href: '#' },
      { label: 'Nos valeurs', href: '#' },
      { label: 'Carrières', href: '#' },
    ],
    'Services': [
      { label: 'Location de voitures', href: '#' },
      { label: 'Chauffeur privé', href: '#' },
      { label: 'Airport transfer', href: '#' },
      { label: 'Tours & excursions', href: '#' },
    ],
    'Légal': [
      { label: 'Conditions d\'utilisation', href: '#' },
      { label: 'Politique de confidentialité', href: '#' },
      { label: 'Cookies', href: '#' },
      { label: 'Mentions légales', href: '#' },
    ],
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  }

  return (
    <footer id="footer" className="bg-foreground text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Content */}
        <motion.div
          className="grid md:grid-cols-5 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <div className="text-accent">⦰</div>
              Atlas Drive
            </h3>
            <p className="text-white/70 text-sm mb-6">
              Votre partenaire de confiance pour la location de voitures premium au Maroc depuis 18 ans.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <Phone size={16} className="text-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">+212 5 22 123 456</p>
                  <p className="text-white/60">Disponible 24/7</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={16} className="text-accent mt-1 flex-shrink-0" />
                <p>info@atlasdrive.ma</p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-accent mt-1 flex-shrink-0" />
                <p>Casablanca, Maroc</p>
              </div>
            </div>
          </motion.div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <motion.div key={category} variants={itemVariants}>
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <motion.a
                      href={link.href}
                      className="text-white/70 hover:text-accent text-sm transition-colors"
                      whileHover={{ x: 4 }}
                    >
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="border-t border-white/10 my-12" />

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Copyright */}
          <p className="text-white/60 text-sm text-center md:text-left">
            © {currentYear} Atlas Drive. Tous droits réservés.
          </p>

          {/* Social Links */}
          <div className="flex gap-4 mt-6 md:mt-0">
            {[
              { icon: Facebook, label: 'Facebook' },
              { icon: Twitter, label: 'Twitter' },
              { icon: Instagram, label: 'Instagram' },
            ].map(({ icon: Icon, label }) => (
              <motion.a
                key={label}
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
