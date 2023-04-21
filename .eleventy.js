const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {
  
  // add assets folder to _site
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

eleventyConfig.addCollection("videos", function(videos) {
    

    const vd = videos
      .getFilteredByTag("vid")
    .sort((a, b) => b.data.order - a.data.order);

  
      for (let i = 0; i < vd.length; i++) {
        const prevVid = vd[i - 1];
        const nextVid = vd[i + 1];

        vd[i].data["prevVid"] = prevVid;
        vd[i].data["nextVid"] = nextVid;

      }
       return vd;
    })

}






















