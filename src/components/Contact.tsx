import { motion } from "motion/react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { fadeUp, staggerContainer } from "@/lib/animations";

const Contact = () => (
  <motion.section
    id="contact"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={staggerContainer(0.12)}
    className="mt-30 scroll-mt-10 pb-16"
  >
    <SectionHeader subtitle="Contact" title="Have an idea? Let's make it happen." />
    <motion.div variants={fadeUp} className="mt-7 rounded-2xl border border-neutral-700 bg-neutral-900/70 p-6 md:p-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <p className="text-base leading-7 text-neutral-300">
            I&apos;m always interested in exchanging ideas, learning with other developers, and exploring meaningful projects. The best way to reach me is through LinkedIn.
          </p>
          <p className="mt-3 text-sm text-neutral-500">Based in Brazil · Open to conversations and collaboration</p>
        </div>
        <Button asChild size="lg" className="w-fit">
          <a href="https://www.linkedin.com/in/henrythomaz/" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="size-4" /> Let&apos;s talk <ArrowUpRight className="size-4" />
          </a>
        </Button>
      </div>
      <div className="mt-7 flex flex-wrap gap-3 border-t border-neutral-800 pt-5">
        <a href="https://www.linkedin.com/in/henrythomaz/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-primary">
          <FaLinkedin className="size-4" /> LinkedIn
        </a>
        <a href="https://github.com/henrythomaz" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-primary">
          <FaGithub className="size-4" /> GitHub
        </a>
      </div>
    </motion.div>
    <motion.footer variants={fadeUp} className="mt-10 flex flex-col gap-2 border-t border-neutral-800 pt-5 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
      <span>© {new Date().getFullYear()} Henry Campos. Built with curiosity.</span>
      <a href="#hero" className="transition-colors hover:text-primary">Back to top ↑</a>
    </motion.footer>
  </motion.section>
);

export default Contact;
