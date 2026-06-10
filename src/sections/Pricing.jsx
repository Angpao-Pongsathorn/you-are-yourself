import { useState } from 'react';
import { motion } from 'framer-motion';
import PricingCard from '../components/PricingCard';
import { consultationPlans, subscriptionPlans } from '../data/pricing';

export default function Pricing() {
  const [activeTab, setActiveTab] = useState('subscription');
  const plans = activeTab === 'consultation' ? consultationPlans : subscriptionPlans;

  return (
    <section id="pricing" style={{
      padding: '100px 24px',
      background: 'linear-gradient(180deg, #EDE4FF 0%, #F5F0FF 100%)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', bottom: '5%', left: '50%', transform: 'translateX(-50%)',
        width: 500, height: 200, borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(185, 167, 232, 0.3) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 48 }}
        >
          <p style={{ color: '#C8922A', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: "'DM Sans', sans-serif", marginBottom: 14, fontWeight: 600 }}>
            ✦ Begin Your Journey
          </p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 4vw, 46px)', fontWeight: 600, color: '#2D1B5E', lineHeight: 1.2, marginBottom: 14 }}>
            เลือกแบบที่ใช่{' '}
            <span style={{ background: 'linear-gradient(135deg, #7B4BC8, #9B6BE8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              สำหรับคุณ
            </span>
          </h2>
          <p style={{ color: '#5A3D8A', fontSize: 15, maxWidth: 440, margin: '0 auto 32px', lineHeight: 1.7, fontFamily: "'DM Sans', sans-serif" }}>
            ไม่ว่าจะชอบคุยกับคนจริงๆ หรืออยากมี guide รายเดือน — เรามีเส้นทางสำหรับคุณ
          </p>

          {/* Tab toggle */}
          <div style={{
            display: 'inline-flex',
            background: 'rgba(255, 255, 255, 0.6)',
            border: '1px solid rgba(185, 167, 232, 0.3)',
            borderRadius: 50, padding: 4,
            backdropFilter: 'blur(10px)',
          }}>
            {[
              { id: 'subscription', label: 'Monthly Subscription' },
              { id: 'consultation', label: 'Live Consultation' },
            ].map(tab => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
                padding: '10px 24px', borderRadius: 50, border: 'none',
                background: activeTab === tab.id
                  ? 'linear-gradient(135deg, #7B4BC8, #9B6BE8)'
                  : 'transparent',
                color: activeTab === tab.id ? '#FFFFFF' : '#7B4BC8',
                fontFamily: "'DM Sans', sans-serif", fontSize: 13,
                fontWeight: activeTab === tab.id ? 600 : 400,
                cursor: 'pointer', transition: 'all 0.3s', letterSpacing: '0.02em',
                boxShadow: activeTab === tab.id ? '0 4px 16px rgba(123, 75, 200, 0.3)' : 'none',
              }}>
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}
          className="pricing-grid"
        >
          {plans.map((plan, index) => (
            <PricingCard key={plan.id} plan={plan} index={index} />
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ textAlign: 'center', color: '#8A7AAA', fontSize: 12, fontFamily: "'DM Sans', sans-serif", marginTop: 28, lineHeight: 1.6 }}
        >
          ราคาแสดงเป็นบาทไทย ชำระได้ผ่านบัตรเครดิตและ PromptPay
          {' '}<span style={{ color: '#7B4BC8' }}>ยกเลิกได้ทุกเวลา</span>
        </motion.p>
      </div>

      <style>{`@media (max-width: 900px) { .pricing-grid { grid-template-columns: 1fr !important; max-width: 440px; margin: 0 auto; } }`}</style>
    </section>
  );
}
