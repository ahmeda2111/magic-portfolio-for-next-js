"use client";

import { useState } from "react";
import { Flex } from "@/once-ui/components";
import { SmartImage } from "./SmartImage";

type Props = {
  images: string[];
  alt: string;
};

export function ProjectImageSwitcher({ images, alt }: Props) {
  const [index, setIndex] = useState(0);

  return (
    <Flex direction="column" align="center" >
      {/* Image Wrapper */}
      <div
        style={{
          width: "940px",
          height: "528px",
          position: "relative",
          overflow: "hidden",
          borderRadius: "12px",
          backgroundColor: "#000",
        }}
      >{images && images.length > 0 ? (        <SmartImage
          key={images[index]} // forces fade animation
          src={images[index]}
          alt={alt}
          fill
          style={{
            objectFit: "cover",
            transition: "opacity 0.5s ease-in-out",
          }}
        />) : null}

      </div>

      {/* Line Switcher */}
      <Flex  align="center" >
{images.length > 1 && images.map((_, i) => (
  <div
    key={i}
    onClick={() => setIndex(i)}
    style={{
      width: i === index ? "540px" : "400px",
      height: "4px",
      borderRadius: "2px",
      backgroundColor: i === index ? "#fff" : "#444",
      cursor: "pointer",
      transition: "all 0.3s ease",
    }}
  />
))}
      </Flex>
    </Flex>
  );
}
