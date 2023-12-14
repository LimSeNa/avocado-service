exports.handler = async (event, context) => {
    try {
        const response = await fetch(process.env.HTTP_SERVER);
        const data = await response.json();
        return {
            statusCode: 200,
            body: JSON.stringify({data})
        };
    } catch (error) {
        console.log(error);
        return {
            statusCode: 500,
            body: JSON.stringify({error: 'Failed fetching data.'})
        };
    }
}