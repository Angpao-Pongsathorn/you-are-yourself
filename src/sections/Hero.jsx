import { motion } from 'framer-motion';
import MirrorHeroVisual from '../components/MirrorHeroVisual';

/* Sparkle dot component — matches Instagram visual language */
function Sparkle({ style }) {
  return (
    <motion.span
      animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 2.5 + Math.random() * 2, repeat: Infinity, ease: 'easeInOut' }}
      style={{ position: 'absolute', color: '#F6C85F', fontSize: 12, pointerEvents: 'none', ...style }}
    >
      ✦
    </motion.span>
  );
}

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      background: 'linear-gradient(145deg, #EDE4FF 0%, #F5F0FF 25%, #E8DEFF 50%, #FFF0F8 75%, #F0EAFF 100%)',
      display: 'flex',
      alignItems: 'center',
      padding: '120px 24px 80px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Soft pastel blobs — matching Instagram bg style */}
      <div style={{
        position: 'absolute', top: '10%', left: '5%',
        width: 380, height: 380, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(185, 167, 232, 0.35) 0%, transparent 70%)',
        pointerEvents: 'none', animation: 'pulse-glow 7s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', bottom: '5%', right: '5%',
        width: 320, height: 320, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(246, 200, 95, 0.25) 0%, transparent 70%)',
        pointerEvents: 'none', animation: 'pulse-glow 9s ease-in-out 2s infinite',
      }} />
      <div style={{
        position: 'absolute', top: '50%', right: '15%',
        width: 250, height: 250, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(214, 188, 255, 0.3) 0%, transparent 70%)',
        pointerEvents: 'none', animation: 'pulse-glow 11s ease-in-out 4s infinite',
      }} />
      <div style={{
        position: 'absolute', bottom: '20%', left: '10%',
        width: 200, height: 200, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255, 200, 220, 0.3) 0%, transparent 70%)',
        pointerEvents: 'none', animation: 'pulse-glow 8s ease-in-out 1s infinite',
      }} />

      {/* Sparkles — Instagram signature */}
      <Sparkle style={{ top: '18%', left: '12%', fontSize: 16 }} />
      <Sparkle style={{ top: '30%', right: '18%', fontSize: 10 }} />
      <Sparkle style={{ bottom: '25%', left: '20%', fontSize: 12 }} />
      <Sparkle style={{ top: '60%', right: '8%', fontSize: 8 }} />
      <Sparkle style={{ top: '12%', right: '30%', fontSize: 14 }} />
      <Sparkle style={{ bottom: '15%', right: '25%', fontSize: 10 }} />

      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 60,
        alignItems: 'center',
      }} className="hero-grid">

        {/* Left: Copy */}
        <div>
          {/* Tag badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              background: 'rgba(246, 200, 95, 0.15)',
              border: '1px solid rgba(246, 200, 95, 0.5)',
              borderRadius: 50,
              padding: '6px 16px',
              marginBottom: 28,
            }}
          >
            <span style={{
              width: 7, height: 7, borderRadius: '50%',
              background: '#C8922A',
              display: 'inline-block',
              animation: 'pulse-glow 2s ease-in-out infinite',
            }} />
            <span style={{
              color: '#C8922A',
              fontSize: 12,
              fontFamily: "'DM Sans', sans-serif",
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              fontWeight: 500,
            }}>
              🧠 MBTI × Human Design
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
              fontWeight: 600,
              lineHeight: 1.15,
              color: '#2D1B5E',
              marginBottom: 24,
              letterSpacing: '-0.01em',
            }}
          >
            คุณคือ{' '}
            <span style={{
              background: 'linear-gradient(135deg, #7B4BC8, #9B6BE8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              คุณ
            </span>
            {' '}นั่นแหละ
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              color: '#5A3D8A',
              fontSize: 'clamp(15px, 2vw, 17px)',
              lineHeight: 1.75,
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 400,
              marginBottom: 12,
              maxWidth: 500,
            }}
          >
            เข้าใจตัวเองและใช้ชีวิตให้ตรงกับตัวตน ผ่าน MBTI, Human Design, Enneagram และ Psychology-based growth tools
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
              color: '#C8922A',
              marginBottom: 40,
            }}
          >
            ✦ "คุณไม่ได้หลงทาง คุณแค่กำลังค้นพบตัวเอง"
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
                background: 'linear-gradient(135deg, #7B4BC8 0%, #9B6BE8 100%)',
                color: '#FFFFFF',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 15,
                fontWeight: 500,
                textDecoration: 'none',
                letterSpacing: '0.02em',
                boxShadow: '0 8px 30px rgba(123, 75, 200, 0.35)',
                transition: 'all 0.3s',
                display: 'inline-block',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(123, 75, 200, 0.5)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(123, 75, 200, 0.35)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              เริ่มค้นหาตัวเอง ✨
            </a>

            <a
              href="#chatbot"
              style={{
                padding: '16px 32px',
                borderRadius: 50,
                background: 'rgba(255, 255, 255, 0.7)',
                border: '1.5px solid rgba(123, 75, 200, 0.3)',
                color: '#7B4BC8',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 15,
                fontWeight: 500,
                textDecoration: 'none',
                letterSpacing: '0.02em',
                transition: 'all 0.3s',
                display: 'inline-block',
                backdropFilter: 'blur(10px)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(123, 75, 200, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(123, 75, 200, 0.6)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.7)';
                e.currentTarget.style.borderColor = 'rgba(123, 75, 200, 0.3)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              คุยกับ Personality Guide
            </a>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            style={{ marginTop: 40, display: 'flex', alignItems: 'center', gap: 16 }}
          >
            <div style={{ display: 'flex' }}>
              {['#C8B4F0', '#F6C85F', '#9B8BC8', '#D4C8F5'].map((c, i) => (
                <div key={i} style={{
                  width: 32, height: 32, borderRadius: '50%',
                  background: `radial-gradient(circle, ${c} 0%, ${c}80 100%)`,
                  border: '2px solid white',
                  marginLeft: i > 0 ? -10 : 0,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                }} />
              ))}
            </div>
            <p style={{
              color: '#7B5AB0',
              fontSize: 13,
              fontFamily: "'DM Sans', sans-serif",
            }}>
              เข้าร่วมกับ <span style={{ color: '#7B4BC8', fontWeight: 600 }}>2,400+</span> คนที่กำลังเข้าใจตัวเองมากขึ้น
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
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
