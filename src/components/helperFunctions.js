const PropTypes = require('prop-types');
const { ceil, floor } = require('mathjs')

function getSlug(absolutePath) {
  let myArray = absolutePath.split("/");
  let slug = myArray[myArray.length-2];
  return(slug); 
}

getSlug.propTypes = {
  absolutePath: PropTypes.string.isRequired,
}

function timeAllowedCalculation (distance, elevation) {
  const elevationScrub = elevation ? elevation : 0;
  const totalMinutes = distance * 60 / 4 + elevationScrub/10;
  let hours = floor(totalMinutes / 60)
  let minutes = ceil((totalMinutes % 60)/5)*5
  if (minutes === 60) {
    hours += 1
    minutes = 0
  }
  if (minutes < 10) {
    minutes = '0' + minutes
  }
  return (`${hours}:${minutes}`)
}

timeAllowedCalculation.propTypes = {
  distance: PropTypes.number.isRequired,
  elevation: PropTypes.number,
}

module.exports = {getSlug, timeAllowedCalculation}