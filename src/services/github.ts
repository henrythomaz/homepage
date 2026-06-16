export interface GithubRepo {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string;
  language: string | null;
}

export async function getRepositories(): Promise<GithubRepo[]> {
  const response = await fetch(
    "https://api.github.com/users/henrythomaz/repos"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch repositories");
  }

  const repos = await response.json();

  console.log("githu.ts " + repos);

  return repos
    .filter((repo: any) => !repo.fork)
    .sort(
      (a: any, b: any) =>
        new Date(b.updated_at).getTime() -
        new Date(a.updated_at).getTime()
    );
}
