"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const challengeDays = [
  // WEEK 1: FIND YOUR FIRST SIGNAL
  { day: 1, milestone: true, title: "Define your offer in one sentence", desc: "Complete this formula: 'I help [specific person] achieve [specific outcome] using [your solution].' Example: 'I help solo consultants land 3 more clients per month using my outreach template system.' This isn't abstract — it should pass the 'so what?' test.", action: "Write your one-liner. Then stress-test it: Would a stranger immediately understand who this is for?" },
  { day: 2, title: "Cold outreach to 5 potential users", desc: "Find 5 people who fit your target customer profile. Reddit, LinkedIn, Twitter DMs, or email. Your goal is NOT to sell — it's to understand their current alternative. Ask: 'What's the hardest part about [goal they have]? What have you tried?'", action: "Send 5 messages today. Track responses in a spreadsheet. Even 'no thanks' is data." },
  { day: 3, milestone: true, title: "Find your 'hell yes' person", desc: "Look through your responses from Day 2. Find the one person who replied with genuine interest or enthusiasm. This is your early adopter candidate. Reach out directly and ask if they'd take a 15-min call to help you shape the product.", action: "DM your most promising prospect: 'Hey [name], would you be open to a quick chat? I'm building [brief description] and think you might have insights.'" },
  { day: 4, title: "Document your origin story", desc: "Why are you building this? Who are you building it for? Write 200 words about your personal connection to this problem. This becomes your 'About' page, your Twitter bio, and your anchor when things get hard.", action: "Write your origin story. Share it with your cohort. Ask: 'Does this resonate? Would you buy this?'" },
  { day: 5, title: "Reverse-engineer 3 competitors", desc: "Find your 3 closest competitors. Sign up for their free trials, read their documentation, check their G2/Capterra reviews. Document: What do they charge? What do users complain about most? What are they missing?", action: "Create a comparison table: Price | Core Feature | Biggest Complaint | What's Missing. Identify your wedge." },
  { day: 6, title: "Set your 30-day success metrics", desc: "Be specific. Not 'make money' — set an exact MRR target, a customer count, and a churn threshold. Write it down. Example: '$1,000 MRR from 10 customers at $99/mo with <5% monthly churn.'", action: "Write your 30-day target in the format: 'By Day 30, I will have $[X] MRR from [Y] paying customers.'" },
  { day: 7, milestone: true, title: "Week 1 Review: Identify your #1 insight", desc: "Compile everything you learned this week. Which conversation revealed the most about what people actually need? What's the gap in the market you've identified? Share this with your cohort before moving on.", action: "Post in your cohort channel: 'The biggest thing I learned this week is [X]. This changes my approach because [Y].'" },
  
  // WEEK 2: SHIP SOMETHING REAL
  { day: 8, milestone: true, title: "Launch your landing page", desc: "Use Carrd.co (free), Framer, or even a well-formatted Notion page. Your page needs: (1) A headline that passes the 'so what?' test, (2) 3 bullet points on what you do and for whom, (3) An email capture form. Ship it today.", action: "Publish your landing page. Send the link to your cohort. Get feedback within 24 hours." },
  { day: 9, title: "Write your first 3 social posts", desc: "Write a Twitter/X thread, LinkedIn post, or blog that explains the problem you're solving. Not your product — the PROBLEM. Frame it as a story or observation, not a pitch. Include a link to your landing page.", action: "Publish 3 posts today. Track which one gets the most engagement. Double down on that format." },
  { day: 10, title: "Set up your payment stack", desc: "Create a Stripe account if you haven't. Set up a $99/month subscription product. Configure your customer portal, billing portal, and at least one webhook (to Zapier or email). You cannot charge if your payment is broken.", action: "Complete Stripe onboarding. Test your own payment link by purchasing $1 of your own product." },
  { day: 11, title: "Draft 15 personalized cold outreach messages", desc: "These are not broadcast DMs. These are specific, personalized messages to real people. Reference something they posted, their job, or their company. The opener should be about THEM, not you.", action: "Write 15 unique messages in a spreadsheet. Column 1: Person | Column 2: Personalization hook | Column 3: Message body." },
  { day: 12, title: "Send your first 5 outreach messages", desc: "Pick your 5 best-fit prospects from Day 11. Send them TODAY. Track who opens, who replies, who converts. The goal is to start real conversations — not close sales.", action: "Send 5 messages. Log them in your tracker. Set a reminder to follow up in 3 days." },
  { day: 13, milestone: true, title: "Reply to every response", desc: "Go through every reply you've received — from social, outreach, and your landing page. Reply to each one personally. If they're interested, offer a call. If they're not, ask what would make it more compelling.", action: "Respond to all messages within 24 hours. Log any objections you hear — they'll inform your pitch." },
  { day: 14, title: "Analyze your landing page conversion rate", desc: "Check your landing page analytics. How many visitors? How many email signups? What's your conversion rate? A good rate is 5-10% of visitors signing up. If lower, test a new headline or simplify your offer.", action: "Calculate: (Email signups ÷ Page visits) × 100 = Conversion rate. If under 5%, change your headline and test again." },
  
  // WEEK 3: GET YOUR FIRST DOLLAR
  { day: 15, milestone: true, title: "Week 3 Review: What's blocking revenue?", desc: "Take stock. Do you have: (1) A landing page? (2) A payment link? (3) At least one interested prospect? If any are missing, fix them today. Revenue requires all three.", action: "Checklist: [ ] Landing page live [ ] Stripe configured [ ] At least 1 warm prospect. If any are missing, fix immediately." },
  { day: 16, title: "Create a waitlist with early bird offer", desc: "If you don't have a live product, use Gumroad, LemonSqueezy, or Typeform to collect payments 'early access.' Offer $79/mo for first 10 customers (vs $99 later). Create scarcity: 'Only 10 spots at this price.'", action: "Set up early bird offer. Publish your paid waitlist. Send to everyone who's shown interest." },
  { day: 17, title: "Post your first 'launch' content", desc: "Write a thread or post announcing what you're building and that you're taking early customers. Frame it as a story of discovery, not a product announcement. Proof-read it. Then publish.", action: "Publish launch content. Include your payment link or landing page. Ask 3 friends to share." },
  { day: 18, title: "Join 3 communities where your users hang out", desc: "Find 3 Reddit communities, Discords, Slack groups, or Facebook Groups where your target customers discuss related problems. Don't pitch — just observe and contribute genuinely. Note what questions get asked repeatedly.", action: "Join 3 communities. Lurking is fine. Share 1 genuinely helpful comment. Note top 3 questions people ask." },
  { day: 19, title: "Write your onboarding sequence", desc: "Document what happens after someone pays: (1) Welcome email with login info, (2) Getting started guide, (3) Day 3 check-in, (4) Day 7 feedback request. Write these as templates you can automate.", action: "Write 4-email onboarding sequence in a Google Doc. You'll automate this in Week 4." },
  { day: 20, milestone: true, title: "Make the ask — directly", desc: "Text, DM, or email your #1 warm prospect from this week. Say: 'Would you pay $99/month for [product]? I'm launching next week and looking for early users.' If they say yes, send the payment link immediately.", action: "Contact your hottest prospect. Ask for the sale directly. Send payment link same day." },
  { day: 21, title: "Follow up on every outstanding lead", desc: "Review everyone you've talked to this week who hasn't converted. Send a follow-up. People don't convert on first contact. Follow up 2-3 times before giving up.", action: "Send follow-up messages to everyone who went cold. Track responses. If still no response after 3 attempts, move on." },
  
  // WEEK 4: BUILD YOUR ENGINE
  { day: 22, milestone: true, title: "Week 4 Review: Did you make revenue?", desc: "If you made your first dollar: congratulations. Document exactly what action produced it. If you didn't: identify the blocker. Was it traffic? Conversion? Something else? Tell your cohort.", action: "Revenue check: What worked? What didn't? What's your next move? Post in cohort channel." },
  { day: 23, title: "Raise your price or add a tier", desc: "If you've been underpricing, now's the time to test $99 or $149/mo. Add a yearly option (10-20% discount). Your early customers validate the concept — now optimize for revenue per customer.", action: "Update your Stripe product to $99/mo. Add yearly option ($990/year = 2 months free). Announce in your content." },
  { day: 24, title: "Automate your onboarding", desc: "Set up your email sequence in ConvertKit, Mailchimp, or Loops. Configure Stripe webhooks to auto-tag customers. Remove every manual step between payment and delivery.", action: "Set up email automation: Welcome → Day 3 → Day 7 → Day 14 check-in. Test the full flow yourself." },
  { day: 25, title: "Write 1 piece of distribution content", desc: "Create one asset designed to drive traffic: a Twitter thread, LinkedIn post, blog tutorial, or YouTube short. Focus on teaching something related to your product, not selling it.", action: "Publish 1 piece of content. Distribute it in 2+ channels (Twitter + a community you joined). Track referral traffic." },
  { day: 26, title: "Implement feedback from early customers", desc: "Talk to everyone who's paid. Ask: 'What's the #1 thing this is helping you with? What's missing?' Fix the #1 complaint before scaling.", action: "Send 3 customer interviews. Document feedback. Implement the most critical fix within 48 hours." },
  { day: 27, milestone: true, title: "Double down on what's working", desc: "Look at your data: Which content format got the most traction? Which outreach method got responses? Which channel drove signups? Put all effort into that one channel for the next 3 days.", action: "Identify your top-performing channel. Commit to publishing there daily for the next week." },
  { day: 28, title: "Set up your metrics dashboard", desc: "Track these weekly: MRR, New Customers, Churn Rate, Conversion Rate (visitors → signups → customers). Create a simple spreadsheet. Update it every Monday morning.", action: "Create your metrics spreadsheet with: MRR | New Customers | Churn | Conversion Rate. Check in weekly." },
  { day: 29, title: "Document your playbook", desc: "Write down what you did, what worked, what didn't. This becomes: (1) Your content bank for the next 6 months, (2) Your reference when you forget, (3) Your recruiting story later.", action: "Write a 'What I Did' document: Week-by-week breakdown. Save it somewhere safe." },
  { day: 30, milestone: true, title: "Set your 60-day MRR goal", desc: "Based on what you learned, set a new MRR target. Not $1K this time — think bigger. What would $5K MRR enable? $10K? Write the number. Tell your cohort. Then reverse-engineer the week-by-week path to get there.", action: "Set your 60-day MRR goal. Post it in cohort: 'My 60-day target is $[X] MRR. My weekly checkpoint is [Y].'" },
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
        <motion.a 
          href="/#waitlist" 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-4 py-2 text-sm font-semibold rounded-lg bg-[var(--accent)] text-[var(--bg)] hover:opacity-90 transition"
        >
          Join Waitlist
        </motion.a>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-medium rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 text-[var(--accent)]"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse" />
            30 days to your first dollar
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight"
          >
            The 30-Day<br />
            <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] bg-clip-text text-transparent">
              Revenue Challenge
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-[var(--muted)] max-w-2xl mx-auto mb-8"
          >
            Every day has one mission. Complete all 30 days and you will have revenue. Each milestone unlocks the next phase.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a 
              href="/#waitlist" 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 text-lg font-bold rounded-xl bg-[var(--accent)] text-[var(--bg)] hover:opacity-90 transition shadow-lg shadow-[var(--accent)]/25"
            >
              Join the Cohort — $99/mo
            </motion.a>
            <a href="/community.html" className="px-8 py-4 text-lg font-semibold rounded-xl border border-[var(--border)] hover:border-[var(--accent)] transition">
              See the Community →
            </a>
          </motion.div>
        </div>
      </section>

      {/* MILESTONE LEGEND */}
      <section className="py-8 px-6 bg-[var(--card)]/30 border-y border-[var(--border)]">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/30 flex items-center justify-center text-xs font-bold text-[var(--accent)]">★</span>
            <span className="text-[var(--muted)]">Milestone Day — complete these to unlock the next phase</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-[var(--bg)] border border-[var(--border)] flex items-center justify-center text-xs font-bold text-[var(--muted)]">12</span>
            <span className="text-[var(--muted)]">Action Day — complete the task by end of day</span>
          </div>
        </div>
      </section>

      {/* WEEK 1 */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="text-4xl">🎯</div>
            <div>
              <div className="text-xs font-bold text-[var(--accent)] uppercase tracking-wider">Week 1</div>
              <h2 className="text-2xl md:text-3xl font-bold">Find Your First Signal</h2>
              <p className="text-sm text-[var(--muted)]">Validate your idea. Talk to humans. Find your early adopter.</p>
            </div>
          </motion.div>
          <div className="space-y-3">
            {week1.map((day) => (
              <DayAccordion key={day.day} day={day} isOpen={openDay === day.day} onToggle={() => setOpenDay(openDay === day.day ? null : day.day)} />
            ))}
          </div>
        </div>
      </section>

      {/* WEEK 2 */}
      <section className="py-16 px-6 bg-[var(--card)]/30">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="text-4xl">🚀</div>
            <div>
              <div className="text-xs font-bold text-[var(--accent)] uppercase tracking-wider">Week 2</div>
              <h2 className="text-2xl md:text-3xl font-bold">Ship Something Real</h2>
              <p className="text-sm text-[var(--muted)]">Launch your landing page. Set up payments. Get in front of humans.</p>
            </div>
          </motion.div>
          <div className="space-y-3">
            {week2.map((day) => (
              <DayAccordion key={day.day} day={day} isOpen={openDay === day.day} onToggle={() => setOpenDay(openDay === day.day ? null : day.day)} />
            ))}
          </div>
        </div>
      </section>

      {/* WEEK 3 */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="text-4xl">💰</div>
            <div>
              <div className="text-xs font-bold text-[var(--accent)] uppercase tracking-wider">Week 3</div>
              <h2 className="text-2xl md:text-3xl font-bold">Get Your First Dollar</h2>
              <p className="text-sm text-[var(--muted)]">Make the ask. Close the sale. Your first paying customer changes everything.</p>
            </div>
          </motion.div>
          <div className="space-y-3">
            {week3.map((day) => (
              <DayAccordion key={day.day} day={day} isOpen={openDay === day.day} onToggle={() => setOpenDay(openDay === day.day ? null : day.day)} />
            ))}
          </div>
        </div>
      </section>

      {/* WEEK 4 */}
      <section className="py-16 px-6 bg-[var(--card)]/30">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="text-4xl">⚙️</div>
            <div>
              <div className="text-xs font-bold text-[var(--accent)] uppercase tracking-wider">Week 4</div>
              <h2 className="text-2xl md:text-3xl font-bold">Build Your Engine</h2>
              <p className="text-sm text-[var(--muted)]">Systematize what worked. Automate your funnel. Set your 60-day target.</p>
            </div>
          </motion.div>
          <div className="space-y-3">
            {week4.map((day) => (
              <DayAccordion key={day.day} day={day} isOpen={openDay === day.day} onToggle={() => setOpenDay(openDay === day.day ? null : day.day)} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Ready to start?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[var(--muted)] text-lg mb-8"
          >
            Join Cohort 4 starting May 15. Work alongside 25-35 solo founders. Get daily prompts and weekly reviews.
          </motion.p>
          <motion.a 
            href="/#waitlist" 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block px-8 py-4 text-lg font-bold rounded-xl bg-[var(--accent)] text-[var(--bg)] hover:opacity-90 transition shadow-lg shadow-[var(--accent)]/25"
          >
            Join the Waitlist — It's Free
          </motion.a>
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

function DayAccordion({ day, isOpen, onToggle }: { day: typeof challengeDays[0]; isOpen: boolean; onToggle: () => void }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4 }}
      className={`border border-[var(--border)] rounded-xl overflow-hidden ${day.milestone ? "border-[var(--accent)]/40 bg-[var(--accent)]/5" : ""}`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 px-6 py-5 text-left hover:bg-[var(--card)]/50 transition"
      >
        <span className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${day.milestone ? "bg-[var(--accent)]/20 border border-[var(--accent)]/40 text-[var(--accent)]" : "bg-[var(--accent)]/10 border border-[var(--accent)]/30 text-[var(--accent)]"}`}>
          {day.milestone ? "★" : day.day}
        </span>
        <span className={`font-semibold ${day.milestone ? "text-[var(--accent)]" : ""}`}>{day.title}</span>
        <motion.span 
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="ml-auto text-[var(--muted)] text-lg"
        >
          ↓
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ overflow: "hidden" }}
      >
        <div className="px-6 pb-5 pl-16 space-y-3">
          <p className="text-sm text-[var(--muted)] leading-relaxed">{day.desc}</p>
          <div className="bg-[var(--bg)] rounded-lg p-4 border border-[var(--border)]">
            <div className="text-xs font-semibold text-[var(--accent)] uppercase tracking-wider mb-2">Today's Action</div>
            <p className="text-sm text-[var(--fg)] leading-relaxed">{day.action}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
