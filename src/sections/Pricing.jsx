import { useState } from 'react';
import { motion } from 'framer-motion';
import PricingCard from '../components/PricingCard';
import { consultationPlans, subscriptionPlans } from '../data/pricing';

export default function Pricing() {
  const [activeTab, setActiveTab] = useState('subscription');

  const plans = activeTab === 'consultation' ? consultationPlans : subscriptionPlans;

  return (
    <section
      id="pricing"
      style={{
        padding: '100px 24px',
        background: 'linear-gradient(180deg, #0E1535 0%, #101A3D 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Glow orb */}
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 500,
        height: 200,
        borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(62, 31, 115, 0.25) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 48 }}
        >
          <p style={{
            color: '#F6C85F',
            fontSize: 11,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            fontFamily: "'DM Sans', sans-serif",
            marginBottom: 14,
          }}>
            Begin Your Journey
          </p>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(28px, 4vw, 46px)',
            fontWeight: 500,
            color: '#FAF8F4',
            lineHeight: 1.2,
            marginBottom: 14,
          }}>
            Choose how you want to{' '}
            <span style={{
              background: 'linear-gradient(135deg, #B9A7E8, #D4C8F5)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              grow.
            </span>
          </h2>
          <p style={{
            color: '#B9A7E8',
            fontSize: 15,
            maxWidth: 440,
            margin: '0 auto 32px',
            lineHeight: 1.7,
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 300,
          }}>
            Whether you prefer a guided one-on-one conversation or a self-paced monthly companion — we have a path for you.
          </p>

          {/* Tab toggle */}
          <div style={{
            display: 'inline-flex',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(185, 167, 232, 0.15)',
            borderRadius: 50,
            padding: 4,
          }}>
            {[
              { id: 'subscription', label: 'Monthly Subscription' },
              { id: 'consultation', label: 'Live Consultation' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: '10px 24px',
                  borderRadius: 50,
                  border: 'none',
                  background: activeTab === tab.id
                    ? 'linear-gradient(135deg, #3E1F73, #2D6CDF)'
                    : 'transparent',
                  color: activeTab === tab.id ? '#FAF8F4' : '#B9A7E8',
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 13,
                  fontWeight: activeTab === tab.id ? 500 : 400,
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  letterSpacing: '0.02em',
                  boxShadow: activeTab === tab.id ? '0 0 20px rgba(62, 31, 115, 0.4)' : 'none',
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Cards */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 20,
          }}
          className="pricing-grid"
        >
          {plans.map((plan, index) => (
            <PricingCard key={plan.id} plan={plan} index={index} type={activeTab} />
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            textAlign: 'center',
            color: '#5A5A7A',
            fontSize: 12,
            fontFamily: "'DM Sans', sans-serif",
            marginTop: 28,
            lineHeight: 1.6,
          }}
        >
          All prices shown in Thai Baht. Secure payment via major cards and PromptPay.
          {' '}
          <span style={{ color: '#B9A7E8' }}>Cancel anytime.</span>
        </motion.p>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .pricing-grid { grid-template-columns: 1fr !important; max-width: 440px; margin: 0 auto; }
        }
      `}</style>
    </section>
  );
}
