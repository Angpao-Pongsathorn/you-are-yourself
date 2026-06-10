import { motion } from 'framer-motion';

function Sparkle({ style }) {
  return (
    <motion.span
      animate={{ scale: [1, 1.5, 1], opacity: [0.4, 1, 0.4] }}
      transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, ease: 'easeInOut' }}
      style={{ position: 'absolute', color: '#F6C85F', fontSize: 14, pointerEvents: 'none', ...style }}
    >✦</motion.span>
  );
}

export default function FinalCTA() {
  return (
    <section style={{
      padding: '120px 24px',
      background: 'linear-gradient(145deg, #E8DEFF 0%, #F0EAFF 30%, #EDE4FF 60%, #FFF0F8 85%, #F5F0FF 100%)',
      position: 'relative', overflow: 'hidden', textAlign: 'center',
    }}>
      {/* Pastel blobs */}
      <div style={{ position: 'absolute', top: '15%', left: '10%', width: 350, height: 350, borderRadius: '50%', background: 'radial-gradient(circle, rgba(185, 167, 232, 0.4) 0%, transparent 70%)', pointerEvents: 'none', animation: 'pulse-glow 7s ease-in-out infinite' }} />
      <div style={{ position: 'absolute', bottom: '10%', right: '8%', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(246, 200, 95, 0.3) 0%, transparent 70%)', pointerEvents: 'none', animation: 'pulse-glow 9s ease-in-out 2s infinite' }} />
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 500, height: 250, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(155, 107, 232, 0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />

      {/* Sparkles */}
      <Sparkle style={{ top: '20%', left: '15%', fontSize: 18 }} />
      <Sparkle style={{ top: '30%', right: '20%', fontSize: 12 }} />
      <Sparkle style={{ bottom: '25%', left: '25%', fontSize: 10 }} />
      <Sparkle style={{ bottom: '20%', right: '15%', fontSize: 14 }} />
      <Sparkle style={{ top: '15%', right: '35%', fontSize: 8 }} />

      {/* Mirror emblem */}
      <motion.div
        animate={{ y: [0, -16, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        style={{ marginBottom: 48, display: 'inline-block' }}
      >
        <svg width="120" height="140" viewBox="0 0 120 140" fill="none">
          <defs>
            <radialGradient id="ctaAura" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#C8B4F0" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#EDE4FF" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="ctaFig1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7B4BC8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#9B6BE8" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="ctaFig2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#C8922A" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#C8B4F0" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="ctaMirror" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F6C85F" stopOpacity="1" />
              <stop offset="100%" stopColor="#9B6BE8" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <ellipse cx="60" cy="70" rx="55" ry="65" fill="url(#ctaAura)" />
          <ellipse cx="60" cy="70" rx="46" ry="58" fill="rgba(237, 228, 255, 0.4)" stroke="#C8B4F0" strokeWidth="1.5" />
          {/* Left */}
          <circle cx="38" cy="38" r="10" fill="url(#ctaFig1)" fillOpacity="0.8" />
          <path d="M24 55 Q30 48 38 51 Q46 48 52 55 L55 95 Q47 102 38 103 Q29 102 21 95 Z" fill="url(#ctaFig1)" fillOpacity="0.6" />
          {/* Mirror */}
          <line x1="60" y1="10" x2="60" y2="130" stroke="url(#ctaMirror)" strokeWidth="1.5" strokeDasharray="5 3" />
          {/* Right */}
          <circle cx="82" cy="38" r="10" fill="url(#ctaFig2)" fillOpacity="0.45" />
          <path d="M68 55 Q74 48 82 51 Q90 48 96 55 L99 95 Q91 102 82 103 Q73 102 65 95 Z" fill="url(#ctaFig2)" fillOpacity="0.28" />
          {/* Crown */}
          <path d="M30 24 Q60 12 90 24" stroke="#F6C85F" strokeWidth="1" fill="none" strokeOpacity="0.6" />
          <text x="54" y="17" fontSize="8" fill="#F6C85F">✦</text>
        </svg>
      </motion.div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ color: '#C8922A', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: "'DM Sans', sans-serif", marginBottom: 20, fontWeight: 600 }}
        >
          ✦ คุณมาถึงจุดนี้แล้ว — เริ่มต้นเลย
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 5vw, 58px)', fontWeight: 600, color: '#2D1B5E', lineHeight: 1.2, maxWidth: 700, margin: '0 auto 20px' }}
        >
          พบกับตัวคุณที่{' '}
          <span style={{ background: 'linear-gradient(135deg, #7B4BC8, #9B6BE8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            รอให้ถูกเข้าใจ
          </span>
          {' '}มาตลอด
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ color: '#5A3D8A', fontSize: 16, lineHeight: 1.7, fontFamily: "'DM Sans', sans-serif", maxWidth: 440, margin: '0 auto 48px' }}
        >
          ไม่ต้องมีคำตอบทุกอย่างก่อน แค่เริ่มมองในทิศทางที่ถูกต้อง
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <a href="#features" style={{
            padding: '16px 36px', borderRadius: 50,
            background: 'linear-gradient(135deg, #7B4BC8 0%, #9B6BE8 100%)',
            color: '#FFFFFF', fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 500,
            textDecoration: 'none', boxShadow: '0 8px 30px rgba(123, 75, 200, 0.35)',
            transition: 'all 0.3s', display: 'inline-block',
          }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 12px 40px rgba(123, 75, 200, 0.55)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 8px 30px rgba(123, 75, 200, 0.35)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            เริ่ม Reflection ✨
          </a>
          <a href="#chatbot" style={{
            padding: '16px 36px', borderRadius: 50,
            background: 'rgba(255, 255, 255, 0.7)', border: '1.5px solid rgba(123, 75, 200, 0.3)',
            color: '#7B4BC8', fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 500,
            textDecoration: 'none', transition: 'all 0.3s', display: 'inline-block', backdropFilter: 'blur(10px)',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(123, 75, 200, 0.08)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.7)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            Explore Your Type
          </a>
          <a href="#pricing" style={{
            padding: '16px 36px', borderRadius: 50,
            background: 'rgba(246, 200, 95, 0.15)', border: '1.5px solid rgba(200, 146, 42, 0.3)',
            color: '#C8922A', fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 500,
            textDecoration: 'none', transition: 'all 0.3s', display: 'inline-block',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(246, 200, 95, 0.25)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(246, 200, 95, 0.15)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            Book a Live Session
          </a>
        </motion.div>
      </div>
    </section>
  );
}
