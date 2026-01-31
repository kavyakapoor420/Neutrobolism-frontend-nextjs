import {
  MessageCircle,
  Lightbulb,
  PlayCircle,
  Share2,
} from "lucide-react";

const steps = [
  {
    step: "Step 1",
    title: "Start a focus session",
    desc:
      "Tell NeuroDroid what you want to work on — studying, coding, reading, or deep work.",
    bg: "bg-[#ead9ad]",
    icon: MessageCircle,
  },
  {
    step: "Step 2",
    title: "AI monitors intent drift",
    desc:
      "On-device AI understands scrolling patterns, content relevance, and attention decay.",
    bg: "bg-[#cfdedd]",
    icon: Lightbulb,
  },
  {
    step: "Step 3",
    title: "Distraction is interrupted",
    desc:
      "When focus drops, NeuroDroid pauses distractions and redirects you to your original task.",
    bg: "bg-[#efd6c8]",
    icon: PlayCircle,
  },
  {
    step: "Step 4",
    title: "Stay in control",
    desc:
      "No cloud tracking. No manipulation. Your focus stays private, local, and intentional.",
    bg: "bg-[#d7ddd2]",
    icon: Share2,
  },
];


const HowItWorksSection = () => {
  return (
  <section className="section-asymmetric bg-paper relative overflow-hidden">
<div className="absolute inset-0 bg-square-grid opacity-40 pointer-events-none" />

      <div className="container max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="mb-14 max-w-xl">
          <span className="inline-block bg-[#2f5d4a] text-[#f4f1ea] px-4 py-1 text-sm font-semibold border-2 border-foreground">
  AI-powered focus enforcement
</span>

        
<h2 className="text-4xl font-display mt-5 mb-3">
  How NeuroDroid works
</h2>

<p className="text-muted-foreground text-lg">
  An on-device AI agent that protects your attention before brain rot takes over.
</p> NeuroDroid 
        </div>

        {/* STEPS GRID */}
        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.step}
                className={`${item.bg} border-[3px] border-foreground p-6`}
              >
                <div className="flex gap-5 items-start">
                  {/* ICON */}
                  <div className="bg-foreground text-background p-3">
                    <Icon size={22} strokeWidth={2.5} />
                  </div>

                  {/* TEXT */}
                  <div>
                    <span className="text-sm text-muted-foreground block mb-1">
                      {item.step}
                    </span>

                    <h3 className="text-xl font-display mb-2">
                      {item.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
};

export default HowItWorksSection;
