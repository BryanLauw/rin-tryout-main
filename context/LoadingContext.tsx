"use client";

import { useParams } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

function useContextValue() {
  const [loading, setLoading] = useState(false);
  const params = useParams();

  useEffect(() => {
    setLoading(false);
  }, [params]);

  return {
    loading,
    setLoading,
  };
}

type T = ReturnType<typeof useContextValue>;
const Context = createContext<T>({} as T);
export const LoadingProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => <Context.Provider value={useContextValue()}>{children}</Context.Provider>;
export const useLoading = () => useContext(Context);
