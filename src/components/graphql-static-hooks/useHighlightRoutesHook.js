import { useStaticQuery, graphql } from "gatsby"

export const useHighlightedRoutesHook = () => {
    const {allMarkdownRemark} = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: {frontmatter: {typeid: {eq: "highlighted-route"}}}) {
        nodes {
          frontmatter {
            route
          }
        }
      }
    }
  `)
  
  let routes = []
  allMarkdownRemark.nodes.map(route => routes.push(route.frontmatter.route))
  return routes
}