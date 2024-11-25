/**
 * @type {import('gatsby').GatsbyConfig}
 */
const yaml = require('js-yaml');

module.exports = {
  siteMetadata: {
    siteUrl: 'https://wanderersnook.co.uk/',
    title: 'The Wanderer\'s Nook',
    author: 'Nathaniel J Stanton',
    description: 'Discover adventure in and around Manchester. Newcomers and veterans alike can find guides on exploring nature, history, and the great outdoors—all by public transport.',
    image: './static/logos/Logo.png', 
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'The Wanderer\'s Nook',
        short_name: `The Nook`,
        start_url: `/`,
        background_color: `#5e5c3b`,
        theme_color: `#868254`,
        icon: "static/logos/favicon-32.png",
        display: `standalone`,
      }
    },
    {
      resolve: "gatsby-plugin-svgr",
      options: {
        rule: {
          include: /static/
        }
      }
    },
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
      resolve: 'gatsby-plugin-react-leaflet',
      options: {
        linkStyles: true // (default: true) Enable/disable loading stylesheets via CDN
      }
    }
  ],
}
