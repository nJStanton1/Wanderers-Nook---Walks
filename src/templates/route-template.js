import Layout from "../components/layout"
import { graphql } from "gatsby"
import * as React from 'react'
import Seo from '../components/seo'
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { ceil, floor } from "mathjs";
import DistanceIcon from "../../static/icons/distance-icon.svg"
import ClockIcon from "../../static/icons/clock-icon.svg"
import PinIcon from "../../static/icons/pin-icon.svg"
import MapIcon from "../../static/icons/map-icon.svg"
import ElevationIcon from "../../static/icons/elevation-icon.svg"
import ImageGalleryCaptions from "../components/image-gallery";

function timeAllowedCalculation (distance, elevation) {
  const totalMinutes = distance * 60 / 4 + elevation/10;
  let hours = floor(totalMinutes / 60)
  let minutes = ceil((totalMinutes % 60)/5)*5
  if (minutes === 60) {
    hours += 1
    minutes = 0
  }
  if (minutes === 0) {
    minutes = '00'
  }
  return (`${hours}:${minutes}`)
}

function RoutePage ({ data }) {

    const route = data.markdownRemark
    const elevation = route.frontmatter.elevation ? route.frontmatter.elevation : 0
    const timeAllowed = route.frontmatter.timeAllowed ? `${floor(route.frontmatter.timeAllowed / 60)}:${route.frontmatter.timeAllowed % 60}` : timeAllowedCalculation(route.frontmatter.length, elevation )
    
    return (
      <Layout>
        <div className="flex flex-col max-h-60 md:max-h-72 w-full relative">
            <GatsbyImage image={getImage(route.frontmatter.heroImage)}/>
        </div>

        <div className="mx-4 lg:mx-0">

          <h1>{route.frontmatter.title}</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-2 mb-2">

            <div className="inline-flex items-center">
              <DistanceIcon className='size-20 mr-4 stroke-red flex'/>
              <div className="flex flex-col">
                <h3 className="p-0 text-xl">Distance</h3>
                <p className="p-0">{route.frontmatter.length}km</p>
              </div>
            </div>

            <div className="inline-flex items-center">
              <ElevationIcon className='size-20 mr-4 stroke-red flex'/>
              <div className="flex flex-col">
                <h3 className="p-0 text-xl">Elevation</h3>
                <p className="p-0">{elevation}m</p>
              </div>
            </div>

            <div className="inline-flex items-center">
              <ClockIcon className='size-20 mr-4 stroke-red flex'/>
              <div className="flex flex-col">
                <h3 className="p-0 text-xl">Time</h3>
                <p className="p-0">{timeAllowed} hrs</p>
              </div>
            </div>

            <div className="inline-flex items-center">
              <PinIcon className='size-20 mr-4 stroke-red flex'/>
              <div className="flex flex-col">
                <h3 className="p-0 text-xl">Starting point</h3>
                <p className="p-0">{route.frontmatter.startPoint}</p>
              </div>
            </div>

            <div className="inline-flex items-center">
              <MapIcon className='size-20 mr-4 stroke-red flex'/>
              <div className="flex flex-col ">
                <h3 className="p-0 text-xl">OS Map</h3>
                <a href={route.frontmatter.osMapLink} className='underline'>View map here</a>
              </div>
            </div>

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
  return(
      <Seo 
      pageTitle={route.title} 
      pageDescription={route.excerpt}
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
    }
  }
`