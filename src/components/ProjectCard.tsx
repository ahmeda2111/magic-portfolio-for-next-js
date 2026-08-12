"use client";

import { ProjectThumbnailStrip } from "@/components/ProjectThumbnailStrip";
import { Flex, Heading, SmartLink, Text } from "@/once-ui/components";
import React, { useState } from "react";

interface ProjectCardProps {
  projectHref: string;
  priority?: boolean;
  images: string[];
  title: string;
  content?: string;
  description: string;
  avatars: { src: string }[];
  externalLink?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  projectHref,
  priority = false,
  images = [],
  title,
  content,
  description,
  avatars,
  externalLink,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const validImages = images.filter(Boolean);
  const hasImages = validImages.length > 0;

  return (
    <Flex
      direction="column"
      gap="m"
      fillWidth
      padding="m"
      radius="m"
      style={{
        border: "1px solid #ffffff",
        boxSizing: "border-box",
      }}
    >
      {hasImages && (
        <>
          <div
            style={{
              position: "relative",
              width: 1000,
              maxWidth: "100%",
              margin: "auto",
              paddingTop: "56.25%",
              overflow: "hidden",
              borderRadius: "var(--radius-m)",
              border: "1px solid var(--neutral-alpha-weak)",
              backgroundColor: "#f0f0f0",
              cursor: validImages.length > 1 ? "pointer" : "default",
            }}
            onClick={() => {
              if (validImages.length > 1) {
                setActiveIndex((prev) => (prev + 1) % validImages.length);
              }
            }}
          >
            <img
              src={validImages[activeIndex]}
              alt={title}
              loading={priority ? "eager" : "lazy"}
              decoding="async"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </div>

          {validImages.length > 1 && (
            <ProjectThumbnailStrip
              images={validImages}
              activeIndex={activeIndex}
              onSelect={setActiveIndex}
              title={title}
            />
          )}
        </>
      )}

      <Flex
        mobileDirection="column"
        fillWidth
        paddingX="s"
        paddingTop="12"
        paddingBottom="8"
        gap="l"
      >
        {title && (
          <Flex flex={5}>
            <Heading as="h2" wrap="balance" variant="heading-strong-xl">
              {title}
            </Heading>
          </Flex>
        )}
        {(avatars?.length > 0 || description?.trim() || content?.trim()) && (
          <Flex direction="column" flex={7} gap="16">
            {description?.trim() && (
              <Text
                wrap="balance"
                variant="body-default-s"
                onBackground="neutral-weak"
              >
                {description}
              </Text>
            )}
            <Flex gap="24" wrap>
              <SmartLink
                suffixIcon="arrowRight"
                style={{ margin: 0, width: "fit-content" }}
                href={projectHref}
              >
                <Text variant="body-default-s">View project</Text>
              </SmartLink>
              {externalLink && (
                <SmartLink
                  suffixIcon="arrowUpRightFromSquare"
                  style={{ margin: 0, width: "fit-content" }}
                  href={externalLink}
                >
                  <Text variant="body-default-s">GitHub</Text>
                </SmartLink>
              )}
            </Flex>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};
