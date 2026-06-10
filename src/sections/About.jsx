import { motion } from 'framer-motion';

const pillars = [
  { title: 'เราไม่ได้บอกว่าคุณต้องเป็นใคร', body: 'ไม่มีแม่แบบที่ต้องเข้าหา เราเชื่อว่าสิ่งที่ทรงพลังที่สุดคือการเข้าใจว่าคุณเป็นใครอยู่แล้ว', accent: '#C8922A' },
  { title: 'เราช่วยให้คุณเห็นตัวเองชัดขึ้น', body: 'จุดแข็ง รูปแบบ แรงขับ — ส่วนใหญ่เราสัมผัสได้แต่ยังไม่มีภาษาหรือพื้นที่ในการสำรวจอย่างเต็มที่', accent: '#7B4BC8' },
  { title: 'เราพบกับ shadow ของคุณโดยไม่ตัดสิน', body: 'ส่วนที่ซ้ำ ที่ซ่อน ที่ขัดแย้ง — นั่นไม่ใช่ข้อบกพร่อง แต่คือข้อมูล เราสำรวจมันด้วยกัน', accent: '#9B6BE8' },
  { title: 'เราเปลี่ยน insight เป็นชีวิตที่เป็นคุณ', body: 'ไม่ใช่เป้าหมายของคนอื่นในร่างกายคุณ แต่เป็นเส้นทางที่หยั่งรากลึกในธรรมชาติที่แท้จริงของคุณ', accent: '#C8922A' },
];

export default function About() {
  return (
    <section style={{
      padding: '100px 24px',
      background: 'linear-gradient(180deg, #F5F0FF 0%, #EDE4FF 50%, #F5F0FF 100%)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: '50%', left: '-60px', width: 300, height: 300,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(200, 180, 240, 0.3) 0%, transparent 70%)',
        transform: 'translateY(-50%)', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}
          className="about-grid">

          {/* Left visual */}
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
                  <stop offset="0%" stopColor="#C8B4F0" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#EDE4FF" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="aboutFig" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7B4BC8" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#9B6BE8" stopOpacity="0.4" />
                </linearGradient>
                <linearGradient id="aboutMirrorLine" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#F6C85F" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#C8B4F0" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              <ellipse cx="180" cy="210" rx="160" ry="185" fill="url(#aboutAura)" />
              {/* Oval mirror frame */}
              <ellipse cx="180" cy="210" rx="100" ry="135"
                fill="rgba(237, 228, 255, 0.5)"
                stroke="#C8B4F0" strokeWidth="1.5" />
              <ellipse cx="180" cy="210" rx="108" ry="143"
                stroke="#F6C85F" strokeWidth="0.8" strokeOpacity="0.4" fill="none" />
              {/* Figure */}
              <circle cx="180" cy="105" r="28" fill="url(#aboutFig)" fillOpacity="0.8" />
              <path d="M155 145 Q165 130 180 135 Q195 130 205 145 L215 270 Q200 285 180 288 Q160 285 145 270 Z"
                fill="url(#aboutFig)" fillOpacity="0.6" />
              {/* Reflection */}
              <circle cx="180" cy="315" r="22" fill="url(#aboutFig)" fillOpacity="0.2" />
              <path d="M160 295 Q170 285 180 288 Q190 285 200 295 L205 360 Q195 370 180 372 Q165 370 155 360 Z"
                fill="url(#aboutFig)" fillOpacity="0.12" />
              {/* Divider */}
              <line x1="80" y1="290" x2="280" y2="290" stroke="url(#aboutMirrorLine)" strokeWidth="1" strokeOpacity="0.4" />
              {/* Decorative curves */}
              <path d="M120 60 Q180 40 240 60 Q260 80 250 100" stroke="#F6C85F" strokeWidth="1" fill="none" strokeOpacity="0.5" />
              <path d="M100 360 Q180 385 260 360" stroke="#C8B4F0" strokeWidth="0.8" fill="none" strokeOpacity="0.4" />
              {/* Sparkles */}
              <text x="100" y="160" fontSize="12" fill="#F6C85F">✦</text>
              <text x="240" y="130" fontSize="8" fill="#C8B4F0">✦</text>
              <text x="85" y="310" fontSize="10" fill="#F6C85F">✦</text>
            </svg>
          </motion.div>

          {/* Right text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
            >
              <p style={{ color: '#C8922A', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: "'DM Sans', sans-serif", marginBottom: 16, fontWeight: 600 }}>
                ✦ Our Philosophy
              </p>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 'clamp(28px, 4vw, 44px)',
                fontWeight: 600, color: '#2D1B5E', lineHeight: 1.25, marginBottom: 16,
              }}>
                กระจกที่ชัดที่สุดคือ{' '}
                <span style={{ background: 'linear-gradient(135deg, #7B4BC8, #9B6BE8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  กระจกที่คุณถือเอง
                </span>
              </h2>
              <p style={{ color: '#5A3D8A', fontSize: 15, lineHeight: 1.75, fontFamily: "'DM Sans', sans-serif", fontWeight: 400, marginBottom: 40 }}>
                เราสร้างแพลตฟอร์มนี้สำหรับคนที่รู้สึกว่ามีบางอย่างในตัวเองที่ยังไม่ถูกเข้าใจ — และอยากมีพื้นที่ที่เป็นระบบและอบอุ่นในการค้นพบมัน
              </p>
            </motion.div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {pillars.map((p, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}
                >
                  <div style={{
                    width: 7, height: 7, borderRadius: '50%', background: p.accent,
                    flexShrink: 0, marginTop: 7, boxShadow: `0 0 10px ${p.accent}60`,
                  }} />
                  <div>
                    <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, color: '#2D1B5E', marginBottom: 4, fontWeight: 600 }}>
                      {p.title}
                    </p>
                    <p style={{ color: '#5A3D8A', fontSize: 13, lineHeight: 1.65, fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}>
                      {p.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`@media (max-width: 768px) { .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; } }`}</style>
    </section>
  );
}
