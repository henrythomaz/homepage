import { useEffect, useState } from "react";
import type { ProjectType } from "@/types";

type GithubProjectResponse = {
  name: string;
  language: string | null;
  homepage: string | null;
  html_url: string;
  fork: boolean;
};

export function useGithubProjects() {
  const [projects, setProjects] = useState<ProjectType[]>([]);

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      try {
        const response = await fetch("https://api.github.com/users/henrythomaz/repos?per_page=100", {
          signal: controller.signal,
        });

        if (!response.ok) throw new Error("Unable to load GitHub projects");

        const repos: GithubProjectResponse[] = await response.json();
        const data = repos
          .filter((repo) => !repo.fork)
          .map((repo) => ({
            title: repo.name,
            tags: [repo.language ?? "Project"],
            projectLink: repo.homepage?.trim() || repo.html_url,
            imgSrc: `https://raw.githubusercontent.com/henrythomaz/${repo.name}/main/images/cover.png`,
          }));

        setProjects(data);
      } catch (error) {
        if (error instanceof Error && error.name !== "AbortError") {
          console.error(error);
        }
      }
    }

    void load();
    return () => controller.abort();
  }, []);

  return projects;
}
