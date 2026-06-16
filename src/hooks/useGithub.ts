import { useEffect, useState } from "react";

import { getRepositories } from "@/services/github";
import type { GithubRepo } from "@/services/github";

export function useGithub() {
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRepositories()
      .then(setRepos)
      .finally(() => setLoading(false));
  }, []);

  return {
    repos,
    loading,
  };
}
