import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { Link } from 'react-router-dom'

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: 0.08 * i, duration: 0.6, ease: 'easeOut' } })
}

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200">
      {/* HERO COVER */}
      <section className="relative h-[78vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        {/* Dark glam overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/70 to-black pointer-events-none" />
        {/* Title content */}
        <div className="relative h-full max-w-6xl mx-auto px-6 flex flex-col items-start justify-end pb-16">
          <motion.h1
            className="text-3xl sm:text-5xl md:text-6xl font-serif tracking-tight text-white"
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            Godrej Heirloom Residences – Koregaon Park, Pune
          </motion.h1>
          <motion.p
            className="mt-4 text-lg sm:text-2xl text-neutral-200/90"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
          >
            Ultra-Luxury Real Estate Strategy (PPT-Style Web Deck)
          </motion.p>
          <motion.div
            className="mt-8 h-[2px] w-40 bg-gradient-to-r from-[#D4AF37] to-[#b89228] rounded-full"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
          />
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      <main className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        {/* Section 1 */}
        <section>
          <motion.h2 className="font-serif text-2xl sm:text-3xl text-white flex items-center gap-4" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="inline-block h-7 w-1 bg-[#D4AF37] rounded-full" />
            MARKET UNDERSTANDING
          </motion.h2>

          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <motion.div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h3 className="text-[#D4AF37] font-serif text-xl mb-4">India UHNI Landscape (Data-driven)</h3>
              <ul className="space-y-2 text-neutral-300 list-disc pl-5">
                <li>India added 11,000 new millionaires in 2023</li>
                <li>3,600+ UHNIs (> $30M); growing at 11% YoY</li>
                <li>32% of UHNIs prefer luxury real estate as a generational asset</li>
                <li>Ultra-luxury market growth: 18–22% YoY</li>
              </ul>
            </motion.div>

            <motion.div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }}>
              <h3 className="text-[#D4AF37] font-serif text-xl mb-4">Koregaon Park Micro-Market (Pune)</h3>
              <ul className="space-y-2 text-neutral-300 list-disc pl-5">
                <li>Pune’s most prestigious, low-density, heritage-bungalow zone</li>
                <li>Comparable pricing:</li>
                <ul className="list-[circle] pl-6 space-y-1">
                  <li>Panchshil Trump Towers: ₹14–23 Cr</li>
                  <li>Yoo Pune: ₹12–22 Cr</li>
                  <li>Boutique KP bungalows: ₹20–120 Cr</li>
                </ul>
                <li>No competing ultra-luxury tower → category creation opportunity</li>
              </ul>
            </motion.div>

            <motion.div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 md:col-span-2" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h3 className="text-[#D4AF37] font-serif text-xl mb-4">TAM + Revenue Potential</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 text-neutral-300">
                <div>
                  <p className="text-sm uppercase tracking-wide text-neutral-400">Targetable UHNI/NRI families</p>
                  <p className="text-2xl font-serif text-white">2,000–3,000</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wide text-neutral-400">Annual SOM</p>
                  <p className="text-2xl font-serif text-white">60–120 buyers</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wide text-neutral-400">Projected revenue</p>
                  <p className="text-2xl font-serif text-white">₹880–1,040 Cr</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wide text-neutral-400">Penthouse auction</p>
                  <p className="text-2xl font-serif text-white">₹430–470 Cr</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 2 */}
        <section>
          <motion.h2 className="font-serif text-2xl sm:text-3xl text-white flex items-center gap-4" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="inline-block h-7 w-1 bg-[#D4AF37] rounded-full" />
            BRAND POSITIONING – “THE HEIRLOOM STRATEGY”
          </motion.h2>
          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <motion.div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h3 className="text-[#D4AF37] font-serif text-xl mb-4">Positioning Statement</h3>
              <p className="text-neutral-300 leading-relaxed">
                “A generational home built to outlast lifetimes — crafted as an heirloom for the next 50–80 years.”
              </p>
            </motion.div>
            <motion.div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }}>
              <h3 className="text-[#D4AF37] font-serif text-xl mb-4">Differentiation vs Competitors</h3>
              <ul className="space-y-2 text-neutral-300 list-disc pl-5">
                <li>Competitors sell luxury → Godrej sells permanence</li>
                <li>KP heritage + global architecture + engineering longevity</li>
                <li>Legacy-driven design (vault room, heritage library, future-proof planning)</li>
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Section 3 */}
        <section>
          <motion.h2 className="font-serif text-2xl sm:text-3xl text-white flex items-center gap-4" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="inline-block h-7 w-1 bg-[#D4AF37] rounded-full" />
            SEGMENTATION STRATEGY (3-TIER MODEL)
          </motion.h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Tier 1 — Base Ultra-Luxury Residences',
                points: [
                  '₹20–28 Cr, 3,500–4,300 sq.ft',
                  'Built as 30–50 year lifespan homes',
                  'For legacy KP families & NRIs',
                ],
              },
              {
                title: 'Tier 2 — Signature Full-Floor Residences',
                points: [
                  '₹32–42 Cr, 4,800–6,000 sq.ft',
                  '360° views, private lift, zero shared walls',
                  'Architect + brand premiums (Minotti/Armani Casa)',
                ],
              },
              {
                title: 'Tier 3 — 5 Sky Penthouses (Auction)',
                points: [
                  'Base price: ₹70 Cr',
                  'Expected: ₹95–130 Cr',
                  'Triplex/duplex sky estates, private pools',
                  'India’s first Generational Auction Penthouses',
                ],
              },
            ].map((card, idx) => (
              <motion.div key={idx} className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 flex flex-col" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.06 }}>
                <h3 className="text-[#D4AF37] font-serif text-lg mb-4">{card.title}</h3>
                <ul className="space-y-2 text-neutral-300 list-disc pl-5 flex-1">
                  {card.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        <div className="pt-4">
          <Link to="/gtm" className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-[#D4AF37] text-black font-semibold shadow-[0_0_0_1px_rgba(212,175,55,0.2)] hover:shadow-[0_0_0_2px_rgba(212,175,55,0.4)] transition-shadow">
            Next: Go-To-Market & Sales Experience →
          </Link>
        </div>
      </main>

      {/* Subtle footer */}
      <footer className="py-10 text-center text-sm text-neutral-500">
        Prepared for an ultra-luxury audience • Discreet circulation only
      </footer>
    </div>
  )
}
