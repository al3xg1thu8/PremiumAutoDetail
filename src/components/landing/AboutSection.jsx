import React from 'react';
import { motion } from 'framer-motion';
import SectionLabel from './SectionLabel';

import img1 from "../../pages/webp/1.webp";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-40 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={img1}
                alt="Pristine leather car seat detail showing precision craftsmanship"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-primary/20" />
          </motion.div>

          {/* Content */}
          <div>
            <SectionLabel label="Mission Statement" />

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6"
            >
              Obsessed With <span className="italic text-primary">Perfection</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-5 text-muted-foreground font-body leading-relaxed"
            >
              <p>
              As a college student chasing something bigger, I built this business from a simple passion: bringing 
              cars back to life and giving people that feeling of driving something truly clean and cared for.
              </p>
              <p>
              Every vehicle that comes through my hands is treated like more than just another appointment—it’s a 
              personal project. I don’t rush jobs, cut corners, or believe in “good enough.” I take pride in doing things the right way, using professional-grade products, safe wash methods, and a sharp eye for the small details most people overlook.
              </p>
              <p>
              From paint decontamination to deep interior resets, every service follows a process I’ve refined 
              through hands-on experience and a genuine obsession with perfection.
              </p>
            </motion.div>

            {/* <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-border"
            >
              {[
                { value: '500+', label: 'Vehicles Detailed' },
                { value: '100%', label: 'Satisfaction' },
                { value: '5★', label: 'Average Rating' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl lg:text-3xl text-primary">{stat.value}</p>
                  <p className="font-mono text-[10px] tracking-wider text-muted-foreground mt-1 uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div> */}
          </div>
        </div>
      </div>
    </section>
  );
}