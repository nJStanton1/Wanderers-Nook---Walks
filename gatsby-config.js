/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    title: 'Wanderers Nook',
    author: 'Nathaniel J Stanton',
    description: 'Discover adventure in and around Manchester. Newcomers and veterans alike can find guides on exploring nature, history, and the great outdoors—all by public transport.',
    image: './src/images.Me.pg', 
    siteSearch: 'nositelinkssearchbox',
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-mdx",
    "gatsby-plugin-postcss",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {},
    },
  ],
}
