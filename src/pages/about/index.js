// Imports
import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { StaticImage } from 'gatsby-plugin-image'

// Define components
const AboutPage = () => {
    return (
        <Layout>
            <h1 className='mt-8 w-full'>About</h1>

            <h2>Wanderers Nook</h2>
            <p>Wanderers Nook was started in Manchester to encourage people to get outdoors. Manchester as a city is a great place to live, but it is defined by its status as the first industrial city, when it raced to cover any and all green space in concrete, brick and factories. However, it's status is also it's saviour. The railway that powered Manchester built dozens of local lines running into in the surrounding countryside. So it's easy for people to get out and about. But where to go? That's where the Nook comes in. Here are all the best spots to go, how to get there, and what to check out. All without a car. </p>

            <h2>Nathaniel Stanton</h2>
            <p>I started the Wanderer's Nook. A passion project to help other's get into my hobby. I don't drive, and I love hiking. I always have. So when I moved to Manchester, I was annoyed at how little green space there is. Slowly, I learnt the rail lines, bus routes and Metrolink lines. I've walked hundreds of miles around Manchester. And now I'm trying to share what I've learnt. </p>
            
            <div className='w-full flex justify-center mt-4'>
                <StaticImage 
                    className='w-full aspect-square max-w-80 max-h-80'
                    objectFit='contain'
                    src="../../images/WNLogo.png"
                />
            </div>
            
        </Layout>
    )
  }

// Export component

export default AboutPage
export const Head = () => <Seo pageTitle="About Me" />