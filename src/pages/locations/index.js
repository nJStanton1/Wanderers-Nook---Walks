// Imports
import * as React from 'react'
import Layout from '../../components/layout'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from '../../components/seo'
import { graphql } from 'gatsby'
import TransportIcon from '../../components/transport-icon'
import { Link } from 'gatsby'
const {getSlug} = require('../../components/helperFunctions')

// Define components
const LocationPage = ({data}) =>{
    const {nodes} = data.allMarkdownRemark;
    return (
        <Layout>
          <div className='w-full px-3 md:px-5 lg:px-3'>
            <h1 className='mt-8 w-full'>Locations to explore</h1>
            <p>Explore the various areas of Greater Manchester you can visit easily. Sleect whichever looks interesting for you to view the routes I have found nearby.</p>
            <div className='w-full flex flex-wrap justify-around'>
            {
                nodes.map(location => (
                    <article key={location.id} className='w-full pb-2 my-2 max-w-72 border-2 border-red'>
                      <Link to={"/locations/"+getSlug(location.fileAbsolutePath)} className='w-full'>
                        <GatsbyImage className='' image={getImage(location.frontmatter.heroImage)} alt=''/>
                        <h2 className='mx-2 text-3xl'>{location.frontmatter.title}</h2>
                        <div className='px-2 w-full inline-flex'>
                            {
                                location.frontmatter.type.map(type => (

                                    <TransportIcon type={type} size={30}/>
                                ))
                            }
                        </div>
                        <p className='mx-2 pt-0'><span className='font-medium'>Travel time:</span> {location.frontmatter.travelTime} mins</p>
                        <p className='mx-2 text-base'>{location.frontmatter.excerpt}</p>
                        </Link>
                    </article>
                ))
            }
            </div>
          </div>
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
    allMarkdownRemark(filter: {frontmatter: {template: {eq: "location-template"}}}) {
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