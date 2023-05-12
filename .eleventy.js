const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {
  
  // add assets folder to _site
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);


}; 






















