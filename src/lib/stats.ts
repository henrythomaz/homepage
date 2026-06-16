import type { GithubRepo } from "@/services/github";

export interface StatsItem {
  number: string;
  label: string;
}

export function getStats(repos: GithubRepo[]): StatsItem[] {
  const currentYear = new Date().getFullYear();

  const technologies = new Set(
    repos
      .map(repo => repo.language)
      .filter(
        (language): language is string =>
          language !== null
      )
  );

  return [
    {
      number: `${currentYear - 2021}+`,
      label: "Years Of Experience",
    },
    {
      number: `${repos.length}`,
      label: "Projects",
    },
    {
      number: `${technologies.size}`,
      label: "Languages",
    },
  ];
}
