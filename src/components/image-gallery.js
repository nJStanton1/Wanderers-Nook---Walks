// Imports
import * as React from 'react'
import * as PropTypes from 'prop-types'
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { floor } from 'mathjs';

// Define components
const ImageGalleryCaptions = ({ images }) => {
    // Do working if needed here
    let imagesColumn1;
    let imagesColumn2;
    let imagesColumn3;
    const imageCount = Object.keys(images).length
    if (imageCount < 3) {
        // Todo - return single column
    } else {
        const chunkSize = floor(imageCount/3)
        imagesColumn1 = images.slice(0, chunkSize)
        imagesColumn2 = images.slice(chunkSize, chunkSize+chunkSize)
        imagesColumn3 = images.slice(chunkSize+chunkSize, imageCount) // Three will be the longest one
    }
    

    //Return final layout here
    return (
      <div className='w-full grid grid-cols-1 gap-2 md:grid-cols-3'>
        <div className='flex flex-col col-span-1'>
            {imagesColumn1.map(galleryImage => (
                <div className='flex flex-col relative mb-2'>
                    <GatsbyImage image={getImage(galleryImage.image)} className='rounded-2xl relative' />
                    <p className='text-center absolute inset-x-0 bottom-0 rounded-b-2xl bg-gradient-to-t from-grey/60 from-50%'>{galleryImage.caption}</p>
                </div>
                ))
            }
        </div>
        <div className='flex flex-col col-span-1'>
            {imagesColumn3.map(galleryImage => (
                <div className='flex flex-col relative mb-2'>
                    <GatsbyImage image={getImage(galleryImage.image)} className='rounded-2xl relative' />
                    <p className='text-center absolute inset-x-0 bottom-0 rounded-b-2xl bg-gradient-to-t from-grey/60 from-50%'>{galleryImage.caption}</p>
                </div>
                ))
            }
        </div>
        <div className='flex flex-col col-span-1'>
            {imagesColumn2.map(galleryImage => (
                <div className='flex flex-col relative mb-2'>
                    <GatsbyImage image={getImage(galleryImage.image)} className='rounded-2xl relative' />
                    <p className='text-center absolute inset-x-0 bottom-0 rounded-b-2xl bg-gradient-to-t from-grey/60 from-50%'>{galleryImage.caption}</p>
                </div>
                ))
            }
        </div>
      </div>
    )
}

// Define prop types
ImageGalleryCaptions.propTypes = {
    images: PropTypes.array.isRequired,
}

// Exports
export default ImageGalleryCaptions