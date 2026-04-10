"use client";
import { useState } from "react";
const features = ["30-day structured challenge","Cohort community access","Traction Score tracking","Weekly group calls","Proven playbook & templates"];
const faqs = [
  {q:"Can I cancel anytime?",a:"Yes. Cancel any time from your account settings. No questions asked."},
  {q:"What if I don't make revenue in 30 days?",a:"The challenge is designed to maximize your chances. You keep cohort access and Traction Score even after."},
  {q:"When do cohorts start?",a:"Cohorts start on the 1st and 15th of each month."},
  {q:"Do I need a product idea?",a:"You need an idea you're seriously pursuing. It can be at any stage."},
  {q:"What's the time commitment?",a:"Plan for 8-12 hours per week."},
];
export default function SignupPage() {
  const [form, setForm] = useState({name:"",email:"",product:"",revenue:""});
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); if(form.name && form.email) setSubmitted(true); };
  return (
    <main className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md border-b border-[var(--border)] bg-[var(--bg)]/80">
        <a href="/" className="text-xl font-bold bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] bg-clip-text text-transparent">FirstDollar</a>
        <div className="flex gap-6 text-sm text-[var(--muted)]"><a href="/challenge" className="hover:text-[var(--fg)] transition">Challenge</a><a href="/community" className="hover:text-[var(--fg)] transition">Cohort</a><a href="/traction-score" className="hover:text-[var(--fg)] transition">Traction Score</a></div>
        <a href="/signup" className="px-4 py-2 text-sm font-semibold rounded-lg bg-[var(--accent)] text-[var(--bg)]">Join Now</a>
      </nav>
      <section className="pt-32 pb-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-medium rounded-full border border-green-500/30 bg-green-500/10 text-green-400"><span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"/>Cohort 4 starting May 15 — Limited spots</div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Join Cohort 4.<br/><span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] bg-clip-text text-transparent">Go from zero to dollar.</span></h1>
          <p className="text-lg text-[var(--muted)] mb-8">The zero-to-revenue playbook for solo SaaS founders. 30 days. A cohort of peers. One score that tracks your momentum.</p>
        </div>
      </section>
      <section className="py-8 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">What's Included</h2>
              <div className="rounded-2xl p-8 border-2 border-[var(--accent)] bg-gradient-to-b from-[var(--accent)]/10">
                <div className="text-sm font-medium text-[var(--accent)] mb-2">Cohort Challenge</div>
                <div className="flex items-end gap-1 mb-4"><span className="text-5xl font-bold">$99</span><span className="text-[var(--muted)] mb-2">/month</span></div>
                <p className="text-[var(--muted)] mb-6">Everything you need to go from idea to first dollar.</p>
                <ul className="space-y-3 mb-8">{features.map((f,i)=><li key={i} className="flex items-center gap-3 text-sm"><span className="text-green-400">✓</span>{f}</li>)}</ul>
                <a href="#waitlist" className="block text-center px-6 py-3 font-bold rounded-xl bg-[var(--accent)] text-[var(--bg)]">Join the Cohort</a>
              </div>
            </div>
            <div id="waitlist">
              <h2 className="text-2xl font-bold mb-6">Join the Waitlist</h2>
              {submitted ? (<div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-8 text-center"><div className="text-4xl mb-4">🎉</div><h3 className="text-xl font-bold mb-2">You're on the list!</h3><p className="text-[var(--muted)]">We'll be in touch soon with your cohort invitation.</p></div>) : (
                <form onSubmit={handleSubmit} className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-8 space-y-5">
                  <div><label className="block text-sm font-medium mb-2">Your Name *</label><input type="text" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Ada Lovelace" className="w-full px-4 py-3 bg-[var(--bg)] border border-[var(--border)] rounded-xl text-[var(--fg)] placeholder-[var(--muted)] focus:outline-none focus:border-[var(--accent)]" required/></div>
                  <div><label className="block text-sm font-medium mb-2">Email *</label><input type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="ada@example.com" className="w-full px-4 py-3 bg-[var(--bg)] border border-[var(--border)] rounded-xl text-[var(--fg)] placeholder-[var(--muted)] focus:outline-none focus:border-[var(--accent)]" required/></div>
                  <div><label className="block text-sm font-medium mb-2">What are you building?</label><input type="text" value={form.product} onChange={e=>setForm({...form,product:e.target.value})} placeholder="B2B SaaS for X..." className="w-full px-4 py-3 bg-[var(--bg)] border border-[var(--border)] rounded-xl text-[var(--fg)] placeholder-[var(--muted)] focus:outline-none focus:border-[var(--accent)]"/></div>
                  <div><label className="block text-sm font-medium mb-2">Current monthly revenue</label><select value={form.revenue} onChange={e=>setForm({...form,revenue:e.target.value})} className="w-full px-4 py-3 bg-[var(--bg)] border border-[var(--border)] rounded-xl text-[var(--fg)]"><option value="">Pre-revenue</option><option value="1-100">$1 - $100</option><option value="100-500">$100 - $500</option><option value="500-1000">$500 - $1,000</option><option value="1000+">$1,000+</option></select></div>
                  <button type="submit" className="w-full px-6 py-4 font-bold rounded-xl bg-[var(--accent)] text-[var(--bg)]">Join the Waitlist</button>
                  <p className="text-xs text-center text-[var(--muted)]">No credit card required.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 px-6"><div className="max-w-3xl mx-auto"><h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2><div className="space-y-3">{faqs.map((faq,i)=><div key={i} className="bg-[var(--card)] border border-[var(--border)] rounded-xl overflow-hidden"><button onClick={()=>setOpenFaq(openFaq===i?null:i)} className="w-full px-6 py-4 text-left flex items-center justify-between font-medium">{faq.q}<span className="text-[var(--muted)]">{openFaq===i?"−":"+"}</span></button>{openFaq===i&&<div className="px-6 pb-4 text-sm text-[var(--muted)]">{faq.a}</div>}</div>)}</div></div></section>
      <footer className="py-8 px-6 border-t border-[var(--border)]"><div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[var(--muted)]"><div className="font-bold bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] bg-clip-text text-transparent">FirstDollar</div><div className="flex gap-6"><a href="/challenge">Challenge</a><a href="/community">Cohort</a><a href="/traction-score">Traction Score</a></div><div>© 2026 FirstDollar</div></div></footer>
    </main>
  );
}