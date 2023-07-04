const fetch = require('node-fetch');
// assign constant to the url
const dadJokesURL = 'https://icanhazdadjoke.com';

// Export function to get a random dad joke
module.exports = {
  index
};

// Export function to get a random dad joke 
//from the dad jokes API

module.exports = {
  index
};

function index(req, res) {
  fetch(`${dadJokesURL}`)
    .then(res => res.json())
    .then(joke => {
      res.render('index', {
        joke:joke.value
      });
    });
};