import { motion } from "motion/react";
import { MessageSquareQuote, Search, ShieldCheck, RefreshCw } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { fadeUp, staggerContainer } from "@/lib/animations";

const principles = [
  {
    icon: Search,
    title: "Understand the problem",
    description: "I start by understanding the need before choosing a technology or writing code.",
  },
  {
    icon: ShieldCheck,
    title: "Be transparent",
    description: "Clear communication, honest progress updates, and realistic expectations matter.",
  },
  {
    icon: RefreshCw,
    title: "Keep improving",
    description: "I value feedback and use it to refine both the process and the final result.",
  },
];

const Testimonials = () => (
  <motion.section
    id="testimonials"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={staggerContainer(0.12)}
    className="mt-30 scroll-mt-10"
  >
    <SectionHeader subtitle="Testimonials" title="Good work starts with good communication." />
    <motion.div variants={fadeUp} className="mt-5 flex items-start gap-3 rounded-lg border border-neutral-700 bg-neutral-900/40 p-4 text-sm leading-6 text-neutral-400">
      <MessageSquareQuote className="mt-0.5 size-5 shrink-0 text-primary" />
      <p>
        I prefer to share real feedback rather than publish invented testimonials. These are the principles I bring to every project and collaboration.
      </p>
    </motion.div>
    <motion.div variants={staggerContainer(0.12)} className="mt-5 grid gap-4 md:grid-cols-3">
      {principles.map(({ icon: Icon, title, description }) => (
        <motion.article key={title} variants={fadeUp} className="rounded-xl border border-neutral-700 bg-neutral-900/60 p-5">
          <Icon className="mb-5 size-6 text-primary" />
          <h3 className="font-semibold">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-neutral-400">{description}</p>
        </motion.article>
      ))}
    </motion.div>
  </motion.section>
);

export default Testimonials;
