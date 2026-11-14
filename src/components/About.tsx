/**
 * @copyright 2026 henrythomaz
 * @license Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowUpRight, BrainCircuit, Code2, Lightbulb } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { fadeUp, staggerContainer } from "@/lib/animations";

const focusAreas = [
  {
    icon: Code2,
    title: "Software engineering",
    description: "Building applications, APIs, and backend systems with an emphasis on clarity and reliability.",
  },
  {
    icon: BrainCircuit,
    title: "Artificial intelligence",
    description: "Exploring computer vision and machine learning to turn data into practical solutions.",
  },
  {
    icon: Lightbulb,
    title: "Learning by building",
    description: "I enjoy taking ideas from research and experimentation to working, usable projects.",
  },
];

const About = () => {
  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer(0.12)}
      className="mt-30 scroll-mt-10"
    >
      <SectionHeader subtitle="About me" title="Curiosity turns ideas into useful technology." />

      <motion.div variants={fadeUp} className="mt-7 max-w-3xl space-y-4 text-base leading-8 text-neutral-300">
        <p>
          I&apos;m Henry, an Informatics student at the Federal Institute of Education, Science and Technology of Mato Grosso do Sul (IFMS), Três Lagoas campus and developer from Brazil. I started coding in 2021, and since then I&apos;ve been learning by building projects that connect software, data, and the real world.
        </p>
        <p>
          I&apos;m especially interested in backend development, computer vision, and applied AI. I like understanding a problem from the ground up, designing the system behind it, and turning the idea into something people can actually use.
        </p>
      </motion.div>

      <motion.div variants={staggerContainer(0.12)} className="mt-9 grid gap-4 md:grid-cols-3">
        {focusAreas.map(({ icon: Icon, title, description }) => (
          <motion.article
            key={title}
            variants={fadeUp}
            className="rounded-xl border border-neutral-700 bg-neutral-900/60 p-5 transition-colors hover:border-neutral-500"
          >
            <Icon className="mb-5 size-6 text-primary" />
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-neutral-400">{description}</p>
          </motion.article>
        ))}
      </motion.div>

      <motion.a
        variants={fadeUp}
        href="https://github.com/henrythomaz"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 text-sm text-neutral-300 transition-colors hover:text-primary"
      >
        Explore my GitHub <ArrowUpRight className="size-4" />
      </motion.a>
    </motion.section>
  );
};

export default About;
