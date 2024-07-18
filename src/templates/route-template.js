import Layout from "../components/layout"
import { graphql } from "gatsby"
import * as React from 'react'
import Seo from '../components/seo'
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { floor } from "mathjs";
import DistanceIcon from "../../static/icons/distance-icon.svg"
import ClockIcon from "../../static/icons/clock-icon.svg"
import PinIcon from "../../static/icons/pin-icon.svg"
import MapIcon from "../../static/icons/map-icon.svg"
import ElevationIcon from "../../static/icons/elevation-icon.svg"
import ImageGalleryCaptions from "../components/image-gallery";
const {timeAllowedCalculation} = require('../components/helperFunctions')

// {cond && <A />}

function RoutePage ({ data }) {

    const route = data.markdownRemark
    const elevation = route.frontmatter.elevation ? route.frontmatter.elevation : 0
    const timeAllowed = route.frontmatter.timeAllowed ? `${floor(route.frontmatter.timeAllowed / 60)}:${route.frontmatter.timeAllowed % 60}` : timeAllowedCalculation(route.frontmatter.length, elevation )
    

    return (
      <Layout>
        <div className="flex flex-col max-h-60 md:max-h-72 w-full relative">
          {route.frontmatter.heroImage && <GatsbyImage image={getImage(route.frontmatter.heroImage)}/>} 
        </div>

        <div className="w-full px-3 md:px-5 lg:px-3">

          <h1>{route.frontmatter.title}</h1>

          <h2 className="mt-5">Overview</h2>
          {route.frontmatter.excerpt && <p className="w-full">{route.frontmatter.excerpt}</p>}

          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-2 my-9">
            <div className="inline-flex items-center">
              <DistanceIcon className='size-20 mr-4 stroke-red flex'/>
              <div className="flex flex-col items-start">
                <h3 className="p-0 text-start">Distance</h3>
                <p className="p-0 text-start">{route.frontmatter.length}km</p>
              </div>
            </div>

            {elevation !== 0 && 
              <div className="inline-flex items-center">
                <ElevationIcon className='size-20 mr-4 stroke-red flex'/>
                <div className="flex flex-col">
                  <h3 className="p-0 text-start">Elevation</h3>
                  <p className="p-0 text-start">{elevation}m</p>
                </div>
              </div>
            }

            <div className="inline-flex items-center">
              <ClockIcon className='size-20 mr-4 stroke-red flex'/>
              <div className="flex flex-col">
                <h3 className="p-0 text-start">Time</h3>
                <p className="p-0 text-start">{timeAllowed} hrs</p>
              </div>
            </div>

            <div className="inline-flex items-center">
              <PinIcon className='size-20 mr-4 stroke-red flex'/>
              <div className="flex flex-col">
                <h3 className="p-0 text-start">Starting point</h3>
                <p className="p-0 text-start">{route.frontmatter.startPoint}</p>
              </div>
            </div>

            {route.frontmatter.osMapLink && 
              <div className="inline-flex items-center">
                <MapIcon className='size-20 mr-4 stroke-red flex'/>
                <div className="flex flex-col ">
                  <h3 className="p-0 text-start">OS Map</h3>
                  <a href={route.frontmatter.osMapLink} className='underline text-start'>View map here</a>
                </div>
              </div>
            }

          </div>

          <div dangerouslySetInnerHTML={{ __html: route.html }} />

          <div>
            <h2 className="mt-4 mb-6">Image Gallery</h2>
            <ImageGalleryCaptions images={route.frontmatter.galleryImages}/>
          </div>
        </div>
            
      </Layout>
    )
}

export default RoutePage

export const Head = ({ data, pageContext }) => {
  const route = data.markdownRemark.frontmatter
  const excerptToUse = route.excerpt ? route.excerpt : data.markdownRemark.excerpt

  return(
      <Seo 
      pageTitle={route.title} 
      pageDescription={excerptToUse}
      pageURL={pageContext.slug}
      pageImage={route.heroImage.relativePath}
    />
  )
}

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: {eq: $id}) {
      frontmatter {
        title
        heroImage {
          relativePath
          childImageSharp {
              gatsbyImageData(placeholder: DOMINANT_COLOR, layout: CONSTRAINED)
          }
        }
        length
        elevation
        timeAllowed
        osMapLink
        startPoint
        excerpt
        galleryImages {
          image {
            childImageSharp {
              gatsbyImageData(width: 300, placeholder: DOMINANT_COLOR, layout: CONSTRAINED)
            }
          }
          caption
        }
        }
      html
      excerpt
    }
  }
`