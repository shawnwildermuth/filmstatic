module.exports = {
   purge: {
    content: [ 
      "./src/**/*.html", 
      "./src/**/*.njk", 
      "./src/**/*.md", 
      "./src/**/*.11ty.js"
    ]
  },
  corePlugins: {
    preflight: false,
  },
  darkMode: false // or 'media' or 'class'
};
