import { useHighlightedRoutes } from "./graphql-static-hooks/useHighlightedRoutes";
import * as React from 'react'
import * as PropTypes from 'prop-types'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from 'gatsby'
import {ReactComponent as RightArrowIcon} from "../../static/icons/right-arrow.svg"
const {getSlug} = require('./helperFunctions')

// Define components
const HighlightedRoutesGallery = () => {
    // Do working if needed here
    const highlightedRoutes = useHighlightedRoutes()
    
    //Return final layout here
    return (
        <div className="mb-10">
            <div className="flex overflow-x-scroll snap-x snap-proximity hide-scrollbar">
                <div className="flex flex-nowrap">
                    {highlightedRoutes.map( (highlight, i) => (
                        <div key={highlight + "-" + i} className="flex snap-center">
                            <HighlightRouteCard
                                linkTo={"/routes/" + getSlug(highlight.fileAbsolutePath)}
                                heroImage={highlight.frontmatter.heroImage}
                                title={highlight.frontmatter.title}
                                length={highlight.frontmatter.overview.length}
                                className='snap-always snap-center' />
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex w-full justify-center md:hidden">
                Scroll for more <RightArrowIcon className="pl-2" width="25" height="25" />
            </div>
        </div>
    )
}

  // Define prop types
HighlightedRoutesGallery.propTypes = {}

const HighlightRouteCard = ({ linkTo, heroImage, title, length }) => {
    return(
        <Link to={linkTo} className='overflow-hidden max-w-xs md:max-w-none m-3 w-96 relative h-64 border-2 border-accent-red'>
            {heroImage && <GatsbyImage className='absolute min-h-full min-w-full inset-0' image={getImage(heroImage)} alt=''/> }
            <div className="absolute bottom-0 w-full flex flex-row pb-1 px-2 pt-0 items-end bg-gradient-to-t from-zinc-700/40 from-70%">
                <h3 className='w-3/4 py-0 text-left leading-none'>{title}</h3>
                {length && <p className='w-1/5 h-min text-right pb-0 align-text-bottom font-medium leading-none'>{length}km</p>}
            </div>
            
            
        </Link>
        
    )
}

HighlightRouteCard.propTypes = {
    linkTo: PropTypes.string.isRequired,
    heroImage: PropTypes.string,
    title: PropTypes.string.isRequired,
    length: PropTypes.string,
}

  // Exports
export default HighlightedRoutesGallery