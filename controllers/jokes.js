const fetch = require('node-fetch');
// assign constant to the url
const dadJokesURL = 'https://icanhazdadjoke.com';

// Export function to get a random dad joke
module.exports = {
  index
};

// Export function to get a random dad joke 
//from the dad jokes API

function index(req, res) {
  // Fetch a random dad joke from the API
  fetch(dadJokesURL)
    .then((res => res.json())
    //Extract the joke from the response JSON 
      .then(joke => { 
        res.render(index, { 
          joke: joke.value 
        }) 
      })
    )
    // Send a 500 error if unable to fetch a joke, not sure if necessary
    .catch(err => {
      console.log(err);
      res.status(500).send('An unexpected error occurred');
    });
}