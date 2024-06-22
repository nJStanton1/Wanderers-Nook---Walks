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
        <h1 className='absolute bottom-0 p-3 flex flex-grow w-full text-xl md:text-2xl lg:text-5xl flex-shrink bg-gradient-to-t from-zinc-900'>
          The Wanderers Nook
        </h1>
      </div>
      <div className='w-full px-3 pt-3'>
        <p className='w-full'>Welcome to the Nook! Here you'll find walks and adventures around Greater Manchester. </p>
        <p className='w-full'>I hope exploring my site will help you explore the outdoors.</p>
      </div>
      <div className='w-full p-3'>
        <h2 className='text-base md:text-lg lg:text-2xl font-medium'>Hikes</h2>
        <p className='w-full'>Are you a veteran hiker looking for new places to wander? A new hiker, who's always wanted to go outside more but never quite known where to go? You'll find a walk to suit you here.</p>
        <p className='w-full'>All my walks are accessible by public transport, and some start in the centre. This way, you can always have a drink or two at the end. After all, what is a hike, but a nice walk to a good pub?</p>
        <p className='w-full'>I recommend searching by area. You can choose something close or far and see what scenery you might see.</p>
        <div className='inline-flex w-full justify-around md:justify-end py-4'>
          <button className='inline-flex px-2 py-1 md:mr-4 items-center rounded-full bg-red'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="flex size-6 stroke-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <span className='flex text-left ml-2 mr-1 text-white text-base md:text-lg'>Explore all hikes</span>
          </button>
          <button className='inline-flex px-2 py-1 items-center rounded-full bg-red'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="flex size-6 stroke-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <span className='flex text-left ml-2 mr-1 text-white text-base md:text-lg'>Explore by area</span>
          </button>
        </div>
        <div className='w-full mt-1'>
          <h3 className='text-sm md:text-base lg:text-lg font-medium'>Highlighted hikes</h3>
        </div>
      </div>
      <div className='w-full p-3'>
        <h2 className='text-base md:text-lg lg:text-2xl font-medium'>Articles</h2>
        <p className='w-full'>I have written various articles on the hikes I have done. These can be great for finding walks when you don't know what to look for.</p>
        <p className='w-full'>Some of these detail planning hikes. I plan to do some on gear and what to bring in future.</p>
        <div className='inline-flex w-full justify-around md:justify-end pt-2'>
          <button className='inline-flex px-2 py-1 mr-2 items-center rounded-full bg-red'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="flex size-6 stroke-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <span className='flex text-left ml-2 mr-1 text-white text-base md:text-lg'>Explore all articles</span>
          </button>
        </div>
        <div className='w-full'>
          <h3 className='text-sm md:text-base lg:text-lg font-medium'>Highlighted articles</h3>
        </div>
      </div>
      
    </Layout>
  )
}

export const Head = () => <Seo pageTitle="Home Page" pageURL="/" />
 
// Export component
export default IndexPage