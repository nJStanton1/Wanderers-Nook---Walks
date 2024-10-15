import { useHighlightedRoutes } from "./graphql-static-hooks/useHighlightedRoutes";
import * as React from 'react'
import * as PropTypes from 'prop-types'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from 'gatsby'
import RightArrowIcon from "../../static/icons/right-arrow.svg"
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
                    {highlightedRoutes.map(highlight => (
                        <div className="flex snap-center">
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
HighlightedRoutesGallery.propTypes = {
    example: PropTypes.string.isRequired,
}

const HighlightRouteCard = ({ linkTo, heroImage, title, length }) => {
    return(
        <Link to={linkTo} className='overflow-hidden max-w-xs md:max-w-none m-3 w-96 relative h-64 border-2 border-accent-red'>
            {heroImage && <GatsbyImage className='absolute min-h-full min-w-full inset-0' image={getImage(heroImage)} alt=''/> }
            <h3 className='absolute bottom-0 left-0 px-2 py-0'>{title}</h3>
            {length && <p className='absolute bottom-0 right-0 px-2 py-0'>{length}km</p>}
        </Link>
        
    )
}

HighlightRouteCard.propTypes = {
    key: PropTypes.string.isRequired,
    linkTo: PropTypes.string.isRequired,
    heroImage: PropTypes.string,
    title: PropTypes.string.isRequired,
    length: PropTypes.string,
    startPoint: PropTypes.string,
    excerpt: PropTypes.string.isRequired,
}

  // Exports
export default HighlightedRoutesGallery