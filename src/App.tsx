/**
 * @copyright 2026 henrythomaz
 * @license Apache-2.0
 */

import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Services from "@/components/Services";
import Resume from "@/components/Resume";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

const App = () => (
  <main className="mx-auto flex w-full max-w-6xl flex-col px-6 pb-10 pt-10 sm:px-10 lg:max-w-4xl lg:pr-10 lg:pl-0">
    <Hero />
    <Stats />
    <Projects />
    <About />
    <Services />
    <Resume />
    <Testimonials />
    <Contact />
  </main>
);

export default App;
