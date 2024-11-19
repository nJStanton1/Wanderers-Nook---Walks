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
    const timeAllowed = time ? time : timeAllowedCalculation(distance, elevation)

    const gradientConstant = 0.1 // Constant for finding gradient from 
    const gradientBreakpoint = 1.75 // Breakpoints for gradient 
    const gradientRating = Math.ceil(gradientConstant * elevation / (distance * gradientBreakpoint))
    let steepness = ""
    switch (gradientRating) {
        case 0:
        case 1:
            steepness = "Flat"
            break;
        case 2:
        case 3:
            steepness = "Gentle"
            break;
        case 4:
        case 5:
        case 6:
            steepness = "Small Hills"
            break;
        case 7:
        case 8:
        case 9:
        case 10:
            steepness = "Steep"
            break;
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
            steepness = "Challenging"
            break;
        default:
            steepness = "Well 'ard"
            break;
    }
    
    
    //Return final layout here
    return (
        <div className="grid grid-cols-2 gap-x-2 gap-y-4 md:gap-y-2 mt-2">
            {distance &&
                <div className="inline-flex items-start">
                    <DistanceIcon className='flex-none size-10 md:size-14 mr-2 md:mr-4'/>
                    <div className="flex flex-col items-start">
                        <h3 className="p-0 leading-none text-start">Distance</h3>
                        <p className="p-0 text-start">{distance}km</p>
                    </div>
                </div>
            }

            {steepness !== "" && 
              <div className="inline-flex items-start">
                <ElevationIcon className='flex-none size-10 md:size-14 mr-2 md:mr-4'/>
                <div className="flex flex-col">
                  <h3 className="p-0 leading-none text-start">Elevation</h3>
                  <p className="p-0 text-start">{steepness}</p>
                </div>
              </div>
            }

            {timeAllowed &&
                <div className="inline-flex items-start">
                    <ClockIcon className='flex-none size-10 md:size-14 mr-2 md:mr-4'/>
                    <div className="flex flex-col">
                        <h3 className="p-0 leading-none text-start">Time</h3>
                        <p className="p-0 text-start">{timeAllowed} hrs</p>
                    </div>
                </div>
            }

            {osMap && 
                <div className="inline-flex items-start">
                    <MapIcon className='flex-none size-10 md:size-14 mr-2 md:mr-4'/>
                    <div className="flex flex-col ">
                    <h3 className="p-0 leading-none text-start">OS Map</h3>
                    <a href={osMap} className='underline text-start'>View map here</a>
                    </div>
                </div>
            }

            {startingPoint &&
                <div className="inline-flex items-start">
                    <PinIcon className='flex-none size-10 md:size-14 mr-2 md:mr-4'/>
                    <Link to={GetLocationSlug(startingPoint)} className="flex flex-col">
                        <h3 className="p-0 leading-none text-start">Starts at</h3>
                        <p className="p-0 underline text-start">{startingPoint}</p>
                    </Link>
                </div>
            }

            {endPoint ?
                <div className="inline-flex items-start">
                    <EndIcon className='flex-none size-10 md:size-14 mr-2 md:mr-4'/>
                    <Link to={GetLocationSlug(endPoint)} className="flex flex-col">
                        <h3 className="p-0 leading-none text-start">Ends at</h3>
                        <p className="p-0 underline text-start">{endPoint}</p>
                    </Link>
                </div>
                :
                <div className="inline-flex items-start">
                    <CircularIcon className='flex-none size-10 md:size-14 mr-2 md:mr-4'/>
                    <div className="flex flex-col">
                        <h3 className="p-0 leading-none text-start">Route Type</h3>
                        <p className="p-0 text-start">Circular</p>
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