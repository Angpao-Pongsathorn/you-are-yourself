export default function Logo({ size = 40, showText = true, textColor = '#2D1B5E' }) {
  const id = `lg${size}`;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <svg width={size} height={size} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={`${id}a`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#B388FF" />
            <stop offset="50%" stopColor="#7B4BC8" />
            <stop offset="100%" stopColor="#4A148C" />
          </linearGradient>
          <linearGradient id={`${id}b`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD54F" />
            <stop offset="100%" stopColor="#FF8F00" />
          </linearGradient>
          <linearGradient id={`${id}c`} x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#CE93D8" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#E1BEE7" stopOpacity="0.4" />
          </linearGradient>
          <radialGradient id={`${id}glow`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#CE93D8" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#7B4BC8" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Outer glow */}
        <circle cx="30" cy="30" r="28" fill={`url(#${id}glow)`} />

        {/* Main gem — hexagonal crystal */}
        <polygon points="30,4 52,17 52,43 30,56 8,43 8,17"
          fill={`url(#${id}a)`} opacity="0.92" />

        {/* Inner facets top */}
        <polygon points="30,4 52,17 30,30" fill="#E1BEE7" opacity="0.25" />
        <polygon points="30,4 8,17 30,30" fill="#7B4BC8" opacity="0.3" />

        {/* Inner facets bottom */}
        <polygon points="52,43 30,56 30,30" fill="#4A148C" opacity="0.4" />
        <polygon points="8,43 30,56 30,30" fill="#6A1B9A" opacity="0.3" />

        {/* Center star burst */}
        <path d="M30 21 L32 28 L30 35 L28 28 Z" fill="#FFD54F" opacity="0.9" />
        <path d="M21 30 L28 28 L35 30 L28 32 Z" fill="#FFD54F" opacity="0.9" />

        {/* Gold accent lines */}
        <line x1="30" y1="4" x2="30" y2="56" stroke={`url(#${id}b)`} strokeWidth="0.5" opacity="0.4" />
        <line x1="8" y1="17" x2="52" y2="43" stroke="#FFD54F" strokeWidth="0.5" opacity="0.3" />
        <line x1="52" y1="17" x2="8" y2="43" stroke="#FFD54F" strokeWidth="0.5" opacity="0.3" />

        {/* Top sparkle */}
        <circle cx="30" cy="4" r="2" fill="#FFD54F" opacity="0.9" />
        <circle cx="8" cy="17" r="1.5" fill="#CE93D8" opacity="0.8" />
        <circle cx="52" cy="17" r="1.5" fill="#CE93D8" opacity="0.8" />
        <circle cx="8" cy="43" r="1.5" fill="#B39DDB" opacity="0.6" />
        <circle cx="52" cy="43" r="1.5" fill="#B39DDB" opacity="0.6" />
        <circle cx="30" cy="56" r="2" fill="#9C27B0" opacity="0.7" />

        {/* Inner highlight */}
        <polygon points="30,4 52,17 30,30 8,17"
          fill="none" stroke="#E1BEE7" strokeWidth="0.6" opacity="0.5" />
      </svg>

      {showText && (
        <div style={{ lineHeight: 1 }}>
          <div style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: size * 0.35,
            fontWeight: 600,
            color: textColor,
            letterSpacing: '0.02em',
          }}>
            You're Yourself
          </div>
          <div style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: size * 0.18,
            color: '#9B6BE8',
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
