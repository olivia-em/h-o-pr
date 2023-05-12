const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {
  
  // add assets folder to _site
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

eleventyConfig.addCollection("english", function(english) {
    

    const en = english
      .getFilteredByTag("english")
    .sort((a, b) => b.data.order - a.data.order);

  
      for (let i = 0; i < en.length; i++) {
        const prevPage = en[i - 1];
        const nextPage = en[i + 1];

        en[i].data["prevPage"] = prevPage;
        en[i].data["nextPage"] = nextPage;

      }
       return en;
    });

eleventyConfig.addCollection("spanish", function(spanish) {
    

    const es = spanish
      .getFilteredByTag("spanish")
    .sort((a, b) => b.data.order - a.data.order);

  
      for (let i = 0; i < es.length; i++) {
        const prevPage = es[i - 1];
        const nextPage = es[i + 1];

        es[i].data["prevPage"] = prevPage;
        es[i].data["nextPage"] = nextPage;

      }
       return es;
    })

}; 






















