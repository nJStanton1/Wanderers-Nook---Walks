// Imports
import * as React from 'react'
import Layout from '../../components/layout'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from '../../components/seo'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
const getSlug =require('../../components/helperFunctions')

// Define components
const RoutePage = ({data}) =>{
    const {nodes} = data.allMarkdownRemark;
    return (
        <Layout>
            <h1 className='pt-3 mt-8 w-full text-xl md:text-2xl lg:text-5xl'>Routes</h1>
            <p>Here you will find all my routes around Manchester. You can see the distances and locations. Unfortunately, I haven't yet built in filtering, I'm working on it.</p>
            <div className='w-full flex flex-wrap justify-around'>
            {
                nodes.map(route => (
                    <article key={route.id} className='w-full pb-2 my-2 max-w-72 border-2 border-red'>
                      <Link to={"/routes/"+getSlug(route.fileAbsolutePath)} className='w-full'>
                        <GatsbyImage className='' image={getImage(route.frontmatter.heroImage)} alt=''/>
                        <h2 className='mx-2 text-3xl'>{route.frontmatter.title}</h2>
                        <p className='mx-2 pt-0'>Distance: {route.frontmatter.length}km</p>
                        <p className='mx-2 pt-0'>Starting at: {route.frontmatter.startPoint}</p>
                        <p className='mx-2 text-base'>{route.frontmatter.excerpt}</p>
                        </Link>
                    </article>
                ))
            }
            </div>
        </Layout>
    )
}


 
// Export component

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

export default RoutePage

export const Head = () => <Seo pageTitle="Routes" pageURL="/routes/" />