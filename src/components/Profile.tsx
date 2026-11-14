/*
 * @copyright 2026 henrythomaz
 * @license Apache-2.0
 */

import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/constants";

const Profile = () => (
  <aside className="m-6 h-fit max-w-3xl rounded-lg border border-neutral-600 bg-neutral-900 p-7 text-white lg:sticky lg:top-6 lg:left-0 lg:w-80">
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between gap-x-5">
        <h1 className="text-3xl font-bold">Henry</h1>
        <p className="text-right text-xs leading-5 text-neutral-300">Full-Stack Developer<br />AI & Computer Vision</p>
      </div>

      <img src={`${import.meta.env.BASE_URL}avatar.png`} alt="Portrait of Henry" className="w-full rounded-2xl object-cover" />

      <div className="mt-3">
        <p className="text-sm text-neutral-400">Specialization</p>
        <p className="text-lg">Software Development & Applied AI</p>
      </div>

      <div>
        <p className="text-sm text-neutral-400">Based in</p>
        <p className="text-lg">Brazil</p>
        <div className="flex gap-3 pt-3 text-neutral-400">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="rounded-full border border-neutral-600 p-2 transition-colors duration-200 hover:border-primary hover:text-primary"
              >
                <Icon className="size-5" />
              </a>
            );
          })}
        </div>
      </div>
      <Button asChild className="mt-2" size="lg">
        <a href="#contact">Let&apos;s Work! <ArrowUpRight className="size-4" /></a>
      </Button>
    </div>
  </aside>
);

export default Profile;
