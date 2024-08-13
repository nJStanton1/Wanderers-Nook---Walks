// Imports
import * as React from 'react'
import * as PropTypes from 'prop-types'
import DistanceIcon from "../../static/icons/distance-icon.svg"
import ClockIcon from "../../static/icons/clock-icon.svg"
import PinIcon from "../../static/icons/pin-icon.svg"
import MapIcon from "../../static/icons/map-icon.svg"
import ElevationIcon from "../../static/icons/elevation-icon.svg"
import CircularIcon from "../../static/icons/circular-route-icon.svg"
import EndIcon from "../../static/icons/end-icon.svg"
import { GetLocationSlug } from './graphql-static-hooks/useLocationLinkHook'
import { Link } from 'gatsby'

const {timeAllowedCalculation} = require('../components/helperFunctions')

// Define components
const RouteOverviewGallery = ({ distance, elevation, time, startingPoint, endPoint, osMap }) => {
    // Do working if needed here
    const timeAllowed = time ? time : timeAllowedCalculation(distance, elevation )
    
    //Return final layout here
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-2 md:gap-2 my-9">
            {distance &&
                <div className="inline-flex items-center">
                    <DistanceIcon className='size-20 mr-4 flex'/>
                    <div className="flex flex-col items-start">
                        <h3 className="p-0 text-start">Distance</h3>
                        <p className="p-0 text-start">{distance}km</p>
                    </div>
                </div>
            }

            {elevation !== 0 && 
              <div className="inline-flex items-center">
                <ElevationIcon className='size-20 mr-4 flex'/>
                <div className="flex flex-col">
                  <h3 className="p-0 text-start">Elevation</h3>
                  <p className="p-0 text-start">{elevation}m</p>
                </div>
              </div>
            }

            {timeAllowed &&
                <div className="inline-flex items-center">
                    <ClockIcon className='size-20 mr-4 flex'/>
                    <div className="flex flex-col">
                        <h3 className="p-0 text-start">Time</h3>
                        <p className="p-0 text-start">{timeAllowed} hrs</p>
                    </div>
                </div>
            }

            {startingPoint &&
                <div className="inline-flex items-center">
                    <PinIcon className='size-20 mr-4 flex'/>
                    <Link to={GetLocationSlug(startingPoint)} className="flex flex-col">
                        <h3 className="p-0 text-start">Starts at</h3>
                        <p className="p-0 underline text-start">{startingPoint}</p>
                    </Link>
                </div>
            }

            {endPoint ?
                <div className="inline-flex items-center">
                    <EndIcon className='size-20 mr-4 flex'/>
                    <Link to={GetLocationSlug(endPoint)} className="flex flex-col">
                        <h3 className="p-0 text-start">Ends at</h3>
                        <p className="p-0 underline text-start">{endPoint}</p>
                    </Link>
                </div>
                :
                <div className="inline-flex items-center">
                    <CircularIcon className='size-20 mr-4 flex'/>
                    <div className="flex flex-col">
                        <h3 className="p-0 text-start">Route Type</h3>
                        <p className="p-0 text-start">Circular</p>
                    </div>
                </div>
            }

            {osMap && 
                <div className="inline-flex items-center">
                    <MapIcon className='size-20 mr-4 flex'/>
                    <div className="flex flex-col ">
                    <h3 className="p-0 text-start">OS Map</h3>
                    <a href={osMap} className='underline text-start'>View map here</a>
                    </div>
                </div>
            }

        </div>
    )
  }

  // Define prop types
  RouteOverviewGallery.propTypes = {
    distance: PropTypes.number.isRequired,
    elevation: PropTypes.number.isRequired,
    time: PropTypes.string,
    startingPoint: PropTypes.string,
    osMap: PropTypes.string,
}

  // Exports
  export default RouteOverviewGallery