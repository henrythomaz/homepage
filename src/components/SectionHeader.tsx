/*
 * @copyright 2026 henrythomaz
 * @license Apache-2.0
 */

import { motion } from "motion/react";
import { SparkleIcon } from "lucide-react";
import { fadeUp } from "@/lib/animations";

const SectionHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <>
    <motion.p variants={fadeUp} className="flex w-fit items-center gap-2 rounded-sm border border-neutral-600 px-3 py-1 text-xs tracking-wide text-neutral-300">
      <SparkleIcon size={14} /> {subtitle}
    </motion.p>
    <motion.h2 variants={fadeUp} className="mt-3 text-3xl font-bold capitalize leading-tight md:max-w-3xl md:text-4xl">
      {title}
    </motion.h2>
  </>
);

export default SectionHeader;
