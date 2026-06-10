import { motion } from 'framer-motion';

const RINGS = [
  { rx: 195, ry: 215, stroke: 'rgba(185,167,232,0.55)', sw: 1.5, dash: '0' },
  { rx: 175, ry: 195, stroke: 'rgba(246,200,95,0.35)', sw: 1, dash: '4 6' },
  { rx: 155, ry: 175, stroke: 'rgba(155,107,232,0.5)', sw: 1.5, dash: '0' },
  { rx: 130, ry: 150, stroke: 'rgba(246,200,95,0.45)', sw: 1, dash: '2 5' },
  { rx: 108, ry: 128, stroke: 'rgba(185,167,232,0.6)', sw: 1.5, dash: '0' },
];

const STARS = [
  { x: 80, y: 170, size: 18, color: '#F6C85F', delay: 0 },
  { x: 420, y: 130, size: 13, color: '#CE93D8', delay: 1.2 },
  { x: 65, y: 360, size: 10, color: '#F6C85F', delay: 2.1 },
  { x: 435, y: 330, size: 14, color: '#B388FF', delay: 0.7 },
  { x: 130, y: 490, size: 9, color: '#F6C85F', delay: 1.8 },
  { x: 370, y: 475, size: 11, color: '#CE93D8', delay: 3.0 },
  { x: 250, y: 55, size: 15, color: '#FFD54F', delay: 0.4 },
  { x: 175, y: 82, size: 7, color: '#E1BEE7', delay: 2.5 },
  { x: 325, y: 82, size: 7, color: '#E1BEE7', delay: 1.5 },
  { x: 100, y: 270, size: 8, color: '#CE93D8', delay: 3.5 },
  { x: 400, y: 250, size: 9, color: '#F6C85F', delay: 2.8 },
];

function StarBurst({ x, y, size, color, delay }) {
  return (
    <motion.g
      animate={{ rotate: [0, 180, 360], opacity: [0.5, 1, 0.5], scale: [0.8, 1.2, 0.8] }}
      transition={{ duration: 4 + delay * 0.6, delay, repeat: Infinity, ease: 'easeInOut' }}
      style={{ originX: x, originY: y, transformBox: 'fill-box', transformOrigin: 'center' }}
    >
      <text x={x} y={y} fontSize={size} fill={color} textAnchor="middle" dominantBaseline="central"
        style={{ userSelect: 'none' }}>✦</text>
    </motion.g>
  );
}

export default function MirrorHeroVisual() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: 520 }}>
      <svg viewBox="0 0 500 600" fill="none" xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%', maxWidth: 500 }}>
        <defs>
          <radialGradient id="heroCore" cx="50%" cy="45%" r="50%">
            <stop offset="0%" stopColor="#EDE4FF" stopOpacity="0.95" />
            <stop offset="60%" stopColor="#DDD0FF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#F5F0FF" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="heroGoldAura" cx="50%" cy="55%" r="45%">
            <stop offset="0%" stopColor="#FFF8DC" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#F6C85F" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="crystalGrad" x1="10%" y1="0%" x2="90%" y2="100%">
            <stop offset="0%" stopColor="#B388FF" />
            <stop offset="40%" stopColor="#7B4BC8" />
            <stop offset="100%" stopColor="#4A148C" />
          </linearGradient>
          <linearGradient id="crystalShine" x1="0%" y1="0%" x2="60%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="goldRay" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#FFD54F" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#F6C85F" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="gemGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#CE93D8" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#7B4BC8" stopOpacity="0" />
          </radialGradient>
          <filter id="heroBlur">
            <feGaussianBlur stdDeviation="12" />
          </filter>
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* Background aura layers */}
        <ellipse cx="250" cy="300" rx="230" ry="260" fill="url(#heroCore)" />
        <ellipse cx="250" cy="320" rx="190" ry="220" fill="url(#heroGoldAura)" />

        {/* Animated rotating rings */}
        {RINGS.map((r, i) => (
          <motion.ellipse key={i} cx="250" cy="300"
            rx={r.rx} ry={r.ry}
            stroke={r.stroke} strokeWidth={r.sw}
            strokeDasharray={r.dash}
            fill="none"
            animate={{ rotate: [0, i % 2 === 0 ? 360 : -360] }}
            transition={{ duration: 18 + i * 6, repeat: Infinity, ease: 'linear' }}
            style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
          />
        ))}

        {/* Gold rays from center */}
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => {
          const rad = (deg * Math.PI) / 180;
          const len = i % 3 === 0 ? 90 : 55;
          return (
            <motion.line key={deg}
              x1={250} y1={300}
              x2={250 + Math.cos(rad) * len}
              y2={300 + Math.sin(rad) * len}
              stroke={i % 3 === 0 ? '#FFD54F' : '#CE93D8'}
              strokeWidth={i % 3 === 0 ? 1.2 : 0.7}
              strokeOpacity={i % 3 === 0 ? 0.55 : 0.3}
              animate={{ opacity: [0.2, 0.7, 0.2] }}
              transition={{ duration: 3 + i * 0.25, delay: i * 0.15, repeat: Infinity }}
            />
          );
        })}

        {/* Central crystal gem */}
        <motion.g
          animate={{ y: [0, -14, 0], rotate: [0, 2, -2, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
        >
          {/* Glow halo */}
          <ellipse cx="250" cy="300" rx="70" ry="70" fill="url(#gemGlow)" filter="url(#heroBlur)" />

          {/* Main hexagon crystal */}
          <polygon points="250,220 318,260 318,340 250,380 182,340 182,260"
            fill="url(#crystalGrad)" opacity="0.93" filter="url(#softGlow)" />

          {/* Facet highlights */}
          <polygon points="250,220 318,260 250,300 182,260" fill="white" opacity="0.18" />
          <polygon points="250,220 318,260 250,300" fill="white" opacity="0.12" />

          {/* Bottom facets */}
          <polygon points="318,340 250,380 250,300" fill="#4A148C" opacity="0.35" />
          <polygon points="182,340 250,380 250,300" fill="#6A1B9A" opacity="0.28" />

          {/* Crystal shine overlay */}
          <polygon points="250,220 318,260 318,340 250,380 182,340 182,260"
            fill="url(#crystalShine)" />

          {/* Gold star in center */}
          <motion.text x="250" y="310" fontSize="32" fill="#FFD54F"
            textAnchor="middle" dominantBaseline="central"
            animate={{ opacity: [0.7, 1, 0.7], scale: [0.9, 1.1, 0.9] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            style={{ userSelect: 'none' }}
          >✦</motion.text>

          {/* Vertex gems */}
          <circle cx="250" cy="220" r="6" fill="#FFD54F" opacity="0.95" />
          <circle cx="318" cy="260" r="5" fill="#CE93D8" opacity="0.9" />
          <circle cx="318" cy="340" r="5" fill="#CE93D8" opacity="0.9" />
          <circle cx="250" cy="380" r="6" fill="#9C27B0" opacity="0.85" />
          <circle cx="182" cy="340" r="5" fill="#CE93D8" opacity="0.9" />
          <circle cx="182" cy="260" r="5" fill="#CE93D8" opacity="0.9" />

          {/* Inner edge lines */}
          <line x1="250" y1="220" x2="250" y2="380" stroke="#FFD54F" strokeWidth="0.8" opacity="0.35" />
          <line x1="182" y1="260" x2="318" y2="340" stroke="#FFD54F" strokeWidth="0.8" opacity="0.25" />
          <line x1="318" y1="260" x2="182" y2="340" stroke="#FFD54F" strokeWidth="0.8" opacity="0.25" />
        </motion.g>

        {/* Orbiting dots */}
        {[0, 72, 144, 216, 288].map((startDeg, i) => (
          <motion.g key={i}
            animate={{ rotate: [startDeg, startDeg + 360] }}
            transition={{ duration: 12 + i * 2, repeat: Infinity, ease: 'linear' }}
            style={{ transformBox: 'fill-box', transformOrigin: '250px 300px' }}
          >
            <circle cx={250 + 105} cy={300} r={i % 2 === 0 ? 4 : 2.5}
              fill={i % 2 === 0 ? '#FFD54F' : '#CE93D8'}
              opacity={i % 2 === 0 ? 0.9 : 0.7}
            />
          </motion.g>
        ))}

        {/* Outer sparkle stars */}
        {STARS.map((s, i) => <StarBurst key={i} {...s} />)}

        {/* Bottom ground reflection */}
        <ellipse cx="250" cy="495" rx="100" ry="10"
          fill="#C8B4F0" fillOpacity="0.15" filter="url(#heroBlur)" />
      </svg>
    </div>
  );
}
