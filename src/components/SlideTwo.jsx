import React from 'react'
import { motion } from 'framer-motion'

export default function SlideTwo() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200">
      {/* Header strip */}
      <div className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.08),transparent_50%)]" />
        <div className="relative max-w-6xl mx-auto px-6 pt-14 pb-6">
          <h1 className="font-serif text-3xl sm:text-5xl text-white tracking-tight">GTM Strategy + Sales Experience + Success Metrics</h1>
          <div className="mt-4 h-[2px] w-40 bg-gradient-to-r from-[#D4AF37] to-[#b89228] rounded-full" />
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-6 pb-16 space-y-16">
        {/* SECTION 4: Timeline */}
        <section>
          <h2 className="font-serif text-2xl sm:text-3xl text-white mb-8 flex items-center gap-4">
            <span className="inline-block h-7 w-1 bg-[#D4AF37] rounded-full" />
            GO-TO-MARKET STRATEGY
          </h2>

          <div className="relative pl-8">
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#D4AF37] via-[#c8a63a] to-[#8f7326] rounded-full" />
            {[
              {
                phase: 'Phase 1 – Covert Pre-Launch (0–3 Months)',
                items: [
                  'Codename: Project Legacy K',
                  '80 UHNI families receive a heritage-inspired “Heirloom Dossier”',
                  'NDA-based previews with family offices & wealth advisors',
                ],
              },
              {
                phase: 'Phase 2 – Private Preview Gallery',
                items: [
                  '“Time Capsule Room”: 50-year durability showcase',
                  'Material aging simulations, AR customization',
                  'Sommelier & scent experience',
                ],
              },
              {
                phase: 'Phase 3 – Night of Generations',
                items: [
                  'Ultra-private reveal in a KP heritage bungalow',
                  'Michelin curated dining, orchestra, architect keynote',
                ],
              },
              {
                phase: 'Phase 4 – International UHNI Roadshow',
                items: [
                  'Dubai DIFC, London Mayfair, Singapore Fullerton',
                  'NRIs pay 12–18% premium for legacy assets',
                ],
              },
              {
                phase: 'Phase 5 – 5-Penthouse Auction Event',
                items: [
                  'Sealed + live hybrid auction',
                  'Reserve: ₹70 Cr',
                  'Winning range: ₹95–130 Cr',
                  'Winners receive architect blueprint + 5-year concierge',
                ],
              },
            ].map((block, idx) => (
              <motion.div key={idx} className="relative pl-6 pb-8" initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.05 }}>
                <div className="absolute left-[-9px] top-0 h-4 w-4 rounded-full bg-[#D4AF37] shadow-[0_0_0_4px_rgba(212,175,55,0.15)]" />
                <h3 className="text-[#D4AF37] font-serif text-xl mb-2">{block.phase}</h3>
                <ul className="list-disc pl-5 text-neutral-300 space-y-1">
                  {block.items.map((it, i) => (
                    <li key={i}>{it}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTION 5: Sales Experience Funnel */}
        <section>
          <h2 className="font-serif text-2xl sm:text-3xl text-white mb-8 flex items-center gap-4">
            <span className="inline-block h-7 w-1 bg-[#D4AF37] rounded-full" />
            SALES EXPERIENCE DESIGN
          </h2>

          <div className="grid md:grid-cols-5 gap-4 items-stretch">
            {[
              {
                title: 'Discovery – UHNI Filtering',
                bullets: [
                  'Referrals from bankers, architects, family offices',
                ],
              },
              {
                title: 'Arrival – Ritual of Continuity',
                bullets: [
                  'Rolls Royce/V-Class welcome',
                  'Sandalwood signature scent',
                  'Private check-in lounge',
                ],
              },
              {
                title: 'Immersion – Heirloom Design Room',
                bullets: [
                  'Material museum',
                  'Future-renovation timeline (10/20/30 years)',
                  'Vault room preview',
                ],
              },
              {
                title: 'Closing – Legacy Agreement',
                bullets: [
                  '1-page “Generational Commitment”',
                  'Champagne signing',
                  'Digital Twin delivered to family archive',
                ],
              },
              {
                title: 'Onboarding – Generational Concierge',
                bullets: [
                  'Crest engraving',
                  'Annual Heirloom Circle',
                  'Construction storytelling videos',
                ],
              },
            ].map((stage, idx) => (
              <motion.div key={idx} className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-5 flex flex-col" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.05 }}>
                <h3 className="text-[#D4AF37] font-serif text-lg mb-3">{stage.title}</h3>
                <ul className="list-disc pl-5 text-neutral-300 space-y-1 flex-1">
                  {stage.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Simple funnel connector */}
          <div className="mt-4 grid md:grid-cols-5 gap-4 items-center">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="hidden md:block h-2 rounded-full bg-gradient-to-r from-[#5a4b1a] via-[#D4AF37] to-[#5a4b1a] opacity-60" />
            ))}
          </div>
        </section>

        {/* SECTION 6: Success Metrics */}
        <section>
          <h2 className="font-serif text-2xl sm:text-3xl text-white mb-8 flex items-center gap-4">
            <span className="inline-block h-7 w-1 bg-[#D4AF37] rounded-full" />
            SUCCESS METRICS
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6">
              <h3 className="text-[#D4AF37] font-serif text-xl mb-4">Sales & Revenue Metrics</h3>
              <ul className="list-disc pl-5 text-neutral-300 space-y-1">
                <li>60% sellout in 9–12 months</li>
                <li>Penthouse revenue: ₹430–470 Cr</li>
                <li>15–20% premium over Panchshil</li>
              </ul>
            </div>
            <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6">
              <h3 className="text-[#D4AF37] font-serif text-xl mb-4">Experience Metrics</h3>
              <ul className="list-disc pl-5 text-neutral-300 space-y-1">
                <li>Sales NPS: 80+</li>
                <li>Concierge satisfaction: 4.7+/5</li>
              </ul>
            </div>
            <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6">
              <h3 className="text-[#D4AF37] font-serif text-xl mb-4">Lead Metrics</h3>
              <ul className="list-disc pl-5 text-neutral-300 space-y-1">
                <li>90% qualified leads</li>
                <li>Visit → Booking: 35–45%</li>
              </ul>
            </div>
            <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6">
              <h3 className="text-[#D4AF37] font-serif text-xl mb-4">Brand Equity</h3>
              <ul className="list-disc pl-5 text-neutral-300 space-y-1">
                <li>Top 3 ultra-luxury brand in Western India</li>
                <li>8–12 luxury editorial features</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-10 text-center text-sm text-neutral-500">
        Godrej Heirloom Residences — Private Strategy Deck
      </footer>
    </div>
  )
}
