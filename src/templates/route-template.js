import Layout from "../components/layout"
import { graphql } from "gatsby"
import * as React from 'react'
import Seo from '../components/seo'
import { GatsbyImage, getImage } from "gatsby-plugin-image";

function RoutePage ({ data }) {

    const route = data.markdownRemark
    
    return (
      <Layout>
        <div className="flex flex-col max-h-60 md:max-h-80 w-full relative">
            <GatsbyImage image={getImage(route.frontmatter.heroImage)}/>
            <h1>{route.frontmatter.title}</h1>
        </div>
        
        <div className="">Distance: {route.frontmatter.length}km</div>
        <div className="">Time: {route.frontmatter.timeAllowed}hrs</div>
        <div className="">Starting point: {route.frontmatter.startPoint}</div>
        <a href={route.frontmatter.osMapLink} className='inline-flex px-2 py-1 items-center rounded-full bg-red'>
                <span className='flex text-left ml-2 mr-1 text-white text-base md:text-lg'>See the OS map here</span>
        </a>
        <div dangerouslySetInnerHTML={{ __html: route.html }} />
    
      </Layout>
    )
}

export default RoutePage

export const Head = () => <Seo pageTitle={"Routes"} pageURL={"/routes/"} />

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: {eq: $id}) {
      frontmatter {
        title
        heroImage {
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