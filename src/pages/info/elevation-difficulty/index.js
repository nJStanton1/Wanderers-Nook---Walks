// Imports
import * as React from 'react'
import {Layout, Padding} from '../../../components/layout'
import Seo from '../../../components/seo'
import {ReactComponent as ElevationIcon} from "../../../../static/icons/elevation-icon.svg"
import { InternalButton, BackButton } from '../../../components/button'

// Define components
const ElevationInfoPage = () => {
    return (
        <Layout subdomain="walks">
        <Padding>
            <div className='w-full flex justify-center mt-6 md:mt-20'>
                <ElevationIcon className='flex size-32 md:size-52'/>
            </div>
            <h1 className='text-center my-8 w-full'>Elevation on a Hike</h1>
            <p>Elevation (or how much you go upwards, in technical terms) is a key part of deciding which walk to go on.</p>
            <p> I could give you numbers, like metres climbed, or steepest gradient. But frankly, I think it overcomplicates it, and most of them don't give you the real story unless you know what to look for.</p>
            <p> To make it simple, I've separated my walks into the following 5 categories:</p>

            <h3 className='mt-2'>Flat</h3>
            <p>Almost entirely level terrain, such as canal towpaths or old railway lines, where any incline is barely noticeable.</p>

            <h3 className='mt-2'>Gradual</h3>
            <p>A route featuring a consistent, gentle incline that is easy to manage for most walkers.</p>

            <h3 className='mt-2'>Rolling</h3>
            <p>A path with small, short hills that offers a moderate challenge, perfect for those looking to advance their hiking skills.</p>

            <h3 className='mt-2'>Steep</h3>
            <p>Terrain with moderately steep inclines that may leave even well-conditioned hikers feeling fatigued at times, featuring both uphill and downhill sections.</p>

            <h3 className='mt-2'>Intense</h3>
            <p>Strenuous trails with steep inclines and challenging terrain that often require scrambling, promising a demanding workout.</p>

            <div className='w-full flex flex-row justify-center mt-6 md:mt-20'>
                <BackButton text='Previous page' />
                <InternalButton text='Go to home' linkTo='/' />
            </div>
        </Padding>
        </Layout>
    )
}

// Export component
export default ElevationInfoPage
export const Head = () => <Seo pageTitle="Elevation Difficulty" pageDescription={"Evaluating the elevation of hikes can be difficult. Here are my categories for evaluating walks."}/>