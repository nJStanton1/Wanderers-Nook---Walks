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

function RoutePage ({ data }) {

    const route = data.markdownRemark
    
    
    return (
      <Layout>
        <div className="flex flex-col max-h-60 md:max-h-72 w-full relative">
            <GatsbyImage image={getImage(route.frontmatter.heroImage)}/>
        </div>
        <div className="mx-4 lg:mx-0">
          <h1>{route.frontmatter.title}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2 mb-2">
            <div className="inline-flex items-center">
              <DistanceIcon className='size-20 mr-4 stroke-red flex'/>
              <div className="flex flex-col">
                <h3 className="p-0 text-xl">Distance</h3>
                <p className="p-0">{route.frontmatter.length}km</p>
              </div>
            </div>
            <div className="inline-flex items-center">
              <ClockIcon className='size-20 mr-4 stroke-red flex'/>
              <div className="flex flex-col">
                <h3 className="p-0 text-xl">Time</h3>
                <p className="p-0">{floor(route.frontmatter.timeAllowed / 60)}:{route.frontmatter.timeAllowed % 60} hrs</p>
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
        timeAllowed
        osMapLink
        startPoint
        excerpt
        }
      html
    }
  }
`