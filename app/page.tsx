"use client";
import { useState } from "react";

const challenges = [
  { week: "Week 1", title: "Find Your First Signal", desc: "Validate your idea in 7 days. Identify the ONE person who'd pay $99/mo right now — and talk to them.", icon: "🎯" },
  { week: "Week 2", title: "Ship Something Real", desc: "Launch a landing page, waitlist, or stub product. Get it in front of humans by Day 14.", icon: "🚀" },
  { week: "Week 3", title: "Get Your First Dollar", desc: "Make the ask. Close the sale. Your first paying customer changes everything.", icon: "💰" },
  { week: "Week 4", title: "Build Your Engine", desc: "Systematize what worked. Set up your acquisition loop. Know your numbers cold.", icon: "⚙️" },
];

const features = [
  { title: "Traction Score", desc: "A single number that captures your revenue momentum. Track MRR, churn, LTV, and growth rate in one dashboard.", icon: "📊" },
  { title: "Cohort Community", desc: "You're not alone. Work alongside 20-30 solo founders in your cohort. Share wins, debug failures, celebrate closures.", icon: "👥" },
  { title: "Proven Playbook", desc: "No fluff. A step-by-step system built from real founders who went from $0 to $10K MRR. Copy what works.", icon: "📋" },
  { title: "Weekly Sprints", desc: "Each week has a laser focus. Complete the sprint, hit the milestone. Structure beats motivation.", icon: "🏃" },
];

const testimonials = [
  { name: "Marcus T.", role: "Solo founder, B2B SaaS", quote: "FirstDollar forced me to actually talk to customers in Week 1. I almost skipped that. Would've built the wrong thing for 3 months." },
  { name: "Priya S.", role: "Bootstrapped to $4K MRR", quote: "The Traction Score kept me honest. I could see exactly where I was stuck — and my cohort helped me unstick it." },
  { name: "Jake R.", role: "First-time founder", quote: "I had no idea what I was doing. The cohort community meant I always had someone to ask. $99/mo felt like stealing." },
];

const faqs = [
  { q: "What if I'm pre-revenue?", a: "Perfect. FirstDollar is built for pre-revenue to early-revenue founders. Most of our members join before they've made a single dollar." },
  { q: "How much time do I need per week?", a: "Plan for 8-12 hours per week. The sprint structure means you always know what to work on — no decision fatigue." },
  { q: "What happens after 30 days?", a: "You keep access to the cohort community and Traction Score forever. Most members stay active after the challenge ends." },
  { q: "Is this for tech founders only?", a: "No. We've had designers, consultants, coaches, and writers complete the challenge. The principles apply to any solo business selling software or services." },
  { q: "What's the cohort size?", a: "Each cohort is 25-35 founders. Big enough to have diverse perspectives, small enough that everyone knows each other." },
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <main className="min-h-screen">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md border-b border-[var(--border)] bg-[var(--bg)]/80">
        <div className="text-xl font-bold bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] bg-clip-text text-transparent">
          FirstDollar
        </div>
        <div className="flex gap-6 text-sm text-[var(--muted)]">
          <a href="#challenge" className="hover:text-[var(--fg)] transition">30-Day Challenge</a>
          <a href="#features" className="hover:text-[var(--fg)] transition">Features</a>
          <a href="#pricing" className="hover:text-[var(--fg)] transition">Pricing</a>
        </div>
        <a href="#waitlist" className="px-4 py-2 text-sm font-semibold rounded-lg bg-[var(--accent)] text-[var(--bg)] hover:opacity-90 transition">
          Join Waitlist
        </a>
      </nav>

      {/* HERO */}
      <section className="relative pt-32 pb-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--accent)]/10 via-transparent to-transparent" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-medium rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 text-[var(--accent)]">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
            Cohort 4 starting May 15
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
            Go from idea<br />
            <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] bg-clip-text text-transparent animate-gradient">
              to your first dollar
            </span>
            <br />in 30 days
          </h1>
          <p className="text-lg md:text-xl text-[var(--muted)] max-w-2xl mx-auto mb-10">
            The zero-to-revenue playbook for solo SaaS founders. A structured 30-day challenge, a cohort of peers, and a score that tracks your momentum.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#waitlist" className="px-8 py-4 text-lg font-bold rounded-xl bg-[var(--accent)] text-[var(--bg)] hover:opacity-90 transition shadow-lg shadow-[var(--accent)]/25">
              Start Your Journey — $99/mo
            </a>
            <a href="#challenge" className="px-8 py-4 text-lg font-semibold rounded-xl border border-[var(--border)] hover:border-[var(--accent)] transition">
              See the Challenge →
            </a>
          </div>
          <p className="mt-4 text-sm text-[var(--muted)]">No credit card required to join waitlist</p>
        </div>

        {/* Floating cards */}
        <div className="absolute top-32 left-[10%] hidden lg:block animate-float" style={{ animationDelay: "0s" }}>
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-4 shadow-xl">
            <div className="text-xs text-[var(--muted)] mb-1">Traction Score</div>
            <div className="text-2xl font-bold text-[var(--accent)]">72</div>
            <div className="text-xs text-green-400">↑ 18 this week</div>
          </div>
        </div>
        <div className="absolute top-48 right-[8%] hidden lg:block animate-float" style={{ animationDelay: "1.5s" }}>
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-4 shadow-xl">
            <div className="text-xs text-[var(--muted)] mb-1">MRR</div>
            <div className="text-2xl font-bold">$1,247</div>
            <div className="text-xs text-green-400">↑ 3 new customers</div>
          </div>
        </div>
        <div className="absolute bottom-24 left-[15%] hidden lg:block animate-float" style={{ animationDelay: "0.8s" }}>
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-4 shadow-xl">
            <div className="text-xs text-[var(--muted)] mb-1">Day 14</div>
            <div className="text-xl font-bold">First sale!</div>
            <div className="text-xs text-[var(--accent)]">Cohort member</div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF BAR */}
      <section className="border-y border-[var(--border)] py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-[var(--accent)]">340+</div>
            <div className="text-sm text-[var(--muted)]">founders completed</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[var(--accent)]">$2.1M</div>
            <div className="text-sm text-[var(--muted)]">MRR generated by members</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[var(--accent)]">68%</div>
            <div className="text-sm text-[var(--muted)]">hit revenue in 30 days</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[var(--accent)]">4.9/5</div>
            <div className="text-sm text-[var(--muted)]">average rating</div>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Is this for you?</h2>
          <p className="text-[var(--muted)] mb-12 text-lg">FirstDollar is built for a specific founder at a specific moment.</p>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            {[
              { t: "You're solo", d: "No co-founders, no team. You're building this alone and want accountability." },
              { t: "You've got an idea", d: "Maybe you've been thinking about it for months. Maybe you just had it yesterday." },
              { t: "You want revenue, not just users", d: "You're tired of building in public with nothing to show. You want dollars." },
              { t: "You can commit 8-12 hrs/week", d: "The challenge works only if you do the work. No shortcuts, no magic." },
            ].map((item, i) => (
              <div key={i} className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-6">
                <div className="text-[var(--accent)] font-semibold mb-2">✓ {item.t}</div>
                <div className="text-sm text-[var(--muted)]">{item.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 30-DAY CHALLENGE */}
      <section id="challenge" className="py-24 px-6 bg-[var(--card)]/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The 30-Day Challenge</h2>
            <p className="text-[var(--muted)] text-lg">Every week has one mission. Complete it, and you will have revenue.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((c, i) => (
              <div key={i} className="bg-[var(--bg)] border border-[var(--border)] rounded-2xl p-6 hover:border-[var(--accent)]/50 transition group">
                <div className="text-4xl mb-4">{c.icon}</div>
                <div className="text-xs font-bold text-[var(--accent)] uppercase tracking-wider mb-2">{c.week}</div>
                <h3 className="text-lg font-bold mb-3 group-hover:text-[var(--accent)] transition">{c.title}</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRACTION SCORE */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-xs font-bold text-[var(--accent)] uppercase tracking-wider mb-4">New Feature</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Traction Score tells the truth</h2>
            <p className="text-[var(--muted)] text-lg mb-8">
              Most founders track vanity metrics — signups, pageviews, followers. Your Traction Score tracks what actually matters: revenue, growth, and retention.
            </p>
            <div className="space-y-4">
              {["Monthly Recurring Revenue (MRR)", "Customer Growth Rate", "Churn & Retention", "Lifetime Value (LTV)", "Net Promoter Score"].map((m, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-[var(--accent)]" />
                  <span className="text-sm">{m}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent)]/10 rounded-full blur-3xl" />
            <div className="relative">
              <div className="text-xs text-[var(--muted)] mb-2">Your Traction Score</div>
              <div className="text-7xl font-bold bg-gradient-to-br from-[var(--accent)] to-[var(--accent2)] bg-clip-text text-transparent mb-6">68</div>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { label: "MRR", value: "$840" },
                  { label: "Growth", value: "+23%" },
                  { label: "Churn", value: "2.1%" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-[var(--bg)] rounded-lg p-3 text-center">
                    <div className="text-xs text-[var(--muted)]">{stat.label}</div>
                    <div className="font-bold text-sm">{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section id="features" className="py-24 px-6 bg-[var(--card)]/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need to win</h2>
            <p className="text-[var(--muted)] text-lg">No course junk. Just the tools and community that actually move the needle.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <div key={i} className="bg-[var(--bg)] border border-[var(--border)] rounded-2xl p-8 hover:border-[var(--accent)]/40 transition">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-[var(--muted)]">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Founders who've been through it</h2>
            <p className="text-[var(--muted)] text-lg">Real stories from real members.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-8">
                <div className="text-[var(--accent)] text-2xl mb-4">"</div>
                <p className="text-sm text-[var(--muted)] mb-6 leading-relaxed">{t.quote}</p>
                <div className="font-bold text-sm">{t.name}</div>
                <div className="text-xs text-[var(--muted)]">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 px-6 bg-[var(--card)]/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, honest pricing</h2>
          <p className="text-[var(--muted)] text-lg mb-12">One price. Everything included. Cancel anytime.</p>
          <div className="bg-[var(--bg)] border-2 border-[var(--accent)] rounded-3xl p-10 relative overflow-hidden max-w-md mx-auto">
            <div className="absolute top-0 right-0 px-3 py-1 text-xs font-bold bg-[var(--accent)] text-[var(--bg)] rounded-bl-lg">Most Popular</div>
            <div className="text-lg font-bold text-[var(--accent)] mb-2">FirstDollar Member</div>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-5xl font-bold">$99</span>
              <span className="text-[var(--muted)]">/month</span>
            </div>
            <ul className="text-left space-y-3 mb-8">
              {[
                "30-day structured challenge",
                "Cohort community access (25-35 founders)",
                "Traction Score dashboard",
                "Weekly sprint reviews",
                "Proven playbook & templates",
                "Lifetime community access",
              ].map((feat, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <span className="text-[var(--accent)]">✓</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
            <a href="#waitlist" className="block w-full py-4 text-center font-bold rounded-xl bg-[var(--accent)] text-[var(--bg)] hover:opacity-90 transition">
              Join the Waitlist
            </a>
            <p className="mt-4 text-xs text-[var(--muted)]">Next cohort starts May 15 — limited to 30 spots</p>
          </div>
        </div>
      </section>

      {/* WAITLIST */}
      <section id="waitlist" className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get early access</h2>
          <p className="text-[var(--muted)] text-lg mb-8">
            Join the waitlist for Cohort 4. We'll notify you when registration opens and give you a preview of the full playbook.
          </p>
          {submitted ? (
            <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-8 text-green-400 font-semibold">
              You're on the list! We'll be in touch before May 15.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="flex-1 px-4 py-3 rounded-xl bg-[var(--card)] border border-[var(--border)] text-[var(--fg)] placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--accent)] transition"
              />
              <button type="submit" className="px-6 py-3 font-bold rounded-xl bg-[var(--accent)] text-[var(--bg)] hover:opacity-90 transition whitespace-nowrap">
                Join Waitlist
              </button>
            </form>
          )}
          <p className="mt-4 text-xs text-[var(--muted)]">No spam. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-[var(--card)]/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Common questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-[var(--border)] rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-[var(--card)]/50 transition"
                >
                  <span className="font-semibold text-sm">{faq.q}</span>
                  <span className="text-[var(--muted)] text-lg ml-4">{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-sm text-[var(--muted)] leading-relaxed">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[var(--border)] py-12 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-bold bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] bg-clip-text text-transparent">
            FirstDollar
          </div>
          <div className="flex gap-6 text-sm text-[var(--muted)]">
            <a href="#" className="hover:text-[var(--fg)] transition">Privacy</a>
            <a href="#" className="hover:text-[var(--fg)] transition">Terms</a>
            <a href="mailto:hello@firstdollar.so" className="hover:text-[var(--fg)] transition">Contact</a>
          </div>
          <div className="text-xs text-[var(--muted)]">© 2025 FirstDollar. Built for founders who ship.</div>
        </div>
      </footer>
    </main>
  );
}
