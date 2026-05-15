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
            <stop offset="0%" stopColor="#B9A7E8" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#3E1F73" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="aura2" cx="50%" cy="60%" r="50%">
            <stop offset="0%" stopColor="#F6C85F" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#101A3D" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="aura3" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#2D6CDF" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#101A3D" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="figGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#B9A7E8" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#3E1F73" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="figGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F6C85F" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#B9A7E8" stopOpacity="0.2" />
          </linearGradient>
          <linearGradient id="mirrorLine" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F6C85F" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#B9A7E8" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#2D6CDF" stopOpacity="0.2" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="softBlur">
            <feGaussianBlur stdDeviation="2" />
          </filter>
        </defs>

        {/* Background aura layers */}
        <ellipse cx="250" cy="280" rx="220" ry="260" fill="url(#aura1)" />
        <ellipse cx="250" cy="350" rx="180" ry="200" fill="url(#aura2)" />
        <ellipse cx="250" cy="280" rx="160" ry="200" fill="url(#aura3)" />

        {/* Outer ring — mirror frame */}
        <ellipse
          cx="250"
          cy="280"
          rx="160"
          ry="200"
          stroke="#B9A7E8"
          strokeWidth="0.5"
          strokeOpacity="0.3"
          strokeDasharray="4 6"
          fill="none"
        />
        <ellipse
          cx="250"
          cy="280"
          rx="175"
          ry="215"
          stroke="#F6C85F"
          strokeWidth="0.5"
          strokeOpacity="0.15"
          fill="none"
        />

        {/* Left figure — soft silhouette */}
        {/* Head */}
        <motion.ellipse
          cx="175"
          cy="140"
          rx="30"
          ry="36"
          fill="url(#figGrad1)"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Neck */}
        <motion.rect
          x="167"
          y="172"
          width="16"
          height="20"
          rx="8"
          fill="#B9A7E8"
          fillOpacity="0.5"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Shoulders + Body */}
        <motion.path
          d="M130 200 Q145 185 175 190 Q205 185 220 200 L230 330 Q210 345 175 348 Q140 345 120 330 Z"
          fill="url(#figGrad1)"
          fillOpacity="0.6"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Left arm */}
        <motion.path
          d="M130 205 Q110 240 105 290 Q103 310 115 320"
          stroke="#B9A7E8"
          strokeWidth="10"
          strokeLinecap="round"
          fill="none"
          strokeOpacity="0.4"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Right arm */}
        <motion.path
          d="M220 205 Q240 240 245 290 Q247 310 235 320"
          stroke="#B9A7E8"
          strokeWidth="10"
          strokeLinecap="round"
          fill="none"
          strokeOpacity="0.4"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Mirror line */}
        <motion.line
          x1="250"
          y1="60"
          x2="250"
          y2="520"
          stroke="url(#mirrorLine)"
          strokeWidth="1.5"
          filter="url(#glow)"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Right figure — reflection (more golden, faded) */}
        {/* Head */}
        <motion.ellipse
          cx="325"
          cy="140"
          rx="30"
          ry="36"
          fill="url(#figGrad2)"
          fillOpacity="0.45"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 9, delay: 0.3, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Neck */}
        <motion.rect
          x="317"
          y="172"
          width="16"
          height="20"
          rx="8"
          fill="#F6C85F"
          fillOpacity="0.25"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 9, delay: 0.3, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Shoulders + Body */}
        <motion.path
          d="M280 200 Q295 185 325 190 Q355 185 370 200 L380 330 Q360 345 325 348 Q290 345 270 330 Z"
          fill="url(#figGrad2)"
          fillOpacity="0.3"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 9, delay: 0.3, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Left arm */}
        <motion.path
          d="M280 205 Q260 240 255 290 Q253 310 265 320"
          stroke="#F6C85F"
          strokeWidth="10"
          strokeLinecap="round"
          fill="none"
          strokeOpacity="0.2"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 9, delay: 0.3, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Right arm */}
        <motion.path
          d="M370 205 Q390 240 395 290 Q397 310 385 320"
          stroke="#F6C85F"
          strokeWidth="10"
          strokeLinecap="round"
          fill="none"
          strokeOpacity="0.2"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 9, delay: 0.3, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Crown aura top */}
        <motion.path
          d="M175 100 Q250 70 325 100"
          stroke="#F6C85F"
          strokeWidth="1"
          fill="none"
          strokeOpacity="0.4"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.path
          d="M155 90 Q250 55 345 90"
          stroke="#B9A7E8"
          strokeWidth="0.5"
          fill="none"
          strokeOpacity="0.25"
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Ground reflection glow */}
        <ellipse
          cx="250"
          cy="440"
          rx="140"
          ry="25"
          fill="#3E1F73"
          fillOpacity="0.4"
          filter="url(#softBlur)"
        />

        {/* Floating particles */}
        {[
          { cx: 100, cy: 200, r: 2, color: '#F6C85F', delay: 0 },
          { cx: 400, cy: 150, r: 1.5, color: '#B9A7E8', delay: 1 },
          { cx: 80, cy: 380, r: 1, color: '#F6C85F', delay: 2 },
          { cx: 420, cy: 350, r: 2, color: '#B9A7E8', delay: 0.5 },
          { cx: 140, cy: 480, r: 1, color: '#2D6CDF', delay: 1.5 },
          { cx: 360, cy: 460, r: 1.5, color: '#F6C85F', delay: 3 },
        ].map((p, i) => (
          <motion.circle
            key={i}
            cx={p.cx}
            cy={p.cy}
            r={p.r}
            fill={p.color}
            animate={{
              opacity: [0, 1, 0],
              y: [0, -15, 0],
            }}
            transition={{
              duration: 5 + i,
              delay: p.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </svg>
    </div>
  );
}
