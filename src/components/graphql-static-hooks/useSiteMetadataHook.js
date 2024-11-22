import { useStaticQuery, graphql } from "gatsby"

export const useSiteMetadataHook = () => {
    const data = useStaticQuery(graphql`
        query {
          site {
            siteMetadata {
              title
              description
              author
              image
              favicon
              siteSearch
              siteUrl
            }
          }
        }
      `)
  
  return data.site.siteMetadata
}