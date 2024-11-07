import {Layout, Padding} from "../components/layout"
import { graphql } from "gatsby"
import * as React from 'react'
import Seo from '../components/seo'
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { RouteCard } from "../components/route-card";
import TransportIcon from "../components/transport-icon";
import { GoogleDirectionsButton } from "../components/button";
import {micromark} from 'micromark'
import { GettingThereCard } from '../components/getting-there-card'
const {getSlug} = require('../components/helperFunctions')

function LocationPage ({ data }) {
    const location = data.markdownRemark
    const routes = data.allMarkdownRemark.nodes
    
    return (
      <Layout>
        <div className="w-full flex-col">
          <div className="flex flex-col max-h-60 md:max-h-80 w-full relative">
            {location.frontmatter.heroImage && <GatsbyImage image={getImage(location.frontmatter.heroImage)}/>}
          </div>
          <Padding>
            <h1>{location.frontmatter.title}</h1>
            <p className="pb-4 text-xl">{location.frontmatter.excerpt}</p>
            <div className="w-full gap-x-0 md:gap-x-3 flex flex-row justify-around md:justify-normal">
              {location.frontmatter.transportType.map(transport => (
                <TransportIcon type={transport.type} size={60}/>
              ))}
            </div>
            <p className="mt-4 text-2xl font-medium">Routes available: {data.allMarkdownRemark.totalCount}</p>
            
            <div className="mt-4" dangerouslySetInnerHTML={{ __html: location.html }} />
            
            <h2 className="mt-4">Getting there</h2>
            <div className='w-full mt-2'>
              {
                location.frontmatter.transportType.map(transport => (
                  <div className="w-full flex flex-col md:flex-row mb-2">
                    <TransportIcon type={transport.type} size={60}/>
                    <div className="w-full">
                      <h3 className="ml-0 md:ml-4 pt-0 pb-1">{transport.type}</h3>
                      <div className="ml-4 text-left" dangerouslySetInnerHTML={{__html: micromark(transport.transportDetail)}}/>
                    </div>
                    
                  </div>
                  
                ))
              }
            </div>
            <p className="mt-4 pb-03">This button will open Google Maps directions to {location.frontmatter.title}.</p>
            <GoogleDirectionsButton className='justify-self-end md:justify-self-auto' destinationLatitude={location.frontmatter.location.latitude} destinationLongitude={location.frontmatter.location.longitude} />

            <h2 className="mt-4">Routes around {location.frontmatter.title}</h2>
            <div className='w-full flex flex-wrap justify-around'>
            {
              routes.map(route => (
                <RouteCard 
                  key={route.id} 
                  linkTo={"/routes/"+getSlug(route.fileAbsolutePath)} 
                  heroImage={route.frontmatter.heroImage}
                  title={route.frontmatter.title}
                  length={route.frontmatter.overview.length}
                  excerpt={route.frontmatter.overview.excerpt}/>
              ))
            }
            </div>
            </Padding>
        </div>
      </Layout>
    )
}

export default LocationPage

export const Head = ({ data, pageContext }) => {
  const location = data.markdownRemark.frontmatter
  const excerptToUse = location.excerpt ? location.excerpt : data.markdownRemark.excerpt

  if (location.heroImage != null) {
    return(
      <Seo 
      pageTitle={location.title} 
      pageDescription={excerptToUse}
      pageURL={pageContext.slug}
      pageImage={location.heroImage.relativePath}
      />
    )
  } else {
    return(
      <Seo 
      pageTitle={location.title} 
      pageDescription={excerptToUse}
      pageURL={pageContext.slug}
      />
    )
  }
}

export const query = graphql`
  query($id: String!, $location: String!) {
    markdownRemark(id: {eq: $id}) {
      frontmatter {
        title
        heroImage {
          relativePath
          childImageSharp {
              gatsbyImageData(placeholder: DOMINANT_COLOR, layout: CONSTRAINED)
          }
        }
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
      }
      html
    }
    allMarkdownRemark(filter: {frontmatter: {overview: {startPoint: {eq: $location}}}}) {
      nodes {
        frontmatter {
          title
          heroImage {
            childImageSharp {
                gatsbyImageData(aspectRatio: 1.778, placeholder: DOMINANT_COLOR, width: 300)
            }
          }
          overview {
            length
            timeAllowed
            excerpt
          }
        }
        fileAbsolutePath
      }
      totalCount
    }
  }
`