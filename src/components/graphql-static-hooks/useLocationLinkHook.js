import { useStaticQuery, graphql } from "gatsby"
const {getSlug} = require('../helperFunctions')

export const useLocationHook = () => {
    const {allMarkdownRemark} = useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: {frontmatter: {template: {eq: "location-template"}}}) {
            nodes {
                frontmatter {
                    title
                }
                fileAbsolutePath
            }
        }
    }
  `)
  return allMarkdownRemark.nodes
}

export function GetLocationSlug(locationTitle) {
    const locations = useLocationHook()
    var result = locations.find(location => {
        return location.frontmatter.title === locationTitle
      })
    if (result !== undefined) {
        return("/locations/"+getSlug(result.fileAbsolutePath))
    } else {
        return ("/locations/")
    }
    
}