// assign constant to the url
const dadJokesURL = 'https://icanhazdadjoke.com';

// Export function to get a random dad joke
module.exports = {
  index
}

function index(req, res) {  
  
  fetch(`${dadJokesURL}` , {
    headers: {
        Accept: "application/json"
    }
  })
    .then(response => response.json())
    .then(jsonData => {
      return jsonData.joke;
    })
    .then(joke => {
      res.render('index', {
        joke 
      })
    })
}
