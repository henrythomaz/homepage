
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

import { staggerContainer } from "@/lib/animations";

/*
 * Components
 */

import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";

/*
 * Constants
 */

// import { projectsData }  from "@/constants";
import { useGithubProjects } from "@/hooks/useGithubProjects";

// import { SparkleIcon } from "lucide-react";

/*
 * Hooks
 */

import { useGithub } from "@/hooks/useGithub";


const Projects = () => {
  const { loading } = useGithub();
  const projects = useGithubProjects();


  const repositoriosIgnorados = ["henrythomaz", "homepage"];

  const projectsFilter = projects.filter(
    (repositorio) => !repositoriosIgnorados.includes(repositorio.title)
  );

  return (
    <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer(0)} className="mt-30 scroll-mt-10" id="projects">
      <SectionHeader subtitle="Projects" title="My featured projects" />

      {loading && (
        <motion.p className="mt-8 text-neutral-400">Loading projects...</motion.p>
      )}
      <motion.div className="grid md:grid-cols-2 gap-10 mt-10" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer(0.5)}>
        {projectsFilter.map((project, i) => (
          <ProjectCard key={i} imgSrc={project.imgSrc} projectLink={project.projectLink} tags={project.tags} title={project.title}/>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;
