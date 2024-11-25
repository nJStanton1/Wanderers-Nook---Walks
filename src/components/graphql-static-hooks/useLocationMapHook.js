import { useStaticQuery, graphql } from "gatsby"

export const useLocationMapHook = () => {
    const data = useStaticQuery(graphql`
        {
          allMarkdownRemark(
            filter: {frontmatter: {template: {eq: "location-template"}}}
          ) {
            nodes {
              frontmatter {
                title
                location {
                  latitude
                  longitude
                }
              }
              fileAbsolutePath
            }
          }
        }
      `)

    return data.allMarkdownRemark.nodes
}