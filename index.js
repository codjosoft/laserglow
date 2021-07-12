//create axios instance
var axios = require('axios');

//create axios instance
axios.create({
    baseURL: 'https://api.github.com',
    timeout: 10000,
    headers: {
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
        'User-Agent': 'axios-example'


    }
});



//define async function
function asyncFunc() {
    //use axios to get data from github
    axios.get('/users/:aframson/repos')
        .then(function (response) {
            console.log(response.data);
        }   
    );
}

//call async function
asyncFunc();