import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Choose Your Reflection Path',
    body: 'Begin with what resonates — personality insight, relationship patterns, life direction, or shadow work. No wrong entry point.',
    color: '#F6C85F',
  },
  {
    number: '02',
    title: 'Take a Short Personality Input',
    body: 'A brief, thoughtful set of questions to help calibrate your insight map. Not a test — a conversation starter with yourself.',
    color: '#B9A7E8',
  },
  {
    number: '03',
    title: 'Receive Your Insight Map',
    body: 'Your personalized overview of strengths, patterns, blind spots, and growth edges — drawn from your own responses.',
    color: '#2D6CDF',
  },
  {
    number: '04',
    title: 'Talk with Your Personality Guide',
    body: 'Explore your type through our MBTI chatbot, or book a live session with a real guide to go deeper.',
    color: '#B9A7E8',
  },
  {
    number: '05',
    title: 'Turn Insight into Action',
    body: 'Walk away with clarity you can use — in your choices, your relationships, your work, and your sense of direction.',
    color: '#F6C85F',
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      style={{
        padding: '100px 24px',
        background: 'linear-gradient(180deg, #101A3D 0%, #0D1535 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 72 }}
        >
          <p style={{
            color: '#F6C85F',
            fontSize: 11,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            fontFamily: "'DM Sans', sans-serif",
            marginBottom: 14,
          }}>
            How It Works
          </p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 500,
            color: '#FAF8F4',
            lineHeight: 1.2,
          }}>
            Five steps toward{' '}
            <span style={{
              background: 'linear-gradient(135deg, #B9A7E8, #D4C8F5)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              knowing yourself.
            </span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div style={{ position: 'relative' }}>
          {/* Vertical connecting line */}
          <div style={{
            position: 'absolute',
            left: 27,
            top: 48,
            bottom: 48,
            width: 1,
            background: 'linear-gradient(180deg, #F6C85F30, #B9A7E840, #2D6CDF30, #B9A7E840, #F6C85F30)',
            pointerEvents: 'none',
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                style={{
                  display: 'flex',
                  gap: 28,
                  alignItems: 'flex-start',
                  paddingBottom: index < steps.length - 1 ? 48 : 0,
                }}
              >
                {/* Number circle */}
                <div style={{
                  width: 56,
                  height: 56,
                  borderRadius: '50%',
                  background: `${step.color}15`,
                  border: `1.5px solid ${step.color}50`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  position: 'relative',
                  zIndex: 1,
                  boxShadow: `0 0 20px ${step.color}20`,
                }}>
                  <span style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 13,
                    fontWeight: 500,
                    color: step.color,
                    letterSpacing: '0.05em',
                  }}>
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div style={{ paddingTop: 12 }}>
                  <h3 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 20,
                    fontWeight: 500,
                    color: '#FAF8F4',
                    marginBottom: 8,
                  }}>
                    {step.title}
                  </h3>
                  <p style={{
                    color: '#B9A7E8',
                    fontSize: 14,
                    lineHeight: 1.7,
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 300,
                    maxWidth: 560,
                  }}>
                    {step.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
