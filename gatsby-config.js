module.exports = {
  siteMetadata: {
    siteUrl: "https://alisonmyers.gatsbyjs.io/",
    title: "Alison's Portfolio",
    description: "much more like an eportfolio than an eportfolio"
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-json",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      }, 

      resolve: "gatsby-source-filesystem",
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects`,
      },

      resolve: "gatsby-source-filesystem",
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      }
    },
    "gatsby-plugin-mdx",
  ],
};
