export default function Logo({ size = 40, showText = true, textColor = '#FAF8F4' }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logoGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#B9A7E8" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#3E1F73" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="logoGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F6C85F" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#B9A7E8" stopOpacity="0.6" />
          </linearGradient>
          <linearGradient id="mirrorGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F6C85F" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#B9A7E8" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {/* Left silhouette — abstract feminine figure */}
        <path
          d="M18 10 C14 10 11 14 11 19 C11 23 13 26 16 27.5 L14 42 C14 44 15.5 45.5 17 45.5 L21 45.5 C22.5 45.5 23 44 23 42 L21 27.5 C24 26 26 23 26 19 C26 14 23 10 18 10Z"
          fill="url(#logoGrad1)"
          opacity="0.85"
        />

        {/* Head left */}
        <circle cx="18" cy="10" r="4.5" fill="url(#logoGrad1)" opacity="0.8" />

        {/* Mirror line (vertical, center) */}
        <line
          x1="30"
          y1="6"
          x2="30"
          y2="54"
          stroke="url(#mirrorGrad)"
          strokeWidth="1"
          strokeDasharray="3 2"
          opacity="0.7"
        />

        {/* Right silhouette — reflection */}
        <path
          d="M42 10 C46 10 49 14 49 19 C49 23 47 26 44 27.5 L46 42 C46 44 44.5 45.5 43 45.5 L39 45.5 C37.5 45.5 37 44 37 42 L39 27.5 C36 26 34 23 34 19 C34 14 37 10 42 10Z"
          fill="url(#logoGrad2)"
          opacity="0.6"
        />

        {/* Head right */}
        <circle cx="42" cy="10" r="4.5" fill="url(#logoGrad2)" opacity="0.55" />

        {/* Aura crown curve — top */}
        <path
          d="M18 5 Q30 0 42 5"
          stroke="#F6C85F"
          strokeWidth="1"
          fill="none"
          opacity="0.5"
        />

        {/* Base curve */}
        <path
          d="M14 50 Q30 55 46 50"
          stroke="#B9A7E8"
          strokeWidth="0.8"
          fill="none"
          opacity="0.4"
        />
      </svg>

      {showText && (
        <div style={{ lineHeight: 1 }}>
          <div style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: size * 0.35,
            fontWeight: 500,
            color: textColor,
            letterSpacing: '0.02em',
          }}>
            You're Yourself
          </div>
          <div style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: size * 0.18,
            color: '#B9A7E8',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginTop: 2,
          }}>
            Self-Discovery
          </div>
        </div>
      )}
    </div>
  );
}
