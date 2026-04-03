'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

export default function Fleet() {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 340 // Largeur carte + gap
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  const cars = [
    {
      id: 1,
      name: 'Mercedes-Benz S-Class',
      category: 'Berline Luxe',
      price: '700 DH/jour',
      image: '/car-1.jpg',
      features: ['5 passagers', 'Climatisation bi-zone', 'GPS & WiFi'],
    },
    {
      id: 2,
      name: 'BMW X7',
      category: 'SUV Premium',
      price: '650 DH/jour',
      image: '/car-2.jpg',
      features: ['7 passagers', 'Toit panoramique', 'Cuir & Massage'],
    },
    {
      id: 3,
      name: 'Audi A8',
      category: 'Berline Executive',
      price: '700 DH/jour',
      image: '/car-3.jpg',
      features: ['5 passagers', 'Suspension pneumatique', 'Bang & Olufsen'],
    },
    {
      id: 4,
      name: 'Range Rover Sport',
      category: 'SUV Déluxe',
      price: '550 DH/jour',
      image: '/car-4.jpg',
      features: ['5 passagers', '4WD Intelligent', 'Caméra 360°'],
    },
    {
      id: 5,
      name: 'Tesla Model 3',
      category: 'Électrique Premium',
      price: '400 DH/jour',
      image: '/car5.webp',
      features: ['Autonomie ~500km', 'Autopilot', 'Supercharge gratuit'],
    },
    {
      id: 6,
      name: 'Toyota Land Cruiser',
      category: '4x4 Tout-terrain',
      price: '600 DH/jour',
      image: '/car-6.jpg',
      features: ['7 passagers', '4x4 verrouillable', 'Idéal pistes & Atlas'],
    },
    {
      id: 7,
      name: 'Volkswagen Golf 8',
      category: 'Citadine Confort',
      price: '300 DH/jour',
      image: '/car-7.jpg',
      features: ['5 passagers', 'Apple CarPlay / Android Auto', 'Faible consommation'],
    },
    {
      id: 8,
      name: 'Dacia Duster',
      category: 'Économique & Robuste',
      price: '250 DH/jour',
      image: '/car-8.jpg',
      features: ['5 passagers', 'Coffre spacieux', 'Budget-friendly'],
    },
  ]

  return (
    <section id="fleet" className="py-20 px-4 bg-gradient-to-b from-background to-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Notre Flotte Premium
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez notre sélection exclusive de véhicules de luxe, tous entretenus et assurés pour votre sécurité.
          </p>
        </motion.div>

        {/* Scroll Controls */}
        <div className="flex justify-end gap-3 mb-6 px-2">
          <button
            onClick={() => scroll('left')}
            aria-label="Défiler à gauche"
            className="p-2.5 rounded-full bg-white/80 backdrop-blur shadow-md hover:bg-accent hover:text-accent-foreground transition-all duration-200"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            aria-label="Défiler à droite"
            className="p-2.5 rounded-full bg-white/80 backdrop-blur shadow-md hover:bg-accent hover:text-accent-foreground transition-all duration-200"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Horizontal Smooth Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 
                     [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {cars.map((car) => (
            <motion.div
              key={car.id}
              className="min-w-[280px] md:min-w-[320px] snap-start flex-shrink-0 group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -8 }}
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden bg-muted">
                <Image
                  src={car.image}
                  alt={car.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-sm font-semibold text-accent mb-1.5">{car.category}</p>
                <h3 className="text-lg font-bold text-foreground mb-3">{car.name}</h3>

                {/* Features */}
                <div className="space-y-2 mb-5">
                  {car.features.map((feature, i) => (
                    <div key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Price & CTA */}
                <div className="border-t border-border pt-4 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground">À partir de</p>
                    <p className="text-xl font-bold text-primary">{car.price}</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-accent hover:bg-accent/90 text-accent-foreground p-2.5 rounded-lg transition-colors"
                  >
                    →
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-base"
          >
            Voir toute la flotte
          </Button>
        </motion.div>
      </div>
    </section>
  )
}