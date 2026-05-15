import { motion } from 'framer-motion';
import FeatureCard from '../components/FeatureCard';
import { features } from '../data/features';

export default function Features() {
  return (
    <section
      id="features"
      style={{
        padding: '100px 24px',
        background: 'linear-gradient(180deg, #0D1230 0%, #101A3D 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glow */}
      <div style={{
        position: 'absolute',
        top: '30%',
        right: '-50px',
        width: 300,
        height: 300,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(45, 108, 223, 0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <p style={{
            color: '#F6C85F',
            fontSize: 11,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            fontFamily: "'DM Sans', sans-serif",
            marginBottom: 14,
          }}>
            What You'll Discover
          </p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(28px, 4vw, 46px)',
            fontWeight: 500,
            color: '#FAF8F4',
            lineHeight: 1.2,
            marginBottom: 16,
          }}>
            Your inner map,{' '}
            <span style={{
              background: 'linear-gradient(135deg, #B9A7E8, #D4C8F5)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              drawn by you.
            </span>
          </h2>
          <p style={{
            color: '#B9A7E8',
            fontSize: 16,
            maxWidth: 480,
            margin: '0 auto',
            lineHeight: 1.7,
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 300,
          }}>
            Six dimensions of self-reflection to give you a fuller, clearer picture of who you are — and who you're becoming.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 20,
        }}
          className="features-grid"
        >
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .features-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .features-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
