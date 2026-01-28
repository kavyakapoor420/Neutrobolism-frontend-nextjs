'use client'
const PrototypeMockupSection = () => {
  return (
   <section className="relative min-h-screen bg-[#0f0f0f] flex items-center overflow-hidden bg-grid2">

  {/* CONTENT */}
  <div className="container max-w-6xl mx-auto px-6 relative z-10">
    
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT TEXT */}
          <div>
            <span className="inline-block mb-6 bg-[#e8d9b5] text-[#1a1a1a] px-4 py-1 text-sm font-medium">
              Early prototype
            </span>

            <h2 className="text-4xl md:text-5xl font-display text-[#f5f5f5] mb-6 leading-tight">
              Simple enough for a busy classroom
            </h2>

            <p className="text-[#bfbfbf] text-lg max-w-md mb-6 leading-relaxed">
              This is what it looks like. No fancy dashboards. No confusing menus.
              Just a place to ask and a place to see the answer.
            </p>

            <p className="text-[#8a8a8a] text-sm">
              Works on WhatsApp-capable phones. Loads fast on 2G.
            </p>
          </div>

          {/* RIGHT PHONE MOCKUP */}
          <div className="flex justify-center">
            <div className="w-[320px] rounded-xl overflow-hidden border border-[#2a2a2a] bg-[#f7f3eb]">

              {/* Header */}
              <div className="bg-[#2f5d4a] px-4 py-3 flex items-center justify-between">
                <span className="text-[#f4f1ea] text-sm font-semibold">
                  Classroom Support
                </span>
                <span className="w-2 h-2 rounded-full bg-[#e8d9b5]" />
              </div>

              {/* Chat area */}
              <div className="p-4 space-y-4 min-h-[360px]">

                {/* Question */}
                <div className="bg-[#2f5d4a] text-[#f4f1ea] p-4 border border-[#1f3d31]">
                  <p className="text-sm leading-relaxed">
                    My class 4 students are not understanding subtraction with
                    borrowing. What can I try?
                  </p>
                </div>

                {/* Answer */}
                <div className="bg-[#e8d9b5] text-[#1a1a1a] p-4 border border-[#cdbf9a]">
                  <p className="text-sm font-semibold mb-2">
                    Try this in your next 5 minutes:
                  </p>
                  <p className="text-sm leading-relaxed">
                    Use real objects. Ask students to take 3 pencils from a bundle
                    of 10. Show them physically crossing out and regrouping.
                  </p>
                  <p className="text-xs mt-3 text-[#5f5a4d]">
                    Tap for more ideas →
                  </p>
                </div>

              </div>

              {/* Input */}
              <div className="border-t border-[#d8d2c4] p-3 flex gap-2">
                <div className="flex-1 border border-[#cfc8b8] px-3 py-2 text-sm text-[#777]">
                  Ask your question...
                </div>
                <button className="border border-[#2f5d4a] bg-[#2f5d4a] text-[#f4f1ea] px-3 flex items-center justify-center">
                  →
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PrototypeMockupSection;



