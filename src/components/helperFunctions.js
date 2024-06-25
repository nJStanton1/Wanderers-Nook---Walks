function getSlug(absolutePath) {
  let myArray = absolutePath.split("/");
  let slug = myArray[myArray.length-2];
  return(slug); 
}

module.exports = getSlug