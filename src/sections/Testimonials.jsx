import { motion } from 'framer-motion';

const testimonials = [
  { quote: "ฉันเข้าใจในที่สุดว่าทำไมถึงซ้ำรูปแบบเดิมในความสัมพันธ์ ไม่ใช่แค่ 'อะไร' — แต่เป็น 'ทำไม' ที่ลึกกว่า มันเปลี่ยนทุกอย่างเลย", name: 'Nattha W.', type: 'INFP · Subscriber', auraColor: '#C8B4F0', stars: 5 },
  { quote: "มันรู้สึกไม่เหมือนการดูดวง แต่เหมือนการได้พบตัวเองจริงๆ Session มัน precise และอบอุ่นมาก ไม่มีอะไรที่รู้สึกเหมือนถูกแปะ label เลย", name: 'Krit M.', type: 'INTJ · Live Session', auraColor: '#9B6BE8', stars: 5 },
  { quote: "MBTI chatbot ช่วยให้เข้าใจวิธีคุยกับแฟนได้ดีขึ้นมาก ในที่สุดก็เข้าใจว่าทำไม communication pattern เราถึงต่างกันขนาดนี้", name: 'Piyapa S.', type: 'ENFJ · Premium Member', auraColor: '#F6C85F', stars: 5 },
  { quote: "ตอนแรกก็ไม่แน่ใจนะ แต่ shadow work session มันทำให้เห็นบางอย่างที่หลีกเลี่ยงมาหลายปี ร้องไห้เลย แต่เป็นแบบดี", name: 'Arthit L.', type: 'ISTP · Deep Reading', auraColor: '#C8B4F0', stars: 5 },
  { quote: "Monthly growth guide คือสิ่งเดียวที่ฉันทำ consistently จริงๆ เพราะมันไม่ push คุณ แต่ meet คุณตรงที่คุณอยู่", name: 'Maneekwan P.', type: 'INFJ · Elite Subscriber', auraColor: '#F6C85F', stars: 5 },
];

function StarRating({ count }) {
  return (
    <div style={{ display: 'flex', gap: 3 }}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: '#C8922A', fontSize: 12 }}>✦</span>
      ))}
    </div>
  );
}

function AuraAvatar({ color, size = 44 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 44 44" fill="none">
      <defs>
        <radialGradient id={`ta-${color.replace('#', '')}`} cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor={color} stopOpacity="0.7" />
          <stop offset="100%" stopColor={color} stopOpacity="0.1" />
        </radialGradient>
      </defs>
      <circle cx="22" cy="22" r="20" fill={`url(#ta-${color.replace('#', '')})`} />
      <circle cx="22" cy="15" r="6" fill={color} fillOpacity="0.6" />
      <path d="M10 30 Q15 23 22 26 Q29 23 34 30" stroke={color} strokeWidth="2" strokeLinecap="round" fill="none" strokeOpacity="0.5" />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section style={{
      padding: '100px 24px',
      background: 'linear-gradient(180deg, #F5F0FF 0%, #EDE4FF 100%)',
      overflow: 'hidden',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 56 }}
        >
          <p style={{ color: '#C8922A', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: "'DM Sans', sans-serif", marginBottom: 14, fontWeight: 600 }}>
            ✦ Voices from the Journey
          </p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 600, color: '#2D1B5E', lineHeight: 1.2 }}>
            คนที่{' '}
            <span style={{ background: 'linear-gradient(135deg, #7B4BC8, #9B6BE8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              ชัดขึ้น
            </span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="testimonials-grid">
          {testimonials.slice(0, 3).map((t, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                background: 'rgba(255, 255, 255, 0.7)',
                border: '1px solid rgba(185, 167, 232, 0.25)',
                borderRadius: 20, padding: '32px 28px',
                display: 'flex', flexDirection: 'column', gap: 20,
                boxShadow: '0 4px 20px rgba(123, 75, 200, 0.06)',
              }}
            >
              <StarRating count={t.stars} />
              <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 15, color: '#2D1B5E', lineHeight: 1.75, flex: 1 }}>
                "{t.quote}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <AuraAvatar color={t.auraColor} />
                <div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: '#2D1B5E', fontWeight: 600, marginBottom: 2 }}>{t.name}</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: '#7B4BC8' }}>{t.type}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20, marginTop: 20, maxWidth: 760, margin: '20px auto 0' }} className="testimonials-grid-2">
          {testimonials.slice(3).map((t, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              style={{
                background: 'rgba(255, 255, 255, 0.7)',
                border: '1px solid rgba(185, 167, 232, 0.25)',
                borderRadius: 20, padding: '32px 28px',
                display: 'flex', flexDirection: 'column', gap: 20,
                boxShadow: '0 4px 20px rgba(123, 75, 200, 0.06)',
              }}
            >
              <StarRating count={t.stars} />
              <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 15, color: '#2D1B5E', lineHeight: 1.75, flex: 1 }}>
                "{t.quote}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <AuraAvatar color={t.auraColor} />
                <div>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 14, color: '#2D1B5E', fontWeight: 600, marginBottom: 2 }}>{t.name}</p>
                  <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 12, color: '#7B4BC8' }}>{t.type}</p>
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
