export function projectTitleToSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function normalizeGithubUrl(link?: string): string | undefined {
  if (!link?.trim()) return undefined;

  const trimmed = link.trim();
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
    return trimmed;
  }

  const branchMatch = trimmed.match(/^([^/]+\/[^/\s]+)\s+at\s+(.+)$/i);
  if (branchMatch) {
    const [, repo, branch] = branchMatch;
    return `https://github.com/${repo}/tree/${branch.trim()}`;
  }

  const cleaned = trimmed
    .replace(/^github\.com\//i, "")
    .replace(/^\/+/, "");

  return `https://github.com/${cleaned}`;
}
