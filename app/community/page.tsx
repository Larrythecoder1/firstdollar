"use client";
import { useState } from "react";
const members = [
  {name:"Marcus T.",product:"B2B analytics",week:"Week 3",score:68,avatar:"M"},
  {name:"Priya S.",product:"Dev productivity",week:"Week 2",score:72,avatar:"P"},
  {name:"Jake R.",product:"No-code automation",week:"Week 4",score:85,avatar:"J"},
  {name:"Aisha M.",product:"AI writing",week:"Week 1",score:45,avatar:"A"},
  {name:"David K.",product:"E-commerce analytics",week:"Week 3",score:61,avatar:"D"},
  {name:"Sofia L.",product:"HR software",week:"Week 2",score:77,avatar:"S"},
  {name:"Raj P.",product:"API monitoring",week:"Week 4",score:92,avatar:"R"},
  {name:"Emma W.",product:"Design collab",week:"Week 1",score:38,avatar:"E"},
];
const sprints = [
  {week:"Week 1",theme:"Validation",focus:"Talk to users, find signal",color:"from-violet-500 to-purple-500"},
  {week:"Week 2",theme:"Building",focus:"Ship landing page, set up payments",color:"from-blue-500 to-cyan-500"},
  {week:"Week 3",theme:"Selling",focus:"Cold outreach, close first customer",color:"from-emerald-500 to-teal-500"},
  {week:"Week 4",theme:"Scaling",focus:"Automate, systemize, set 60-day goals",color:"from-orange-500 to-amber-500"},
];
export default function CommunityPage() {
  const [tab, setTab] = useState("members");
  return (
    <main className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md border-b border-[var(--border)] bg-[var(--bg)]/80">
        <a href="/" className="text-xl font-bold bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] bg-clip-text text-transparent">FirstDollar</a>
        <div className="flex gap-6 text-sm text-[var(--muted)]"><a href="/challenge" className="hover:text-[var(--fg)] transition">Challenge</a><a href="/community" className="text-[var(--accent)]">Cohort</a><a href="/traction-score" className="hover:text-[var(--fg)] transition">Traction Score</a></div>
        <a href="/signup" className="px-4 py-2 text-sm font-semibold rounded-lg bg-[var(--accent)] text-[var(--bg)]">Join Now</a>
      </nav>
      <section className="pt-32 pb-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-medium rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 text-[var(--accent)]"><span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse"/>Cohort 4 — 28 founders</div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Your Cohort.<br/><span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] bg-clip-text text-transparent">Your Battle Buddies.</span></h1>
          <p className="text-lg text-[var(--muted)] mb-8">Work alongside 25-35 solo founders. Share wins, debug failures, celebrate closures.</p>
          <div className="flex gap-4 justify-center"><a href="/signup" className="px-8 py-4 text-lg font-bold rounded-xl bg-[var(--accent)] text-[var(--bg)]">Join Cohort 4 — $99/mo</a><a href="/challenge" className="px-8 py-4 text-lg font-semibold rounded-xl border border-[var(--border)]">See the Challenge</a></div>
        </div>
      </section>
      <section className="py-8 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex gap-2 mb-8 p-1 bg-[var(--card)] rounded-xl border border-[var(--border)] w-fit">
            <button onClick={()=>setTab("members")} className={`px-5 py-2 text-sm font-medium rounded-lg transition ${tab==="members"?"bg-[var(--accent)] text-[var(--bg)]":"text-[var(--muted)]"}`}>Members</button>
            <button onClick={()=>setTab("sprints")} className={`px-5 py-2 text-sm font-medium rounded-lg transition ${tab==="sprints"?"bg-[var(--accent)] text-[var(--bg)]":"text-[var(--muted)]"}`}>Weekly Sprints</button>
          </div>
          {tab==="members" && <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">{members.map((m,i)=><div key={i} className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-5"><div className="flex items-center gap-3 mb-3"><div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent2)] flex items-center justify-center text-sm font-bold text-[var(--bg)]">{m.avatar}</div><div><div className="font-semibold text-sm">{m.name}</div><div className="text-xs text-[var(--muted)]">{m.week}</div></div></div><div className="text-xs text-[var(--muted)] mb-3">{m.product}</div><div className="flex items-center justify-between"><span className="text-xs text-[var(--muted)]">Score</span><span className="text-sm font-bold text-[var(--accent)]">{m.score}</span></div><div className="mt-2 h-1.5 bg-[var(--bg)] rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] rounded-full" style={{width:`${m.score}%`}}/></div></div>)}</div>}
          {tab==="sprints" && <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{sprints.map((s,i)=><div key={i} className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-6"><div className={`inline-flex items-center gap-2 px-3 py-1 mb-4 text-xs font-medium rounded-full bg-gradient-to-r ${s.color} text-white`}>{s.week}</div><h3 className="text-xl font-bold mb-2">{s.theme}</h3><p className="text-sm text-[var(--muted)]">{s.focus}</p></div>)}</div>}
        </div>
      </section>
      <section className="py-20 px-6 text-center"><div className="max-w-2xl mx-auto"><h2 className="text-3xl font-bold mb-4">Ready to Run With Us?</h2><p className="text-[var(--muted)] mb-8">Cohort 4 starts May 15. Spots are filling up.</p><a href="/signup" className="inline-block px-8 py-4 text-lg font-bold rounded-xl bg-[var(--accent)] text-[var(--bg)]">Join Cohort 4 — $99/mo</a></div></section>
    </main>
  );
}