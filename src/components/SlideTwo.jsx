import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Link } from 'react-router-dom'

function Counter({ from = 0, to = 100, duration = 1.4, suffix = '', className = '' }) {
  const controls = useAnimation()
  useEffect(() => {
    controls.start({ val: to, transition: { duration, ease: 'easeOut' } })
  }, [to, duration])
  return (
    <motion.span className={className} initial={{ val: from }} animate={controls}>
      <motion.span>{({ val }) => (typeof val === 'number' ? Math.round(val).toLocaleString() : to.toLocaleString())}</motion.span>{suffix}
    </motion.span>
  )
}

export default function SlideTwo() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200">
      {/* Title strip */}
      <div className="relative">
        <div className="gold-rule" />
        <div className="relative container-wide px-6 pt-10 pb-6">
          <h1 className="heading-serif text-3xl sm:text-5xl text-white tracking-tight">Slide 2: GTM, Sales Experience, Success Metrics</h1>
          <div className="mt-4 gold-thin" />
        </div>
      </div>

      <main className="container-wide px-6 pb-20 space-y-24">
        {/* SECTION A – Timeline */}
        <section>
          <h2 className="heading-serif text-2xl sm:text-3xl text-white mb-10 flex items-center gap-4">
            <span className="inline-block h-8 w-1 bg-[#D4AF37] rounded-full" />
            Go-To-Market Timeline
          </h2>

          <div className="relative grid md:grid-cols-[220px_1fr] gap-10">
            {/* Vertical gold timeline */}
            <div className="relative">
              <div className="absolute left-[20px] top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#D4AF37] via-[#b89228] to-[#7d6420] rounded" />
              {[1,2,3,4,5].map((n, i) => (
                <motion.div key={i} className="relative pl-16 pb-10" initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.06 }}>
                  <div className="absolute left-0 top-0 h-10 w-10 rounded-full grid place-items-center text-black font-semibold soft-shadow" style={{ backgroundImage: 'linear-gradient(135deg, #D4AF37, #b89228)' }}>{n}</div>
                  <div className="mt-1 text-neutral-400">Phase {n}</div>
                </motion.div>
              ))}
            </div>

            {/* Phase details */}
            <div className="space-y-6">
              {[
                {
                  title: 'Covert Pre-Launch',
                  lines: ['Project Legacy K', '80 UHNI dossiers', 'NDA preview circle']
                },
                {
                  title: 'Private Heritage Gallery',
                  lines: ['Material museum', 'AR simulations', '50-year future-proof exhibit']
                },
                {
                  title: 'Night of Generations',
                  lines: ['Heritage bungalow launch', 'Michelin dining', 'Architect keynote']
                },
                {
                  title: 'Global Roadshow',
                  lines: ['Dubai DIFC', 'London Mayfair', 'Singapore Fullerton']
                },
                {
                  title: 'Penthouse Auction (5 units)',
                  lines: ['Sealed + live hybrid', 'Reserve ₹70 Cr', 'Target ₹95–130 Cr', 'Winner: blueprint + concierge + vault curation']
                },
              ].map((p, idx) => (
                <motion.div key={idx} className="rounded-3xl bg-neutral-900/60 border border-neutral-800 p-6" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.06 }}>
                  <h3 className="heading-serif text-xl text-[#D4AF37]">{p.title}</h3>
                  <ul className="mt-3 grid sm:grid-cols-2 gap-x-6 text-neutral-300 list-disc pl-5">
                    {p.lines.map((l, i) => <li key={i}>{l}</li>)}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION B – Sales Funnel */}
        <section>
          <h2 className="heading-serif text-2xl sm:text-3xl text-white mb-8 flex items-center gap-4">
            <span className="inline-block h-8 w-1 bg-[#D4AF37] rounded-full" />
            Sales Experience Funnel
          </h2>

          <div className="grid md:grid-cols-5 gap-5">
            {[
              { title: '1. Discovery', desc: ['UHNI referrals', 'Family office filtration'], pct: 100 },
              { title: '2. Arrival', desc: ['Rolls Royce welcome', 'Scent ritual', 'Private lounge'], pct: 65 },
              { title: '3. Immersion', desc: ['Heirloom Design Room', 'Light + acoustic simulation', 'Future-resilience preview'], pct: 45 },
              { title: '4. Closing', desc: ['1-page Legacy Agreement', 'Champagne ceremony'], pct: 35 },
              { title: '5. Onboarding', desc: ['Family Crest engraving', 'Generational concierge', 'Annual Heirloom Circle'], pct: 30 },
            ].map((f, i) => (
              <motion.div key={i} className="relative rounded-3xl p-5 bg-neutral-900/60 border border-neutral-800 overflow-hidden" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.05 }}>
                <div className="absolute inset-0 opacity-70" style={{ background: 'linear-gradient(180deg, rgba(212,175,55,0.22), rgba(125,100,32,0.18))' }} />
                <div className="relative">
                  <h3 className="heading-serif text-lg text-white">{f.title}</h3>
                  <div className="mt-2 text-sm text-neutral-300 space-y-1">
                    {f.desc.map((d, idx) => <div key={idx}>• {d}</div>)}
                  </div>
                  <div className="mt-4 h-2 rounded-full bg-black/40 overflow-hidden">
                    <motion.div className="h-full gold-gradient-soft" initial={{ width: 0 }} whileInView={{ width: `${f.pct}%` }} viewport={{ once: true }} transition={{ duration: 0.8 }} />
                  </div>
                  <div className="mt-2 text-[#D4AF37] text-sm">Target conversion: {f.pct}%</div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTION C – Success Metrics */}
        <section>
          <h2 className="heading-serif text-2xl sm:text-3xl text-white mb-8 flex items-center gap-4">
            <span className="inline-block h-8 w-1 bg-[#D4AF37] rounded-full" />
            Success Metrics
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: 'sellout in 9–12 months', val: 60, suffix: '%', caption: 'Phase I+II inventory' },
              { label: 'penthouse revenue', val: 470, prefix: '₹', suffix: ' Cr', caption: '₹430–470 Cr target' },
              { label: 'premium above Panchshil', val: 20, suffix: '%', caption: '15–20% premium' },
              { label: 'qualified leads', val: 90, suffix: '%', caption: 'from family office channel' },
              { label: 'Sales NPS', val: 80, suffix: '+', caption: 'experience design' },
              { label: 'luxury press features', val: 12, suffix: '+', caption: 'Tier-1 publications' },
            ].map((k, i) => (
              <motion.div key={i} className="rounded-3xl bg-neutral-900/60 border border-neutral-800 p-6 text-center" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.05 }}>
                <div className="heading-serif text-4xl text-white">
                  {k.prefix || ''}<Counter to={k.val} suffix={k.suffix || ''} />
                </div>
                <div className="mt-2 text-neutral-300">{k.label}</div>
                <div className="mt-1 text-xs text-neutral-500">{k.caption}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECTION D – Final CTA */}
        <section>
          <div className="rounded-3xl border border-neutral-800 bg-black/40 p-8 text-center">
            <h3 className="heading-serif text-white text-2xl">Next Steps</h3>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <Link to="/" className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-black font-semibold soft-shadow" style={{ backgroundImage: 'linear-gradient(135deg, #D4AF37, #b89228)' }}>
                Request Private Preview
              </Link>
              <a href="/mnt/data/691e9c9855883_Internship_Sales_Case_Study[1].pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-transparent text-[#D4AF37] border border-[#D4AF37]/60 hover:border-[#D4AF37]">
                Download Confidential Brief (PDF)
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 text-center text-sm text-neutral-500">
        Godrej Heirloom Residences — Private Strategy Deck
      </footer>
    </div>
  )
}
