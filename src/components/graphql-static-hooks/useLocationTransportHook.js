import { useStaticQuery, graphql } from "gatsby"

export const useLocationTransportHook = (location) => {
    const {allMarkdownRemark} = useStaticQuery(graphql`
        query {
            allMarkdownRemark(filter: {frontmatter: {template: {eq: "location-template"}}}) {
                nodes {
                    frontmatter {
                        title
                        transportType {
                            transportDetail
                            type
                        }
                        location {
                            latitude
                            longitude
                        }
                    }
                }
            }
        }
    `)

    const found = allMarkdownRemark.nodes.find(({ frontmatter }) => frontmatter.title === location)
    return found
}