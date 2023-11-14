import client from "./client";

export const searchPost = ({symptom}) =>
    client.post('/api/search', {symptom});
        // .then((response) => {
        //     const [message, setMessage] = useState('');
        //     setMessage(response.data.message);
        //     return <SearchModal message={message}/>
        // })
        // .catch((error) => console.log(error.response.data));


/*export const searchPost = function({message})
{
    console.log(client.defaults.url);
    return client.post('/api/search', {message});
}*/


