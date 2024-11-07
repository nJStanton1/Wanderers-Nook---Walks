// Imports
import * as React from 'react'
import * as PropTypes from 'prop-types'
import { useLocationTransportHook } from './graphql-static-hooks/useLocationTransportHook'

// Define components
const GettingThereCard = ({ location }) => {
  // Do working if needed here
  const locationData = useLocationTransportHook(location)
  //Return final layout here
  return (
    <div className='w-full'>
        <h2 className="mt-4">Getting there</h2>
        <div className='w-full mt-2'>
            {
            locationData.frontmatter.transportType.map(transport => (
                <div className="w-full flex flex-col md:flex-row mb-2">
                <TransportIcon type={transport.type} size={60}/>
                <div className="w-full">
                    <h3 className="ml-0 md:ml-4 pt-0 pb-1">{transport.type}</h3>
                    <div className="ml-4 text-left" dangerouslySetInnerHTML={{__html: micromark(transport.transportDetail)}}/>
                </div>
                
                </div>
                
            ))
            }
        </div>
        <p className="mt-4 pb-03">This button will open Google Maps directions to {locationData.frontmatter.title}.</p>
        <GoogleDirectionsButton className='justify-self-end md:justify-self-auto' destinationLatitude={locationData.frontmatter.location.latitude} destinationLongitude={locationData.frontmatter.location.longitude} />
    </div>
  )
}

// Define prop types
GettingThereCard.propTypes = {
  location: PropTypes.string.isRequired,
}

// Exports
export default GettingThereCard