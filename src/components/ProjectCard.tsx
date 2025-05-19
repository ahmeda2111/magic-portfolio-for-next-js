"use client";

import { Flex, Heading, SmartLink, Text } from "@/once-ui/components";
import React, { useState } from "react";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  content,
  description,
  avatars,
  link,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const hasImages = images.length > 0;

  return (
    <Flex direction="column" gap="m" fillWidth>
      {/* Main Image or Placeholder */}
      <div
        style={{
          position: "relative",
          width: 1000,
          maxWidth: "100%",
          margin: "auto",
          paddingTop: "56.25%", // 16:9 aspect ratio
          overflow: "hidden",
          borderRadius: "var(--radius-m)",
          border: "1px solid var(--neutral-alpha-weak)",
          backgroundColor: "#f0f0f0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: hasImages && images.length > 1 ? "pointer" : "default",
        }}
        onClick={() => {
          if (hasImages && images.length > 1) {
            setActiveIndex((prev) => (prev + 1) % images.length);
          }
        }}
      >
        {hasImages ? (
          <img
            src={images[activeIndex]}
            alt={title}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        ) : (
          <Text variant="body-default-m" onBackground="neutral-weak">
            No preview image available
          </Text>
        )}
      </div>

      {/* Thumbnails */}
      {hasImages && images.length > 1 && (
        <Flex gap="4" paddingTop="8">
          {images.map((img, i) => (
            <div
              key={i}
              onClick={() => setActiveIndex(i)}
              style={{
                border:
                  activeIndex === i
                    ? "2px solid var(--brand-solid-strong)"
                    : "2px solid transparent",
                borderRadius: "var(--radius-m)",
                overflow: "hidden",
                width: 80,
                height: 80,
                cursor: "pointer",
              }}
            >
              <img
                src={img}
                alt={`${title} thumbnail ${i + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          ))}
        </Flex>
      )}

      {/* Info Section */}
      <Flex
        mobileDirection="column"
        fillWidth
        paddingX="s"
        paddingTop="12"
        paddingBottom="24"
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
              {content?.trim() && (
                <SmartLink
                  suffixIcon="arrowRight"
                  style={{ margin: 0, width: "fit-content" }}
                  href={href}
                >
                  <Text variant="body-default-s">Read case study</Text>
                </SmartLink>
              )}
              {link && (
                <SmartLink
                  suffixIcon="arrowUpRightFromSquare"
                  style={{ margin: 0, width: "fit-content" }}
                  href={link}
                >
                  <Text variant="body-default-s">View project</Text>
                </SmartLink>
              )}
            </Flex>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};
