import React from 'react'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: 0.06 * i, duration: 0.6, ease: 'easeOut' } })
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-800">
      {/* Top gold rule */}
      <div className="sticky top-0 z-30">
        <div className="gold-rule" />
      </div>

      {/* Infographic Canvas */}
      <main className="container-wide px-6 py-16 md:py-24 space-y-14 md:space-y-20">
        {/* Title */}
        <section>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="heading-serif text-3xl sm:text-5xl md:text-6xl text-neutral-900 tracking-tight"
          >
            Godrej Heirloom Residences — Pune Infographic
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="mt-3 text-neutral-600 max-w-3xl"
          >
            A concise, single-screen snapshot for Koregaon Park positioning.
          </motion.p>
        </section>

        {/* Premium Enclave */}
        <section className="relative rounded-3xl bg-white border border-neutral-200 overflow-hidden soft-shadow">
          <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(1200px_400px_at_20%_-10%, rgba(212,175,55,0.10), transparent 60%)' }} />
          <div className="p-6 sm:p-10">
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex items-center gap-3">
              <div className="h-2 w-10 rounded-full gold-gradient" />
              <h2 className="heading-serif text-2xl sm:text-3xl text-[#b89228]">Pune’s most premium residential enclave</h2>
            </motion.div>
            <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.05 }} className="mt-3 text-neutral-700 text-lg">
              Heritage bungalows • Expats • Consulates
            </motion.p>
          </div>
        </section>

        {/* Demand Drivers */}
        <section className="grid md:grid-cols-3 gap-6">
          {[
            { title: 'Tech CXOs', desc: 'Leadership from India’s top product & IT firms' },
            { title: 'Unicorn Founders', desc: 'High-liquidity founders seeking KP provenance' },
            { title: 'Industrial Families & NRIs', desc: 'Multi-generational buyers, global lifestyle' },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="relative rounded-3xl bg-white border border-neutral-200 p-6 overflow-hidden soft-shadow"
            >
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full" style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.14), transparent 60%)' }} />
              <div className="h-1.5 w-16 gold-gradient rounded-full" />
              <h3 className="heading-serif mt-4 text-xl text-neutral-900">{card.title}</h3>
              <p className="mt-2 text-neutral-700">{card.desc}</p>
            </motion.div>
          ))}
        </section>

        {/* Market Funnel: TAM • SAM • SOM */}
        <section className="rounded-3xl bg-white border border-neutral-200 p-6 sm:p-8 soft-shadow">
          <div className="flex items-center gap-3">
            <div className="h-1.5 w-12 gold-gradient rounded-full" />
            <h2 className="heading-serif text-2xl text-neutral-900">Market funnel</h2>
          </div>
          <p className="mt-1 text-neutral-600">TAM • SAM • SOM for hyper-luxury buyers in the next 18–24 months</p>

          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {[{
              label: 'TAM',
              expl: 'Total ultra-wealthy who can afford ₹26–140 Cr',
              value: '~4,200 families',
              width: 100
            }, {
              label: 'SAM',
              expl: 'Actively searching during 18–24 months',
              value: '~600–650 families',
              width: 38
            }, {
              label: 'SOM',
              expl: 'Realistic conversions (12–16%)',
              value: '~85–90 families',
              width: 14
            }].map((x, i) => (
              <motion.div key={x.label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.05 }} className="rounded-2xl border border-neutral-200 p-5">
                <div className="flex items-center justify-between">
                  <div className="text-sm tracking-wide font-medium text-[#b89228]">{x.label}</div>
                  <div className="text-sm text-neutral-500">{x.expl}</div>
                </div>
                <div className="mt-3 h-3 rounded-full bg-neutral-200 overflow-hidden">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: `${x.width}%` }} viewport={{ once: true }} transition={{ duration: 0.8, ease: 'easeOut' }} className="h-full gold-gradient-soft rounded-full" />
                </div>
                <div className="mt-3 heading-serif text-2xl text-neutral-900">{x.value}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Market Context KPIs */}
        <section className="rounded-3xl bg-white border border-neutral-200 p-6 sm:p-8 soft-shadow">
          <div className="flex items-center gap-3">
            <div className="h-1.5 w-12 gold-gradient rounded-full" />
            <h2 className="heading-serif text-2xl text-neutral-900">Market context</h2>
          </div>
          <p className="mt-1 text-neutral-600">Snapshot of affluent pools and likely hyper-luxury behavior</p>

          <div className="mt-6 grid md:grid-cols-2 gap-5">
            {[{
              name: 'UHNIs in India',
              value: '~3,600+',
              note: 'Ultra-high-net-worth individuals'
            }, {
              name: 'HNIs (> ₹25–250 Cr wealth)',
              value: '~8,00,000',
              note: 'High-net-worth individuals'
            }, {
              name: 'Hyper-luxury purchase rate among HNIs',
              value: '0.25%',
              note: 'Only a tiny fraction buys hyper-luxury'
            }, {
              name: 'NRIs buying luxury real estate annually',
              value: '~15,000–20,000 families',
              note: 'Across India markets'
            }, {
              name: 'Ultra-luxury share of NRI buyers',
              value: '2%',
              note: 'Only a small slice goes ultra-luxury'
            }, {
              name: 'Mumbai + Delhi UHNI-level premium buyers',
              value: '1,800+',
              note: 'Primary city buyers'
            }, {
              name: 'Investing in Pune / second-home markets',
              value: '≈5%',
              note: 'Share of Mumbai/Delhi UHNI buyers'
            }, {
              name: 'Global family offices keen on India real estate',
              value: '250+',
              note: 'Growing institutional interest'
            }].map((kpi, i) => (
              <motion.div key={kpi.name} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.04 }} className="flex items-start justify-between gap-4 rounded-2xl border border-neutral-200 p-5">
                <div className="flex-1">
                  <div className="text-sm text-neutral-600">{kpi.name}</div>
                  <div className="mt-1 text-xs text-neutral-500">{kpi.note}</div>
                </div>
                <div className="shrink-0 heading-serif text-xl text-neutral-900 px-3 py-1 rounded-lg bg-white border border-neutral-200 soft-shadow">{kpi.value}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Competitor Benchmarks */}
        <section className="rounded-3xl bg-white border border-neutral-200 p-6 sm:p-8 soft-shadow">
          <h2 className="heading-serif text-2xl text-neutral-900">Competitor benchmarks</h2>
          <p className="mt-1 text-neutral-600">Indicative total ticket and price per sq.ft</p>

          <div className="mt-6 space-y-5">
            {[
              { name: 'Panchshil Trump Towers', ticket: '₹14–23 Cr', psf: '22–25k/sq.ft', width: 62 },
              { name: 'Yoo Pune', ticket: '₹12–22 Cr', psf: '18–22k/sq.ft', width: 54 },
              { name: 'Boutique KP bungalows', ticket: '₹20–120 Cr', psf: '30–45k/sq.ft', width: 100 },
            ].map((b, i) => (
              <motion.div key={b.name} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.05 }}>
                <div className="flex items-center justify-between text-sm text-neutral-600">
                  <span>{b.name}</span>
                  <span>{b.ticket} • {b.psf}</span>
                </div>
                <div className="mt-2 h-3.5 rounded-full bg-neutral-200 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${b.width}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="h-full gold-gradient-soft rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm text-neutral-700">
            <div className="rounded-xl border border-neutral-200 bg-white p-4 soft-shadow">Trump: trophy high-rise address; inventory limited; strong rental demand</div>
            <div className="rounded-xl border border-neutral-200 bg-white p-4 soft-shadow">Yoo: design-forward residences; premium interiors; lifestyle positioning</div>
            <div className="rounded-xl border border-neutral-200 bg-white p-4 soft-shadow">KP bungalows: extreme scarcity; bespoke plots; highest PSF</div>
          </div>
        </section>

        {/* White Space Callout */}
        <section className="relative overflow-hidden rounded-3xl border border-[#D4AF37]/25 bg-white soft-shadow">
          <div className="absolute inset-0 opacity-60" style={{ background: 'radial-gradient(600px_200px_at_10%_0%, rgba(212,175,55,0.12), transparent 60%)' }} />
          <div className="p-8 sm:p-12 text-center relative">
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-neutral-200 text-[#b89228] soft-shadow">
              <span className="h-2 w-2 rounded-full bg-[#D4AF37]" />
              Segment insight
            </motion.div>
            <motion.h3 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.05 }} className="heading-serif mt-6 text-2xl sm:text-3xl md:text-4xl text-neutral-900">
              Gap: No true ultra-luxury tower inventory in KP
            </motion.h3>
            <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }} className="mt-3 text-neutral-700">
              Clear white space for a generational, design-led tower to anchor KP’s skyline.
            </motion.p>
          </div>
        </section>
      </main>

      <footer className="py-10 text-center text-neutral-400 text-xs">
        Infographic preview • For internal strategy discussions
      </footer>
    </div>
  )
}
