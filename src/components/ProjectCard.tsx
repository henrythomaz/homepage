/* 
 * @copyright 2026 henrythomaz
 * @license Apache-2.0
 */

/*
 * Node Modules
 */

import { motion } from "motion/react";

/*
 * Custom Modules
 */

import { fadeUp } from "@/lib/animations";

/*
 * Types
 */

import type { ProjectType } from "@/types";

const ProjectCard = ({
  imgSrc,
  // projectLink,
  tags,
  // title
}: ProjectType ) => {
  return (
    <motion.div variants={fadeUp} initial="hidden"
whileInView="visible" className="relative">
      <figure className="overflow-hidden rounded-md">
        <img src={imgSrc} alt="title" onError={(e) => {
          const fallbacks = [
            "/homepage/images/project-ph-1.jpeg",
            "/homepage/images/project-ph-2.jpeg",
            "/homepage/images/project-ph-3.jpeg",
            "/homepage/images/project-ph-4.jpeg",
          ];

    const random =
      fallbacks[Math.floor(Math.random() * fallbacks.length)];

    e.currentTarget.src = random;
  }}
/>
      </figure>

      <div className="absolute bottom-0 p-2 flex gap-2">
        {tags.map((tag:any, i:any) => (
          <span key={i} className="bg-background hover:bg-primary hover:text-black py-1 px-2 rounded-sm text-sm cursor-pointer">{tag}</span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
