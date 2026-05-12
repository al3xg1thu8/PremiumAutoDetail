import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Check } from 'lucide-react';

export default function ServiceCard({ title, price, time, features, highlighted, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className={`relative flex flex-col p-8 lg:p-10 border ${
        highlighted
          ? 'border-primary/30 bg-card shadow-[0_0_60px_-15px_hsl(184,100%,50%,0.1)]'
          : 'border-border bg-card/50'
      }`}
    >
      {highlighted && (
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      )}

      <div className="mb-8">
        <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground mb-3">
          {highlighted ? 'Recommended' : 'Essential'}
        </p>
        <h3 className="font-display text-2xl lg:text-3xl text-foreground mb-2">{title}</h3>
        <div className="flex items-baseline gap-1">
          <span className="font-mono text-xs text-muted-foreground">FROM</span>
          <span className="font-display text-4xl lg:text-5xl text-primary">${price}</span>
        </div>
      </div>

      <div className="flex-1 space-y-4 mb-8">
        {features.map((feature, i) => (
          <div key={i} className="flex items-start gap-3">
            <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
            <span className="text-sm text-foreground/80 font-body">{feature}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 pt-6 border-t border-border">
        <Clock className="w-4 h-4 text-primary" />
        <span className="font-mono text-xs tracking-wider text-muted-foreground">{time}</span>
      </div>
    </motion.div>
  );
}