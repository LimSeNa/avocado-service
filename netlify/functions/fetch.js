export default async (request, context) => {
    try {
        const response = await fetch(process.env.HTTP_SERVER);
        const data = await response.json();
        return Response.json({data});
    } catch (error) {
        console.log(error);
        return Response.json({error: 'Failed fetching data.'});
    }
};