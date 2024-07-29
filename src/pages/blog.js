// Imports
import * as React from 'react'
import { graphql } from 'gatsby'
import {Layout, Padding} from '../components/layout'
import Seo from '../components/seo'
import { Link } from 'gatsby'

// Define components
const BlogPage = () => {
    return (
        <Layout>
        <Padding>
            <h1 className='mt-8 w-full'>Blog</h1>
            <p>Yeah, there's nothing here. I haven't gotten round to writing these yet.</p>
            <Link to='/' className='mt-10 px-2 py-1 mb-2 md:mb-0 md:mr-2 self-center items-center rounded-full bg-accent-red'>
                <span className='text-left ml-2 mr-1 text-white text-base md:text-lg'>Back to home</span>
            </Link>
        </Padding>
        </Layout>
    )
  }

  export const query = graphql`
    query {
        allFile {
            nodes {
                name
            }
        }
    }`

// Export component

export default BlogPage
export const Head = () => <Seo pageTitle="Blogs" />