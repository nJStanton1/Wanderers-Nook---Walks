import Layout from "../components/layout"
import { graphql } from "gatsby"
import * as React from 'react'
import Seo from '../components/seo'
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { RouteCard } from "../components/route-card";
import TransportIcon from "../components/transport-icon";
const getSlug = require('../components/helperFunctions')

function LocationPage ({ data, pageContext }) {
    const location = data.markdownRemark
    const routes = data.allMarkdownRemark.nodes
    const {slug} = pageContext
    
    console.log(slug)
    return (
      <Layout>
        <div className="w-full flex-col">
            <div className="flex flex-col max-h-60 md:max-h-80 w-full relative">
                <GatsbyImage image={getImage(location.frontmatter.heroImage)}/>
                <h1>{location.frontmatter.title}</h1>
            </div>
            <div className='px-2 w-full inline-flex'>
              {
                location.frontmatter.type.map(type => (
                  <TransportIcon type={type} size={60}/>
                ))
              }
            </div>
            <div dangerouslySetInnerHTML={{ __html: location.html }} />
            <h2>Routes around {location.frontmatter.title}</h2>
            <div className='w-full flex flex-wrap justify-around'>
            {
                routes.map(route => (
                    <RouteCard 
                        key={route.id} 
                        linkTo={"/routes/"+getSlug(route.fileAbsolutePath)} 
                        heroImage={route.frontmatter.heroImage}
                        title={route.frontmatter.title}
                        length={route.frontmatter.length}
                        excerpt={route.frontmatter.excerpt}/>
                ))
            }
            </div>
        </div>
      </Layout>
    )
}

export default LocationPage

export const Head = ({ data, pageContext }) => {
  const location = data.markdownRemark.frontmatter
  return(
      <Seo 
      pageTitle={location.title} 
      pageDescription={location.excerpt}
      pageURL={pageContext.slug}
      pageImage={location.heroImage.relativePath}
    />
  )
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
        type
        excerpt
        }
      html
    }
    allMarkdownRemark(filter: {frontmatter: {startPoint: {eq: $location}}}) {
      nodes {
        frontmatter {
          title
          length
          timeAllowed
          excerpt
          heroImage {
            childImageSharp {
                gatsbyImageData(aspectRatio: 1.778, placeholder: DOMINANT_COLOR, width: 300)
            }
          }
        }
        fileAbsolutePath
      }
    }
  }
`