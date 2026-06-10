import { motion } from 'framer-motion';

const steps = [
  { number: '01', title: 'Choose Your Reflection Path', body: 'เริ่มจากสิ่งที่รู้สึก resonance — personality insight, relationship patterns, life direction หรือ shadow work ไม่มีจุดเริ่มต้นที่ผิด', color: '#C8922A' },
  { number: '02', title: 'Take a Short Personality Input', body: 'ชุดคำถามสั้นๆ ที่ thoughtful เพื่อ calibrate insight map ของคุณ — ไม่ใช่การทดสอบ แต่คือการเริ่มต้นสนทนากับตัวเอง', color: '#7B4BC8' },
  { number: '03', title: 'Receive Your Insight Map', body: 'ภาพรวม personalized ของจุดแข็ง รูปแบบ blind spots และ growth edges — ดึงมาจากคำตอบของคุณเอง', color: '#9B6BE8' },
  { number: '04', title: 'Talk with Your Personality Guide', body: 'สำรวจ type ของคุณผ่าน MBTI chatbot หรือนัด live session กับ guide จริงเพื่อไปลึกกว่าเดิม', color: '#7B4BC8' },
  { number: '05', title: 'Turn Insight into Action', body: 'เดินออกไปพร้อม clarity ที่นำไปใช้ได้จริง — ในการตัดสินใจ ความสัมพันธ์ การทำงาน และความรู้สึกว่าชีวิตมีทิศทาง', color: '#C8922A' },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" style={{
      padding: '100px 24px',
      background: 'linear-gradient(180deg, #F5F0FF 0%, #EDE4FF 100%)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 72 }}
        >
          <p style={{ color: '#C8922A', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: "'DM Sans', sans-serif", marginBottom: 14, fontWeight: 600 }}>
            ✦ How It Works
          </p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 600, color: '#2D1B5E', lineHeight: 1.2 }}>
            5 ขั้นตอนสู่การ{' '}
            <span style={{ background: 'linear-gradient(135deg, #7B4BC8, #9B6BE8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              รู้จักตัวเอง
            </span>
          </h2>
        </motion.div>

        <div style={{ position: 'relative' }}>
          {/* Connecting line */}
          <div style={{
            position: 'absolute', left: 27, top: 48, bottom: 48, width: 1,
            background: 'linear-gradient(180deg, #C8922A40, #7B4BC840, #9B6BE840, #7B4BC840, #C8922A40)',
            pointerEvents: 'none',
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {steps.map((step, index) => (
              <motion.div key={step.number}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                style={{ display: 'flex', gap: 28, alignItems: 'flex-start', paddingBottom: index < steps.length - 1 ? 48 : 0 }}
              >
                <div style={{
                  width: 56, height: 56, borderRadius: '50%',
                  background: `${step.color}15`,
                  border: `1.5px solid ${step.color}50`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, position: 'relative', zIndex: 1,
                  boxShadow: `0 4px 16px ${step.color}20`,
                  backgroundColor: 'white',
                }}>
                  <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 600, color: step.color, letterSpacing: '0.05em' }}>
                    {step.number}
                  </span>
                </div>
                <div style={{ paddingTop: 12 }}>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 600, color: '#2D1B5E', marginBottom: 8 }}>
                    {step.title}
                  </h3>
                  <p style={{ color: '#5A3D8A', fontSize: 14, lineHeight: 1.7, fontFamily: "'DM Sans', sans-serif", fontWeight: 400, maxWidth: 560 }}>
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
