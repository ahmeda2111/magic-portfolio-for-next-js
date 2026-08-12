import { work } from "@/app/resources/content";
import { Projects } from "@/app/resources/projects.server";
import { Column, Text } from "@/once-ui/components";
import { ProjectCard } from "@/components";

interface ProjectsProps {
  range?: [number, number?];
  limit?: number;
}

export function ProjectsByCategory({ range, limit }: ProjectsProps) {
  let displayedCategories = range
    ? Projects.slice(range[0] - 1, range[1] ?? Projects.length)
    : Projects;

  if (limit) {
    let remaining = limit;
    displayedCategories = displayedCategories
      .map(({ category, projects }) => {
        const sliced = projects.slice(0, remaining);
        remaining -= sliced.length;
        return { category, projects: sliced };
      })
      .filter(({ projects }) => projects.length > 0);
  }

  return (
    <Column maxWidth="m" gap="xl" paddingY="xl">
      {displayedCategories.map(({ category, projects }) => (
        <Column key={category} gap="m">
          <Text variant="heading-default-l">{category}</Text>

          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              priority={index < 2}
              projectHref={`${work.path}/${project.slug}`}
              externalLink={project.links.github}
              images={project.images}
              title={project.title}
              description={project.description}
              content={project.content}
              avatars={
                project.team?.map((member) => ({ src: member.avatar })) || []
              }
            />
          ))}
        </Column>
      ))}
    </Column>
  );
}
