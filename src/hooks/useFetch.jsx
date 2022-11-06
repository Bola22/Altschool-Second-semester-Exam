import React from 'react'
import { useEffect, useState } from "react";


function useFetch() {
    const url = "https://api.github.com/users/Bola22/repos"
    const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
// const handleError=useErrorHandler()
  useEffect(() => {
    setLoading(true)
    setError(null)
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false)
        
        // if (!response.ok) {
        //   throw new Error(`Something went wrongs`);
        // }
      })
      .catch((error) => {
        // handleError(error)
        setError("Something went wrong")
        setLoading(false)
      });
  }, [url]);

  return { data, error, loading }
}

export default useFetch
