import useSWR from "swr";
import axios from "axios";

const fetcher = (url) => axios.get(url).then((res) => res.data);

const useFetch = (url) => {
  const { data, error, mutate } = useSWR(url, fetcher);

  const isLoading = !data && !error;

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useFetch;
