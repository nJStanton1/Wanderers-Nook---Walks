// Imports
import * as React from 'react'
import {Layout, Padding} from '../../components/layout'
import Seo from '../../components/seo'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

// Define components
const AboutPage = () => {
    return (
        <Layout>
        <Padding>
            <h1 className='text-center mt-8 w-full'>Wanderers Nook</h1>
            <p className='w-full text-center'>Enabling anyone in Manchester to access the great outdoors easily, cheaply and with confidence.</p>

            <div className='w-full flex flex-col justify-evenly md:justify-normal md:flex-row gap-2 mt-7'>
                <div className='w-full md:w-1/2'>
                    <h2>Wanderers Nook</h2>
                    <p>Wanderers Nook was started in Manchester to encourage people to get outdoors. Manchester as a city is a great place to live, but it is defined by its status as the first industrial city, when it raced to cover any and all green space in concrete, brick and factories.</p>
                    <p>However, it's status is also it's saviour. The railway that powered Manchester built dozens of local lines running into in the surrounding countryside. So it's easy for people to get out and about. But where to go? That's where the Nook comes in. Here are all the best spots to go, how to get there, and what to check out. All without a car.</p>
                    <Link to='/locations' className='inline-flex px-2 py-1 m-4 justify-self-center items-center rounded-full bg-accent-red'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="flex size-6 stroke-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                        <span className='flex text-left ml-2 mr-1 text-white text-base md:text-lg'>See where I've been</span>
                    </Link> 
                </div>
                <div className='w-full md:w-1/2 flex justify-center'>
                    <StaticImage 
                        className='w-full flex self-center aspect-square max-w-80 max-h-80'
                        objectFit='contain'
                        src="../../images/WNLogo.png"
                    />
                </div>
            </div>       
            
            <div className='w-full flex flex-col md:flex-row gap-2 mt-7'>
                <div className='w-full md:w-1/2'>
                    <h2>Nathaniel Stanton</h2>
                    <p>I started the Wanderer's Nook. A passion project to help other's get into my hobby. I don't drive, and I love hiking. I always have. So when I moved to Manchester, I was annoyed at how little green space there is. Slowly, I learnt the rail lines, bus routes and Metrolink lines. I've walked hundreds of miles around Manchester. And I haven't stopped there.</p>
                    <p>Now, I'm trying to share everything I've learnt, and share what I learn in future.</p>
                    <Link to='/routes' className='inline-flex px-2 py-1 m-4 justify-self-center items-center rounded-full bg-accent-red'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="flex size-6 stroke-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                        <span className='inline-block text-left ml-2 mr-1 text-white text-base md:text-lg'>See the routes I've taken</span>
                    </Link> 
                </div>
                <div className='w-full md:w-1/2 flex justify-center'>
                    <StaticImage 
                        className='w-full flex self-center aspect-square max-w-80 max-h-80'
                        objectFit='contain'
                        src="../../images/about-me.jpg"
                    />
                </div>
            </div>

        </Padding>
        </Layout>
    )
}

// Export component
export default AboutPage
export const Head = () => <Seo pageTitle="About Me" />