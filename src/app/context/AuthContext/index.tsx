"use client";
import signout from "@/app/services/auth/signout";
import signin from "@/app/services/auth/singin";
import { User } from "@/app/types/data";
import { fetcher } from "@/app/utils";
import getApiContext from "@/app/utils/env";

import React, { useContext } from "react";
import useSWR from "swr";

type AuthContextType = {
  authUser?: User;
  isLoading: boolean;
  signin: (username: string, password: string) => Promise<void>;
  signout: () => Promise<void>;
  mutate: (
    data?: User | Promise<User>,
    shouldRevalidate?: boolean
  ) => Promise<User | undefined>;
};

const AuthContext = React.createContext<AuthContextType>({
  authUser: undefined,
  isLoading: false,
  signin: async () => Promise.resolve(),
  signout: async () => Promise.resolve(),
  mutate: async () => Promise.resolve(undefined),
});

export const useAuthContext = (): AuthContextType =>
  useContext<AuthContextType>(AuthContext);

/**
 * 인증 컨텍스트 제공자
 * @param params 파라미터
 */
export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const context = getApiContext({ key: "client" });

  const { data, error, mutate } = useSWR<User>(
    `${context.apiRootUrl.replace(/\/$/g, "")}/users/me`,
    fetcher
  );

  const isLoading = !data && !error;

  // 로그인
  const signinInternal = async (username: string, password: string) => {
    await signin(context, { username, password });
    await mutate();
  };

  // 로그아웃
  const signoutInternal = async () => {
    await signout(context);
    await mutate();
  };

  return (
    <AuthContext.Provider
      value={{
        authUser: data ?? undefined,
        isLoading,
        signin: signinInternal,
        signout: signoutInternal,
        mutate,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
