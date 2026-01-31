'use client'

import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="section-asymmetric   flex justify-center items-center py-20">
      <div className="container max-w-3xl bg-paper relative text-center bg-sqaure-grid bg-opacity-40 p-6 md:p-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="brutal-card bg-accent/40 p-8 md:p-12"
        >
          <h2 className="text-2xl md:text-3xl font-display mb-4">
  Built for people who want to protect their focus.
</h2>

<p className="text-muted-foreground font-body text-lg mb-8 max-w-xl mx-auto">
  This is an early version of NeuroDroid. It’s not about productivity hacks 
  it’s about stopping distraction before it takes control.
</p>

<button className="brutal-button text-lg mb-4">
  Start a Focus Session
</button>

<p className="text-sm text-muted-foreground font-body">
  No accounts. No tracking. Runs locally.
</p>

        </motion.div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-sm text-muted-foreground font-body space-y-2"
        >
<p>
  Designed to fight brain rot and reclaim attention.
</p>
<p>
  Questions? Write to us at{" "}
  <span className="underline-hand">hello@neurodroid.ai</span>
</p>

        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
