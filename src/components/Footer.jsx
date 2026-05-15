import Logo from './Logo';

const footerLinks = {
  Explore: ['Features', 'Personality Guide', 'Pricing', 'How It Works'],
  Learn: ['MBTI Explained', 'Enneagram Basics', 'Human Design 101', 'Psychology & Growth'],
  Support: ['FAQ', 'Contact', 'Privacy Policy', 'Terms of Service'],
};

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(185, 167, 232, 0.1)',
      background: 'linear-gradient(180deg, transparent 0%, rgba(16, 26, 61, 0.8) 100%)',
      padding: '64px 24px 40px',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: 48,
          marginBottom: 60,
        }}>
          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <Logo size={36} />
            <p style={{
              color: '#B9A7E8',
              fontSize: 13,
              lineHeight: 1.7,
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 300,
              marginTop: 16,
              maxWidth: 220,
            }}>
              A space to meet yourself more clearly — your patterns, your strengths, your becoming.
            </p>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
              {['IG', 'TT', 'Line'].map(s => (
                <button
                  key={s}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    background: 'rgba(185, 167, 232, 0.08)',
                    border: '1px solid rgba(185, 167, 232, 0.2)',
                    color: '#B9A7E8',
                    fontSize: 11,
                    fontFamily: "'DM Sans', sans-serif",
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(246, 200, 95, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(246, 200, 95, 0.3)';
                    e.currentTarget.style.color = '#F6C85F';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(185, 167, 232, 0.08)';
                    e.currentTarget.style.borderColor = 'rgba(185, 167, 232, 0.2)';
                    e.currentTarget.style.color = '#B9A7E8';
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 11,
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#F6C85F',
                marginBottom: 16,
              }}>
                {category}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                {links.map(link => (
                  <li key={link}>
                    <a
                      href="#"
                      style={{
                        color: '#B9A7E8',
                        textDecoration: 'none',
                        fontSize: 13,
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 300,
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={e => e.target.style.color = '#FAF8F4'}
                      onMouseLeave={e => e.target.style.color = '#B9A7E8'}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div style={{
          borderTop: '1px solid rgba(185, 167, 232, 0.08)',
          paddingTop: 28,
          display: 'flex',
          flexWrap: 'wrap',
          gap: 16,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <p style={{
            color: '#5A5A7A',
            fontSize: 12,
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 300,
            maxWidth: 560,
            lineHeight: 1.6,
          }}>
            You're Yourself is a self-reflection and personal growth platform. Our tools and insights are for educational and introspective purposes only — not a substitute for professional psychological or medical advice.
          </p>
          <p style={{
            color: '#5A5A7A',
            fontSize: 12,
            fontFamily: "'DM Sans', sans-serif",
          }}>
            © 2025 You're Yourself. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
