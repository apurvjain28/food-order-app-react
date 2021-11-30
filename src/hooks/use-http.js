import React, { useState, useCallback } from "react";

// the parameter should tell whether to post or get request
// applyData is function: on what should happen to data once fetched
const useHttp = (applyData) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(
    async (requestConfig) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(requestConfig.url, {
          method: requestConfig.method ? requestConfig.method : "GET",
          body: requestConfig.body ? requestConfig.body : null,
          headers: requestConfig.headers ? requestConfig.headers : {},
        });

        if (!response.ok) {
          throw new Error("Request failed!");
        }

        const data = await response.json();

        // console.log(data);

        applyData(data);
      } catch (err) {
        setError(err.message || "Something went wrong!");
      }
      setIsLoading(false);
    },
    [applyData]
  );

  return {
    isLoading: isLoading,
    error: error,
    sendRequest: sendRequest,
  };
};

export default useHttp;
