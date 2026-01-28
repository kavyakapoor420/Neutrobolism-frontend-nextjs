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
            Built for teachers who want to try, even when it's hard.
          </h2>
          <p className="text-muted-foreground font-body text-lg mb-8 max-w-xl mx-auto">
            This is an early version. It's not perfect. But it's built with care, 
            by people who've spent time in government school classrooms.
          </p>
          
          <button className="brutal-button text-lg mb-4">
            Explore the Prototype
          </button>

          <p className="text-sm text-muted-foreground font-body">
            No signup. No download. Just try it.
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
            Made with care for India's government school teachers.
          </p>
          <p>
            Questions? Write to us at{" "}
            <span className="underline-hand">hello@classroomsupport.in</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
