import { useStaticQuery, graphql } from "gatsby"

export const useHighlightedRoutes = () => {
    const {allMarkdownRemark} = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: {frontmatter: {template: {eq: "route-template"}, featured: {eq: true}}}
        sort: {frontmatter: {overview: {length: ASC}}}
      ) {
        nodes {
          frontmatter {
            title
            heroImage {
              childImageSharp {
                  gatsbyImageData(placeholder: DOMINANT_COLOR, width: 384, height:256, transformOptions: {fit: COVER})
              }
            }
            overview {
              length
            }
          }
          id
          fileAbsolutePath
        }
      }
  }
`)
  
    let highlightedRoutes = []
    allMarkdownRemark.nodes.forEach(route => {
      highlightedRoutes.push(route)
    });

    return highlightedRoutes
}