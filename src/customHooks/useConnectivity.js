import { useState, useEffect } from "react";

export default function useConnectivity() {
  const [isOnline, setIsOnline] = useState(true);
  const [interval, setCustomInterval] = useState(null);

  useEffect(() => {
    const i = setInterval(() => {
      fetchData();
    }, 1000);
    setCustomInterval(i);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://reqres.in/api/unknown?page`);
      const data = await response.json();
      data && setIsOnline(true);
    } catch (error) {
    } finally {
    }
  };

  return isOnline;
}
