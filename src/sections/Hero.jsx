import { motion } from 'framer-motion';
import MirrorHeroVisual from '../components/MirrorHeroVisual';

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      background: 'linear-gradient(145deg, #0A1229 0%, #101A3D 30%, #1A1040 60%, #2A0F5A 85%, #101A3D 100%)',
      display: 'flex',
      alignItems: 'center',
      padding: '120px 24px 80px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background glow orbs */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: 400,
        height: 400,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(62, 31, 115, 0.35) 0%, transparent 70%)',
        pointerEvents: 'none',
        animation: 'pulse-glow 6s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '5%',
        width: 300,
        height: 300,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(45, 108, 223, 0.2) 0%, transparent 70%)',
        pointerEvents: 'none',
        animation: 'pulse-glow 8s ease-in-out 2s infinite',
      }} />
      <div style={{
        position: 'absolute',
        top: '50%',
        right: '20%',
        width: 200,
        height: 200,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(246, 200, 95, 0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
        animation: 'pulse-glow 10s ease-in-out 4s infinite',
      }} />

      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 60,
        alignItems: 'center',
      }}
        className="hero-grid"
      >
        {/* Left: Copy */}
        <div>
          {/* Microcopy tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(246, 200, 95, 0.08)',
              border: '1px solid rgba(246, 200, 95, 0.2)',
              borderRadius: 50,
              padding: '6px 16px',
              marginBottom: 28,
            }}
          >
            <span style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: '#F6C85F',
              display: 'inline-block',
              animation: 'pulse-glow 2s ease-in-out infinite',
            }} />
            <span style={{
              color: '#F6C85F',
              fontSize: 12,
              fontFamily: "'DM Sans', sans-serif",
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}>
              Psychology-Inspired Self-Discovery
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(36px, 5vw, 62px)',
              fontWeight: 500,
              lineHeight: 1.15,
              color: '#FAF8F4',
              marginBottom: 24,
              letterSpacing: '-0.01em',
            }}
          >
            You're not here to
            {' '}
            <span style={{
              background: 'linear-gradient(135deg, #B9A7E8, #D4C8F5)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              become
            </span>
            {' '}
            someone else.
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              color: '#B9A7E8',
              fontSize: 'clamp(15px, 2vw, 17px)',
              lineHeight: 1.75,
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              marginBottom: 12,
              maxWidth: 500,
            }}
          >
            Discover your strengths, patterns, inner drives, and blind spots through a blend of personality insight, Human Design-inspired reflection, Enneagram, MBTI, and psychology-based growth tools.
          </motion.p>

          {/* Emotional microcopy */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: 'italic',
              fontSize: 15,
              color: '#F6C85F',
              opacity: 0.8,
              marginBottom: 40,
            }}
          >
            "You are not lost. You are becoming clearer."
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}
          >
            <a
              href="#features"
              style={{
                padding: '16px 32px',
                borderRadius: 50,
                background: 'linear-gradient(135deg, #F6C85F 0%, #FAD98A 100%)',
                color: '#101A3D',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 15,
                fontWeight: 500,
                textDecoration: 'none',
                letterSpacing: '0.02em',
                boxShadow: '0 0 30px rgba(246, 200, 95, 0.35)',
                transition: 'all 0.3s',
                display: 'inline-block',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = '0 0 50px rgba(246, 200, 95, 0.55)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = '0 0 30px rgba(246, 200, 95, 0.35)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Start Your Self-Discovery
            </a>

            <a
              href="#chatbot"
              style={{
                padding: '16px 32px',
                borderRadius: 50,
                background: 'transparent',
                border: '1px solid rgba(185, 167, 232, 0.35)',
                color: '#D4C8F5',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 15,
                fontWeight: 400,
                textDecoration: 'none',
                letterSpacing: '0.02em',
                transition: 'all 0.3s',
                display: 'inline-block',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(185, 167, 232, 0.6)';
                e.currentTarget.style.background = 'rgba(185, 167, 232, 0.06)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(185, 167, 232, 0.35)';
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              Talk to Your Personality Guide
            </a>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            style={{
              marginTop: 40,
              display: 'flex',
              alignItems: 'center',
              gap: 16,
            }}
          >
            <div style={{ display: 'flex' }}>
              {['#B9A7E8', '#F6C85F', '#2D6CDF', '#D4C8F5'].map((c, i) => (
                <div key={i} style={{
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  background: `radial-gradient(circle, ${c}80 0%, ${c}30 100%)`,
                  border: '2px solid rgba(255,255,255,0.1)',
                  marginLeft: i > 0 ? -10 : 0,
                }} />
              ))}
            </div>
            <p style={{
              color: '#B9A7E8',
              fontSize: 13,
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
            }}>
              Joined by <span style={{ color: '#F6C85F' }}>2,400+</span> people on their growth journey
            </p>
          </motion.div>
        </div>

        {/* Right: Mirror Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <MirrorHeroVisual />
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
