/**
 * @type {import('gatsby').GatsbyConfig}
 */
const yaml = require('js-yaml');

module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.wanderersnook.co.uk/',
    title: 'The Wanderer\'s Nook',
    author: 'Nathaniel J Stanton',
    description: 'Discover adventure in and around Manchester. Newcomers and veterans alike can find guides on exploring nature, history, and the great outdoors—all by public transport.',
    image: './src/images/WNLogo.svg', 
    siteSearch: 'nositelinkssearchbox',
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-mdx",
    "gatsby-plugin-postcss",
    "gatsby-transformer-sharp",
    "gatsby-plugin-decap-cms",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `decap-content`,
        path: `${__dirname}/content`,
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
      options: {
        engines: {
          yaml: {
            parse: yaml.load.bind(yaml),
            stringify: yaml.dump.bind(yaml)
          }
        }
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /static/ // See below to configure properly
        }
      }
    }
  ],
}
