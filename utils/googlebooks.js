const axios = require('axios');

module.exports = async (phrase) => {
    const results = await axios.get('https://www.googleapis.com/books/v1/volumes', {
        params: {
            format: 'json',
            q: `${phrase}`
        }
    });

    //I love to code
    //this line is different
    //return JSON.stringify(results.data);
    var formattedObject = {
        data: results.data,
        //this will give the bit information
        status: results.status,
        //this returns the status in computer form
        statusText: results.statusText,
        //this returns the status for people
        headers: results.headers,
        //this is the status for the headers
        requestHeader: results.config.headers
        //this is the location of the headers
    };

    return JSON.stringify(formattedObject);

};

/*  console.log(results.data);
    console.log(results.status);
    console.log(results.statusText);
    console.log(results.headers);

        const results = await axios({
        method: 'get',
        url: 'https://www.googleapis.com/books/v1/volumes',
        params: {
            format: 'json',
            q: `${phrase}`,
        },
    })

    */
