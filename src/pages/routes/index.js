// Imports
import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { graphql } from 'gatsby'
import { RouteCard } from '../../components/route-card'
const {getSlug} = require('../../components/helperFunctions')

// Define components
const RoutePage = ({data}) =>{
    const {nodes} = data.allMarkdownRemark;
    return (
        <Layout>
          <div className='px-3 md:px-5 lg:px-3'>
            <h1 className='pt-3 mt-8 w-full'>Routes</h1>
            <p>Here you will find all my routes around Manchester. You can see the distances and locations. Unfortunately, I haven't yet built in filtering, I'm working on it.</p>
            <div className='w-full flex flex-wrap justify-around'>
            {
                nodes.map(route => (
                    <RouteCard 
                        key={route.id} 
                        linkTo={"/routes/" + getSlug(route.fileAbsolutePath)} 
                        heroImage={route.frontmatter.heroImage}
                        title={route.frontmatter.title}
                        length={route.frontmatter.length}
                        startPoint={route.frontmatter.startPoint}
                        excerpt={route.frontmatter.excerpt}/>
                ))
            }
            </div>
          </div>
        </Layout>
    )
}
 
// Export component
export default RoutePage

export const Head = () => {
  
  return(
      <Seo 
      pageTitle="Routes" 
      pageDescription="A compilation of all my walks around Manchester and Greater Manchester. Search through routes of various lengths, times and distance from Manchester."
      pageURL="/routes"
    />
  )
}

// Query
export const query = graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {template: {eq: "route-template"}}}) {
      nodes {
        frontmatter {
          title
          excerpt
          length
          startPoint
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

