import { useEffect, useState } from 'react';
import { API_URL } from '@env';

const useFetch = (endpoint = '') => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(`${API_URL}${endpoint}`);
        const json = await response.json();
        setData(json.results);
      } catch (error) {
        console.error('Fetching error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, [endpoint]);

  return { data, loading };
};

export default useFetch;
