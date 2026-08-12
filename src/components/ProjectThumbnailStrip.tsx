"use client";

import { Flex, IconButton } from "@/once-ui/components";
import { useEffect, useState } from "react";

const THUMBNAILS_VISIBLE = 10;

type Props = {
  images: string[];
  activeIndex: number;
  onSelect: (index: number) => void;
  title: string;
};

export function ProjectThumbnailStrip({
  images,
  activeIndex,
  onSelect,
  title,
}: Props) {
  const [startIndex, setStartIndex] = useState(0);
  const hasOverflow = images.length > THUMBNAILS_VISIBLE;
  const endIndex = Math.min(startIndex + THUMBNAILS_VISIBLE, images.length);
  const visibleImages = images.slice(startIndex, endIndex);

  const canGoLeft = startIndex > 0;
  const canGoRight = startIndex + THUMBNAILS_VISIBLE < images.length;

  useEffect(() => {
    setStartIndex((current) => {
      if (activeIndex < current) {
        return activeIndex;
      }
      if (activeIndex >= current + THUMBNAILS_VISIBLE) {
        return Math.min(
          activeIndex - THUMBNAILS_VISIBLE + 1,
          Math.max(0, images.length - THUMBNAILS_VISIBLE),
        );
      }
      return current;
    });
  }, [activeIndex, images.length]);

  const thumbStyle: React.CSSProperties = {
    flex: `0 0 calc((100% - ${(THUMBNAILS_VISIBLE - 1) * 4}px) / ${THUMBNAILS_VISIBLE})`,
    aspectRatio: "1",
    borderRadius: "var(--radius-m)",
    overflow: "hidden",
    cursor: "pointer",
  };

  return (
    <Flex gap="8" paddingTop="8" vertical="center" fillWidth>
      {hasOverflow && (
        <IconButton
          icon="chevronLeft"
          variant="ghost"
          size="s"
          disabled={!canGoLeft}
          onClick={() =>
            setStartIndex((current) =>
              Math.max(0, current - THUMBNAILS_VISIBLE),
            )
          }
          aria-label="Previous thumbnails"
        />
      )}

      <Flex
        gap="4"
        fillWidth
        style={{
          flex: 1,
          minWidth: 0,
          overflow: "hidden",
        }}
      >
        {visibleImages.map((img, i) => {
          const globalIndex = startIndex + i;

          return (
            <div
              key={globalIndex}
              onClick={() => onSelect(globalIndex)}
              style={{
                ...thumbStyle,
                border:
                  activeIndex === globalIndex
                    ? "2px solid var(--brand-solid-strong)"
                    : "2px solid transparent",
              }}
            >
              <img
                src={img}
                alt={`${title} thumbnail ${globalIndex + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          );
        })}
      </Flex>

      {hasOverflow && (
        <IconButton
          icon="chevronRight"
          variant="ghost"
          size="s"
          disabled={!canGoRight}
          onClick={() =>
            setStartIndex((current) =>
              Math.min(
                images.length - THUMBNAILS_VISIBLE,
                current + THUMBNAILS_VISIBLE,
              ),
            )
          }
          aria-label="Next thumbnails"
        />
      )}
    </Flex>
  );
}
