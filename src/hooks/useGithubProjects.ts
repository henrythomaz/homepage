import { useEffect, useState } from "react";
import type { ProjectType } from "@/types";

export function useGithubProjects() {
  const [projects, setProjects] = useState<ProjectType[]>([]);

  useEffect(() => {
    async function load() {
      const response = await fetch(
        "https://api.github.com/users/henrythomaz/repos"
      );

      const repos = await response.json();

      
      console.log("repos:", repos);



      const data: ProjectType[] = repos.map((repo: any) => ({
        title: repo.name,

        tags: [repo.language ?? "Unknown"],

        projectLink:
          repo.homepage?.length > 0
            ? repo.homepage
            : repo.html_url,

        imgSrc: `https://raw.githubusercontent.com/henrythomaz/${repo.name}/main/images/cover.png`,
      }));

      console.log("data:", data);

      setProjects(data);
    }

    load();
  }, []);

  return projects;
}
