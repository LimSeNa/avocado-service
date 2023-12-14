const fetch = require('node-fetch');

exports.handler = async function(event, context) {
    const {path} = event;
    const HTTP_SERVER = process.env.HTTP_SERVER;
    console.log(HTTP_SERVER);

    try {
        const response = await fetch(`${HTTP_SERVER}${path}`, {
            method: event.httpMethod,
            headers: event.headers,
            body: event.body,
        });

        const data = await response.json();

        return {
            statusCode: 200,
            body: JSON.stringify(data),
        };
    } catch (error) {
        console.log(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed fetching data.' }),
        };
    }
};