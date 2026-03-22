module.exports = function(eleventyConfig) {
  // Kopier statiske assets direkte til _site
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy({ "src/favicon.svg": "favicon.svg" });

  // Custom filters
  eleventyConfig.addFilter("padStart", (val, length, fill) => String(val).padStart(length, fill));
  eleventyConfig.addFilter("dateISOString", (date) => new Date(date).toISOString().slice(0, 10));

  // Ignorer de eksisterende genererede HTML-filer i _site
  eleventyConfig.ignores.add("_site/**");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
    templateFormats: ["njk", "html", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
