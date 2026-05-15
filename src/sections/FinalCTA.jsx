import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section style={{
      padding: '120px 24px',
      background: 'linear-gradient(145deg, #0A1229 0%, #1A1040 30%, #2A0F5A 60%, #101A3D 100%)',
      position: 'relative',
      overflow: 'hidden',
      textAlign: 'center',
    }}>
      {/* Glow orbs */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '15%',
        width: 400,
        height: 400,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(90, 45, 158, 0.3) 0%, transparent 70%)',
        pointerEvents: 'none',
        animation: 'pulse-glow 7s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '15%',
        right: '10%',
        width: 350,
        height: 350,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(45, 108, 223, 0.2) 0%, transparent 70%)',
        pointerEvents: 'none',
        animation: 'pulse-glow 9s ease-in-out 2s infinite',
      }} />
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        height: 300,
        borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(246, 200, 95, 0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Abstract mirror visual */}
      <motion.div
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        style={{ marginBottom: 48, display: 'inline-block' }}
      >
        <svg width="120" height="140" viewBox="0 0 120 140" fill="none">
          <defs>
            <radialGradient id="ctaAura" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#B9A7E8" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#3E1F73" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="ctaFig1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#B9A7E8" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#3E1F73" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="ctaFig2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F6C85F" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#B9A7E8" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="ctaMirror" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F6C85F" stopOpacity="1" />
              <stop offset="100%" stopColor="#2D6CDF" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <ellipse cx="60" cy="70" rx="55" ry="65" fill="url(#ctaAura)" />
          <ellipse cx="60" cy="70" rx="42" ry="55" stroke="#B9A7E8" strokeWidth="0.8" strokeOpacity="0.2" fill="none" />

          {/* Left figure */}
          <circle cx="38" cy="38" r="10" fill="url(#ctaFig1)" fillOpacity="0.7" />
          <path d="M24 55 Q30 48 38 51 Q46 48 52 55 L55 95 Q47 102 38 103 Q29 102 21 95 Z"
            fill="url(#ctaFig1)" fillOpacity="0.5" />

          {/* Mirror line */}
          <line x1="60" y1="10" x2="60" y2="130" stroke="url(#ctaMirror)" strokeWidth="1.5" />

          {/* Right figure */}
          <circle cx="82" cy="38" r="10" fill="url(#ctaFig2)" fillOpacity="0.4" />
          <path d="M68 55 Q74 48 82 51 Q90 48 96 55 L99 95 Q91 102 82 103 Q73 102 65 95 Z"
            fill="url(#ctaFig2)" fillOpacity="0.25" />

          {/* Crown curve */}
          <path d="M30 24 Q60 12 90 24" stroke="#F6C85F" strokeWidth="0.8" fill="none" strokeOpacity="0.5" />
        </svg>
      </motion.div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            color: '#F6C85F',
            fontSize: 11,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            fontFamily: "'DM Sans', sans-serif",
            marginBottom: 20,
          }}
        >
          You've been here before. You'll understand it now.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(28px, 5vw, 58px)',
            fontWeight: 500,
            color: '#FAF8F4',
            lineHeight: 1.2,
            maxWidth: 700,
            margin: '0 auto 20px',
          }}
        >
          Meet the version of you
          {' '}
          <span style={{
            background: 'linear-gradient(135deg, #B9A7E8, #D4C8F5)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            that has been waiting
          </span>
          {' '}
          to be understood.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            color: '#B9A7E8',
            fontSize: 16,
            lineHeight: 1.7,
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 300,
            maxWidth: 440,
            margin: '0 auto 48px',
          }}
        >
          You don't need to have it all figured out. You just need to start looking in the right direction.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            display: 'flex',
            gap: 16,
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <a
            href="#features"
            style={{
              padding: '16px 36px',
              borderRadius: 50,
              background: 'linear-gradient(135deg, #F6C85F 0%, #FAD98A 100%)',
              color: '#101A3D',
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 15,
              fontWeight: 500,
              textDecoration: 'none',
              boxShadow: '0 0 40px rgba(246, 200, 95, 0.4)',
              transition: 'all 0.3s',
              display: 'inline-block',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = '0 0 60px rgba(246, 200, 95, 0.6)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = '0 0 40px rgba(246, 200, 95, 0.4)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Begin Your Reflection
          </a>

          <a
            href="#chatbot"
            style={{
              padding: '16px 36px',
              borderRadius: 50,
              background: 'transparent',
              border: '1px solid rgba(185, 167, 232, 0.3)',
              color: '#D4C8F5',
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 15,
              fontWeight: 400,
              textDecoration: 'none',
              transition: 'all 0.3s',
              display: 'inline-block',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'rgba(185, 167, 232, 0.6)';
              e.currentTarget.style.background = 'rgba(185, 167, 232, 0.06)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(185, 167, 232, 0.3)';
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Explore Your Type
          </a>

          <a
            href="#pricing"
            style={{
              padding: '16px 36px',
              borderRadius: 50,
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.12)',
              color: '#FAF8F4',
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 15,
              fontWeight: 400,
              textDecoration: 'none',
              transition: 'all 0.3s',
              display: 'inline-block',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Book a Live Session
          </a>
        </motion.div>
      </div>
    </section>
  );
}
