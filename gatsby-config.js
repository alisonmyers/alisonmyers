module.exports = {
  siteMetadata: {
    siteUrl: "https://alisonmyers.gatsbyjs.io/",
    title: "Alison's Portfolio",
    description: "much more like an eportfolio than an eportfolio"
  },
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-image",
    {

      resolve: "gatsby-source-filesystem",
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      }
    },
    "gatsby-transformer-json",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      }
    }, 
    "gatsby-plugin-mdx",
      {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects`,
      }
    }
  ],
};
