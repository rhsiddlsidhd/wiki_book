"use client";

import { ApiContext } from "@/app/types/data";
import { NEXT_PUBLIC_API_BASE_PATH } from "@/app/utils/env";
import { createContext, useContext } from "react";

const ApiConfigContext = createContext<ApiContext | undefined>(undefined);

export const useApiConfigContext = () => {
  const context = useContext(ApiConfigContext);
  if (!context) {
    throw new Error(
      "useApiConfigContext must be used within an ApiConfigContextProvider"
    );
  }
  return context;
};

export const ApiConfigContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <ApiConfigContext.Provider
      value={{
        apiRootUrl: NEXT_PUBLIC_API_BASE_PATH,
      }}
    >
      {children}
    </ApiConfigContext.Provider>
  );
};
