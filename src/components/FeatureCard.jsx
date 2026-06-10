import { motion } from 'framer-motion';

const icons = {
  strength: (<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 3 L17 10 L24 10 L18.5 14.5 L20.5 21.5 L14 17.5 L7.5 21.5 L9.5 14.5 L4 10 L11 10 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" fill="none" /><circle cx="14" cy="14" r="3" fill="currentColor" fillOpacity="0.3" /></svg>),
  shadow: (<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><ellipse cx="14" cy="14" rx="8" ry="10" stroke="currentColor" strokeWidth="1.5" fill="none" /><path d="M14 4 Q20 14 14 24" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" /><circle cx="14" cy="14" r="2" fill="currentColor" fillOpacity="0.5" /></svg>),
  personality: (<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" /><circle cx="14" cy="14" r="5" stroke="currentColor" strokeWidth="1" fill="none" /><line x1="14" y1="4" x2="14" y2="24" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" /><line x1="4" y1="14" x2="24" y2="14" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" /></svg>),
  relationship: (<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="9" cy="11" r="5" stroke="currentColor" strokeWidth="1.5" fill="none" /><circle cx="19" cy="11" r="5" stroke="currentColor" strokeWidth="1.5" fill="none" /><path d="M4 22 Q9 17 14 19 Q19 17 24 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" /></svg>),
  direction: (<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 24 L14 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><path d="M8 14 L14 8 L20 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" /><circle cx="14" cy="24" r="2.5" fill="currentColor" fillOpacity="0.4" /></svg>),
  guide: (<svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M6 8 Q6 5 9 5 L19 5 Q22 5 22 8 L22 20 Q22 23 19 23 L9 23 Q6 23 6 20 Z" stroke="currentColor" strokeWidth="1.5" fill="none" /><line x1="10" y1="11" x2="18" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><line x1="10" y1="15" x2="16" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><line x1="10" y1="19" x2="14" y2="19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>),
};

export default function FeatureCard({ feature, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      style={{
        background: 'rgba(255, 255, 255, 0.65)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(185, 167, 232, 0.25)',
        borderRadius: 20,
        padding: '32px 28px',
        cursor: 'default',
        transition: 'border-color 0.3s, box-shadow 0.3s',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(123, 75, 200, 0.06)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = `${feature.accent}60`;
        e.currentTarget.style.boxShadow = `0 8px 32px ${feature.accent}20`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(185, 167, 232, 0.25)';
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(123, 75, 200, 0.06)';
      }}
    >
      {/* Corner glow */}
      <div style={{
        position: 'absolute', top: -20, right: -20, width: 70, height: 70,
        borderRadius: '50%',
        background: `radial-gradient(circle, ${feature.accent}20 0%, transparent 70%)`,
        pointerEvents: 'none',
      }} />

      {/* Icon */}
      <div style={{
        width: 52, height: 52, borderRadius: 14,
        background: `${feature.accent}15`,
        border: `1.5px solid ${feature.accent}35`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: feature.accent, marginBottom: 20,
      }}>
        {icons[feature.icon]}
      </div>

      <h3 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: 20, fontWeight: 600, color: '#2D1B5E', marginBottom: 10,
      }}>
        {feature.title}
      </h3>
      <p style={{
        color: '#5A3D8A', fontSize: 14, lineHeight: 1.7,
        fontFamily: "'DM Sans', sans-serif", fontWeight: 400,
      }}>
        {feature.description}
      </p>
    </motion.div>
  );
}
