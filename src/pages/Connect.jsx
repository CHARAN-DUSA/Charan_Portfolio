import { useEffect, useState } from 'react'
import { waitForGSAP } from '../utils/motion'
import './Connect.css'

const budgetValues = [
  '₹5,000','₹10,000','₹15,000','₹20,000','₹25,000',
  '₹30,000','₹40,000','₹50,000','₹70,000','₹1,00,000','₹1L+'
]

export default function Connect() {
  const [step, setStep] = useState(0)
  const [done, setDone] = useState(false)
  const [budget, setBudget] = useState(2)
  const [form, setForm] = useState({
    name: '', email: '', projType: '', timeline: '', message: ''
  })

  const totalSteps = 4

  useEffect(() => {
    waitForGSAP(() => {
      const g = window.gsap
      g.from('.contact-left', { opacity: 0, x: -60, duration: 0.9, ease: 'power3.out' })
      g.from('.contact-right', { opacity: 0, x: 60, duration: 0.9, ease: 'power3.out', delay: 0.15 })
    })
  }, [])

  function shake() {
    waitForGSAP(() => {
      window.gsap.fromTo(`.contact-step.active`, { x: -10 }, { x: 0, duration: 0.4, ease: 'elastic.out(1,0.3)' })
    })
  }

  function next() {
    if (step === 0 && (!form.name.trim() || !form.email.trim())) { shake(); return }
    if (step === 3 && !form.message.trim()) { shake(); return }
    if (step < totalSteps - 1) setStep(s => s + 1)
  }

  function prev() {
    if (step > 0) setStep(s => s - 1)
  }

  async function submit() {
    if (!form.message.trim()) { shake(); return }
    const res = await fetch('https://formspree.io/f/mbdplbbd', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form, budget: budgetValues[budget] })
    })
    if (res.ok) setDone(true)
  }

  return (
    <div className="contact-wrap" id="connect">

      {/* LEFT */}
      <div className="contact-left">
        <div>
          <p className="contact-eyebrow">— Let's build something</p>
          <h1 className="contact-title">Work <span className="accent">with</span> me.</h1>
          <p className="contact-desc">
            Got a project in mind? I'm available for full-stack .NET builds,
            Angular frontends, and backend API work. Tell me what you need —
            let's make it happen.
          </p>
        </div>
        <div className="contact-info">
          <div className="contact-info-item">
            <span className="contact-info-label">Email</span>
            <span className="contact-info-value">
              <a href="mailto:charandusa123@gmail.com">charandusa123@gmail.com</a>
            </span>
          </div>
          <div className="contact-info-item">
            <span className="contact-info-label">Based in</span>
            <span className="contact-info-value">Hyderabad, India</span>
          </div>
          <div className="contact-info-item">
            <span className="contact-info-label">Status</span>
            <div className="contact-availability">
              <span className="contact-avail-dot" />
              Available for work — 2026
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="contact-right">
        {!done ? (
          <>
            <p className="contact-form-label">Fill out the form below</p>

            {/* Progress */}
            <div className="contact-progress">
              {Array.from({ length: totalSteps }).map((_, i) => (
                <div
                  key={i}
                  className={`contact-progress-dot${i < step ? ' done' : i === step ? ' active' : ''}`}
                />
              ))}
            </div>

            {/* Step 1 */}
            {step === 0 && (
              <div className="contact-step active">
                <h2 className="contact-step-heading">Who are <span className="accent">you?</span></h2>
                <div className="contact-field">
                  <label className="contact-label">Your Name</label>
                  <input
                    className="contact-input"
                    type="text"
                    placeholder="e.g. Rahul Sharma"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  />
                </div>
                <div className="contact-field">
                  <label className="contact-label">Your Email</label>
                  <input
                    className="contact-input"
                    type="email"
                    placeholder="e.g. rahul@company.com"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  />
                </div>
                <div className="contact-form-nav">
                  <span />
                  <button className="contact-btn-next" onClick={next}>Next →</button>
                </div>
              </div>
            )}

            {/* Step 2 */}
            {step === 1 && (
              <div className="contact-step active">
                <h2 className="contact-step-heading">What do you <span className="accent">need?</span></h2>
                <div className="contact-option-grid">
                  {[
                    { value: 'Full Stack App', title: 'Full Stack App', desc: 'End-to-end web application',
                      icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg> },
                    { value: 'Backend API', title: 'Backend / API', desc: 'ASP.NET Core REST APIs',
                      icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg> },
                    { value: 'Database Design', title: 'Database Design', desc: 'SQL Server schema & queries',
                      icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/></svg> },
                    { value: 'Other', title: 'Something Else', desc: "Let's figure it out",
                      icon: <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6M10 22h4"/></svg> },
                  ].map(opt => (
                    <div
                      key={opt.value}
                      className={`contact-option${form.projType === opt.value ? ' selected' : ''}`}
                      onClick={() => setForm(f => ({ ...f, projType: opt.value }))}
                    >
                      <div className="contact-option-icon">{opt.icon}</div>
                      <div className="contact-option-title">{opt.title}</div>
                      <div className="contact-option-desc">{opt.desc}</div>
                    </div>
                  ))}
                </div>
                <div className="contact-form-nav">
                  <button className="contact-btn-prev" onClick={prev}>← Back</button>
                  <button className="contact-btn-next" onClick={next}>Next →</button>
                </div>
              </div>
            )}

            {/* Step 3 */}
            {step === 2 && (
              <div className="contact-step active">
                <h2 className="contact-step-heading">Budget &<span className="accent"> timeline</span></h2>
                <div className="contact-field">
                  <label className="contact-label">Budget Range</label>
                  <div className="contact-budget-display">{budgetValues[budget]}</div>
                  <input
                    className="contact-slider"
                    type="range" min="0" max="10"
                    value={budget}
                    onChange={e => setBudget(Number(e.target.value))}
                  />
                  <div className="contact-slider-labels">
                    <span>₹5k</span><span>₹25k</span><span>₹50k</span><span>₹1L+</span>
                  </div>
                </div>
                <div className="contact-field">
                  <label className="contact-label">Timeline</label>
                  <select
                    className="contact-select"
                    value={form.timeline}
                    onChange={e => setForm(f => ({ ...f, timeline: e.target.value }))}
                  >
                    <option value="" disabled>Select a timeline</option>
                    <option>Less than 1 week</option>
                    <option>1–2 weeks</option>
                    <option>1 month</option>
                    <option>1–3 months</option>
                    <option>3+ months</option>
                    <option>Flexible / Not sure yet</option>
                  </select>
                </div>
                <div className="contact-form-nav">
                  <button className="contact-btn-prev" onClick={prev}>← Back</button>
                  <button className="contact-btn-next" onClick={next}>Next →</button>
                </div>
              </div>
            )}

            {/* Step 4 */}
            {step === 3 && (
              <div className="contact-step active">
                <h2 className="contact-step-heading">Tell me <span className="accent">more.</span></h2>
                <div className="contact-field">
                  <label className="contact-label">Project Description</label>
                  <textarea
                    className="contact-textarea"
                    rows="6"
                    placeholder="Describe your project, what problem it solves, and anything else I should know..."
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  />
                </div>
                <div className="contact-form-nav">
                  <button className="contact-btn-prev" onClick={prev}>← Back</button>
                  <button className="contact-btn-submit" onClick={submit}>Send it 🚀</button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="contact-success">
            <div className="contact-success-icon">✓</div>
            <h2 className="contact-success-title">Message<br /><span className="accent">sent!</span></h2>
            <p className="contact-success-desc">
              Thanks for reaching out! I'll review your project details and get back to you within 24 hours.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}