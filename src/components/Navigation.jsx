import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const navLinks = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'Personality Guide', href: '#chatbot' },
  { label: 'Pricing', href: '#pricing' },
  { label: '✦ ค้นพบตัวเอง', href: '/discover', highlight: true },
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
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          padding: '0 24px',
          transition: 'all 0.3s ease',
          background: scrolled ? 'rgba(245, 240, 255, 0.88)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(185, 167, 232, 0.2)' : 'none',
          boxShadow: scrolled ? '0 4px 20px rgba(123, 75, 200, 0.08)' : 'none',
        }}
      >
        <div style={{
          maxWidth: 1200, margin: '0 auto',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          height: 72,
        }}>
          <a href="#" style={{ textDecoration: 'none' }}>
            <Logo size={36} />
          </a>

          {/* Desktop links */}
          <div style={{ display: 'flex', gap: 36, alignItems: 'center' }} className="hidden-mobile">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} style={{
                color: link.highlight ? '#7B4BC8' : '#5A3D8A',
                textDecoration: 'none', fontSize: 14,
                fontFamily: "'DM Sans', sans-serif", letterSpacing: '0.03em',
                fontWeight: link.highlight ? 600 : 400, transition: 'color 0.2s',
                background: link.highlight ? 'rgba(123,75,200,0.08)' : 'none',
                padding: link.highlight ? '6px 14px' : '0',
                borderRadius: link.highlight ? 50 : 0,
                border: link.highlight ? '1px solid rgba(123,75,200,0.2)' : 'none',
              }}
                onMouseEnter={e => { e.currentTarget.style.color = '#9B6BE8'; if (link.highlight) e.currentTarget.style.background = 'rgba(123,75,200,0.14)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = link.highlight ? '#7B4BC8' : '#5A3D8A'; if (link.highlight) e.currentTarget.style.background = 'rgba(123,75,200,0.08)'; }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <a href="#pricing" className="hidden-mobile" style={{
              padding: '10px 24px', borderRadius: 50,
              background: 'linear-gradient(135deg, #7B4BC8 0%, #9B6BE8 100%)',
              color: '#FFFFFF',
              fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500,
              textDecoration: 'none', letterSpacing: '0.03em',
              boxShadow: '0 4px 20px rgba(123, 75, 200, 0.3)',
              transition: 'all 0.3s',
            }}
              onMouseEnter={e => {
                e.target.style.boxShadow = '0 6px 28px rgba(123, 75, 200, 0.5)';
                e.target.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={e => {
                e.target.style.boxShadow = '0 4px 20px rgba(123, 75, 200, 0.3)';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              Book a Session
            </a>

            {/* Hamburger */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="show-mobile"
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 8, display: 'none' }}>
              <div style={{ width: 24, height: 2, background: '#5A2D9E', marginBottom: 5, transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
              <div style={{ width: 24, height: 2, background: '#5A2D9E', marginBottom: 5, opacity: menuOpen ? 0 : 1, transition: 'opacity 0.3s' }} />
              <div style={{ width: 24, height: 2, background: '#5A2D9E', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
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
              position: 'fixed', top: 72, left: 0, right: 0, zIndex: 99,
              background: 'rgba(245, 240, 255, 0.97)',
              backdropFilter: 'blur(20px)',
              padding: '24px',
              borderBottom: '1px solid rgba(185, 167, 232, 0.2)',
            }}
          >
            {navLinks.map(link => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} style={{
                display: 'block', color: '#5A2D9E', textDecoration: 'none',
                fontSize: 18, fontFamily: "'Playfair Display', serif",
                padding: '14px 0', borderBottom: '1px solid rgba(185, 167, 232, 0.2)',
              }}>
                {link.label}
              </a>
            ))}
            <a href="#pricing" onClick={() => setMenuOpen(false)} style={{
              display: 'block', marginTop: 20, padding: '14px 24px', borderRadius: 50,
              background: 'linear-gradient(135deg, #7B4BC8, #9B6BE8)',
              color: '#FFFFFF', textAlign: 'center', textDecoration: 'none', fontWeight: 500,
            }}>
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
