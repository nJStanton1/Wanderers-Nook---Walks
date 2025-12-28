// Imports
import * as React from 'react'
import {Layout, Padding} from '../../components/layout'
import Seo from '../../components/seo'
import { graphql } from 'gatsby'
import { LocationCard } from '../../components/location-card'
import LocationMap from '../../components/location-map'
const {getSlug} = require('../../components/helperFunctions')

// Define components
const LocationPage = ({data}) => {
    const {nodes} = data.allMarkdownRemark;

    var left;
    var top;
    var right;
    var bottom;
    nodes.forEach((location) => {
      if (bottom == null || location.frontmatter.location.latitude < bottom) {
        bottom = location.frontmatter.location.latitude
      }
      if (top == null || location.frontmatter.location.latitude > top) {
        top = location.frontmatter.location.latitude
      }
      if (left == null || location.frontmatter.location.longitude < left) {
        left = location.frontmatter.location.longitude
      }
      if (right == null || location.frontmatter.location.longitude > right) {
        right = location.frontmatter.location.longitude
      }
    });

    return (
        <Layout subdomain="walks">
        <Padding>
          <div className='w-full'>
            <h1 className='mt-8 my-4 w-full'>Locations to explore</h1>
            <p>Explore the various areas of Greater Manchester you can visit easily on the map below. Each pin can take you to an overview of the walks at that location.</p>
            <p>Below that, you can a short overview of all the locations I have visited.</p>

            <LocationMap />

            <div className='w-full flex flex-wrap justify-around lg:justify-between'>
            {
                nodes.map(location => (
                   <LocationCard 
                      key={location.id}
                      linkTo={"/locations/" + getSlug(location.fileAbsolutePath)}
                      heroImage={location.frontmatter.heroImage}
                      title={location.frontmatter.title}
                      types={location.frontmatter.transportType.map(transportType => (transportType.type))}
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
          transportType {
            type
            transportDetail
          }
          excerpt
          location {
            latitude
            longitude
          }
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