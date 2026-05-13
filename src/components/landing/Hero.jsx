import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://media.base44.com/images/public/6a023549fb9a48452355f2a6/cc575fca1_generated_e9657e3f.png"
          alt="Perfectly polished luxury car surface with zero swirl marks"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
      </div>

      {/* Scan Line Animation */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        animate={{ top: ['0%', '100%'] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-24 lg:pb-32 pt-40">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex items-center gap-4 mb-6"
        >
          <div className="h-px w-12 bg-primary" />
          <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-primary">
            Premium Auto Detail 
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground leading-[0.95] mb-6 max-w-4xl"
        >
          Precision{' '}
          <span className="italic text-primary">Detailing</span>
          <br />
          Perfection Delivered
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-body text-base lg:text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed"
        >
          Where science meets surface. Every vehicle receives a meticulous, 
          detail-obsessed restoration to factory-fresh perfection.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#services"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-mono text-xs tracking-[0.2em] uppercase hover:bg-primary/90 transition-all duration-300"
          >
            View Services
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-foreground/20 text-foreground font-mono text-xs tracking-[0.2em] uppercase hover:border-primary/50 hover:text-primary transition-all duration-300"
          >
            Secure Your Slot
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-5 h-5 text-primary/50" />
      </motion.div>
    </section>
  );
}