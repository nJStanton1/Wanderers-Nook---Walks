import {Layout, Padding} from "../components/layout"
import { graphql } from "gatsby"
import * as React from 'react'
import Seo from '../components/seo'
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { RouteCard } from "../components/route-card";
import TransportIcon from "../components/transport-icon";
import GettingThereCard from '../components/getting-there-card'
const {getSlug} = require('../components/helperFunctions')

function LocationPage ({ data }) {
  const { location, circularRoutes, routesArriving, routesLeaving} = data
  const routeCount = circularRoutes.totalCount + routesArriving.totalCount + routesLeaving.totalCount
  
  return (
    <Layout subdomain="walks">
      <div className="w-full flex-col">
        <div className="flex flex-col max-h-60 md:max-h-80 w-full relative">
          {location.frontmatter.heroImage && <GatsbyImage image={getImage(location.frontmatter.heroImage)}/>}
        </div>
        <Padding>
          <h1>{location.frontmatter.title}</h1>
          <p className="pb-4 text-xl">{location.frontmatter.excerpt}</p>
          <div className="w-full gap-x-0 md:gap-x-3 flex flex-row justify-around md:justify-normal">
            {location.frontmatter.transportType.map( (transport, i) => (
              <TransportIcon key={i} type={transport.type} size={60}/>
            ))}
          </div>
          <p className="mt-4 text-2xl font-medium">Routes available: {routeCount}</p>
          
          <div className="mt-4" dangerouslySetInnerHTML={{ __html: location.html }} />
          
          <GettingThereCard location={location.frontmatter.title} />
          
          { circularRoutes.nodes.length !== 0 && <>
            <h2 className="mt-8 pb-0 leading-none">Circular Walks</h2>
            <p className="font-semibold">Start and End at the Same Spot</p>

            <p>These walks start and end at the same point in {location.frontmatter.title}</p>
            <div className='w-full flex flex-wrap justify-around mt-4'>
            {
              circularRoutes.nodes.map(route => (
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
          </>
          }
          
          { routesArriving.nodes.length + routesLeaving.nodes.length !== 0 && <>
            <h2 className="mt-8 pb-0 leading-none">Point-to-Point Walks</h2>
            <p className="font-semibold">Explore Two Places in One Walk</p>
            
            <p>These walks start at {location.frontmatter.title} but end somewhere else. Great for exploring different areas.</p>
            <div className='w-full flex flex-wrap justify-around mt-4'>
            {
              routesArriving.nodes && routesArriving.nodes.map(route => (
                <RouteCard 
                  key={route.id} 
                  linkTo={"/routes/"+getSlug(route.fileAbsolutePath)} 
                  heroImage={route.frontmatter.heroImage}
                  title={route.frontmatter.title}
                  length={route.frontmatter.overview.length}
                  excerpt={route.frontmatter.overview.excerpt}/>
              ))
            }
            {
              routesLeaving.nodes && routesLeaving.nodes.map(route => (
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
          </>}
          
          </Padding>
      </div>
    </Layout>
  )
}

export default LocationPage

export const Head = ({ data, pageContext }) => {
  const location = data.location.frontmatter
  const excerptToUse = location.excerpt ? location.excerpt : `Walks around ${location.title}`

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
  query ($id: String!, $location: String!) {
    location: markdownRemark(id: {eq: $id}) {
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
        }
        excerpt
      }
      html
    }
    circularRoutes: allMarkdownRemark(
      filter: {frontmatter: {overview: {startPoint: {eq: $location}, endPoint: {in: [$location, "", null]}}}}
    ) {
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
    routesArriving: allMarkdownRemark(
      filter: {frontmatter: {overview: {startPoint: {ne: $location}, endPoint: {eq: $location}}}}
    ) {
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
    routesLeaving: allMarkdownRemark(
      filter: {frontmatter: {overview: {startPoint: {eq: $location}, endPoint: {nin: [$location, "", null]}}}}
    ) {
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