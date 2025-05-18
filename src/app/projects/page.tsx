import { Column, Flex, Text } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { person, about, Projects } from "@/app/resources/content";
import { Meta, Schema } from "@/once-ui/modules";
import { ProjectImageSwitcher } from "./ProjectImageSwitcher";

export async function generateMetadata() {
  return Meta.generate({
    title: "Projects by Category",
    description: "A categorized showcase of all Flutter, React/Next.js, and React Native projects.",
    baseURL,
    image: `${baseURL}/og?title=Projects`,
    path: "/projects",
  });
}

export default function ProjectsByCategoryPage() {
  return (
    <Column maxWidth="m" gap="xl">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/projects"
        title="Projects by Category"
        description="A categorized showcase of all Flutter, React/Next.js, and React Native projects."
        image={`${baseURL}/og?title=Projects`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {Projects.map((category) => (
        <Column key={category.category}>
          <Text variant="heading-default-l">{category.category}</Text>

          {category.projects.map((project, index) => (
            <Column
              key={index}

              radius="m"

            >
              <Text variant="heading-default-m">{project.title}</Text>
              <Text variant="body-default-m">{project.description}</Text>

              <ProjectImageSwitcher
                images={project.images}
                alt={project.title}
              />
            </Column>
          ))}
        </Column>
      ))}
    </Column>
  );
}

