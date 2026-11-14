/*
 * @copyright 2026 henrythomaz
 * @license Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import type { ProjectType } from "@/types";

const ProjectCard = ({ imgSrc, projectLink, tags, title }: ProjectType) => (
  <motion.article variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="group min-w-0">
    <figure className="relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900">
      <a href={projectLink} target="_blank" rel="noopener noreferrer" aria-label={`Open ${title}`}>
        <img
          src={imgSrc}
          alt={`${title} project preview`}
          loading="lazy"
          className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          onError={(event) => {
            event.currentTarget.onerror = null;
            event.currentTarget.src = `${import.meta.env.BASE_URL}images/project-ph-1.jpeg`;
          }}
        />
      </a>
      <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="rounded-sm border border-neutral-600 bg-neutral-950/90 px-2 py-1 text-xs text-neutral-200">
            {tag}
          </span>
        ))}
      </div>
    </figure>
    <a href={projectLink} target="_blank" rel="noopener noreferrer" className="mt-3 flex items-center justify-between gap-3 text-base font-semibold transition-colors hover:text-primary">
      <span className="line-clamp-1">{title}</span>
      <ArrowUpRight className="size-4 shrink-0 text-neutral-400 transition-colors group-hover:text-primary" />
    </a>
  </motion.article>
);

export default ProjectCard;
