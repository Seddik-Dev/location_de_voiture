'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { MapPin, Calendar } from 'lucide-react'

export default function QuickBooking() {
  const [formData, setFormData] = useState({
    pickupCity: '',
    pickupDate: '',
    returnDate: '',
  })

  const cities = ['Casablanca', 'Marrakech', 'Agadir', 'Fès', 'Tanger', 'Rabat']

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <section className="relative -mt-34 z-20 max-w-5xl mx-auto px-4 mb-16 ">
      <motion.div
        className="bg-white rounded-2xl shadow-2xl overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
          {/* Left side - Text */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Réservation rapide
            </h2>
            <p className="text-muted-foreground mb-6">
              Trouvez et réservez votre voiture idéale en quelques minutes. Tarifs transparents, sans frais cachés.
            </p>
            <div className="space-y-3">
              {[
                '✓ Plus de 200 véhicules disponibles',
                '✓ Chauffeur privé inclus',
                '✓ Assurance tous risques',
                '✓ Support 24/7 en français',
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="text-sm text-foreground font-medium"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right side - Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* City Selection */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                <MapPin size={16} className="inline mr-2" />
                Ville de départ
              </label>
              <select
                name="pickupCity"
                value={formData.pickupCity}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
              >
                <option value="">Sélectionner une ville</option>
                {cities.map((city) => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>

            {/* Pickup Date */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                <Calendar size={16} className="inline mr-2" />
                Départ
              </label>
              <Input
                type="date"
                name="pickupDate"
                value={formData.pickupDate}
                onChange={handleChange}
                className="rounded-xl"
              />
            </div>

            {/* Return Date */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                <Calendar size={16} className="inline mr-2" />
                Retour
              </label>
              <Input
                type="date"
                name="returnDate"
                value={formData.returnDate}
                onChange={handleChange}
                className="rounded-xl"
              />
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="pt-4"
            >
              <Button 
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 rounded-xl"
              >
                Chercher les voitures
              </Button>
            </motion.div>
          </form>
        </div>
      </motion.div>
    </section>
  )
}
