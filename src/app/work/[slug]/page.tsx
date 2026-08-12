import { notFound } from "next/navigation";
import { CustomMDX } from "@/components/mdx";
import { getPosts } from "@/app/utils/utils";
import {
  AvatarGroup,
  Badge,
  Button,
  Column,
  Flex,
  Heading,
  SmartImage,
  SmartLink,
  Text,
} from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { about, person, work } from "@/app/resources/content";
import {
  getProjectBySlug,
  getProjectSlugs,
  type Project,
} from "@/app/resources/projects.server";
import { formatDate } from "@/app/utils/formatDate";
import ScrollToHash from "@/components/ScrollToHash";
import { ProjectImageGallery } from "@/components/ProjectImageGallery";
import { Metadata } from "next";
import { Meta, Schema } from "@/once-ui/modules";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = getPosts(["src", "app", "work", "projects"]);
  const projectSlugs = getProjectSlugs();

  return [
    ...posts.map((post) => ({ slug: post.slug })),
    ...projectSlugs.map((slug) => ({ slug })),
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}): Promise<Metadata> {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  const project = getProjectBySlug(slugPath);
  if (project) {
    return Meta.generate({
      title: project.title,
      description: project.description,
      baseURL,
      image: project.images[0]
        ? `${baseURL}${project.images[0]}`
        : `${baseURL}/og?title=${encodeURIComponent(project.title)}`,
      path: `${work.path}/${project.slug}`,
    });
  }

  const post = getPosts(["src", "app", "work", "projects"]).find(
    (item) => item.slug === slugPath,
  );

  if (!post) return {};

  return Meta.generate({
    title: post.metadata.title,
    description: post.metadata.summary,
    baseURL,
    image: post.metadata.image
      ? `${baseURL}${post.metadata.image}`
      : `${baseURL}/og?title=${encodeURIComponent(post.metadata.title)}`,
    path: `${work.path}/${post.slug}`,
  });
}

function ContentProjectPage({ project }: { project: Project }) {
  const { github, playStore, googleDrive } = project.links;

  return (
    <Column as="section" maxWidth="m" horizontal="center" gap="l">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={`${work.path}/${project.slug}`}
        title={project.title}
        description={project.description}
        image={
          project.images[0]
            ? `${baseURL}${project.images[0]}`
            : `${baseURL}/og?title=${encodeURIComponent(project.title)}`
        }
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column maxWidth="xs" gap="16" fillWidth>
        <Button
          data-border="rounded"
          href={work.path}
          variant="tertiary"
          weight="default"
          size="s"
          prefixIcon="chevronLeft"
        >
          Projects
        </Button>
        <Heading variant="display-strong-s">{project.title}</Heading>
        <Flex gap="12" wrap vertical="center">
          {project.category && (
            <Badge>{project.category}</Badge>
          )}
          {project.date && (
            <Text variant="body-default-s" onBackground="neutral-weak">
              {project.date}
            </Text>
          )}
        </Flex>
      </Column>

      <ProjectImageGallery images={project.images} title={project.title} />

      <Column gap="16" fillWidth maxWidth="xs">
        <Text wrap="balance" variant="body-default-l" onBackground="neutral-weak">
          {project.description}
        </Text>

        {project.content?.trim() && (
          <Column gap="12" fillWidth>
            <Heading as="h2" variant="heading-strong-l">
              About this project
            </Heading>
            <Text wrap="balance" variant="body-default-m">
              {project.content}
            </Text>
          </Column>
        )}

        {project.responsibilities?.trim() && (
          <Column gap="12" fillWidth>
            <Heading as="h2" variant="heading-strong-l">
              My responsibilities
            </Heading>
            <Text wrap="balance" variant="body-default-m">
              {project.responsibilities}
            </Text>
          </Column>
        )}

        {(project.languages.length > 0 || project.tools.length > 0) && (
          <Column gap="16" fillWidth>
            {project.languages.length > 0 && (
              <Column gap="8" fillWidth>
                <Heading as="h2" variant="heading-strong-l">
                  Languages
                </Heading>
                <Flex gap="8" wrap>
                  {project.languages.map((language) => (
                    <Badge key={language}>{language}</Badge>
                  ))}
                </Flex>
              </Column>
            )}

            {project.tools.length > 0 && (
              <Column gap="8" fillWidth>
                <Heading as="h2" variant="heading-strong-l">
                  Tools
                </Heading>
                <Flex gap="8" wrap>
                  {project.tools.map((tool) => (
                    <Badge key={tool}>{tool}</Badge>
                  ))}
                </Flex>
              </Column>
            )}
          </Column>
        )}

        {(github || playStore || googleDrive) && (
          <Column gap="12" fillWidth>
            <Heading as="h2" variant="heading-strong-l">
              Links
            </Heading>
            <Flex gap="12" wrap>
              {github && (
                <SmartLink href={github} suffixIcon="arrowUpRightFromSquare">
                  <Text variant="body-default-s">GitHub</Text>
                </SmartLink>
              )}
              {playStore && (
                <SmartLink href={playStore} suffixIcon="arrowUpRightFromSquare">
                  <Text variant="body-default-s">Play Store</Text>
                </SmartLink>
              )}
              {googleDrive && (
                <SmartLink
                  href={googleDrive}
                  suffixIcon="arrowUpRightFromSquare"
                >
                  <Text variant="body-default-s">Google Drive</Text>
                </SmartLink>
              )}
            </Flex>
          </Column>
        )}
      </Column>

      <ScrollToHash />
    </Column>
  );
}

export default async function Project({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}) {
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  const project = getProjectBySlug(slugPath);
  if (project) {
    return <ContentProjectPage project={project} />;
  }

  const post = getPosts(["src", "app", "work", "projects"]).find(
    (item) => item.slug === slugPath,
  );

  if (!post) {
    notFound();
  }

  const avatars =
    post.metadata.team?.map((member) => ({
      src: member.avatar,
    })) || [];

  return (
    <Column as="section" maxWidth="m" horizontal="center" gap="l">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        path={`${work.path}/${post.slug}`}
        title={post.metadata.title}
        description={post.metadata.summary}
        datePublished={post.metadata.publishedAt}
        dateModified={post.metadata.publishedAt}
        image={`${baseURL}/og?title=${encodeURIComponent(post.metadata.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column maxWidth="xs" gap="16">
        <Button
          data-border="rounded"
          href={work.path}
          variant="tertiary"
          weight="default"
          size="s"
          prefixIcon="chevronLeft"
        >
          Projects
        </Button>
        <Heading variant="display-strong-s">{post.metadata.title}</Heading>
      </Column>
      {post.metadata.images.length > 0 && (
        <SmartImage
          priority
          aspectRatio="16 / 9"
          radius="m"
          alt="image"
          src={post.metadata.images[0]}
        />
      )}
      <Column style={{ margin: "auto" }} as="article" maxWidth="xs">
        <Flex gap="12" marginBottom="24" vertical="center">
          {post.metadata.team && (
            <AvatarGroup reverse avatars={avatars} size="m" />
          )}
          <Text variant="body-default-s" onBackground="neutral-weak">
            {post.metadata.publishedAt && formatDate(post.metadata.publishedAt)}
          </Text>
        </Flex>
        <CustomMDX source={post.content} />
      </Column>
      <ScrollToHash />
    </Column>
  );
}
