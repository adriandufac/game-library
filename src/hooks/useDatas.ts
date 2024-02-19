import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface DatasResponse<T> {
  count: number;
  results: T[];
}

const useDatas = <T>(endpoint: string) => {
  const [datas, setDatas] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<DatasResponse<T>>(endpoint, { signal: controller.signal })
      .then((res) => {
        setDatas(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });
    return () => controller.abort();
  }, []);
  return { datas, error, isLoading };
};
export default useDatas;
