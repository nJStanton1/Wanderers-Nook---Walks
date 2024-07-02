const getSlug = require('./src/components/helperFunctions')

exports.createPages = async function ({ actions, graphql }) {
    const { data } = await graphql(`
      query {
        allMarkdownRemark {
          edges {
              node {
                id
                fileAbsolutePath
                frontmatter {
                    template
                    title
              }
            }
          }
        }
      }
    `)

    data.allMarkdownRemark.edges.forEach(({node}) => {
      if (node.frontmatter.template == 'location-template') {
          let slug = "/locations/"+getSlug(node.fileAbsolutePath)
          actions.createPage({
              path: slug,
              component: require.resolve(`./src/templates/location-template.js`),
              context: { slug: slug, id: node.id, location: node.frontmatter.title },
          })
      } else if (node.frontmatter.template == 'route-template') {
        let slug = "/routes/"+getSlug(node.fileAbsolutePath)
          actions.createPage({
              path: slug,
              component: require.resolve(`./src/templates/route-template.js`),
              context: { slug: slug, id: node.id },
          })
      } else {}
    })
}