import { motion } from 'framer-motion';

export default function PricingCard({ plan, index, type }) {
  const isHighlight = plan.highlight;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        position: 'relative',
        borderRadius: 24,
        padding: isHighlight ? '2px' : 0,
        background: isHighlight
          ? 'linear-gradient(135deg, #F6C85F 0%, #B9A7E8 50%, #2D6CDF 100%)'
          : 'transparent',
      }}
    >
      <div style={{
        background: isHighlight
          ? 'linear-gradient(145deg, #1A1535 0%, #2A1F5E 100%)'
          : 'rgba(255,255,255,0.03)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: isHighlight ? 'none' : '1px solid rgba(185, 167, 232, 0.12)',
        borderRadius: isHighlight ? 22 : 24,
        padding: '36px 30px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: isHighlight ? '0 0 50px rgba(246, 200, 95, 0.12)' : 'none',
      }}>
        {/* Badge */}
        {plan.badge && (
          <div style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #F6C85F, #FAD98A)',
            color: '#101A3D',
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            padding: '4px 14px',
            borderRadius: 20,
            marginBottom: 20,
            fontFamily: "'DM Sans', sans-serif",
            alignSelf: 'flex-start',
          }}>
            {plan.badge}
          </div>
        )}

        <div style={{ marginBottom: 8 }}>
          <h3 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 22,
            fontWeight: 500,
            color: '#FAF8F4',
            marginBottom: 4,
          }}>
            {plan.name}
          </h3>
          {plan.tagline && (
            <p style={{
              color: '#B9A7E8',
              fontSize: 13,
              fontFamily: "'DM Sans', sans-serif",
            }}>
              {plan.tagline}
            </p>
          )}
          {plan.duration && (
            <p style={{
              color: '#B9A7E8',
              fontSize: 13,
              fontFamily: "'DM Sans', sans-serif",
            }}>
              {plan.duration}
            </p>
          )}
        </div>

        {/* Price */}
        <div style={{ margin: '20px 0', display: 'flex', alignItems: 'baseline', gap: 8 }}>
          <span style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 40,
            fontWeight: 600,
            color: isHighlight ? '#F6C85F' : '#FAF8F4',
            lineHeight: 1,
          }}>
            {plan.price}
          </span>
          {plan.period && (
            <span style={{
              color: '#B9A7E8',
              fontSize: 13,
              fontFamily: "'DM Sans', sans-serif",
            }}>
              {plan.period}
            </span>
          )}
        </div>

        {plan.description && (
          <p style={{
            color: '#D4C8F5',
            fontSize: 13,
            lineHeight: 1.6,
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 300,
            marginBottom: 24,
          }}>
            {plan.description}
          </p>
        )}

        {/* Features */}
        <ul style={{
          listStyle: 'none',
          padding: 0,
          margin: '0 0 28px',
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          flex: 1,
        }}>
          {plan.features.map((f, i) => (
            <li key={i} style={{
              display: 'flex',
              gap: 10,
              alignItems: 'flex-start',
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 13,
              color: '#D4C8F5',
              fontWeight: 300,
            }}>
              <span style={{
                color: isHighlight ? '#F6C85F' : '#B9A7E8',
                flexShrink: 0,
                marginTop: 1,
              }}>✦</span>
              {f}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button style={{
          width: '100%',
          padding: '14px 24px',
          borderRadius: 50,
          border: isHighlight ? 'none' : '1px solid rgba(185, 167, 232, 0.3)',
          background: isHighlight
            ? 'linear-gradient(135deg, #F6C85F 0%, #FAD98A 100%)'
            : 'rgba(185, 167, 232, 0.08)',
          color: isHighlight ? '#101A3D' : '#FAF8F4',
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 14,
          fontWeight: 500,
          letterSpacing: '0.03em',
          cursor: 'pointer',
          transition: 'all 0.3s',
          boxShadow: isHighlight ? '0 0 25px rgba(246, 200, 95, 0.3)' : 'none',
        }}
          onMouseEnter={e => {
            if (isHighlight) {
              e.target.style.boxShadow = '0 0 40px rgba(246, 200, 95, 0.5)';
              e.target.style.transform = 'translateY(-1px)';
            } else {
              e.target.style.background = 'rgba(185, 167, 232, 0.15)';
              e.target.style.borderColor = 'rgba(185, 167, 232, 0.5)';
            }
          }}
          onMouseLeave={e => {
            if (isHighlight) {
              e.target.style.boxShadow = '0 0 25px rgba(246, 200, 95, 0.3)';
              e.target.style.transform = 'translateY(0)';
            } else {
              e.target.style.background = 'rgba(185, 167, 232, 0.08)';
              e.target.style.borderColor = 'rgba(185, 167, 232, 0.3)';
            }
          }}
        >
          {plan.cta}
        </button>
      </div>
    </motion.div>
  );
}
