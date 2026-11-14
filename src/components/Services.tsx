import { motion } from "motion/react";
import { BrainCircuit, Code2, Cpu, ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { fadeUp, staggerContainer } from "@/lib/animations";

const services = [
  {
    number: "01",
    icon: Code2,
    title: "Web apps & APIs",
    description: "Responsive interfaces, REST APIs, and backend foundations designed to work together.",
    tags: ["TypeScript", "Express", "Python", "FastAPI"],
  },
  {
    number: "02",
    icon: BrainCircuit,
    title: "AI & computer vision",
    description: "Experiments and practical applications involving image analysis, object detection, and machine learning.",
    tags: ["Python", "YOLO", "PyTorch"],
  },
  {
    number: "03",
    icon: Cpu,
    title: "IoT & data systems",
    description: "Connected devices, telemetry, and data pipelines that bring hardware and software together.",
    tags: ["ESP32", "MQTT", "PostgreSQL"],
  },
];

const Services = () => (
  <motion.section
    id="services"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={staggerContainer(0.12)}
    className="mt-30 scroll-mt-10"
  >
    <SectionHeader subtitle="Services" title="Areas where I turn ideas into solutions." />
    <motion.div variants={staggerContainer(0.12)} className="mt-9 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {services.map(({ number, icon: Icon, title, description, tags }) => (
        <motion.article
          key={number}
          variants={fadeUp}
          className="group flex min-h-64 flex-col rounded-xl border border-neutral-700 bg-neutral-900/60 p-6 transition-all hover:-translate-y-1 hover:border-neutral-500"
        >
          <div className="flex items-start justify-between">
            <span className="text-xs tracking-[0.2em] text-neutral-500">{number}</span>
            <Icon className="size-6 text-primary" />
          </div>
          <h3 className="mt-8 text-xl font-semibold">{title}</h3>
          <p className="mt-3 flex-1 text-sm leading-6 text-neutral-400">{description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="rounded-full border border-neutral-700 px-3 py-1 text-xs text-neutral-300">{tag}</span>
            ))}
          </div>
        </motion.article>
      ))}
    </motion.div>
    <motion.a
      variants={fadeUp}
      href="#contact"
      className="mt-6 inline-flex items-center gap-2 text-sm text-neutral-300 transition-colors hover:text-primary"
    >
      Discuss an idea <ArrowUpRight className="size-4" />
    </motion.a>
  </motion.section>
);

export default Services;
