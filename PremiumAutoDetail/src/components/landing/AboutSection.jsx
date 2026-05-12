import React from 'react';
import { motion } from 'framer-motion';
import SectionLabel from './SectionLabel';

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
                src="https://media.base44.com/images/public/6a023549fb9a48452355f2a6/56670e4fc_generated_6318286d.png"
                alt="Pristine leather car seat detail showing precision craftsmanship"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-primary/20" />
          </motion.div>

          {/* Content */}
          <div>
            <SectionLabel label="The Studio" />

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
                Every vehicle that enters our studio is treated as a unique restoration project. 
                We don't rush. We don't cut corners. We approach each surface with the same 
                level of care a surgeon brings to the operating table.
              </p>
              <p>
                Using professional-grade products, proper contact wash techniques, and an 
                uncompromising eye for detail, we deliver results that transform your daily 
                driver into a showroom piece.
              </p>
              <p>
                From paint decontamination to interior deep-cleans, every step follows 
                a proven process refined over hundreds of vehicles.
              </p>
            </motion.div>

            <motion.div
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
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}