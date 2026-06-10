import { motion } from 'framer-motion';

export default function MirrorHeroVisual() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: 480 }}>
      <svg
        viewBox="0 0 500 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%', maxWidth: 500 }}
      >
        <defs>
          <radialGradient id="aura1" cx="50%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#C8B4F0" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#EDE4FF" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="aura2" cx="50%" cy="60%" r="50%">
            <stop offset="0%" stopColor="#F6C85F" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#F5F0FF" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="aura3" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#9B6BE8" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#EDE4FF" stopOpacity="0" />
          </radialGradient>
          {/* Mirror frame gradient */}
          <linearGradient id="mirrorFrame" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C8B4F0" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#F6C85F" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#9B6BE8" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="figGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7B4BC8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#9B6BE8" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient id="figGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#C8922A" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#C8B4F0" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="mirrorLine" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F6C85F" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#9B6BE8" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#7B4BC8" stopOpacity="0.2" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="softBlur">
            <feGaussianBlur stdDeviation="8" />
          </filter>
          {/* Mirror glass fill */}
          <linearGradient id="mirrorGlass" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EDE4FF" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#FFF0F8" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Soft background blobs */}
        <ellipse cx="250" cy="280" rx="220" ry="260" fill="url(#aura1)" />
        <ellipse cx="250" cy="350" rx="180" ry="200" fill="url(#aura2)" />
        <ellipse cx="250" cy="280" rx="160" ry="200" fill="url(#aura3)" />

        {/* Mirror frame — oval with gradient stroke */}
        <ellipse cx="250" cy="290" rx="168" ry="210"
          fill="url(#mirrorGlass)"
          stroke="url(#mirrorFrame)"
          strokeWidth="2.5"
        />
        {/* Inner mirror rim */}
        <ellipse cx="250" cy="290" rx="158" ry="200"
          fill="none"
          stroke="rgba(246, 200, 95, 0.3)"
          strokeWidth="1"
        />

        {/* Mirror top ornament */}
        <path d="M200 82 Q250 60 300 82" stroke="url(#mirrorFrame)" strokeWidth="2" fill="none" />
        <circle cx="250" cy="68" r="5" fill="#F6C85F" fillOpacity="0.7" />
        <circle cx="225" cy="76" r="3" fill="#C8B4F0" fillOpacity="0.6" />
        <circle cx="275" cy="76" r="3" fill="#C8B4F0" fillOpacity="0.6" />

        {/* Left figure — soft violet silhouette */}
        <motion.g
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ellipse cx="175" cy="145" rx="28" ry="33" fill="url(#figGrad1)" fillOpacity="0.85" />
          <rect x="168" y="174" width="14" height="18" rx="7" fill="#7B4BC8" fillOpacity="0.6" />
          <path d="M132 202 Q147 187 175 192 Q203 187 218 202 L226 325 Q207 340 175 343 Q143 340 124 325 Z"
            fill="url(#figGrad1)" fillOpacity="0.7" />
          {/* Left arm */}
          <path d="M132 207 Q113 242 108 290 Q106 308 118 318"
            stroke="#7B4BC8" strokeWidth="12" strokeLinecap="round" fill="none" strokeOpacity="0.5" />
          {/* Right arm */}
          <path d="M218 207 Q237 242 242 290 Q244 308 232 318"
            stroke="#7B4BC8" strokeWidth="12" strokeLinecap="round" fill="none" strokeOpacity="0.5" />
        </motion.g>

        {/* Mirror center line */}
        <motion.line
          x1="250" y1="65" x2="250" y2="520"
          stroke="url(#mirrorLine)"
          strokeWidth="1.5"
          strokeDasharray="6 4"
          filter="url(#glow)"
          animate={{ opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Right figure — golden reflection */}
        <motion.g
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 9, delay: 0.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ellipse cx="325" cy="145" rx="28" ry="33" fill="url(#figGrad2)" fillOpacity="0.5" />
          <rect x="318" y="174" width="14" height="18" rx="7" fill="#C8922A" fillOpacity="0.3" />
          <path d="M282 202 Q297 187 325 192 Q353 187 368 202 L376 325 Q357 340 325 343 Q293 340 274 325 Z"
            fill="url(#figGrad2)" fillOpacity="0.35" />
          {/* Arms */}
          <path d="M282 207 Q263 242 258 290 Q256 308 268 318"
            stroke="#C8922A" strokeWidth="12" strokeLinecap="round" fill="none" strokeOpacity="0.25" />
          <path d="M368 207 Q387 242 392 290 Q394 308 382 318"
            stroke="#C8922A" strokeWidth="12" strokeLinecap="round" fill="none" strokeOpacity="0.25" />
        </motion.g>

        {/* Crown aura */}
        <motion.path
          d="M175 108 Q250 85 325 108"
          stroke="#F6C85F" strokeWidth="1.5" fill="none"
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        {/* Ground shadow */}
        <ellipse cx="250" cy="445" rx="130" ry="18"
          fill="#C8B4F0" fillOpacity="0.2" filter="url(#softBlur)" />

        {/* Sparkle particles */}
        {[
          { cx: 100, cy: 200, r: 3, color: '#F6C85F', delay: 0 },
          { cx: 400, cy: 155, r: 2, color: '#C8B4F0', delay: 1 },
          { cx: 85, cy: 370, r: 1.5, color: '#F6C85F', delay: 2 },
          { cx: 415, cy: 340, r: 2.5, color: '#9B6BE8', delay: 0.5 },
          { cx: 145, cy: 475, r: 1.5, color: '#7B4BC8', delay: 1.5 },
          { cx: 355, cy: 460, r: 2, color: '#F6C85F', delay: 3 },
          { cx: 320, cy: 110, r: 1.5, color: '#C8B4F0', delay: 2.5 },
          { cx: 180, cy: 100, r: 1, color: '#F6C85F', delay: 0.8 },
        ].map((p, i) => (
          <motion.circle key={i} cx={p.cx} cy={p.cy} r={p.r} fill={p.color}
            animate={{ opacity: [0, 1, 0], scale: [0.5, 1.3, 0.5], y: [0, -12, 0] }}
            transition={{ duration: 4 + i * 0.5, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}

        {/* IG-style small star decorations */}
        <motion.text x="92" y="195" fontSize="14" fill="#F6C85F" fillOpacity="0.8"
          animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 3, repeat: Infinity }}>✦</motion.text>
        <motion.text x="398" y="150" fontSize="10" fill="#C8B4F0" fillOpacity="0.7"
          animate={{ opacity: [0.3, 0.9, 0.3] }} transition={{ duration: 4, delay: 1, repeat: Infinity }}>✦</motion.text>
        <motion.text x="410" y="345" fontSize="12" fill="#F6C85F" fillOpacity="0.6"
          animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 5, delay: 2, repeat: Infinity }}>✦</motion.text>
      </svg>
    </div>
  );
}
