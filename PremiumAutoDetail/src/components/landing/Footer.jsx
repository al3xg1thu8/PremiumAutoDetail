import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-display text-lg tracking-wide text-foreground">
            MACRO<span className="text-primary">.</span>PRECISION
          </div>

          <div className="flex items-center gap-8">
            {['Services', 'Add-Ons', 'About', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace('-', '')}`}
                className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>

          <p className="font-mono text-[10px] tracking-wider text-muted-foreground/50">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}