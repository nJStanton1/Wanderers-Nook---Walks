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
              }
            }
          }
        }
      }
    `)

    data.allMarkdownRemark.edges.forEach(edge => {
        if (edge.node.frontmatter.template = 'location-template') {
            let slug = "/locations/"+getSlug(edge.node.fileAbsolutePath)
            actions.createPage({
                path: slug,
                component: require.resolve(`./src/templates/location-template.js`),
                context: { slug: slug, id: edge.node.id },
            })
        } else {}
    })
}