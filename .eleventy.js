// .eleventy.js (ESM syntax for Eleventy 3.x)
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default function (eleventyConfig) {
  // CSS minification
  eleventyConfig.addBundle("css", {
    transforms: [
      async function (content) {
        const csso = await import("csso");
        return csso.minify(content).css;
      },
    ],
  });

  // JS minification
  eleventyConfig.addBundle("js", {
    transforms: [
      async function (content) {
        const { minify } = await import("terser");
        const result = await minify(content);
        return result.code;
      },
    ],
  });

  // Cache-busting
  eleventyConfig.addFilter("cacheBust", () => Date.now());

  // Current year for copyright
  eleventyConfig.addFilter("year", () => new Date().getFullYear());

  // Watch targets
  eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.addWatchTarget("./src/js/");

  // Passthrough copies - mapping src/ → _site/assets/ for URL continuity
  eleventyConfig.addPassthroughCopy({ "src/css": "assets/css" });
  eleventyConfig.addPassthroughCopy({ "src/images": "assets/images" });
  eleventyConfig.addPassthroughCopy({ "src/js": "assets/js" });
  eleventyConfig.addPassthroughCopy({ "src/svg": "assets/svg" });

  // Favicons and static assets
  const staticFiles = [
    "favicon.ico",
    "apple-touch-icon.png",
    "favicon-32x32.png",
    "favicon-16x16.png",
    "safari-pinned-tab.svg",
    "android-chrome-192x192.png",
    "android-chrome-256x256.png",
    "browserconfig.xml",
    "site.webmanifest",
  ];

  staticFiles.forEach((f) => {
    const full = path.join(__dirname, "src", f);
    if (fs.existsSync(full)) {
      eleventyConfig.addPassthroughCopy({ [`src/${f}`]: f });
    }
  });

  return {
    pathPrefix: "",
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    htmlTemplateEngine: "njk",
  };
}
