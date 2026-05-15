import { motion } from 'framer-motion';

const pillars = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2 Q14 7 19 7 Q17 13 12 16 Q7 13 5 7 Q10 7 12 2Z"
          stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" />
        <path d="M9 11 L11 13 L15 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: 'Psychology-Inspired',
    text: 'Our frameworks draw from established personality psychology — MBTI, Enneagram, and modern self-development research.',
    accent: '#F6C85F',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M12 7 L12 12 L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    label: 'For Reflection, Not Prediction',
    text: 'We never claim to tell you your future. We offer tools for understanding your present — your patterns, your potential.',
    accent: '#B9A7E8',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 21 C7 21 3 17 3 12 C3 7 7 3 12 3 C17 3 21 7 21 12 C21 17 17 21 12 21Z"
          stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M8 12 Q12 8 16 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <circle cx="12" cy="15" r="1.5" fill="currentColor" />
      </svg>
    ),
    label: 'No Labels, No Judgment',
    text: 'Personality types are lenses, not limits. We\'re not here to box you in — we\'re here to help you see more of yourself.',
    accent: '#2D6CDF',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3 17 Q7 10 12 12 Q17 14 21 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <circle cx="12" cy="12" r="2" fill="currentColor" fillOpacity="0.4" />
      </svg>
    ),
    label: 'Always Growing With You',
    text: 'Our guides, chatbot, and tools evolve as you do. Self-knowledge isn\'t a destination — it\'s a living, breathing practice.',
    accent: '#F6C85F',
  },
];

export default function Trust() {
  return (
    <section style={{
      padding: '100px 24px',
      background: 'linear-gradient(180deg, #0D1535 0%, #101A3D 100%)',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
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
            Our Commitment
          </p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 500,
            color: '#FAF8F4',
            lineHeight: 1.2,
            marginBottom: 12,
          }}>
            Built on clarity, not mystery.
          </h2>
          <p style={{
            color: '#B9A7E8',
            fontSize: 15,
            maxWidth: 480,
            margin: '0 auto',
            lineHeight: 1.7,
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 300,
          }}>
            We combine personality frameworks with guided reflection and personal growth practices — grounded, warm, and always honest.
          </p>
        </motion.div>

        {/* Pillars */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 24,
        }}
          className="trust-grid"
        >
          {pillars.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(185, 167, 232, 0.1)',
                borderRadius: 18,
                padding: '28px 24px',
                textAlign: 'center',
              }}
            >
              <div style={{
                width: 50,
                height: 50,
                borderRadius: '50%',
                background: `${p.accent}12`,
                border: `1px solid ${p.accent}30`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: p.accent,
                margin: '0 auto 18px',
              }}>
                {p.icon}
              </div>
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 16,
                fontWeight: 500,
                color: '#FAF8F4',
                marginBottom: 10,
                lineHeight: 1.3,
              }}>
                {p.label}
              </h3>
              <p style={{
                color: '#B9A7E8',
                fontSize: 13,
                lineHeight: 1.65,
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
              }}>
                {p.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{
            textAlign: 'center',
            marginTop: 60,
            padding: '36px 40px',
            background: 'rgba(246, 200, 95, 0.04)',
            border: '1px solid rgba(246, 200, 95, 0.12)',
            borderRadius: 20,
          }}
        >
          <p style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: 'italic',
            fontSize: 'clamp(16px, 2vw, 20px)',
            color: '#FAF8F4',
            lineHeight: 1.65,
            maxWidth: 640,
            margin: '0 auto',
          }}>
            "We combine personality frameworks with guided reflection and personal growth practices. Not fortune-telling. Not labels. Just a clearer, warmer view of who you already are."
          </p>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .trust-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .trust-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
