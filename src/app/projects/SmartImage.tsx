"use client";

import Image, { ImageProps } from "next/image";

export function SmartImage(props: ImageProps) {
  return (
    <Image
      loading="lazy"
      placeholder="empty"
      {...props}
      alt={props.alt || "Image"}
    />
  );
}