const htmlmin = require("html-minifier");
const markdownIt = require('markdown-it');
const pluginRss = require("@11ty/eleventy-plugin-rss");
const filters = require("./utils/filters.js");

module.exports = function (eleventyConfig) {
  // PLUGINS
  eleventyConfig.addPlugin(pluginRss);

  // Filters
  Object.keys(filters).forEach((key) => {
    eleventyConfig.addFilter(key, filters[key]);
  });

  // shortcode to render markdown from string => {{ STRING | markdown | safe }}
  eleventyConfig.addFilter('markdown', function(value) {
    let markdown = require('markdown-it')({
      html: true
    });
    return markdown.render(value);
  });

  // Markdown
  eleventyConfig.setLibrary(
    'md',
    markdownIt({
      html: true,
      breaks: true,
      linkify: true,
      typographer: true
    })
  )

  // STATIC FILES
  const staticFiles = [ "css", "img", "fonts", {"icons": "/"}];
  for (let i = 0; i < staticFiles.length; i++) {
    const path = staticFiles[i];
    if (typeof path === "string") {
      eleventyConfig.addPassthroughCopy({ [`src/static/${path}`]: path });
    } else {
      const key = Object.keys(path)[0];
      const value = path[key];
      eleventyConfig.addPassthroughCopy({ [`src/static/${key}`]: value });
    }
  }

  eleventyConfig.addPassthroughCopy({ [`node_modules/flagpack-core/svg/s/`]: "flags"})

  // TRANSFORM -- Minify HTML Output
  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    if( outputPath && outputPath.endsWith(".html") ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }
    return content;
  });

  return {
    dir: {
      input: 'src',
      output: '_site',
      data: './_data',
      includes: './_includes',
      layouts: './_layouts'
    },
    templateFormats: [
      'md',
      'njk',
      '11ty.js'
    ],
    htmlTemplateEngine: 'njk'
  };
};