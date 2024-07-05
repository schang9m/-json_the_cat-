const needle = require('needle');
const breed = process.argv[2];
needle.get(`https://api.thasdecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  if (error) {
    console.log("There's a erro! ",error);
  }
  console.log('body:', body); // Print the HTML for the Google homepage.
});