import { motion } from 'framer-motion';

const pillars = [
  {
    title: 'We don\'t tell you who to be.',
    body: 'There\'s no template here, no mold to fit into. We believe the most powerful thing you can do is understand who you already are.',
    accent: '#F6C85F',
  },
  {
    title: 'We help you see yourself more clearly.',
    body: 'Strengths, patterns, drives — most of us sense them but have never had the language or space to explore them fully.',
    accent: '#B9A7E8',
  },
  {
    title: 'We meet your shadows without judgment.',
    body: 'The parts of you that repeat, that hide, that contradict — those aren\'t flaws. They\'re information. We explore them together.',
    accent: '#2D6CDF',
  },
  {
    title: 'We turn insight into a life that feels like yours.',
    body: 'Not someone else\'s goals in your body. Not expectations wearing your name. A path rooted in your actual nature.',
    accent: '#F6C85F',
  },
];

export default function About() {
  return (
    <section style={{
      padding: '100px 24px',
      background: 'linear-gradient(180deg, #101A3D 0%, #0D1230 50%, #101A3D 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background decorative element */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '-100px',
        width: 350,
        height: 350,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(90, 45, 158, 0.15) 0%, transparent 70%)',
        transform: 'translateY(-50%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 80,
          alignItems: 'center',
        }}
          className="about-grid"
        >
          {/* Left: Abstract visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}
          >
            <svg viewBox="0 0 360 420" fill="none" style={{ width: '100%', maxWidth: 360 }}>
              <defs>
                <radialGradient id="aboutAura" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#3E1F73" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#101A3D" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="aboutFig" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#B9A7E8" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#2D6CDF" stopOpacity="0.3" />
                </linearGradient>
                <linearGradient id="aboutMirror" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#F6C85F" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#B9A7E8" stopOpacity="0.2" />
                </linearGradient>
              </defs>

              <ellipse cx="180" cy="210" rx="160" ry="185" fill="url(#aboutAura)" />

              {/* Oval mirror frame */}
              <ellipse cx="180" cy="210" rx="100" ry="135"
                stroke="#B9A7E8" strokeWidth="1" strokeOpacity="0.25" fill="none" />
              <ellipse cx="180" cy="210" rx="108" ry="143"
                stroke="#F6C85F" strokeWidth="0.5" strokeOpacity="0.15" fill="none" />

              {/* Inner figure */}
              <circle cx="180" cy="105" r="28" fill="url(#aboutFig)" fillOpacity="0.7" />
              <path d="M155 145 Q165 130 180 135 Q195 130 205 145 L215 270 Q200 285 180 288 Q160 285 145 270 Z"
                fill="url(#aboutFig)" fillOpacity="0.5" />

              {/* Reflection below — faded */}
              <circle cx="180" cy="315" r="22" fill="url(#aboutFig)" fillOpacity="0.2" />
              <path d="M160 295 Q170 285 180 288 Q190 285 200 295 L205 360 Q195 370 180 372 Q165 370 155 360 Z"
                fill="url(#aboutFig)" fillOpacity="0.15" />

              {/* Horizontal divider */}
              <line x1="80" y1="290" x2="280" y2="290"
                stroke="url(#aboutMirror)" strokeWidth="1" strokeOpacity="0.3" />

              {/* Flowing line detail */}
              <path d="M120 60 Q180 40 240 60 Q260 80 250 100"
                stroke="#F6C85F" strokeWidth="0.8" fill="none" strokeOpacity="0.35" />
              <path d="M100 360 Q180 385 260 360"
                stroke="#B9A7E8" strokeWidth="0.8" fill="none" strokeOpacity="0.25" />
            </svg>
          </motion.div>

          {/* Right: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
            >
              <p style={{
                color: '#F6C85F',
                fontSize: 11,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                fontFamily: "'DM Sans', sans-serif",
                marginBottom: 16,
              }}>
                Our Philosophy
              </p>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(28px, 4vw, 44px)',
                fontWeight: 500,
                color: '#FAF8F4',
                lineHeight: 1.25,
                marginBottom: 16,
              }}>
                The clearest mirror is the one
                {' '}
                <span style={{
                  background: 'linear-gradient(135deg, #B9A7E8, #D4C8F5)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  you hold yourself.
                </span>
              </h2>
              <p style={{
                color: '#B9A7E8',
                fontSize: 15,
                lineHeight: 1.75,
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
                marginBottom: 40,
              }}>
                We built this platform for the person who senses there's more to understand about themselves — and wants a thoughtful, psychology-inspired space to do exactly that.
              </p>
            </motion.div>

            {/* Pillars */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {pillars.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  style={{
                    display: 'flex',
                    gap: 16,
                    alignItems: 'flex-start',
                  }}
                >
                  <div style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: p.accent,
                    flexShrink: 0,
                    marginTop: 7,
                    boxShadow: `0 0 10px ${p.accent}80`,
                  }} />
                  <div>
                    <p style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 16,
                      color: '#FAF8F4',
                      marginBottom: 4,
                      fontWeight: 500,
                    }}>
                      {p.title}
                    </p>
                    <p style={{
                      color: '#B9A7E8',
                      fontSize: 13,
                      lineHeight: 1.65,
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 300,
                    }}>
                      {p.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
