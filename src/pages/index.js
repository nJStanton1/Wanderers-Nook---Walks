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
          className='w-full max-h-60 md:max-h-80'
          alt=""
          src="../images/Me.jpg"
          object-position="50% 10%"
        />
        <div className='absolute bottom-0 p-3 flex flex-grow w-full text-xs md:text-base lg:text-lg flex-shrink bg-gradient-to-t from-zinc-900'>
          Welcome to the Wanderers Nook. Here you'll find many walks and adventures around Greater Manchester. 
          I hope exploring my site will help you explore the outdoors.
        </div>
      </div>
      
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" pageURL="/" />
 
// Export component
export default IndexPage