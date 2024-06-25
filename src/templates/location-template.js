import Layout from "../components/layout"
import { graphql } from "gatsby"
import * as React from 'react'
import Seo from '../components/seo'
import { GatsbyImage, getImage } from "gatsby-plugin-image";

function LocationPage ({ data }) {
    console.log("Hello world!");
    const location = data.markdownRemark
    
    return (
      <Layout>
        <div className="w-full flex-col">
            <div className="flex flex-col max-h-60 md:max-h-80 w-full relative">
                <GatsbyImage image={getImage(location.frontmatter.heroImage)}/>
                <h1>{location.frontmatter.title}</h1>
            </div>
            <div dangerouslySetInnerHTML={{ __html: location.html }} />
            <div className="w-full">
                <h2>Routes around {location.frontmatter.title}</h2>
                <p>At some point I'll add the routes here.</p>
            </div>
        </div>
      </Layout>
    )
}

export default LocationPage

export const Head = () => <Seo pageTitle="Locations" pageURL="/locations/" />

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: {eq: $id}) {
      frontmatter {
        title
        heroImage {
            childImageSharp {
                gatsbyImageData(placeholder: DOMINANT_COLOR, layout: CONSTRAINED)
            }
        }
        travelTime
        type
        excerpt
        }
      html
    }
  }
`