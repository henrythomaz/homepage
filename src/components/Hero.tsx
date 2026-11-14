/*
 * @copyright 2026 henrythomaz
 * @license Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowDownToLine, ArrowUpRight, SparkleIcon } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { Button } from "@/components/ui/button";

const resumeUrl = `${import.meta.env.BASE_URL}cv/Curriculo.pdf`;

const Hero = () => (
  <motion.section
    id="hero"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={staggerContainer(0)}
    className="scroll-mt-10 pt-20 lg:pt-24"
  >
    <motion.p variants={fadeUp} className="flex w-fit items-center gap-2 rounded-sm border border-neutral-600 px-3 py-1 text-xs text-neutral-300">
      <SparkleIcon size={14} /> Introduction
    </motion.p>

    <motion.h1 variants={fadeUp} className="mt-3 max-w-4xl text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
      I&apos;m <span className="text-primary">Henry</span>, a FullStack Developer and Data Scientist.
    </motion.h1>

    <motion.p variants={fadeUp} className="mt-5 max-w-2xl text-base leading-7 text-neutral-400 md:text-lg">
      I build software, explore intelligent systems, and turn curiosity into practical projects.
    </motion.p>

    <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-3">
      <Button asChild>
        <a href="#projects">Explore projects <ArrowUpRight className="size-4" /></a>
      </Button>
      <Button asChild variant="outline">
        <a href={resumeUrl} download="Curriculo.pdf">
          <ArrowDownToLine className="size-4" /> Download CV
        </a>
      </Button>
    </motion.div>
  </motion.section>
);

export default Hero;
