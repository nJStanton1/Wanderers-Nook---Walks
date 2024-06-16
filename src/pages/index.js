// Imports
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

// Define components
const IndexPage = () => {
  return(
    <Layout pageTitle="Home Page">
      <div className='flex flex-col w-full relative'>
        <StaticImage
          className='w-full max-h-80'
          alt=""
          src="../images/Me.jpg"
          object-position="50% 10%"
        />
        <div className='absolute bottom-0 p-3 flex flex-grow w-full text-lg flex-shrink bg-gradient-to-t from-zinc-900'>
          Welcome to the Wanderers Nook. Here I, Nathaniel, have compiled the best walks, hikes and adventures in the Greater Manchester area. 
          I've also done a few longer, multi-day hikes and even been abroad.
          Below you'll find some of the best hikes around Greater Manchester.
        </div>
      </div>
      
      
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />
 
// Export component
export default IndexPage