'use client'

import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/hero-bg.jpg)',
          filter: 'brightness(0.5)',
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/40 to-transparent" />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Découvrez le Maroc en <span className="text-accent">Luxe</span>
        </motion.h1>
        
        <motion.p
          className="text-lg sm:text-xl text-gray-100 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Atlas Drive vous offre une expérience premium de location de voitures au Maroc. Louez des véhicules de luxe avec chauffeur ou sans, pour vos vacances inoubliables.
        </motion.p>
        
        {/* <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-base w-full sm:w-auto"
            >
              Réserver maintenant
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/20 text-base w-full sm:w-auto"
            >
              Voir notre flotte
            </Button>
          </motion.div>
        </motion.div> */}
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 "
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-white" size={32} />
      </motion.div>
    </section>
  )
}
