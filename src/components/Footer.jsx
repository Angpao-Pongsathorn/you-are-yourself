import Logo from './Logo';

const footerLinks = {
  Explore: ['Features', 'Personality Guide', 'Pricing', 'How It Works'],
  Learn: ['MBTI Explained', 'Enneagram Basics', 'Human Design 101', 'Psychology & Growth'],
  Support: ['FAQ', 'Contact', 'Privacy Policy', 'Terms of Service'],
};

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(185, 167, 232, 0.25)',
      background: 'linear-gradient(180deg, #EDE4FF 0%, #E0D5FF 100%)',
      padding: '64px 24px 40px',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 48, marginBottom: 60 }}>
          <div>
            <Logo size={36} />
            <p style={{ color: '#5A3D8A', fontSize: 13, lineHeight: 1.7, fontFamily: "'DM Sans', sans-serif", marginTop: 16, maxWidth: 220 }}>
              พื้นที่ที่คุณกลับมาพบตัวเองได้ชัดขึ้น — รูปแบบ จุดแข็ง และการเป็นตัวเอง
            </p>
            <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
              {['IG', 'TT', 'Line'].map(s => (
                <button key={s} style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.6)',
                  border: '1px solid rgba(185, 167, 232, 0.4)',
                  color: '#7B4BC8', fontSize: 11, fontFamily: "'DM Sans', sans-serif",
                  cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'all 0.3s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(200, 146, 42, 0.12)'; e.currentTarget.style.borderColor = 'rgba(200, 146, 42, 0.4)'; e.currentTarget.style.color = '#C8922A'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.6)'; e.currentTarget.style.borderColor = 'rgba(185, 167, 232, 0.4)'; e.currentTarget.style.color = '#7B4BC8'; }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C8922A', marginBottom: 16 }}>
                {category}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {links.map(link => (
                  <li key={link}>
                    <a href="#" style={{ color: '#5A3D8A', textDecoration: 'none', fontSize: 13, fontFamily: "'DM Sans', sans-serif", transition: 'color 0.2s' }}
                      onMouseEnter={e => e.target.style.color = '#7B4BC8'}
                      onMouseLeave={e => e.target.style.color = '#5A3D8A'}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ borderTop: '1px solid rgba(185, 167, 232, 0.2)', paddingTop: 28, display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ color: '#8A7AAA', fontSize: 12, fontFamily: "'DM Sans', sans-serif", maxWidth: 560, lineHeight: 1.6 }}>
            You're Yourself คือแพลตฟอร์ม self-reflection และ personal growth เครื่องมือของเราเพื่อการศึกษาและการสำรวจตัวเองเท่านั้น — ไม่ใช่การทดแทนคำปรึกษาจากผู้เชี่ยวชาญด้านจิตวิทยาหรือการแพทย์
          </p>
          <p style={{ color: '#8A7AAA', fontSize: 12, fontFamily: "'DM Sans', sans-serif" }}>
            © 2025 You're Yourself. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
