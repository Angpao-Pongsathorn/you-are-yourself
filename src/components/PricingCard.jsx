import { motion } from 'framer-motion';

export default function PricingCard({ plan, index }) {
  const isHighlight = plan.highlight;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        position: 'relative', borderRadius: 24,
        padding: isHighlight ? '2px' : 0,
        background: isHighlight
          ? 'linear-gradient(135deg, #F6C85F 0%, #C8B4F0 50%, #7B4BC8 100%)'
          : 'transparent',
      }}
    >
      <div style={{
        background: isHighlight ? 'linear-gradient(145deg, #F0EAFF 0%, #EAE0FF 100%)' : 'rgba(255, 255, 255, 0.7)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: isHighlight ? 'none' : '1px solid rgba(185, 167, 232, 0.25)',
        borderRadius: isHighlight ? 22 : 24,
        padding: '36px 30px',
        height: '100%', display: 'flex', flexDirection: 'column',
        boxShadow: isHighlight
          ? '0 12px 40px rgba(123, 75, 200, 0.18)'
          : '0 4px 20px rgba(123, 75, 200, 0.06)',
      }}>
        {plan.badge && (
          <div style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #C8922A, #E8A830)',
            color: '#FFFFFF', fontSize: 11, fontWeight: 600,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            padding: '4px 14px', borderRadius: 20, marginBottom: 20,
            fontFamily: "'DM Sans', sans-serif", alignSelf: 'flex-start',
          }}>
            {plan.badge}
          </div>
        )}

        <div style={{ marginBottom: 8 }}>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 600, color: '#2D1B5E', marginBottom: 4 }}>
            {plan.name}
          </h3>
          {plan.tagline && <p style={{ color: '#7B4BC8', fontSize: 13, fontFamily: "'DM Sans', sans-serif" }}>{plan.tagline}</p>}
          {plan.duration && <p style={{ color: '#7B4BC8', fontSize: 13, fontFamily: "'DM Sans', sans-serif" }}>{plan.duration}</p>}
        </div>

        <div style={{ margin: '20px 0', display: 'flex', alignItems: 'baseline', gap: 8 }}>
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 40, fontWeight: 700, color: isHighlight ? '#7B4BC8' : '#2D1B5E', lineHeight: 1 }}>
            {plan.price}
          </span>
          {plan.period && <span style={{ color: '#8A7AAA', fontSize: 13, fontFamily: "'DM Sans', sans-serif" }}>{plan.period}</span>}
        </div>

        {plan.description && (
          <p style={{ color: '#5A3D8A', fontSize: 13, lineHeight: 1.6, fontFamily: "'DM Sans', sans-serif", marginBottom: 24 }}>
            {plan.description}
          </p>
        )}

        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px', display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
          {plan.features.map((f, i) => (
            <li key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: '#5A3D8A' }}>
              <span style={{ color: isHighlight ? '#C8922A' : '#9B6BE8', flexShrink: 0, marginTop: 1 }}>✦</span>
              {f}
            </li>
          ))}
        </ul>

        <button style={{
          width: '100%', padding: '14px 24px', borderRadius: 50,
          border: isHighlight ? 'none' : '1.5px solid rgba(123, 75, 200, 0.3)',
          background: isHighlight
            ? 'linear-gradient(135deg, #7B4BC8 0%, #9B6BE8 100%)'
            : 'rgba(255, 255, 255, 0.8)',
          color: isHighlight ? '#FFFFFF' : '#7B4BC8',
          fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500,
          letterSpacing: '0.03em', cursor: 'pointer', transition: 'all 0.3s',
          boxShadow: isHighlight ? '0 6px 24px rgba(123, 75, 200, 0.3)' : 'none',
        }}
          onMouseEnter={e => {
            if (isHighlight) { e.target.style.boxShadow = '0 10px 32px rgba(123, 75, 200, 0.5)'; e.target.style.transform = 'translateY(-1px)'; }
            else { e.target.style.background = 'rgba(123, 75, 200, 0.06)'; e.target.style.borderColor = 'rgba(123, 75, 200, 0.5)'; }
          }}
          onMouseLeave={e => {
            if (isHighlight) { e.target.style.boxShadow = '0 6px 24px rgba(123, 75, 200, 0.3)'; e.target.style.transform = 'translateY(0)'; }
            else { e.target.style.background = 'rgba(255, 255, 255, 0.8)'; e.target.style.borderColor = 'rgba(123, 75, 200, 0.3)'; }
          }}
        >
          {plan.cta}
        </button>
      </div>
    </motion.div>
  );
}
