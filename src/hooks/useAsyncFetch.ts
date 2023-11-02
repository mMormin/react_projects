/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { useEffect, useState } from 'react';

export const useAsyncFetch = <TData>(url: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<TData>();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [url]);

  return { isLoading, data };
};
