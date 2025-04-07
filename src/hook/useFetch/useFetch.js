import { useEffect, useState } from 'react';
import axios from 'axios';

function useFetch(url) {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);


    const fetchData = async () => {
        try {
            const { data: responseData } = await axios.get(url);
            setLoading(false);
            setData(responseData);
            setLoading(false);


        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchData();
    }, [url]);


    return { error, data, loading };
}
export default useFetch;