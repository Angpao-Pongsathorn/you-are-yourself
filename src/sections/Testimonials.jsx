import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "I finally understood why I keep repeating the same pattern in relationships. Not just 'what' — but the deeper 'why'. That was worth everything.",
    name: 'Nattha W.',
    type: 'INFP · Subscriber',
    auraColor: '#B9A7E8',
    stars: 5,
  },
  {
    quote: "It felt less like a reading and more like meeting myself. The session was so precise and warm — nothing felt like a label. Just clarity.",
    name: 'Krit M.',
    type: 'INTJ · Live Session',
    auraColor: '#2D6CDF',
    stars: 5,
  },
  {
    quote: "The MBTI chatbot helped me understand how to talk to my partner better. I finally get why our communication patterns were so different.",
    name: 'Piyapa S.',
    type: 'ENFJ · Premium Member',
    auraColor: '#F6C85F',
    stars: 5,
  },
  {
    quote: "I was skeptical at first. But the shadow work session showed me something I'd been avoiding for years. I actually cried. In a good way.",
    name: 'Arthit L.',
    type: 'ISTP · Deep Reading',
    auraColor: '#B9A7E8',
    stars: 5,
  },
  {
    quote: "The monthly growth guide is the only thing I actually look forward to and do consistently. It meets me where I am — not where I 'should' be.",
    name: 'Maneekwan P.',
    type: 'INFJ · Elite Subscriber',
    auraColor: '#F6C85F',
    stars: 5,
  },
];

function StarRating({ count }) {
  return (
    <div style={{ display: 'flex', gap: 3 }}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: '#F6C85F', fontSize: 12 }}>✦</span>
      ))}
    </div>
  );
}

function AuraAvatar({ color, size = 44 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" fill="none">
      <defs>
        <radialGradient id={`ta-${color.replace('#', '')}`} cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor={color} stopOpacity="0.6" />
          <stop offset="100%" stopColor={color} stopOpacity="0.1" />
        </radialGradient>
      </defs>
      <circle cx="22" cy="22" r="20" fill={`url(#ta-${color.replace('#', '')})`} />
      <circle cx="22" cy="15" r="6" fill={color} fillOpacity="0.5" />
      <path d="M10 30 Q15 23 22 26 Q29 23 34 30" stroke={color} strokeWidth="2" strokeLinecap="round" fill="none" strokeOpacity="0.4" />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section style={{
      padding: '100px 24px',
      background: 'linear-gradient(180deg, #101A3D 0%, #0D1230 100%)',
      overflow: 'hidden',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 56 }}
        >
          <p style={{
            color: '#F6C85F',
            fontSize: 11,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            fontFamily: "'DM Sans', sans-serif",
            marginBottom: 14,
          }}>
            Voices from the Journey
          </p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 500,
            color: '#FAF8F4',
            lineHeight: 1.2,
          }}>
            People who{' '}
            <span style={{
              background: 'linear-gradient(135deg, #B9A7E8, #D4C8F5)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              came clearer.
            </span>
          </h2>
        </motion.div>

        {/* Testimonials grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 20,
        }}
          className="testimonials-grid"
        >
          {testimonials.slice(0, 3).map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(185, 167, 232, 0.1)',
                borderRadius: 20,
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Subtle glow */}
              <div style={{
                position: 'absolute',
                top: -20,
                right: -20,
                width: 80,
                height: 80,
                borderRadius: '50%',
                background: `radial-gradient(circle, ${t.auraColor}15 0%, transparent 70%)`,
                pointerEvents: 'none',
              }} />

              <StarRating count={t.stars} />

              <p style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: 'italic',
                fontSize: 16,
                color: '#FAF8F4',
                lineHeight: 1.7,
                flex: 1,
              }}>
                "{t.quote}"
              </p>

              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <AuraAvatar color={t.auraColor} />
                <div>
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 14,
                    color: '#FAF8F4',
                    fontWeight: 500,
                    marginBottom: 2,
                  }}>
                    {t.name}
                  </p>
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 12,
                    color: '#B9A7E8',
                  }}>
                    {t.type}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Second row — 2 cards centered */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 20,
          marginTop: 20,
          maxWidth: 760,
          margin: '20px auto 0',
        }}
          className="testimonials-grid-2"
        >
          {testimonials.slice(3).map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(185, 167, 232, 0.1)',
                borderRadius: 20,
                padding: '32px 28px',
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
              }}
            >
              <StarRating count={t.stars} />
              <p style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: 'italic',
                fontSize: 16,
                color: '#FAF8F4',
                lineHeight: 1.7,
                flex: 1,
              }}>
                "{t.quote}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <AuraAvatar color={t.auraColor} />
                <div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: '#FAF8F4', fontWeight: 500, marginBottom: 2 }}>
                    {t.name}
                  </p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: '#B9A7E8' }}>
                    {t.type}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .testimonials-grid { grid-template-columns: 1fr !important; }
          .testimonials-grid-2 { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
