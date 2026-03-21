import { createContext, useContext, useState } from "react";

const LoaderContext = createContext();

const LoaderContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const value = { isLoading, setIsLoading };
  return <LoaderContext.Provider value={value}>{children}</LoaderContext.Provider>;
};

const useLoaderContext = () => useContext(LoaderContext);

export { useLoaderContext, LoaderContextProvider };
