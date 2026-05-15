import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { mbtiTypes, samplePrompts } from '../data/mbtiTypes';

function AuraAvatar({ type, size = 80 }) {
  const t = mbtiTypes.find(m => m.type === type);
  if (!t) return null;
  return (
    <svg width={size} height={size} viewBox="0 0 80 80" fill="none">
      <defs>
        <radialGradient id={`av-${type}`} cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor={t.auraColor2} stopOpacity="0.8" />
          <stop offset="100%" stopColor={t.auraColor1} stopOpacity="0.2" />
        </radialGradient>
        <radialGradient id={`av-glow-${type}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={t.color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={t.color} stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="40" cy="40" r="38" fill={`url(#av-glow-${type})`} />
      <circle cx="40" cy="40" r="28" fill={`url(#av-${type})`} />
      {/* Abstract figure */}
      <circle cx="40" cy="28" r="8" fill={t.color} fillOpacity="0.6" />
      <path d="M26 48 Q32 40 40 43 Q48 40 54 48 L56 64 Q48 70 40 71 Q32 70 24 64 Z"
        fill={t.color} fillOpacity="0.4" />
      <circle cx="40" cy="40" r="36" stroke={t.color} strokeWidth="0.8" strokeOpacity="0.3" fill="none" />
    </svg>
  );
}

function ChatMessage({ msg, isUser }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      style={{
        display: 'flex',
        justifyContent: isUser ? 'flex-end' : 'flex-start',
        marginBottom: 12,
      }}
    >
      <div style={{
        maxWidth: '75%',
        padding: '12px 16px',
        borderRadius: isUser ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
        background: isUser
          ? 'linear-gradient(135deg, #3E1F73, #2D6CDF)'
          : 'rgba(255, 255, 255, 0.06)',
        border: isUser ? 'none' : '1px solid rgba(185, 167, 232, 0.15)',
        color: '#FAF8F4',
        fontSize: 13,
        lineHeight: 1.6,
        fontFamily: "'DM Sans', sans-serif",
        fontWeight: 300,
      }}>
        {msg}
      </div>
    </motion.div>
  );
}

const mockConversations = {
  INFJ: [
    { user: true, msg: "How does this type think in relationships?" },
    { user: false, msg: "I experience relationships as a deep responsibility. I don't connect casually — when I let someone in, I'm paying close attention to who they actually are, beneath the surface they present to the world. I want the real conversation, not the polite one." },
  ],
  ENTP: [
    { user: true, msg: "What are their hidden fears?" },
    { user: false, msg: "Honestly? Becoming ordinary. Being stuck in a system that doesn't see my potential. Not having anyone who can keep up with where my mind goes. I need intellectual friction to feel alive — without it, I go looking for it in ways that can seem disruptive." },
  ],
  INTJ: [
    { user: true, msg: "How do they make decisions under pressure?" },
    { user: false, msg: "Faster and more clearly than most. Pressure removes the noise — I go directly to data, logic, and probable outcomes. Emotion doesn't go away, but I don't let it veto clarity. I'd rather make a hard right call than a comfortable wrong one." },
  ],
  ENFP: [
    { user: true, msg: "What makes them feel truly understood?" },
    { user: false, msg: "When someone sees the depth behind the enthusiasm. People assume I'm always up — but I have these quiet, searching moments too. The person who notices both? Who doesn't try to manage my energy or explain it? That person has me completely." },
  ],
};

export default function ChatbotSection() {
  const [selectedType, setSelectedType] = useState('INFJ');
  const [messages, setMessages] = useState(mockConversations['INFJ'] || []);
  const [inputVal, setInputVal] = useState('');

  const currentType = mbtiTypes.find(t => t.type === selectedType);

  const handleTypeSelect = (type) => {
    setSelectedType(type);
    setMessages(mockConversations[type] || [
      { user: true, msg: "Tell me about this type." },
      { user: false, msg: mbtiTypes.find(t => t.type === type)?.description || '' },
    ]);
    setInputVal('');
  };

  const handlePromptClick = (prompt) => {
    const newMessages = [
      ...messages,
      { user: true, msg: prompt },
      { user: false, msg: currentType?.sampleResponse || "That's a great question. Let me reflect on that..." },
    ];
    setMessages(newMessages);
  };

  const handleSend = () => {
    if (!inputVal.trim()) return;
    const newMessages = [
      ...messages,
      { user: true, msg: inputVal },
      { user: false, msg: currentType?.sampleResponse || "I appreciate you asking. Here's how I'd put it..." },
    ];
    setMessages(newMessages);
    setInputVal('');
  };

  return (
    <section
      id="chatbot"
      style={{
        padding: '100px 24px',
        background: 'linear-gradient(180deg, #101A3D 0%, #0E1535 50%, #101A3D 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 56 }}
        >
          <p style={{
            color: '#F6C85F',
            fontSize: 11,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            fontFamily: "'DM Sans', sans-serif",
            marginBottom: 14,
          }}>
            Personality Guide
          </p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(28px, 4vw, 46px)',
            fontWeight: 500,
            color: '#FAF8F4',
            lineHeight: 1.2,
            marginBottom: 14,
          }}>
            Talk with any{' '}
            <span style={{
              background: 'linear-gradient(135deg, #F6C85F, #FAD98A)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              personality type.
            </span>
          </h2>
          <p style={{
            color: '#B9A7E8',
            fontSize: 15,
            maxWidth: 500,
            margin: '0 auto',
            lineHeight: 1.7,
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 300,
          }}>
            Choose a type and explore how they think, feel, connect, and grow. A lens for understanding yourself and the people around you.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.5fr',
          gap: 32,
          alignItems: 'start',
        }}
          className="chatbot-grid"
        >
          {/* Left: Type selector */}
          <div>
            <p style={{
              color: '#B9A7E8',
              fontSize: 11,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              fontFamily: "'DM Sans', sans-serif",
              marginBottom: 16,
            }}>
              Select a type to explore
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 8,
              marginBottom: 28,
            }}>
              {mbtiTypes.map(t => (
                <button
                  key={t.type}
                  onClick={() => handleTypeSelect(t.type)}
                  style={{
                    padding: '8px 4px',
                    borderRadius: 10,
                    border: selectedType === t.type
                      ? `1px solid ${t.color}`
                      : '1px solid rgba(185, 167, 232, 0.12)',
                    background: selectedType === t.type
                      ? `${t.color}20`
                      : 'rgba(255,255,255,0.02)',
                    color: selectedType === t.type ? t.color : '#B9A7E8',
                    fontSize: 12,
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: selectedType === t.type ? 500 : 400,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    boxShadow: selectedType === t.type ? `0 0 16px ${t.color}30` : 'none',
                  }}
                >
                  {t.type}
                </button>
              ))}
            </div>

            {/* Selected type detail */}
            <AnimatePresence mode="wait">
              {currentType && (
                <motion.div
                  key={currentType.type}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(185, 167, 232, 0.12)',
                    borderRadius: 16,
                    padding: '24px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
                    <AuraAvatar type={currentType.type} size={64} />
                    <div>
                      <p style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 18,
                        color: '#FAF8F4',
                        marginBottom: 2,
                      }}>
                        {currentType.title}
                      </p>
                      <p style={{
                        color: currentType.color,
                        fontSize: 12,
                        fontFamily: "'DM Sans', sans-serif",
                      }}>
                        {currentType.type}
                      </p>
                    </div>
                  </div>
                  <p style={{
                    color: '#B9A7E8',
                    fontSize: 12,
                    lineHeight: 1.6,
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 300,
                    marginBottom: 14,
                  }}>
                    {currentType.tagline}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {currentType.traits.map(trait => (
                      <span key={trait} style={{
                        padding: '4px 10px',
                        borderRadius: 20,
                        background: `${currentType.color}15`,
                        border: `1px solid ${currentType.color}30`,
                        color: currentType.color,
                        fontSize: 11,
                        fontFamily: "'DM Sans', sans-serif",
                      }}>
                        {trait}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right: Chat UI */}
          <div style={{
            background: 'rgba(255,255,255,0.025)',
            border: '1px solid rgba(185, 167, 232, 0.12)',
            borderRadius: 20,
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            height: 520,
          }}>
            {/* Chat header */}
            <div style={{
              padding: '16px 20px',
              borderBottom: '1px solid rgba(185, 167, 232, 0.1)',
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              background: 'rgba(255,255,255,0.02)',
            }}>
              <AuraAvatar type={selectedType} size={36} />
              <div>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 14,
                  color: '#FAF8F4',
                  fontWeight: 500,
                }}>
                  {currentType?.title}
                </p>
                <p style={{
                  fontSize: 11,
                  color: '#B9A7E8',
                  fontFamily: "'DM Sans', sans-serif",
                }}>
                  {selectedType} · Personality Guide
                </p>
              </div>
              <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{
                  width: 7,
                  height: 7,
                  borderRadius: '50%',
                  background: '#4ADE80',
                  display: 'inline-block',
                }} />
                <span style={{ color: '#B9A7E8', fontSize: 11, fontFamily: "'DM Sans', sans-serif" }}>
                  Active
                </span>
              </div>
            </div>

            {/* Messages */}
            <div style={{
              flex: 1,
              overflowY: 'auto',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
            }}>
              <AnimatePresence>
                {messages.map((msg, i) => (
                  <ChatMessage key={i} msg={msg.msg} isUser={msg.user} />
                ))}
              </AnimatePresence>
            </div>

            {/* Sample prompts */}
            <div style={{
              padding: '12px 16px',
              borderTop: '1px solid rgba(185, 167, 232, 0.08)',
              display: 'flex',
              gap: 8,
              overflowX: 'auto',
              flexShrink: 0,
            }}>
              {samplePrompts.slice(0, 3).map(prompt => (
                <button
                  key={prompt}
                  onClick={() => handlePromptClick(prompt)}
                  style={{
                    padding: '6px 12px',
                    borderRadius: 20,
                    background: 'rgba(185, 167, 232, 0.06)',
                    border: '1px solid rgba(185, 167, 232, 0.15)',
                    color: '#B9A7E8',
                    fontSize: 11,
                    fontFamily: "'DM Sans', sans-serif",
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.2s',
                    flexShrink: 0,
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(246, 200, 95, 0.08)';
                    e.currentTarget.style.borderColor = 'rgba(246, 200, 95, 0.25)';
                    e.currentTarget.style.color = '#F6C85F';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(185, 167, 232, 0.06)';
                    e.currentTarget.style.borderColor = 'rgba(185, 167, 232, 0.15)';
                    e.currentTarget.style.color = '#B9A7E8';
                  }}
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Input */}
            <div style={{
              padding: '12px 16px',
              borderTop: '1px solid rgba(185, 167, 232, 0.08)',
              display: 'flex',
              gap: 10,
              alignItems: 'center',
            }}>
              <input
                value={inputVal}
                onChange={e => setInputVal(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSend()}
                placeholder={`Ask about ${selectedType}...`}
                style={{
                  flex: 1,
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(185, 167, 232, 0.15)',
                  borderRadius: 12,
                  padding: '10px 14px',
                  color: '#FAF8F4',
                  fontSize: 13,
                  fontFamily: "'DM Sans', sans-serif",
                  outline: 'none',
                }}
              />
              <button
                onClick={handleSend}
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 10,
                  background: 'linear-gradient(135deg, #3E1F73, #2D6CDF)',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M14 8 L2 2 L5 8 L2 14 Z" fill="#FAF8F4" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            textAlign: 'center',
            color: '#5A5A7A',
            fontSize: 12,
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 300,
            marginTop: 32,
            maxWidth: 580,
            margin: '32px auto 0',
            lineHeight: 1.6,
          }}
        >
          This is a self-reflection and educational tool, not a clinical assessment or diagnosis. Personality insights are offered to support introspection — every individual is unique and cannot be fully defined by any framework.
        </motion.p>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .chatbot-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
