import {
  MessageCircle,
  Lightbulb,
  PlayCircle,
  Share2,
} from "lucide-react";

const steps = [
  {
    step: "Step 1",
    title: "Speak or type your problem",
    desc:
      `"My students don't understand subtraction with borrowing" — just say what's happening.`,
    bg: "bg-[#ead9ad]", // warm yellow
    icon: MessageCircle,
  },
  {
    step: "Step 2",
    title: "Get practical suggestions",
    desc:
      "Receive 2–3 things you can try right now, in your next 10 minutes.",
    bg: "bg-[#cfdedd]", // light blue
    icon: Lightbulb,
  },
  {
    step: "Step 3",
    title: "Try it in class",
    desc: "Pick one suggestion. Use it. See what happens.",
    bg: "bg-[#efd6c8]", // soft peach
    icon: PlayCircle,
  },
  {
    step: "Step 4",
    title: "Share what worked",
    desc:
      "Help other teachers by telling us which ideas helped.",
    bg: "bg-[#d7ddd2]", // muted green
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
            Simple steps
          </span>

          <h2 className="text-4xl font-display mt-5 mb-3">
            How it works
          </h2>

          <p className="text-muted-foreground text-lg">
            No apps to download. No accounts to create. Just ask.
          </p>
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
