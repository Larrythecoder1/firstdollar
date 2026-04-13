"use client";
import { useState } from "react";
const metrics = [
  {label:"Monthly Recurring Revenue",value:"$1,247",change:"+23%",positive:true},
  {label:"Active Subscribers",value:"14",change:"+3",positive:true},
  {label:"Average Revenue Per User",value:"$89",change:"+$12",positive:true},
  {label:"Monthly Churn Rate",value:"4.2%",change:"-1.1%",positive:true},
  {label:"Customer LTV",value:"$2,133",change:"+$340",positive:true},
  {label:"Week-Over-Week Growth",value:"18%",change:"+7%",positive:true},
];
const breakdown = [
  {component:"Revenue Velocity",weight:30,score:85,desc:"MRR growth rate over past 30 days"},
  {component:"Customer Retention",weight:25,score:72,desc:"Based on churn rate and LTV"},
  {component:"Acquisition Efficiency",weight:25,score:64,desc:"New customers per outreach sent"},
  {component:"Revenue Quality",weight:20,score:78,desc:"ARPU relative to market benchmark"},
];
export default function TractionScorePage() {
  return (
    <main className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md border-b border-[var(--border)] bg-[var(--bg)]/80">
        <a href="/index.html" className="text-xl font-bold bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] bg-clip-text text-transparent">FirstDollar</a>
        <div className="flex gap-6 text-sm text-[var(--muted)]"><a href="/challenge.html" className="hover:text-[var(--fg)] transition">Challenge</a><a href="/community.html" className="hover:text-[var(--fg)] transition">Cohort</a><a href="/traction-score.html" className="text-[var(--accent)]">Traction Score</a></div>
        <a href="/signup.html" className="px-4 py-2 text-sm font-semibold rounded-lg bg-[var(--accent)] text-[var(--bg)]">Join Now</a>
      </nav>
      <section className="pt-32 pb-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-medium rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 text-[var(--accent)]"><span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-pulse"/>Your revenue momentum, in one number</div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">The Traction Score.<br/><span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] bg-clip-text text-transparent">Know Where You Stand.</span></h1>
          <p className="text-lg text-[var(--muted)] mb-8">A single number that captures your revenue momentum. Track MRR, churn, LTV, and growth rate in one dashboard.</p>
          <div className="flex gap-4 justify-center"><a href="/signup.html" className="px-8 py-4 text-lg font-bold rounded-xl bg-[var(--accent)] text-[var(--bg)]">Track Your Score — $99/mo</a><a href="/challenge.html" className="px-8 py-4 text-lg font-semibold rounded-xl border border-[var(--border)]">See the Challenge</a></div>
        </div>
      </section>
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-8 text-center mb-8">
            <div className="text-sm text-[var(--muted)] mb-2">Your Traction Score</div>
            <div className="text-8xl font-bold bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] bg-clip-text text-transparent mb-2">74</div>
            <div className="inline-flex items-center gap-1 px-3 py-1 text-sm font-medium rounded-full bg-green-500/20 text-green-400">↑ 12 points this month</div>
          </div>
          <h2 className="text-xl font-bold mb-6">Score Breakdown</h2>
          <div className="space-y-4 mb-8">{breakdown.map((b,i)=><div key={i} className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-5"><div className="flex items-center justify-between mb-3"><div><span className="font-semibold">{b.component}</span><span className="text-xs text-[var(--muted)] ml-2">({b.weight}% weight)</span></div><span className="text-xl font-bold text-[var(--accent)]">{b.score}</span></div><p className="text-sm text-[var(--muted)] mb-3">{b.desc}</p><div className="h-2 bg-[var(--bg)] rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)] rounded-full" style={{width:`${b.score}%`}}/></div></div>)}</div>
          <h2 className="text-xl font-bold mb-6">Core Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">{metrics.map((m,i)=><div key={i} className="bg-[var(--card)] border border-[var(--border)] rounded-xl p-5"><div className="text-xs text-[var(--muted)] mb-1">{m.label}</div><div className="flex items-end justify-between"><div className="text-2xl font-bold">{m.value}</div><div className={`text-sm font-medium ${m.positive?"text-green-400":"text-red-400"}`}>{m.change}</div></div></div>)}</div>
        </div>
      </section>
      <section className="py-16 px-6"><div className="max-w-4xl mx-auto"><h2 className="text-2xl font-bold text-center mb-12">How the Traction Score Works</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{[{step:"1",title:"Update Weekly",desc:"Enter your MRR, churn, and new customers once a week. Takes 2 minutes."},{step:"2",title:"Get Your Score",desc:"The algorithm calculates a single number from 0-100 based on 4 weighted components."},{step:"3",title:"Track Progress",desc:"See your score improve over time. Compare to cohort benchmarks."}].map((item,i)=><div key={i} className="text-center"><div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent2)] flex items-center justify-center text-xl font-bold text-[var(--bg)] mx-auto mb-4">{item.step}</div><h3 className="font-bold mb-2">{item.title}</h3><p className="text-sm text-[var(--muted)]">{item.desc}</p></div>)}</div></div></section>
      <section className="py-20 px-6 text-center"><div className="max-w-2xl mx-auto"><h2 className="text-3xl font-bold mb-4">Start Tracking Your Momentum</h2><p className="text-[var(--muted)] mb-8">Join FirstDollar and get the Traction Score, the 30-day challenge, and the cohort community — all for $99/mo.</p><a href="/signup.html" className="inline-block px-8 py-4 text-lg font-bold rounded-xl bg-[var(--accent)] text-[var(--bg)]">Get Started — $99/mo</a></div></section>
    </main>
  );
}