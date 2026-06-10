import { motion } from 'framer-motion';

const pillars = [
  {
    icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2 Q14 7 19 7 Q17 13 12 16 Q7 13 5 7 Q10 7 12 2Z" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinejoin="round" /><path d="M9 11 L11 13 L15 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>),
    label: 'Psychology-Inspired',
    text: 'Framework ของเราดึงมาจาก personality psychology ที่ established — MBTI, Enneagram และ self-development research สมัยใหม่',
    accent: '#C8922A',
  },
  {
    icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" fill="none" /><path d="M12 7 L12 12 L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>),
    label: 'For Reflection, Not Prediction',
    text: 'เราไม่อ้างว่าจะบอกอนาคตคุณ เราเสนอเครื่องมือสำหรับเข้าใจปัจจุบัน — รูปแบบและศักยภาพของคุณ',
    accent: '#7B4BC8',
  },
  {
    icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 21 C7 21 3 17 3 12 C3 7 7 3 12 3 C17 3 21 7 21 12 C21 17 17 21 12 21Z" stroke="currentColor" strokeWidth="1.5" fill="none" /><path d="M8 12 Q12 8 16 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" /><circle cx="12" cy="15" r="1.5" fill="currentColor" /></svg>),
    label: 'No Labels, No Judgment',
    text: 'Personality types คือ lens ไม่ใช่ limit เราไม่ได้มาขังคุณ — เรามาช่วยให้คุณเห็นตัวเองมากขึ้น',
    accent: '#9B6BE8',
  },
  {
    icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3 17 Q7 10 12 12 Q17 14 21 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" /><circle cx="12" cy="12" r="2" fill="currentColor" fillOpacity="0.4" /></svg>),
    label: 'Growing With You',
    text: 'Guide, chatbot และ tools ของเราพัฒนาไปพร้อมกับคุณ Self-knowledge ไม่ใช่ปลายทาง — แต่เป็น practice ที่มีชีวิต',
    accent: '#C8922A',
  },
];

export default function Trust() {
  return (
    <section style={{
      padding: '100px 24px',
      background: 'linear-gradient(180deg, #EDE4FF 0%, #F5F0FF 100%)',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 64 }}
        >
          <p style={{ color: '#C8922A', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: "'DM Sans', sans-serif", marginBottom: 14, fontWeight: 600 }}>
            ✦ Our Commitment
          </p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 600, color: '#2D1B5E', lineHeight: 1.2, marginBottom: 12 }}>
            สร้างบน clarity ไม่ใช่ mystery
          </h2>
          <p style={{ color: '#5A3D8A', fontSize: 15, maxWidth: 480, margin: '0 auto', lineHeight: 1.7, fontFamily: "'DM Sans', sans-serif" }}>
            เราผสาน personality frameworks กับ guided reflection และ personal growth practices — ซื่อสัตย์ อบอุ่น และ grounded เสมอ
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }} className="trust-grid">
          {pillars.map((p, i) => (
            <motion.div key={p.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                background: 'rgba(255, 255, 255, 0.7)',
                border: '1px solid rgba(185, 167, 232, 0.25)',
                borderRadius: 18, padding: '28px 24px', textAlign: 'center',
                boxShadow: '0 4px 20px rgba(123, 75, 200, 0.06)',
              }}
            >
              <div style={{
                width: 50, height: 50, borderRadius: '50%',
                background: `${p.accent}12`, border: `1.5px solid ${p.accent}35`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: p.accent, margin: '0 auto 18px',
              }}>
                {p.icon}
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 600, color: '#2D1B5E', marginBottom: 10, lineHeight: 1.3 }}>
                {p.label}
              </h3>
              <p style={{ color: '#5A3D8A', fontSize: 13, lineHeight: 1.65, fontFamily: "'DM Sans', sans-serif" }}>
                {p.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{
            textAlign: 'center', marginTop: 60, padding: '36px 40px',
            background: 'rgba(246, 200, 95, 0.08)',
            border: '1px solid rgba(200, 146, 42, 0.2)', borderRadius: 20,
          }}
        >
          <p style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontSize: 'clamp(16px, 2vw, 20px)', color: '#2D1B5E', lineHeight: 1.65, maxWidth: 640, margin: '0 auto' }}>
            "เราผสาน personality frameworks กับ guided reflection และ personal growth practices — ไม่ใช่การทำนาย ไม่ใช่ label แต่เป็นมุมมองที่อบอุ่นและชัดเจนมากขึ้นต่อสิ่งที่คุณเป็นอยู่แล้ว"
          </p>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .trust-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 640px) { .trust-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
