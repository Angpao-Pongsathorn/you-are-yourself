import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const navLinks = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'Personality Guide', href: '#chatbot' },
  { label: 'Pricing', href: '#pricing' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: '0 24px',
          transition: 'all 0.3s ease',
          background: scrolled
            ? 'rgba(16, 26, 61, 0.85)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(185, 167, 232, 0.1)' : 'none',
        }}
      >
        <div style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 72,
        }}>
          <a href="#" style={{ textDecoration: 'none' }}>
            <Logo size={36} />
          </a>

          {/* Desktop links */}
          <div style={{ display: 'flex', gap: 36, alignItems: 'center' }}
            className="hidden-mobile">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  color: '#D4C8F5',
                  textDecoration: 'none',
                  fontSize: 14,
                  fontFamily: "'DM Sans', sans-serif",
                  letterSpacing: '0.03em',
                  fontWeight: 400,
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.target.style.color = '#F6C85F'}
                onMouseLeave={e => e.target.style.color = '#D4C8F5'}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <a
              href="#pricing"
              className="hidden-mobile"
              style={{
                padding: '10px 24px',
                borderRadius: 50,
                background: 'linear-gradient(135deg, #F6C85F 0%, #FAD98A 100%)',
                color: '#101A3D',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 14,
                fontWeight: 500,
                textDecoration: 'none',
                letterSpacing: '0.03em',
                boxShadow: '0 0 20px rgba(246, 200, 95, 0.3)',
                transition: 'all 0.3s',
              }}
              onMouseEnter={e => {
                e.target.style.boxShadow = '0 0 30px rgba(246, 200, 95, 0.5)';
                e.target.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={e => {
                e.target.style.boxShadow = '0 0 20px rgba(246, 200, 95, 0.3)';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              Book a Session
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="show-mobile"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 8,
                display: 'none',
              }}
            >
              <div style={{
                width: 24, height: 2,
                background: '#FAF8F4',
                marginBottom: 5,
                transition: 'all 0.3s',
                transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
              }} />
              <div style={{
                width: 24, height: 2,
                background: '#FAF8F4',
                marginBottom: 5,
                opacity: menuOpen ? 0 : 1,
                transition: 'opacity 0.3s',
              }} />
              <div style={{
                width: 24, height: 2,
                background: '#FAF8F4',
                transition: 'all 0.3s',
                transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
              }} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed',
              top: 72,
              left: 0,
              right: 0,
              zIndex: 99,
              background: 'rgba(16, 26, 61, 0.97)',
              backdropFilter: 'blur(20px)',
              padding: '24px',
              borderBottom: '1px solid rgba(185, 167, 232, 0.1)',
            }}
          >
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: 'block',
                  color: '#D4C8F5',
                  textDecoration: 'none',
                  fontSize: 18,
                  fontFamily: "'Playfair Display', serif",
                  padding: '14px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#pricing"
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                marginTop: 20,
                padding: '14px 24px',
                borderRadius: 50,
                background: 'linear-gradient(135deg, #F6C85F 0%, #FAD98A 100%)',
                color: '#101A3D',
                textAlign: 'center',
                textDecoration: 'none',
                fontWeight: 500,
              }}
            >
              Book a Session
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </>
  );
}
