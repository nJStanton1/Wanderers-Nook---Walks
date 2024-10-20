import { Layout, Padding } from "../components/layout"
import { graphql } from "gatsby"
import * as React from 'react'
import Seo from '../components/seo'
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ImageGalleryCaptions from "../components/image-gallery";
import RouteOverviewGallery from "../components/route-overview-gallery";
import {micromark} from 'micromark'

function RoutePage ({ data }) {
    const route = data.markdownRemark
    const guide = route.frontmatter.route

    return (
      <Layout>
        <div className="flex flex-col max-h-72 md:max-h-96 w-full relative">
          {route.frontmatter.heroImage && <GatsbyImage image={getImage(route.frontmatter.heroImage)}/>} 
        </div>

        <Padding>
          <div className="grid grid-cols-1 md:grid-cols-2 pt-3 md:pt-6">
            <div>
              <h1 className="text-3xl md:text-6xl lg:text-6xl pr-4">{route.frontmatter.title}</h1>
              {route.frontmatter.overview.excerpt && <p className="w-full mb-2 md:mb-0 pr-4">{route.frontmatter.overview.excerpt}</p>}
            </div>
            <RouteOverviewGallery 
              distance={route.frontmatter.overview.length}
              elevation={route.frontmatter.overview.elevation}
              time={route.frontmatter.overview.timeAllowed}
              startingPoint={route.frontmatter.overview.startPoint}
              endPoint={route.frontmatter.overview.endPoint}
              osMap={route.frontmatter.overview.osMapLink}
            />
          </div>

          <div className="mt-10">
            <h2>The Route</h2>
            <p className="mb-8">{guide.overview}</p>
            {guide.sections.map( section => (
              <div className="mb-8">
                {section.image && <GatsbyImage image={getImage(section.image)} className="float-none md:float-right md:ml-6"/>}
                <h3 className="md:pt-0">{section.title}</h3>
                <div className="flex flex-col text-base md:text-xl text-center md:text-left" dangerouslySetInnerHTML={{__html: micromark(section.content)}}/>
                <div className="w-full clear-both h-8"/>
              </div>
              
              ))
            }
          </div>
          {route.frontmatter.galleryImages &&
          <div>
            <h2 className="mt-4 mb-6">Image Gallery</h2>
            <ImageGalleryCaptions images={route.frontmatter.galleryImages}/>
          </div>}
        
        </Padding>
      </Layout>
    )
}

export default RoutePage

export const Head = ({ data, pageContext }) => {
  const route = data.markdownRemark.frontmatter
  const excerptToUse = route.overview.excerpt ? route.overview.excerpt : data.markdownRemark.excerpt

  if (route.heroImage != null) {
    return(
      <Seo 
      pageTitle={route.title} 
      pageDescription={excerptToUse}
      pageURL={pageContext.slug}
      pageImage={route.heroImage.relativePath}
      />
    )
  } else {
    return(
      <Seo 
      pageTitle={route.title} 
      pageDescription={excerptToUse}
      pageURL={pageContext.slug}
      />
    )
  }
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
        overview {
          length
          elevation
          timeAllowed
          osMapLink
          startPoint
          endPoint
          excerpt
        }
        route {
          overview
          sections {
            title
            content
            image {
              childImageSharp {
                gatsbyImageData(
                  aspectRatio: 1.77
                  width: 400
                  placeholder: BLURRED
                  layout: CONSTRAINED
                )
              }
            }
          }
        }
        galleryImages {
          image {
            childImageSharp {
              gatsbyImageData(width: 300, placeholder: DOMINANT_COLOR, layout: CONSTRAINED)
            }
          }
          caption
        }
      }
    }
  }
`