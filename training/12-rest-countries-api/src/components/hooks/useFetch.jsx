import { useState, useEffect } from "react";
import fetch from "node-fetch";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    setIsLoading(true);

    const fetchCountries = async () => {
      try {
        const res = await fetch(url, { signal });
        const result = await res.json();
        setData(result);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setIsLoading(false);
      }
    };

    setTimeout(fetchCountries, 1000);
    return () => controller.abort();
  }, [url]);

  return { data, error, isLoading };
};

export default useFetch;