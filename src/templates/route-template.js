import { Layout, Padding } from "../components/layout"
import { graphql } from "gatsby"
import * as React from 'react'
import Seo from '../components/seo'
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import ImageGalleryCaptions from "../components/image-gallery";
import RouteOverviewGallery from "../components/route-overview-gallery";

function RoutePage ({ data }) {
    const route = data.markdownRemark

    return (
      <Layout>
        <div className="flex flex-col max-h-60 md:max-h-72 w-full relative">
          {route.frontmatter.heroImage && <GatsbyImage image={getImage(route.frontmatter.heroImage)}/>} 
        </div>

        <Padding>
          <h1>{route.frontmatter.title}</h1>

          <h2 className="mt-5">Overview</h2>
          {route.frontmatter.excerpt && <p className="w-full">{route.frontmatter.excerpt}</p>}

          <RouteOverviewGallery 
            distance={route.frontmatter.length}
            elevation={route.frontmatter.elevation}
            time={route.frontmatter.timeAllowed}
            startingPoint={route.frontmatter.startPoint}
            endPoint={route.frontmatter.endPoint}
            osMap={route.frontmatter.osMapLink}
          />

          <div dangerouslySetInnerHTML={{ __html: route.html }} />

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
  const excerptToUse = route.excerpt ? route.excerpt : data.markdownRemark.excerpt

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
        length
        elevation
        timeAllowed
        osMapLink
        startPoint
        endPoint
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