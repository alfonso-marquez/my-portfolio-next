import fs from "fs";
import path from "path";
import { imageSize } from "image-size";

// Server only: reads a photo's width / height from public/ so the grid can lay out rows
// before the images load. Runs at build time since the media pages are static.
export const ratioOf = (src: string) => {
    const { width, height } = imageSize(fs.readFileSync(path.join(process.cwd(), "public", src)));
    return width && height ? width / height : 1;
};
