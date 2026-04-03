'use client'

import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-12 md:p-16 text-center text-white overflow-hidden relative"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-accent/20 rounded-full -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-full -ml-16 -mb-16" />

          {/* Content */}
          <div className="relative z-10">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Prêt à explorer le Maroc ?
            </motion.h2>

            <motion.p
              className="text-lg text-white/90 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Réservez dès maintenant et profitez d'une réduction exclusive de 15% pour les réservations de 3 jours ou plus.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-base gap-2 px-8"
                >
                  Réserver maintenant
                  <ArrowRight size={20} />
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/20 font-bold text-base"
                >
                  Appeler le support
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
