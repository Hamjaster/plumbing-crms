import { useMemo, useState } from 'react'

function App() {
  const [vertical, setVertical] = useState('plumbing')
  const [commandInput, setCommandInput] = useState('')
  const [assistantLog, setAssistantLog] = useState([
    'Dispatch AI balanced skill-match and drive-time for 18 open work orders.',
  ])

  const verticalConfig = {
    plumbing: {
      label: 'Plumbing',
      ticket: 'Water Heater Install',
      avgTicket: '$860',
      firstTimeFix: '91%',
      utilization: '87%',
      slaRisk: '2 jobs',
      bookings: '46 new requests',
      quoteHint: 'Create quote with tankless + permit line items',
      aiNudge: 'Suggest cross-sell: smart leak sensor on 7 replacement jobs',
      jobs: [
        {
          id: 'PL-4431',
          customer: 'Miller Residence',
          type: 'Emergency Leak',
          tech: 'A. Rashid',
          eta: '12 min',
          value: '$420',
          status: 'Critical',
        },
        {
          id: 'PL-4427',
          customer: 'Lakeside Cafe',
          type: 'Grease Trap Repair',
          tech: 'S. Hamid',
          eta: '34 min',
          value: '$640',
          status: 'In route',
        },
        {
          id: 'PL-4418',
          customer: 'Oakview Apartments',
          type: 'Booster Pump Service',
          tech: 'I. Qureshi',
          eta: '1:40 pm',
          value: '$1,200',
          status: 'Scheduled',
        },
      ],
      buyers: [
        'Dispatch speed under labor shortages',
        'First-time fix and truck-roll reduction',
        'Faster cash collection after each job',
      ],
    },
    landscaping: {
      label: 'Landscaping',
      ticket: 'Bi-weekly Maintenance',
      avgTicket: '$510',
      firstTimeFix: '89%',
      utilization: '84%',
      slaRisk: '3 crews',
      bookings: '32 route additions',
      quoteHint: 'Generate seasonal package with irrigation audit add-on',
      aiNudge: 'Route optimizer reduced windshield time by 18% this week',
      jobs: [
        {
          id: 'LS-1192',
          customer: 'Harbor HOA',
          type: 'Turf + Irrigation',
          tech: 'Crew Delta',
          eta: '8 min',
          value: '$980',
          status: 'Priority',
        },
        {
          id: 'LS-1184',
          customer: 'Northline Offices',
          type: 'Weekly Grounds',
          tech: 'Crew Maple',
          eta: '22 min',
          value: '$730',
          status: 'In route',
        },
        {
          id: 'LS-1175',
          customer: 'Greenbelt Villas',
          type: 'Hardscape Repair',
          tech: 'Crew Slate',
          eta: '2:10 pm',
          value: '$1,450',
          status: 'Scheduled',
        },
      ],
      buyers: [
        'Seasonality-aware capacity planning',
        'Route density and crew productivity',
        'Recurring contract retention visibility',
      ],
    },
  }

  const config = verticalConfig[vertical]

  const kpiCards = useMemo(
    () => [
      { title: 'Average Ticket', value: config.avgTicket, delta: '+12% MoM' },
      { title: 'First-Time Fix', value: config.firstTimeFix, delta: '+4 pts QoQ' },
      { title: 'Utilization', value: config.utilization, delta: 'Healthy Range' },
      { title: 'SLA At Risk', value: config.slaRisk, delta: 'AI triage active' },
    ],
    [config.avgTicket, config.firstTimeFix, config.slaRisk, config.utilization],
  )

  const runCommand = () => {
    if (!commandInput.trim()) return
    setAssistantLog((prev) => [
      `AI Copilot: ${commandInput.trim()}`,
      'Suggestion generated: reprioritized dispatch queue with margin-aware sequencing.',
      ...prev,
    ])
    setCommandInput('')
  }

  return (
    <main className="min-h-screen bg-brand-950 text-brand-100">
      <div className="frame-overlay" aria-hidden="true" />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <header className="border-b border-brand-800 pb-5">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-[11px] uppercase tracking-[0.22em] text-brand-400">Ops Intelligence Portal</p>
            <div className="inline-flex rounded-md border border-brand-700 p-1">
              {Object.entries(verticalConfig).map(([key, value]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setVertical(key)}
                  className={`rounded px-4 py-1.5 text-sm transition ${
                    vertical === key
                      ? 'bg-brand-800 text-brand-50'
                      : 'text-brand-300 hover:bg-brand-900 hover:text-brand-100'
                  }`}
                >
                  {value.label}
                </button>
              ))}
            </div>
          </div>
        </header>

        <section className="grid gap-8 pt-8 lg:grid-cols-[1.35fr_0.65fr]">
          <article>
            <h1 className="max-w-3xl text-[clamp(1.9rem,4vw,3.3rem)] font-semibold leading-[1.08] text-brand-50">
              Premium AI Workflow Console for {config.label} Operations
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-brand-300">
              A calm command surface for dispatch teams and owners: faster assignment, tighter route
              control, and measurable revenue improvement without dashboard clutter.
            </p>
          </article>
          <aside className="border-l border-brand-800 pl-5">
            <p className="text-[11px] uppercase tracking-[0.18em] text-brand-400">AI Status</p>
            <div className="mt-3 space-y-2 text-sm text-brand-200">
              <p className="flex items-center gap-2">
                <span className="status-dot" aria-hidden="true" />
                Predictive dispatch model online
              </p>
              <p className="flex items-center gap-2">
                <span className="status-dot" aria-hidden="true" />
                Margin-aware quote assistant online
              </p>
            </div>
          </aside>
        </section>

        <section className="mt-8 border-y border-brand-800 py-5">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {kpiCards.map((card) => (
              <article key={card.title} className="space-y-1">
                <p className="text-[11px] uppercase tracking-[0.17em] text-brand-400">{card.title}</p>
                <p className="text-3xl font-semibold text-brand-50">{card.value}</p>
                <p className="text-xs text-brand-300">{card.delta}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8 grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <article className="space-y-6">
            <div className="border border-brand-800 p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-lg font-semibold text-brand-50">AI Intake + Dispatch</h2>
                <span className="text-[11px] uppercase tracking-[0.16em] text-brand-400">Live simulation</span>
              </div>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div className="space-y-2 border-l border-brand-700 pl-4">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-brand-400">New Work Order</p>
                  <p className="text-lg text-brand-100">{config.ticket}</p>
                  <p className="text-sm text-brand-300">{config.bookings}</p>
                  <p className="text-sm text-brand-200">{config.quoteHint}</p>
                </div>
                <div className="space-y-2 border-l border-brand-700 pl-4">
                  <p className="text-[11px] uppercase tracking-[0.16em] text-brand-400">Dispatch Insight</p>
                  <p className="text-sm text-brand-200">{config.aiNudge}</p>
                  <div className="mt-3 space-y-2">
                    <div className="skeleton-line" />
                    <div className="skeleton-line w-4/5" />
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-brand-800 p-5">
              <p className="text-[11px] uppercase tracking-[0.16em] text-brand-400">Ask the AI Copilot</p>
              <div className="mt-3 flex flex-col gap-2 sm:flex-row">
                <input
                  type="text"
                  value={commandInput}
                  onChange={(event) => setCommandInput(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') runCommand()
                  }}
                  placeholder="e.g., Rebalance crews for high-value emergency jobs"
                  className="w-full border border-brand-700 bg-brand-900 px-3 py-2 text-sm text-brand-100 placeholder:text-brand-500 focus:border-brand-500 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={runCommand}
                  className="border border-brand-600 bg-brand-800 px-4 py-2 text-sm text-brand-100 transition hover:border-brand-500 hover:bg-brand-700"
                >
                  Run AI Action
                </button>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-brand-300">
                {assistantLog.slice(0, 3).map((item, index) => (
                  <li key={`${item}-${index}`} className="border-l border-brand-600 pl-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <article className="space-y-6 border-l border-brand-800 pl-5">
            <div>
              <h2 className="text-lg font-semibold text-brand-50">Buyer Priorities</h2>
              <p className="mt-2 text-sm text-brand-300">
                What owners and operations leaders need to see before buying.
              </p>
            </div>
            <ul className="space-y-3">
              {config.buyers.map((item) => (
                <li key={item} className="text-sm text-brand-200">
                  <span className="mr-2 text-brand-400">/</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="border border-brand-800 p-4 text-sm leading-relaxed text-brand-200">
              Sales proof point: tie AI dispatch and quoting to fewer missed appointments and higher
              revenue per tech or crew in the first 90 days.
            </div>
          </article>
        </section>

        <section className="mt-8 border border-brand-800 p-5">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-lg font-semibold text-brand-50">Active Job Stream</h2>
            <span className="text-[11px] uppercase tracking-[0.16em] text-brand-400">Autonomous routing enabled</span>
          </div>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="text-brand-400">
                <tr>
                  <th className="px-3 py-2 font-medium">Job ID</th>
                  <th className="px-3 py-2 font-medium">Customer</th>
                  <th className="px-3 py-2 font-medium">Work Type</th>
                  <th className="px-3 py-2 font-medium">Assigned</th>
                  <th className="px-3 py-2 font-medium">ETA</th>
                  <th className="px-3 py-2 font-medium">Value</th>
                  <th className="px-3 py-2 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {config.jobs.map((job) => (
                  <tr key={job.id} className="border-t border-brand-800 text-brand-200">
                    <td className="px-3 py-3 font-medium text-brand-100">{job.id}</td>
                    <td className="px-3 py-3">{job.customer}</td>
                    <td className="px-3 py-3">{job.type}</td>
                    <td className="px-3 py-3">{job.tech}</td>
                    <td className="px-3 py-3">{job.eta}</td>
                    <td className="px-3 py-3">{job.value}</td>
                    <td className="px-3 py-3">
                      <span className="inline-flex border border-brand-700 px-2 py-1 text-xs text-brand-200">
                        {job.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <footer className="mt-8 grid gap-5 border-t border-brand-800 pt-6 md:grid-cols-3">
          <article>
            <p className="text-[11px] uppercase tracking-[0.16em] text-brand-400">AI Signals</p>
            <p className="mt-2 text-sm text-brand-200">
              Demand spike detection, route recomputation, and margin-aware prioritization in real time.
            </p>
          </article>
          <article>
            <p className="text-[11px] uppercase tracking-[0.16em] text-brand-400">Operations Outcome</p>
            <p className="mt-2 text-sm text-brand-200">
              Fewer missed jobs, faster assignment, and cleaner communication across office and field teams.
            </p>
          </article>
          <article>
            <p className="text-[11px] uppercase tracking-[0.16em] text-brand-400">Revenue Outcome</p>
            <p className="mt-2 text-sm text-brand-200">
              Better close rates through intelligent quote suggestions and retention triggers for recurring clients.
            </p>
          </article>
        </footer>
      </div>
    </main>
  )
}

export default App
