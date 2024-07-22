import { useHighlightedRoutes } from "./graphql-static-hooks/useHighlightedRoutes";
import * as React from 'react'
import * as PropTypes from 'prop-types'
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from 'gatsby'
const {getSlug} = require('./helperFunctions')

// Define components
const HighlightedRoutesGallery = ({ children }) => {
    // Do working if needed here
    const highlightedRoutes = useHighlightedRoutes()
    
    //Return final layout here
    return (
        <div className="w-full snap-x snap-mandatory">
            {
                highlightedRoutes.map(highlight => (
                    <HighlightRouteCard
                        linkTo={"/routes/" + getSlug(highlight.fileAbsolutePath)}
                        heroImage={highlight.frontmatter.heroImage}
                        title={highlight.frontmatter.title}
                        length={highlight.frontmatter.length}
                        className ='snap-always snap-center'
                    />
                ))
            }
        </div>
    )
}

  // Define prop types
HighlightedRoutesGallery.propTypes = {
    example: PropTypes.string.isRequired,
}

const HighlightRouteCard = ({key, linkTo, heroImage, title, length, startPoint, excerpt}) => {
    return(
        <Link to={linkTo} className='flex m-3 w-96 relative h-60 border-2 border-accent-red'>
            {heroImage && <GatsbyImage className='absolute object-cover inset-0' image={getImage(heroImage)} alt=''/> }
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