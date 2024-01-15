import { useState, useEffect } from "react";
import { PostType } from "../types/PostType";

export const useFetch = (url: string) => {
  const [data, setData] = useState<PostType[]>([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const res = fetch(url);
    res
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, []);

  return { data, isLoading, error };
};
