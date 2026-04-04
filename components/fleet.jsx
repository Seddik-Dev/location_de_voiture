'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { FleetCarCard } from './fleet-car-card'

export default function Fleet() {
  const scrollRef = useRef(null)
  const router = useRouter()

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 340
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section id="fleet" className="py-20 px-4 bg-gradient-to-b from-background to-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Notre flotte premium
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sélection de véhicules au Maroc, entretenus et assurés. Tarifs en{' '}
            <span className="font-semibold text-foreground">MAD</span> par jour.
          </p>
        </motion.div>

        <div className="flex justify-end gap-3 mb-6 px-2">
          <button
            type="button"
            onClick={() => scroll('left')}
            aria-label="Défiler à gauche"
            className="p-2.5 rounded-full bg-white/80 backdrop-blur shadow-md hover:bg-accent hover:text-accent-foreground transition-all duration-200"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={() => scroll('right')}
            aria-label="Défiler à droite"
            className="p-2.5 rounded-full bg-white/80 backdrop-blur shadow-md hover:bg-accent hover:text-accent-foreground transition-all duration-200"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6 
                     [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {fleetCars.map((car) => (
            <FleetCarCard key={car.id} car={car} layout="scroll" />
          ))}
        </div>

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
            onClick={() => router.push('/fleet')}
          >
            Voir toute la flotte
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
