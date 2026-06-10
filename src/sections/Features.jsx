import { motion } from 'framer-motion';
import FeatureCard from '../components/FeatureCard';
import { features } from '../data/features';

export default function Features() {
  return (
    <section id="features" style={{
      padding: '100px 24px',
      background: 'linear-gradient(180deg, #EDE4FF 0%, #F5F0FF 100%)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: '30%', right: '-30px', width: 250, height: 250,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(246, 200, 95, 0.2) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <p style={{ color: '#C8922A', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: "'DM Sans', sans-serif", marginBottom: 14, fontWeight: 600 }}>
            ✦ What You'll Discover
          </p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 600, color: '#2D1B5E', lineHeight: 1.2, marginBottom: 16,
          }}>
            แผนที่ภายใน{' '}
            <span style={{ background: 'linear-gradient(135deg, #7B4BC8, #9B6BE8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              ที่วาดโดยคุณ
            </span>
          </h2>
          <p style={{ color: '#5A3D8A', fontSize: 16, maxWidth: 480, margin: '0 auto', lineHeight: 1.7, fontFamily: "'DM Sans', sans-serif" }}>
            6 มิติของการสำรวจตัวเอง เพื่อให้คุณเห็นภาพที่ชัดและครบขึ้นว่าคุณเป็นใคร และกำลังเป็นใคร
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="features-grid">
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .features-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 640px) { .features-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
