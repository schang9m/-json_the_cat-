const needle = require('needle');

const fetchBreedDescription = function(breedName, callback) {
  needle.get(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    if (error) {
      return callback(error, null);
    }
    if (response.statusCode === 200 && body.length !== 0) {
      return callback(null,body[0].description);
    } else {
      return callback('Breed not found', null);
    }
  });
};

module.exports = { fetchBreedDescription };
