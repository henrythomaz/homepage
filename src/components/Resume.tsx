import { motion } from "motion/react";
import { ArrowDownToLine, GraduationCap, BriefcaseBusiness, FolderGit2 } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { fadeUp, staggerContainer } from "@/lib/animations";

const resumeUrl = `${import.meta.env.BASE_URL}cv/Curriculo.pdf`;

const Resume = () => (
  <motion.section
    id="resume"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={staggerContainer(0.12)}
    className="mt-30 scroll-mt-10"
  >
    <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <SectionHeader subtitle="Resume" title="Learning, building, and moving forward." />
      </div>
      <motion.div variants={fadeUp}>
        <Button asChild variant="outline" className="w-fit">
          <a href={resumeUrl} download="Curriculo.pdf">
            <ArrowDownToLine className="size-4" /> Download CV
          </a>
        </Button>
      </motion.div>
    </div>

    <motion.div variants={staggerContainer(0.12)} className="mt-9 grid gap-5 md:grid-cols-2">
      <motion.article variants={fadeUp} className="rounded-xl border border-neutral-700 bg-neutral-900/60 p-6">
        <div className="mb-6 flex items-center gap-3">
          <GraduationCap className="size-5 text-primary" />
          <h3 className="text-lg font-semibold">Education</h3>
        </div>
        <div className="border-l border-neutral-700 pl-5">
          <span className="text-xs uppercase tracking-widest text-neutral-500">In progress</span>
          <h4 className="mt-2 font-semibold">Technical Program in Informatics</h4>
          <p className="mt-1 text-sm text-neutral-400">IFMS — Campus Três Lagoas, Brazil</p>
          <p className="mt-3 text-sm leading-6 text-neutral-400">
            Integrated high-school and technical studies, with practical work in software development and computing.
          </p>
        </div>
      </motion.article>

      <motion.article variants={fadeUp} className="rounded-xl border border-neutral-700 bg-neutral-900/60 p-6">
        <div className="mb-6 flex items-center gap-3">
          <BriefcaseBusiness className="size-5 text-primary" />
          <h3 className="text-lg font-semibold">Development journey</h3>
        </div>
        <div className="border-l border-neutral-700 pl-5">
          <span className="text-xs uppercase tracking-widest text-neutral-500">2021 — Present</span>
          <h4 className="mt-2 font-semibold">Independent learning & projects</h4>
          <p className="mt-1 text-sm text-neutral-400">Five years of coding practice</p>
          <p className="mt-3 text-sm leading-6 text-neutral-400">
            Continuous learning through personal and academic projects across web development, backend systems, AI, and IoT.
          </p>
        </div>
      </motion.article>
    </motion.div>

    <motion.article variants={fadeUp} className="mt-5 rounded-xl border border-neutral-700 bg-neutral-900/60 p-6">
      <div className="mb-5 flex items-center gap-3">
        <FolderGit2 className="size-5 text-primary" />
        <h3 className="text-lg font-semibold">Selected project experience</h3>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <h4 className="font-semibold">Horus — Computer Vision</h4>
          <p className="mt-2 text-sm leading-6 text-neutral-400">
            A system designed to identify potential dengue breeding sites from aerial images, combining object detection, geospatial analysis, and a backend API.
          </p>
        </div>
        <div>
          <h4 className="font-semibold">Automatic Weather Station — IoT</h4>
          <p className="mt-2 text-sm leading-6 text-neutral-400">
            A low-cost weather station project using ESP32 telemetry, REST and MQTT communication, and server-side data storage.
          </p>
        </div>
      </div>
    </motion.article>
  </motion.section>
);

export default Resume;
