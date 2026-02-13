// .eleventy.js - CommonJS syntax jako divadlo-laryfary
const fs = require("node:fs");
const path = require("node:path");

module.exports = function (eleventyConfig) {
  // CSS minifikace pomocí csso
  eleventyConfig.addBundle("css", {
    transforms: [
      function (content) {
        try {
          const csso = require("csso");
          return csso.minify(content).css;
        } catch (e) {
          return content; // Fallback pokud csso není nainstalováno
        }
      },
    ],
  });

  // Cache-busting filter
  eleventyConfig.addFilter("cacheBust", () => Date.now());

  // Current year for copyright
  eleventyConfig.addFilter("year", () => new Date().getFullYear());

  // Helper pro čtení souborů (pro CSS bundle pattern)
  eleventyConfig.addFilter("readFile", function (filePath) {
    const full = path.resolve(__dirname, filePath);
    return fs.readFileSync(full, "utf8");
  });

  // Transform: make stylesheet hrefs relative in final HTML output
  eleventyConfig.addTransform("relative-stylesheet-href", function (content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
      return content.replace(
        /(<link[^>]*rel=["']stylesheet["'][^>]*href=["'])\/(.*?)(["'][^>]*>)/gi,
        (m, p1, p2, p3) => {
          return `${p1}${p2}${p3}`;
        }
      );
    }
    return content;
  });

  // RFC 3339 date filter for sitemap
  eleventyConfig.addFilter("dateToRfc3339", (date) => {
    return new Date(date).toISOString();
  });

  // Watch targets
  eleventyConfig.addWatchTarget("./src/assets/css/");
  eleventyConfig.addWatchTarget("./src/assets/js/");

  // Passthrough copies - images jdou do root /images/ (kvůli ../images/ v CSS)
  eleventyConfig.addPassthroughCopy({ "src/assets/js": "assets/js" });
  eleventyConfig.addPassthroughCopy({ "src/assets/images": "images" }); // přímo do root!
  eleventyConfig.addPassthroughCopy({ "src/assets/svg": "assets/svg" });
  eleventyConfig.addPassthroughCopy({ "src/assets/*.mp3": "assets" }); // audio soubory
  eleventyConfig.addPassthroughCopy({ "src/.htaccess": ".htaccess" }); // Apache redirects

  // Favicons a static assets
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
    // DŮLEŽITÉ: Tohle umožňuje použít {% %} syntaxi v .html souborech
    htmlTemplateEngine: "njk",
  };
};
