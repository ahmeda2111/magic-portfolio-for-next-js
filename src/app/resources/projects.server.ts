import { getProjectImages } from "@/app/utils/getProjectImages";
import { normalizeGithubUrl, projectTitleToSlug } from "@/app/utils/projectSlug";
import { projectsConfig } from "@/app/resources/content";

type RawProject = {
  title: string;
  description: string;
  content?: string;
  link?: string;
  github?: string;
  playStore?: string;
  googleDrive?: string;
  imageFolder?: string;
  images?: string[];
  tools?: string[];
  languages?: string[];
  team?: { avatar: string }[];
  date?: string;
  responsibilities?: string;
};

const categoryDefaults: Record<
  string,
  { languages: string[]; tools: string[] }
> = {
  Flutter: {
    languages: ["Dart"],
    tools: ["Flutter", "Firebase"],
  },
  "React Next": {
    languages: ["JavaScript", "TypeScript"],
    tools: ["React", "Next.js"],
  },
  "React Native": {
    languages: ["JavaScript", "TypeScript"],
    tools: ["React Native"],
  },
};

export type ProjectLinks = {
  github?: string;
  playStore?: string;
  googleDrive?: string;
};

export type Project = {
  slug: string;
  category: string;
  title: string;
  description: string;
  content?: string;
  images: string[];
  imageFolder?: string;
  team?: { avatar: string }[];
  date?: string;
  responsibilities?: string;
  languages: string[];
  tools: string[];
  links: ProjectLinks;
};

export const Projects = projectsConfig.map((category) => ({
  ...category,
  projects: (category.projects as RawProject[]).map((project) => ({
    ...project,
    slug: projectTitleToSlug(project.title),
    images: project.imageFolder
      ? getProjectImages(project.imageFolder)
      : (project.images ?? []),
    links: {
      github:
        normalizeGithubUrl(project.github ?? project.link) ??
        undefined,
      playStore: project.playStore?.trim() || undefined,
      googleDrive: project.googleDrive?.trim() || undefined,
    },
    languages:
      project.languages ??
      categoryDefaults[category.category]?.languages ??
      [],
    tools:
      project.tools ?? categoryDefaults[category.category]?.tools ?? [],
  })),
}));

export function getAllProjects(): Project[] {
  return Projects.flatMap(({ category, projects }) =>
    projects.map((project) => ({
      ...project,
      category,
    })),
  );
}

export function getProjectBySlug(slug: string): Project | undefined {
  return getAllProjects().find((project) => project.slug === slug);
}

export function getProjectSlugs(): string[] {
  return getAllProjects().map((project) => project.slug);
}
