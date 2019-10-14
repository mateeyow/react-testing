import React, { useEffect, useState } from 'react';
import fetch from 'axios';

const AsyncPage = () => {
  const [data, setData] = useState([]);
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setError(false);
      setLoading(true);
      try {
        const response = await fetch.get(
          'https://jsonplaceholder.typicode.com/posts?_limit=10',
        );

        if (response) {
          const { data: posts } = response;
          setData(posts);
        }

        setLoading(false);
      } catch (err) {
        setError(true);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isError) {
    return <div>Something went wrong</div>
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data.length) {
    return <div>No data found</div>;
  }

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
};

export default AsyncPage;
