import fs from "fs";
import path from "path";

const IMAGE_EXTENSIONS = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".gif",
  ".svg",
]);

function naturalCompare(a: string, b: string): number {
  return a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" });
}

function sortImageFiles(a: string, b: string): number {
  const aIsLogo = /^logo\./i.test(a);
  const bIsLogo = /^logo\./i.test(b);
  if (aIsLogo && !bIsLogo) return -1;
  if (!aIsLogo && bIsLogo) return 1;
  return naturalCompare(a, b);
}

/**
 * Reads all image files from a folder under /public and returns their web paths.
 * Example: getProjectImages("/images/projects/walletapp") -> ["/images/projects/walletapp/1.jpg", ...]
 */
export function getProjectImages(folderPath: string): string[] {
  if (!folderPath) return [];

  const normalizedFolder = folderPath.replace(/\/$/, "");
  const absoluteDir = path.join(
    process.cwd(),
    "public",
    normalizedFolder.replace(/^\//, ""),
  );

  if (!fs.existsSync(absoluteDir)) {
    return [];
  }

  return fs
    .readdirSync(absoluteDir)
    .filter((file) =>
      IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()),
    )
    .sort(sortImageFiles)
    .map((file) => `${normalizedFolder}/${file}`);
}
