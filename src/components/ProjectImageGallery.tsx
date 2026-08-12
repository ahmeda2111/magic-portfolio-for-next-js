"use client";

import { ProjectThumbnailStrip } from "@/components/ProjectThumbnailStrip";
import { Flex } from "@/once-ui/components";
import React, { useState } from "react";

interface ProjectImageGalleryProps {
  images: string[];
  title: string;
}

export function ProjectImageGallery({
  images = [],
  title,
}: ProjectImageGalleryProps) {
  const validImages = images.filter(Boolean);
  const [activeIndex, setActiveIndex] = useState(0);

  if (validImages.length === 0) {
    return null;
  }

  return (
    <Flex direction="column" gap="m" fillWidth style={{ alignItems: "flex-start" }}>
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "100%",
          paddingTop: "56.25%",
          overflow: "hidden",
          borderRadius: "var(--radius-m)",
          border: "1px solid var(--neutral-alpha-weak)",
          backgroundColor: "#f0f0f0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
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
    </Flex>
  );
}
