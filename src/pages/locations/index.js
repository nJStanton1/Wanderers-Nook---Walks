// Imports
import * as React from 'react'
import {Layout, Padding} from '../../components/layout'
import Seo from '../../components/seo'
import { graphql } from 'gatsby'
import { LocationCard } from '../../components/location-card'
const {getSlug} = require('../../components/helperFunctions')

// Define components
const LocationPage = ({data}) =>{
    const {nodes} = data.allMarkdownRemark;
    return (
        <Layout>
        <Padding>
          <div className='w-full'>
            <h1 className='mt-8 w-full'>Locations to explore</h1>
            <p>Explore the various areas of Greater Manchester you can visit easily. Select whichever looks interesting for you to view the routes I have found nearby.</p>
            <div className='w-full flex flex-wrap justify-around lg:justify-between'>
            {
                nodes.map(location => (
                   <LocationCard 
                      key={location.id}
                      linkTo={"/locations/" + getSlug(location.fileAbsolutePath)}
                      heroImage={location.frontmatter.heroImage}
                      title={location.frontmatter.title}
                      types={location.frontmatter.type}
                      travelTime={location.frontmatter.travelTime}
                      excerpt={location.frontmatter.excerpt}
                   />
                ))
            }
            </div>
          </div>
        </Padding>
        </Layout>
    )
}


 
// Export component

export default LocationPage

export const Head = () => {
  
  return(
      <Seo 
      pageTitle="Locations" 
      pageDescription="Explore the areas around Manchester that easily reached, and with best access to nature. See how to get there, how long it takes, and what you can find."
      pageURL="/locations"
    />
  )
}

// Query
export const query = graphql`
  query {
    allMarkdownRemark(
      filter: {frontmatter: {template: {eq: "location-template"}}}
      sort: {frontmatter: {travelTime: ASC}}
    ) {
      nodes {
        frontmatter {
          title
          travelTime
          type
          excerpt
          heroImage {
            childImageSharp {
                gatsbyImageData(aspectRatio: 1.778, placeholder: DOMINANT_COLOR, width: 300)
            }
          }
        }
        id
        fileAbsolutePath
      }
    }
  }
`