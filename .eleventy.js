module.exports = eleventyConfig => {
  // Copy our static assets to the output folder
  eleventyConfig.addPassthroughCopy('src/assets');

  // Returning something from the configuration function is optional

  return {
    dir: {
      input: "src",
      output: "dist",
      layouts: "_layouts"
    }
  };
};
