// Imports
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

// Define components
const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
        </Layout>
    )
  }

// Export component

export default AboutPage
export const Head = () => <Seo title="About Me" />