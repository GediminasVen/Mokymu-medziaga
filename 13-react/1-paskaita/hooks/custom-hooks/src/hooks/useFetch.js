import { useEffect } from "react";
import { useState } from "react";

const useFetch = (url, timeout) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    }, timeout);
  }, [url]);

  const makeApiCall = () => {};

  return { data, loading, makeApiCall };
};

export default useFetch;
