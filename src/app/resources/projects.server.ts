import { getProjectImages } from "@/app/utils/getProjectImages";
import { projectsConfig } from "@/app/resources/content";

type RawProject = {
  title: string;
  description: string;
  content?: string;
  link?: string;
  imageFolder?: string;
  images?: string[];
  team?: { avatar: string }[];
  date?: string;
  responsibilities?: string;
};

export const Projects = projectsConfig.map((category) => ({
  ...category,
  projects: (category.projects as RawProject[]).map((project) => ({
    ...project,
    images: project.imageFolder
      ? getProjectImages(project.imageFolder)
      : (project.images ?? []),
  })),
}));
