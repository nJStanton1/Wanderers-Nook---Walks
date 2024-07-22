import { useStaticQuery, graphql } from "gatsby"
import { useHighlightedRoutesHook } from './useHighlightRoutesHook'

export const useHighlightedRoutes = () => {
    const {allMarkdownRemark} = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: {frontmatter: {template: {eq: "route-template"}}}) {
        nodes {
          frontmatter {
            title
            excerpt
            length
            startPoint
            heroImage {
              childImageSharp {
                  gatsbyImageData(placeholder: DOMINANT_COLOR, width: 384, height:240)
              }
            }
          }
          id
          fileAbsolutePath
        }
      }
  }
`)
  
    let checkList = useHighlightedRoutesHook()
    let highlightedRoutes = []
    allMarkdownRemark.nodes.map(route => 
        {
            if (checkList.includes(route.frontmatter.title)) {
                highlightedRoutes.push(route)
            } else {

            }
        }
    )
    return highlightedRoutes
}