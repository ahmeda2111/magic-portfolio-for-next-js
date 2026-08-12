import { Projects } from "@/app/resources/projects.server";
import { Column, Text } from "@/once-ui/components";
import { ProjectCard } from "@/components";

interface ProjectsProps {
  range?: [number, number?]; // range للفئات
}

export function ProjectsByCategory({ range }: ProjectsProps) {
  const displayedCategories = range
    ? Projects.slice(range[0] - 1, range[1] ?? Projects.length)
    : Projects;

  return (
    <Column maxWidth="m" gap="xl" paddingY="xl">
      {displayedCategories.map(({ category, projects }) => (
        <Column key={category} gap="m">
          <Text variant="heading-default-l">{category}</Text>

          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              priority={index < 2}
              href={project?.link || "#"}
              images={project?.images}
              title={project?.title}
              description={project?.description}
              content={project?.content}
              avatars={project?.team?.map((member) => ({ src: member.avatar })) || []}
              link={project?.link || ""}
            />
          ))}
        </Column>
      ))}
    </Column>
  );
}