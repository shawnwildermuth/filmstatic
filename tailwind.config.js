module.exports = {
  prefix: "t-",
  content: [
    "./src/**/*.html",
    "./src/**/*.njk",
    "./src/**/*.md",
    "./src/**/*.11ty.js",
  ],
  corePlugins: {
    preflight: false,
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ]
};
