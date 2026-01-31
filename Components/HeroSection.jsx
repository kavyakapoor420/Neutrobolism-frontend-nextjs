// 'use client'

// const HeroSection = () => {
//   return (
//     <section className="relative min-h-[90vh] flex items-center bg-paper overflow-hidden">

//       {/* BACKGROUND GRID */}
//       <div className="absolute inset-0 bg-square-grid opacity-40 pointer-events-none" />

//       <div className="container max-w-6xl mx-auto px-6 relative z-10">
//         <div className="grid md:grid-cols-2 gap-16 items-center">

//           {/* ================= LEFT ================= */}
//           <div>
//             {/* Tag */}
//             <span className="inline-block mt-25 mb-3 px-4 py-2 text-sm font-semibold border-2 border-black bg-tag rotate-[-1deg]">
//               For government school teachers
//             </span>

//             {/* Heading */}
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-display leading-tight text-black mb-6">
//               When your classroom gets difficult,{" "}
//               <span className="highlight-marker">
//                 you shouldn't be alone.
//               </span>
//             </h1>

//             {/* Description */}
//             <p className="text-lg text-gray-700 max-w-xl mb-10 leading-relaxed">
//               You're mid-lesson. A student isn't understanding. Another is distracted.
//               The old training you attended three months ago feels far away.
//               You need support right now — not later.
//             </p>

//             {/* Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4">
//               <button className="px-6 py-3 text-lg font-semibold border-2 border-black bg-green text-white shadow-brutal">
//                 Get Support for Today's Class
//               </button>

//               <button className="px-6 py-3 text-lg font-semibold border-2 border-black bg-tag shadow-brutal">
//                 See How It Works
//               </button>
//             </div>

//             {/* Trust text */}
//             <p className="mt-8 text-sm text-gray-600">
//               No login required. Works on basic phones. Free to try.
//             </p>
//           </div>

//           {/* ================= RIGHT MOCKUP ================= */}
//           <div className="flex justify-center md:justify-end">
//             <div className="w-[320px] rounded-xl overflow-hidden border border-[#2a2a2a] bg-[#f7f3eb] shadow-xl">

//               {/* Header */}
//               <div className="bg-[#2f5d4a] px-4 py-3 flex justify-between items-center">
//                 <span className="text-[#f4f1ea] text-sm font-semibold">
//                   Classroom Support
//                 </span>
//                 <span className="w-2 h-2 rounded-full bg-[#e8d9b5]" />
//               </div>

//               {/* Chat */}
//               <div className="p-4 space-y-4 min-h-[360px]">
//                 <div className="bg-[#2f5d4a] text-[#f4f1ea] p-4 border border-[#1f3d31]">
//                   <p className="text-sm">
//                     My class 4 students are not understanding subtraction with
//                     borrowing. What can I try?
//                   </p>
//                 </div>

//                 <div className="bg-[#e8d9b5] text-[#1a1a1a] p-4 border border-[#cdbf9a]">
//                   <p className="text-sm font-semibold mb-2">
//                     Try this in your next 5 minutes:
//                   </p>
//                   <p className="text-sm">
//                     Use real objects. Ask students to take 3 pencils from a bundle
//                     of 10. Show them physically crossing out and regrouping.
//                   </p>
//                   <p className="text-xs mt-3 text-[#5f5a4d]">
//                     Tap for more ideas →
//                   </p>
//                 </div>
//               </div>

//               {/* Input */}
//               <div className="border-t border-[#d8d2c4] p-3 flex gap-2">
//                 <div className="flex-1 border border-[#cfc8b8] px-3 py-2 text-sm text-[#777]">
//                   Ask your question...
//                 </div>
//                 <button className="bg-[#2f5d4a] text-white px-3 border border-[#2f5d4a]">
//                   →
//                 </button>
//               </div>

//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   )
// }

// export default HeroSection


'use client'

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-paper overflow-hidden">

      {/* BACKGROUND GRID */}
      <div className="absolute inset-0 bg-square-grid opacity-40 pointer-events-none" />

      <div className="container max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* ================= LEFT ================= */}
          <div>
            {/* Tag */}
            <span className="inline-block mt-25 mb-3 px-4 py-2 text-sm font-semibold border-2 border-black bg-tag rotate-[-1deg]">
              AI-powered focus enforcement
            </span>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display leading-tight text-black mb-6">
              Focus is the new currency.{" "}
              <span className="highlight-marker">
                Do not let<span className="text-red-500 ml-2">BrainRot</span> devalue your mind.
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-700 max-w-xl mb-10 leading-relaxed">
              NeuroDroid is an on-device AI agent that intervenes when you lose focus.
              It understands what you are consuming, detects intent collapse, and
              redirects you before distraction takes over.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 text-lg font-semibold border-2 border-black bg-green text-white shadow-brutal">
                Start Focus Session
              </button>

              <button className="px-6 py-3 text-lg font-semibold border-2 border-black bg-tag shadow-brutal">
                See How It Works
              </button>
            </div>

            {/* Trust text */}
            <p className="mt-8 text-sm text-gray-600">
              No accounts. Runs locally. Designed for real humans.
            </p>
          </div>

          {/* ================= RIGHT MOCKUP ================= */}
          <div className="flex justify-center md:justify-end">
            <div className="w-[320px] rounded-xl overflow-hidden border border-[#2a2a2a] bg-[#f7f3eb] shadow-xl">

              {/* Header */}
              <div className="bg-[#2f5d4a] px-4 py-3 flex justify-between items-center">
                <span className="text-[#f4f1ea] text-sm font-semibold">
                  NeuroDruoid Active
                </span>
                <span className="w-2 h-2 rounded-full bg-[#e8d9b5]" />
              </div>

              {/* Chat / System Log */}
              <div className="p-4 space-y-4 min-h-[360px]">
                <div className="bg-[#2f5d4a] text-[#f4f1ea] p-4 border border-[#1f3d31]">
                  <p className="text-sm">
                    Prolonged scrolling detected. Content relevance decreasing.
                  </p>
                </div>

                <div className="bg-[#e8d9b5] text-[#1a1a1a] p-4 border border-[#cdbf9a]">
                  <p className="text-sm font-semibold mb-2">
                    Focus redirection applied:
                  </p>
                  <p className="text-sm">
                    Session paused. Returning you to your original task.
                    Distraction window closed.
                  </p>
                  <p className="text-xs mt-3 text-[#5f5a4d]">
                    Override unavailable →
                  </p>
                </div>
              </div>

              {/* Input (disabled / system-controlled) */}
              <div className="border-t border-[#d8d2c4] p-3 flex gap-2">
                <div className="flex-1 border border-[#cfc8b8] px-3 py-2 text-sm text-[#777]">
                  Manual control disabled during focus session
                </div>
                <button className="bg-[#2f5d4a] text-white px-3 border border-[#2f5d4a] opacity-60 cursor-not-allowed">
                  —
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default HeroSection
