// Imports
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import { Link } from 'gatsby'
import HighlightedRoutesGallery from '../components/highlighted-routes-gallery'

// Define components
const IndexPage = () => {

  // Calculate highlighted routes
  


  return(
    <Layout>
      <div className='flex flex-col w-full relative'>
        <StaticImage
          className='w-full max-h-60 md:max-h-80'
          alt=""
          src="../images/Me.jpg"
          object-position="50% 10%"
        />
        <h1 className='absolute bottom-0 inset-x-0 flex px-3 justify-center md:justify-start bg-gradient-to-t from-zinc-900'>
          The Wanderers Nook
        </h1>
      </div>
      <div className='w-full px-3 md:px-5 lg:px-3 pt-3'>
        <p className='w-full'>Welcome to the Nook! Here you'll find walks and adventures around Greater Manchester.</p>
        <p className='w-full'>I hope exploring my site will help you explore the outdoors.</p>
      </div>
      <div className='w-full px-3 md:px-5 lg:px-3'>
        <h2 className=''>Hikes</h2>
        <p className='w-full'>Are you a veteran hiker looking for new places to wander? A new hiker, who's always wanted to go outside more but never quite known where to go? You'll find a walk to suit you here.</p>
        <p className='w-full'>All my walks are accessible by public transport, with some starting in the centre. This way, there's no fuel price, or finding parking space on summer days.</p>
        <p className='w-full'>I recommend searching by area. You can choose something close or far and see what scenery you might see.</p>
        <div className='flex flex-wrap justify-around md:justify-start md:flex-row-reverse py-4'>
          <Link to='/routes' className='flex px-2 py-1 mb-2 md:mb-0 md:mr-2 items-center rounded-full bg-accent-red'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="flex size-6 stroke-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <span className='flex text-left ml-2 mr-1 text-white text-base md:text-lg'>Explore all hikes</span>
          </Link>
          <Link to='/locations' className='flex justify-self-center px-2 py-1 md:mr-2  items-center rounded-full bg-accent-red'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="flex size-6 stroke-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <span className='flex text-left ml-2 mr-1 text-white text-base md:text-lg'>Explore by area</span>
          </Link>
        </div>
        <div className='w-full mt-1'>
          <h3 className=''>Highlighted hikes</h3>
          <HighlightedRoutesGallery />
        </div>
      </div>
      <div className='w-full px-3 md:px-5 lg:px-3'>
        <h2 className=''>Articles</h2>
        <p className='w-full'>I have written various articles on the hikes I have done. These can be great for finding walks when you don't know what to look for.</p>
        <p className='w-full'>Some of these detail planning hikes. I plan to do some on gear and what to bring in future.</p>
        <div className='inline-flex w-full justify-around md:justify-end py-4'>
          <button className='inline-flex px-2 py-1 mr-2 items-center rounded-full bg-accent-red'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="flex size-6 stroke-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <span className='flex text-left ml-2 mr-1 text-white text-base md:text-lg'>Explore all articles</span>
          </button>
        </div>
        <div className='w-full mt-1'>
          <h3 className=''>Highlighted articles</h3>
        </div>
      </div>
      
    </Layout>
  )
}

export const Head = () => {
  
  return(
      <Seo 
      pageURL="/"
    />
  )
}
 
// Export component
export default IndexPage