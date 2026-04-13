"use client";
import { useState } from "react";

const challengeDays = [
  { day: 1, title: "Define your offer", desc: "Write down exactly what you're selling and to whom. One sentence. 'I help [X] do [Y] with [Z].'" },
  { day: 2, title: "Talk to 5 potential users", desc: "No selling. Just listening. Find their biggest pain point. Ask: 'What's the hardest part about [their goal]?'" },
  { day: 3, title: "Identify the one person", desc: "Find your first potential customer — someone who'd pay $99/mo right now if the product existed. DM them today." },
  { day: 4, title: "Write your origin story", desc: "Why are you building this? Who are you building it for? Write 200 words. Makes it real." },
  { day: 5, title: "Research your competition", desc: "Find 3 direct competitors. Sign up for their trials. What do they charge? What do users complain about?" },
  { day: 6, title: "Define success metrics", desc: "What does 'winning' look like in 30 days? MRR target? Number of customers? Write it down." },
  { day: 7, title: "Week 1 review", desc: "Celebrate what you learned. Identify the single most important insight. Share it with your cohort." },
  { day: 8, title: "Build a landing page", desc: "Use Carrd, Framer, or Notion. One page: headline, value prop, email capture. Ship it today." },
  { day: 9, title: "Write 3 case studies", desc: "Research 3 real success stories in your niche. How did similar products change people's lives?" },
  { day: 10, title: "Set up Stripe", desc: "Create a Stripe account. Set up a $99/mo subscription. You can't charge if you can't pay." },
  { day: 11, title: "Write 10 cold outreach msgs", desc: "Draft personalized messages to 10 potential customers. No selling — just starting a conversation." },
  { day: 12, title: "Send your first outreach", desc: "Pick 5 from your list. Send personalized DMs or emails. Track who responds." },
  { day: 13, title: "Collect feedback", desc: "Reply to everyone who responded. Ask what they'd want. Listen more than you talk." },
  { day: 14, title: "Reach out to 5 past users", desc: "Send personalized messages to people who tried but didn't convert. Ask why." },
  { day: 15, title: "Week 2 review", desc: "What's working? What's not? Adjust your approach. Share learnings with cohort." },
  { day: 16, title: "Create a waitlist", desc: "If you don't have a product yet, create a waitlist. Use Typeform, Tally, or Google Forms." },
  { day: 17, title: "Post your first content", desc: "Write a tweet thread, LinkedIn post, or blog about the problem you're solving. Link to your landing page." },
  { day: 18, title: "Join 2 communities", desc: "Find where your users hang out. Reddit, Discord, Slack, Facebook Groups. Engage genuinely." },
  { day: 19, title: "Outline your onboarding", desc: "Write out the steps a new customer will take. What happens after they pay?" },
  { day: 20, title: "Create a stub product", desc: "Use Gumroad, LemonSqueezy, or a simple Stripe link. Sell the vision. Deliver later." },
  { day: 21, title: "Week 3 review", desc: "Have you made progress? What's blocking you? Time for a cohort call." },
  { day: 22, title: "Make the first ask", desc: "Text, email, or DM your #1 prospect. Say: 'Would you pay $99/mo for [your product]?'" },
  { day: 23, title: "Follow up 3 times", desc: "People don't convert on first contact. Send follow-up 1, 2, and 3 at appropriate intervals." },
  { day: 24, title: "Prepare your offer", desc: "Write your sales page. Headline, features, pricing, guarantee. Keep it simple." },
  { day: 25, title: "Demo or prototype", desc: "If you have a product, give a demo. If not, show your wireframe. Get feedback." },
  { day: 26, title: "Offer early bird pricing", desc: "Launch special: $79/mo for first 10 customers. Create urgency." },
  { day: 27, title: "Close the sale", desc: "Call, text, or DM your top prospect. Ask for the sale. 'Want to get started?'" },
  { day: 28, title: "Week 4 review", desc: "Did you make revenue? If yes, congrats! If not, why? What will you do differently?" },
  { day: 29, title: "Automate one thing", desc: "Set up an email auto-responder, Stripe webhook, or Zapier workflow. Remove manual work." },
  { day: 30, title: "Set your 60-day goal", desc: "Based on what you learned, set your MRR target for 60 days. Write it down. Tell your cohort." },
];

export default function ChallengePage() {
  const [openDay, setOpenDay] = useState<number | null>(null);

  const week1 = challengeDays.filter(d => d.day <= 7);
  const week2 = challengeDays.filter(d => d.day > 7 && d.day <= 14);
  const week3 = challengeDays.filter(d => d.day > 14 && d.day <= 21);
  const week4 = challengeDays.filter(d => d.day > 21);

  return (
    <main className="min-h-screen">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md border-b border-[var(--border)] bg-[var(--bg)]/80">
        <a href="/" className="text-xl font-bold bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] bg-clip-text text-transparent">
          FirstDollar
        </a>
        <div className="flex gap-6 text-sm text-[var(--muted)]">
          <a href="/challenge.html" className="hover:text-[var(--fg)] transition">30-Day Challenge</a>
          <a href="/community.html" className="hover:text-[var(--fg)] transition">Cohort</a>
          <a href="/#pricing" className="hover:text-[var(--fg)] transition">Pricing</a>
        </div>
        <a href="/#waitlist" className="px-4 py-2 text-sm font-semibold rounded-lg bg-[var(--accent)] text-[var(--bg)] hover:opacity-90 transition">
          Join Waitlist
        </a>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-medium rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 text-[var(--accent)]">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
            30 days to your first dollar
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            The 30-Day<br />
            <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] bg-clip-text text-transparent">
              Revenue Challenge
            </span>
          </h1>
          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto mb-8">
            Every day has one mission. Complete all 30 days and you will have revenue. No fluff, no shortcuts — just a proven system that works.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#waitlist" className="px-8 py-4 text-lg font-bold rounded-xl bg-[var(--accent)] text-[var(--bg)] hover:opacity-90 transition shadow-lg shadow-[var(--accent)]/25">
              Join the Cohort — $99/mo
            </a>
            <a href="/community.html" className="px-8 py-4 text-lg font-semibold rounded-xl border border-[var(--border)] hover:border-[var(--accent)] transition">
              See the Community →
            </a>
          </div>
        </div>
      </section>

      {/* WEEK 1 */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="text-4xl">🎯</div>
            <div>
              <div className="text-xs font-bold text-[var(--accent)] uppercase tracking-wider">Week 1</div>
              <h2 className="text-2xl md:text-3xl font-bold">Find Your First Signal</h2>
              <p className="text-sm text-[var(--muted)]">Validate your idea. Talk to humans. Find the one person who'd pay.</p>
            </div>
          </div>
          <div className="space-y-3">
            {week1.map((day) => (
              <div key={day.day} className="border border-[var(--border)] rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenDay(openDay === day.day ? null : day.day)}
                  className="w-full flex items-center gap-4 px-6 py-5 text-left hover:bg-[var(--card)]/50 transition"
                >
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30 flex items-center justify-center text-sm font-bold text-[var(--accent)]">
                    {day.day}
                  </span>
                  <span className="font-semibold">{day.title}</span>
                  <span className="ml-auto text-[var(--muted)] text-lg">{openDay === day.day ? "−" : "+"}</span>
                </button>
                {openDay === day.day && (
                  <div className="px-6 pb-5 text-sm text-[var(--muted)] leading-relaxed pl-16">{day.desc}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WEEK 2 */}
      <section className="py-16 px-6 bg-[var(--card)]/30">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="text-4xl">🚀</div>
            <div>
              <div className="text-xs font-bold text-[var(--accent)] uppercase tracking-wider">Week 2</div>
              <h2 className="text-2xl md:text-3xl font-bold">Ship Something Real</h2>
              <p className="text-sm text-[var(--muted)]">Build your landing page. Set up payments. Get in front of humans.</p>
            </div>
          </div>
          <div className="space-y-3">
            {week2.map((day) => (
              <div key={day.day} className="border border-[var(--border)] rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenDay(openDay === day.day ? null : day.day)}
                  className="w-full flex items-center gap-4 px-6 py-5 text-left hover:bg-[var(--card)]/50 transition"
                >
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30 flex items-center justify-center text-sm font-bold text-[var(--accent)]">
                    {day.day}
                  </span>
                  <span className="font-semibold">{day.title}</span>
                  <span className="ml-auto text-[var(--muted)] text-lg">{openDay === day.day ? "−" : "+"}</span>
                </button>
                {openDay === day.day && (
                  <div className="px-6 pb-5 text-sm text-[var(--muted)] leading-relaxed pl-16">{day.desc}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WEEK 3 */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="text-4xl">💰</div>
            <div>
              <div className="text-xs font-bold text-[var(--accent)] uppercase tracking-wider">Week 3</div>
              <h2 className="text-2xl md:text-3xl font-bold">Get Your First Dollar</h2>
              <p className="text-sm text-[var(--muted)]">Make the ask. Close the sale. Your first paying customer changes everything.</p>
            </div>
          </div>
          <div className="space-y-3">
            {week3.map((day) => (
              <div key={day.day} className="border border-[var(--border)] rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenDay(openDay === day.day ? null : day.day)}
                  className="w-full flex items-center gap-4 px-6 py-5 text-left hover:bg-[var(--card)]/50 transition"
                >
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30 flex items-center justify-center text-sm font-bold text-[var(--accent)]">
                    {day.day}
                  </span>
                  <span className="font-semibold">{day.title}</span>
                  <span className="ml-auto text-[var(--muted)] text-lg">{openDay === day.day ? "−" : "+"}</span>
                </button>
                {openDay === day.day && (
                  <div className="px-6 pb-5 text-sm text-[var(--muted)] leading-relaxed pl-16">{day.desc}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WEEK 4 */}
      <section className="py-16 px-6 bg-[var(--card)]/30">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="text-4xl">⚙️</div>
            <div>
              <div className="text-xs font-bold text-[var(--accent)] uppercase tracking-wider">Week 4</div>
              <h2 className="text-2xl md:text-3xl font-bold">Build Your Engine</h2>
              <p className="text-sm text-[var(--muted)]">Systematize what worked. Set up your acquisition loop. Know your numbers.</p>
            </div>
          </div>
          <div className="space-y-3">
            {week4.map((day) => (
              <div key={day.day} className="border border-[var(--border)] rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenDay(openDay === day.day ? null : day.day)}
                  className="w-full flex items-center gap-4 px-6 py-5 text-left hover:bg-[var(--card)]/50 transition"
                >
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30 flex items-center justify-center text-sm font-bold text-[var(--accent)]">
                    {day.day}
                  </span>
                  <span className="font-semibold">{day.title}</span>
                  <span className="ml-auto text-[var(--muted)] text-lg">{openDay === day.day ? "−" : "+"}</span>
                </button>
                {openDay === day.day && (
                  <div className="px-6 pb-5 text-sm text-[var(--muted)] leading-relaxed pl-16">{day.desc}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to start?</h2>
          <p className="text-[var(--muted)] text-lg mb-8">
            Join Cohort 4 starting May 15. Work alongside 25-35 solo founders. Get daily prompts and weekly reviews.
          </p>
          <a href="/#waitlist" className="inline-block px-8 py-4 text-lg font-bold rounded-xl bg-[var(--accent)] text-[var(--bg)] hover:opacity-90 transition shadow-lg shadow-[var(--accent)]/25">
            Join the Waitlist — It's Free
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[var(--border)] py-12 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-bold bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] bg-clip-text text-transparent">
            FirstDollar
          </div>
          <div className="flex gap-6 text-sm text-[var(--muted)]">
            <a href="/challenge.html" className="hover:text-[var(--fg)] transition">30-Day Challenge</a>
            <a href="/community.html" className="hover:text-[var(--fg)] transition">Cohort</a>
            <a href="/#pricing" className="hover:text-[var(--fg)] transition">Pricing</a>
          </div>
          <div className="text-xs text-[var(--muted)]">© 2025 FirstDollar. Built for founders who ship.</div>
        </div>
      </footer>
    </main>
  );
}
