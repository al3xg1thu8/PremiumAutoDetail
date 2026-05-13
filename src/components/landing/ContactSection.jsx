import React from 'react';
import { motion } from 'framer-motion';
import SectionLabel from './SectionLabel';
import { Phone, MessageCircle, MapPin } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 lg:py-40 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mx-auto text-center">
          <SectionLabel label="Book Your Detail" align="center" />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4"
          >
            Ready to <span className="italic text-primary">Transform</span>?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground font-body leading-relaxed mb-12"
          >
            Reach out to schedule your detail. We'll assess your vehicle's needs and 
            provide a precise quote based on size and condition.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-3 gap-6 mb-12"
          >
            {[
              { icon: Phone, label: 'Call Us', value: '(203) 631-6275', href: 'tel:(203) 631-6275' },
              { icon: MessageCircle, label: 'Text Us', value: '(203) 631-6275', href: 'sms:(203) 631-6275' },
              { icon: MapPin, label: 'Mobile Service', value: 'We Come to You', href: null },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="p-6 border border-border bg-card/30 hover:border-primary/20 transition-colors duration-300">
                <Icon className="w-5 h-5 text-primary mx-auto mb-3" />
                <p className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground mb-1">
                  {label}
                </p>
                {href ? (
                  <a href={href} className="text-sm font-body text-foreground hover:text-primary transition-colors">
                    {value}
                  </a>
                ) : (
                  <p className="text-sm font-body text-foreground">{value}</p>
                )}
              </div>
            ))}
          </motion.div>

          <motion.a
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            href="tel:5551234567"
            className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-primary text-primary-foreground font-mono text-xs tracking-[0.2em] uppercase hover:bg-primary/90 transition-all duration-300"
          >
            Secure Your Slot
          </motion.a>
        </div>
      </div>
    </section>
  );
}