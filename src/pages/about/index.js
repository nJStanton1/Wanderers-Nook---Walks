// Imports
import * as React from 'react'
import {Layout, Padding} from '../../components/layout'
import Seo from '../../components/seo'
import { StaticImage } from 'gatsby-plugin-image'
import { InternalSearchButton } from "../../components/button"

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
                    <InternalSearchButton linkTo="/locations" text="See where I've been" />
                </div>
                <div className='w-full md:w-1/2 flex justify-center'>
                    <StaticImage 
                        className='w-full flex self-center aspect-square max-w-80 max-h-80'
                        objectFit='contain'
                        src="../../../static/logos/Logo-4x.png"
                    />
                </div>
            </div>       
            
            <div className='w-full flex flex-col md:flex-row gap-2 mt-7'>
                <div className='w-full md:w-1/2'>
                    <h2>Nathaniel Stanton</h2>
                    <p>I started the Wanderers Nook. A passion project to help other's get into my hobby. I don't drive, and I love hiking. I always have. So when I moved to Manchester, I was annoyed at how little green space there is. Slowly, I learnt the rail lines, bus routes and Metrolink lines. I've walked hundreds of miles around Manchester. And I haven't stopped there.</p>
                    <p>Now, I'm trying to share everything I've learnt, and share what I learn in future.</p>
                    <InternalSearchButton linkTo="/routes" text="See the routes I've taken" />
                </div>
                <div className='w-full md:w-1/2 flex justify-center'>
                    <StaticImage 
                        className='w-full flex self-center aspect-square max-w-80 max-h-80'
                        objectFit='contain'
                        src="../../../static/images/about-me.jpg"
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