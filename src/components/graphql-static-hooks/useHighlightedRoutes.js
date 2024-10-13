import { useStaticQuery, graphql } from "gatsby"

export const useHighlightedRoutes = () => {
    const {allMarkdownRemark} = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: {frontmatter: {template: {eq: "route-template"}, featured: {eq: true}}}
        sort: {frontmatter: {length: ASC}}
      ) {
        nodes {
          frontmatter {
            title
            excerpt
            length
            startPoint
            heroImage {
              childImageSharp {
                  gatsbyImageData(placeholder: DOMINANT_COLOR, width: 384, height:256, transformOptions: {fit: COVER})
              }
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