'use client'

import { ShieldCheck, Clock, AlertTriangle, Brain } from "lucide-react";

const stats = [
  {
    label: "Focus Status",
    value: "Active",
    sub: "NeuroDroid running",
    icon: Brain,
    bg: "bg-[#cfdedd]",
  },
  {
    label: "Focus Time Today",
    value: "2h 40m",
    sub: "Across all sessions",
    icon: Clock,
    bg: "bg-[#ead9ad]",
  },
  {
    label: "Distractions Blocked",
    value: "6",
    sub: "Short-form & infinite scroll",
    icon: ShieldCheck,
    bg: "bg-[#d7ddd2]",
  },
  {
    label: "Attention Drops",
    value: "2",
    sub: "Auto-corrected",
    icon: AlertTriangle,
    bg: "bg-[#efd6c8]",
  },
];

const Dashboard = () => {
  return (
    <section className="section-asymmetric bg-paper relative overflow-hidden">
      <div className="absolute inset-0 bg-square-grid opacity-40 pointer-events-none" />

      <div className="container max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="mb-12 max-w-xl">
          <span className="inline-block bg-[#2f5d4a] text-[#f4f1ea] px-4 py-1 text-sm font-semibold border-2 border-foreground">
            Parent Dashboard
          </span>

          <h2 className="text-4xl font-display mt-5 mb-3">
            Child focus overview
          </h2>

          <p className="text-muted-foreground text-lg">
            See how NeuroDroid protects attention — without constant supervision.
          </p>
        </div>

        {/* STATS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className={`${item.bg} border-[3px] border-foreground p-6`}
              >
                <div className="flex gap-4 items-start">
                  <div className="bg-foreground text-background p-3">
                    <Icon size={22} strokeWidth={2.5} />
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground">
                      {item.label}
                    </p>
                    <h3 className="text-2xl font-display">
                      {item.value}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.sub}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ACTIVITY LOG */}
        <div className="brutal-card bg-accent/40 p-8">
          <h3 className="text-2xl font-display mb-4">
            Recent activity
          </h3>

          <ul className="space-y-4 text-muted-foreground">
            <li>
              • 10:42 AM — Infinite scrolling detected, session redirected
            </li>
            <li>
              • 9:15 AM — Focus session started (Homework)
            </li>
            <li>
              • Yesterday — 3 distraction attempts auto-blocked
            </li>
          </ul>
        </div>

        {/* FOOTNOTE */}
        <p className="mt-10 text-sm text-muted-foreground max-w-2xl">
          NeuroDroid does not record content or messages.  
          Parents see patterns — not private activity.
        </p>

      </div>
    </section>
  );
};

export default Dashboard;
