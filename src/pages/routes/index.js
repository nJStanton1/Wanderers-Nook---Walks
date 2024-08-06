// Imports
import * as React from 'react'
import {Layout, Padding} from '../../components/layout'
import Seo from '../../components/seo'
import { graphql } from 'gatsby'
import { RouteCard } from '../../components/route-card'
import HighlightedRoutesGallery from '../../components/highlighted-routes-gallery'
const {getSlug} = require('../../components/helperFunctions')

// Define components
const RoutePage = ({data}) =>{
    const {nodes} = data.allMarkdownRemark;
    return (
      <Layout>
      <Padding>
        <h1 className='pt-3 mt-8 w-full'>Routes</h1>
        <p>Here you are welcome to explore all the walks I have ever found.</p>

        <div className='w-full'>
          <h2>Highlighted Routes</h2>
          <p>These are my favourite routes. You'll find a mix of distances and places.</p>
          <HighlightedRoutesGallery/>
        </div>

        <div>
          <h2>All Routes</h2>
          <p>Here is every route I have ever done.  Unfortunately, I haven't yet built in filtering, I'm working on it.</p>
        </div>
        <div className='w-full flex flex-wrap justify-around lg:justify-between'>
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
      </Padding>
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
    allMarkdownRemark(
        filter: {frontmatter: {template: {eq: "route-template"}}}
        sort: {frontmatter: {length: ASC}}
      ) {
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

