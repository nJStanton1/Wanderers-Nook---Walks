// Imports
import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

// Define components
const BlogPage = ({data}) => {
    return (
        <Layout pageTitle="All My Blogs">
            <ul>
            {
                data.allFile.nodes.map(
                    node => (<li key={node.name}>{node.name}</li>)
                )
            }
            </ul>
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
export const Head = () => <Seo title="Blogs" />