import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { Link } from 'react-router-dom'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: 0.08 * i, duration: 0.7, ease: 'easeOut' } })
}

function Counter({ from = 0, to = 100, duration = 1600, suffix = '', className = '' }) {
  const [val, setVal] = useState(from)
  const startRef = useRef(0)
  useEffect(() => {
    let raf
    const start = performance.now()
    startRef.current = start
    const step = (now) => {
      const p = Math.min(1, (now - start) / duration)
      const current = from + (to - from) * p
      setVal(current)
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [from, to, duration])
  return <span className={className}>{Math.round(val).toLocaleString()}{suffix}</span>
}

export default function App() {
  const { scrollYProgress } = useScroll()
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 120])

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200">
      {/* SLIDE TITLE BAR */}
      <div className="sticky top-0 z-30 backdrop-blur-xl/0">
        <div className="gold-rule" />
      </div>

      {/* HERO COVER */}
      <section className="relative h-[82vh] w-full overflow-hidden noise-overlay">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        {/* Cinematic overlays */}
        <motion.div style={{ y: parallaxY }} className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.06),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/70 to-black" />

        {/* Title content */}
        <div className="relative h-full container-wide px-6 flex flex-col items-start justify-end pb-16">
          <motion.h1
            className="heading-serif text-4xl sm:text-6xl md:text-7xl tracking-tight text-white"
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            Godrej Heirloom Residences
          </motion.h1>
          <motion.p
            className="mt-3 text-lg sm:text-2xl text-neutral-200/90"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
          >
            Koregaon Park, Pune — A Generational Luxury Asset Built to Outlast Lifetimes
          </motion.p>
          <motion.div
            className="mt-6 h-[3px] w-full max-w-sm bg-gradient-to-r from-[#D4AF37] via-[#b89228] to-[#7d6420] rounded"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
          />

          <motion.div className="mt-8 flex flex-wrap gap-4" variants={fadeUp} initial="hidden" animate="show" custom={3}>
            <a href="/mnt/data/691e9c9855883_Internship_Sales_Case_Study[1].pdf" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-black font-semibold soft-shadow" style={{ backgroundImage: 'linear-gradient(135deg, #D4AF37, #b89228)' }}>
              <span className="transition-transform group-hover:-translate-y-0.5">Download Brief PDF</span>
            </a>
            <Link to="/gtm" className="group inline-flex items-center gap-2 rounded-full px-6 py-3 bg-transparent text-[#D4AF37] border border-[#D4AF37]/60 hover:border-[#D4AF37] transition-all">
              <span className="transition-transform group-hover:translate-x-0.5">Request Private Preview</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CONTENT SECTIONS */}
      <main className="container-wide px-6 py-20 space-y-28">
        {/* Slide header */}
        <section>
          <motion.h2 className="heading-serif text-2xl sm:text-3xl text-white" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            Slide 1: Market, Positioning, Segmentation
          </motion.h2>
          <div className="mt-4 gold-rule" />
        </section>

        {/* SECTION A – MARKET UNDERSTANDING */}
        <section>
          <motion.h3 className="heading-serif text-white text-3xl flex items-center gap-4" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="inline-block h-8 w-1 bg-[#D4AF37] rounded-full" />
            Market Understanding
          </motion.h3>

          {/* Circular gold counters */}
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              { val: 11000, label: 'new millionaires in 2023' },
              { val: 3600, suffix: '+', label: 'UHNIs (+11% YoY)' },
              { val: 22, suffix: '%', label: 'Ultra-luxury growth (18–22% YoY)' },
            ].map((m, i) => (
              <motion.div key={i} className="relative p-6 rounded-3xl bg-neutral-900/60 border border-neutral-800 overflow-hidden" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.05 }}>
                <div className="absolute inset-0 opacity-60" style={{ background: 'conic-gradient(from 180deg at 50% 50%, rgba(212,175,55,0.15), transparent 60%)' }} />
                <div className="relative grid place-items-center py-8">
                  <div className="grid place-items-center h-40 w-40 rounded-full soft-shadow" style={{ background: 'radial-gradient(circle at 30% 30%, rgba(212,175,55,0.12), transparent 60%)', border: '1px solid rgba(212,175,55,0.35)' }}>
                    <div className="heading-serif text-4xl text-white">
                      <Counter to={m.val} suffix={m.suffix || ''} />
                    </div>
                  </div>
                  <p className="mt-4 text-neutral-300 text-center">{m.label}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mini bar chart */}
          <div className="mt-10 rounded-3xl bg-neutral-900/60 border border-neutral-800 p-6">
            <h4 className="heading-serif text-[#D4AF37] text-xl">Benchmark Pricing (Indicative)</h4>
            <div className="mt-6 space-y-4">
              {[
                { name: 'Trump Towers', val: 23 },
                { name: 'Yoo Pune', val: 22 },
                { name: 'KP Bungalows', val: 120 },
              ].map((b, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span className="w-36 text-neutral-300">{b.name}</span>
                  <div className="flex-1 h-3 rounded-full bg-neutral-800 overflow-hidden">
                    <motion.div initial={{ width: 0 }} whileInView={{ width: `${Math.min(100, b.val)}%` }} viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.05 }} className="h-full rounded-full gold-gradient-soft" />
                  </div>
                  <span className="w-24 text-neutral-400 text-sm">₹{b.val} Cr</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 rounded-xl bg-black/40 border border-[#D4AF37]/20 text-neutral-200">
              “No existing ultra-premium tower inventory in KP — category white space.”
            </div>
          </div>
        </section>

        {/* SECTION B – BRAND POSITIONING */}
        <section>
          <motion.h3 className="heading-serif text-white text-3xl flex items-center gap-4" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="inline-block h-8 w-1 bg-[#D4AF37] rounded-full" />
            Brand Positioning — The Heirloom Strategy
          </motion.h3>

          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <motion.div className="relative overflow-hidden rounded-3xl bg-neutral-900/60 border border-neutral-800 p-6" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="absolute -top-12 -left-12 h-40 w-40 rounded-full" style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.18), transparent 60%)' }} />
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full border border-[#D4AF37]/40 grid place-items-center text-[#D4AF37]">★</div>
                <h4 className="heading-serif text-xl text-[#D4AF37]">The Heirloom Strategy</h4>
              </div>
              <ul className="mt-4 space-y-2 text-neutral-300 list-disc pl-5">
                <li>Generational engineering (50–80 year design)</li>
                <li>Scarcity value (limited editions)</li>
                <li>KP provenance (heritage neighborhood)</li>
                <li>International architecture & brand tie-ups</li>
                <li>Privacy architecture (zero shared walls)</li>
              </ul>
            </motion.div>

            <motion.div className="rounded-3xl bg-neutral-900/60 border border-neutral-800 p-6" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }}>
              <h4 className="heading-serif text-xl text-[#D4AF37]">Generational Longevity</h4>
              <div className="mt-6 space-y-3">
                {[
                  { label: 'Structure + Envelope', yrs: 50 },
                  { label: 'MEP Systems', yrs: 30 },
                  { label: 'Interiors', yrs: 20 },
                ].map((row, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm text-neutral-400"><span>{row.label}</span><span>{row.yrs} yrs</span></div>
                    <div className="mt-2 h-2 rounded-full bg-neutral-800 overflow-hidden">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: `${row.yrs}%` }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="h-full gold-gradient-soft rounded-full" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-neutral-300 text-sm">Designed lifecycle stewardship spanning 50 years with curated upgrade cycles.</div>
            </motion.div>
          </div>

          {/* Brand Logos */}
          <div className="mt-10 rounded-3xl bg-neutral-900/60 border border-neutral-800 p-6">
            <p className="text-neutral-400 text-sm uppercase tracking-wide">Brand partnerships (placeholders)</p>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-6 opacity-90">
              {['Armani Casa', 'Minotti', 'Poliform', 'Boffi'].map((b) => (
                <div key={b} className="h-16 grid place-items-center rounded-xl bg-black/30 border border-neutral-800 text-[#D4AF37] tracking-wide">{b}</div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION C – 3-TIER SEGMENTATION */}
        <section>
          <motion.h3 className="heading-serif text-white text-3xl flex items-center gap-4" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="inline-block h-8 w-1 bg-[#D4AF37] rounded-full" />
            3-Tier Segmentation
          </motion.h3>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Base Ultra Luxury (Legacy Edition)',
                price: '₹20–28 Cr',
                spec: '3,500–4,300 sq.ft',
                points: ['30–50 year material lifespan', 'Legacy-family positioning'],
              },
              {
                title: 'Signature Full-Floor (Masterpiece Edition)',
                price: '₹32–42 Cr',
                spec: '4,800–6,000 sq.ft',
                points: ['Architect signature upgrades', 'Brand interiors (Minotti/Armani Casa)'],
              },
              {
                title: 'Sky Heritage Penthouses (5 units, auction)',
                price: 'Base ₹70 Cr',
                spec: 'Expected ₹95–130 Cr',
                points: ['Auction-only, generational sky estates', 'Private pool + sky lounge + vault room'],
              },
            ].map((card, idx) => (
              <motion.div key={idx} className="group relative rounded-3xl bg-neutral-900/60 border border-neutral-800 p-6 overflow-hidden transition-transform" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.06 }}>
                <div className="absolute top-0 left-0 right-0 h-1.5 gold-gradient" />
                <div className="mt-2">
                  <h4 className="heading-serif text-xl text-[#D4AF37]">{card.title}</h4>
                  <div className="mt-2 text-neutral-200">{card.price} • {card.spec}</div>
                  <ul className="mt-4 space-y-2 text-neutral-300 list-disc pl-5">
                    {card.points.map((p, i) => <li key={i}>{p}</li>)}
                  </ul>
                </div>
                <div className="mt-6">
                  <Link to="/gtm" className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-black font-semibold soft-shadow transition-transform group-hover:-translate-y-0.5" style={{ backgroundImage: 'linear-gradient(135deg, #D4AF37, #b89228)' }}>
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex justify-end">
            <Link to="/gtm" className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-black font-semibold soft-shadow" style={{ backgroundImage: 'linear-gradient(135deg, #D4AF37, #b89228)' }}>
              Continue → GTM, Sales Experience, Success Metrics
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-14 text-center text-sm text-neutral-500">
        Prepared for an ultra-luxury audience • Discreet circulation only
      </footer>
    </div>
  )
}
