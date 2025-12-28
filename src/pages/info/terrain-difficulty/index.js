// Imports
import * as React from 'react'
import {Layout, Padding} from '../../../components/layout'
import Seo from '../../../components/seo'
import {ReactComponent as TerrainIcon} from "../../../../static/icons/terrain-icon.svg"
import { InternalButton, BackButton } from '../../../components/button'

// Define components
const ElevationInfoPage = () => {
    return (
        <Layout subdomain="walks">
        <Padding>
            <div className='w-full flex justify-center mt-6 md:mt-20'>
                <TerrainIcon className='flex size-32 md:size-52'/>
            </div>
            <h1 className='text-center my-8 w-full'>Terrain on a Hike</h1>
            <p>Terrain refers to the surface underfoot when on a hike. A bad surface can be more tiring, and more risky if you are unexperienced. It is a key part of deciding which walk to go on.</p>
            <p>There is no numeric value for terrain, it is purely subjective. So each of these will vary based on your specific experience. However, I've tried to evaluate terrain in such a way as to give anyone, of any level, a good idea of what to expect.</p>
            <p>I've separated my walks into the following 5 categories of terrain:</p>

            <h3 className='mt-2'>Paved</h3>
            <p>Predominantly paved paths or boardwalks, featuring well-defined stairs or ramps for elevation changes, ensuring a smooth and accessible hiking experience.</p>

            <h3 className='mt-2'>Trail</h3>
            <p>Primarily composed of dirt and gravel, these trails are even underfoot with distinct paths that may be slightly rough. Steep sections are equipped with steps for easier navigation.</p>

            <h3 className='mt-2'>Natural</h3>
            <p>Clear but unmaintained trails made of dirt, rock, or sand. While generally firm, they lack stairs for elevation and may include some off-trail hiking opportunities.</p>

            <h3 className='mt-2'>Rugged</h3>
            <p>Characterised by uneven terrain that may require navigation skills, this category includes steep inclines with loose or slippery surfaces, making for a challenging hike.</p>

            <h3 className='mt-2'>Scramble</h3>
            <p>Largely off-trail, these routes require self-navigation and may involve using hands and feet to traverse steep, challenging terrain.</p>

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
export const Head = () => <Seo 
    pageTitle="About Me" 
    pageDescription={"Evaluating the elevation of hikes can be difficult. Here are my categories for evaluating walks."}
    />