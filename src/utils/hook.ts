"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuthContext } from "../context/AuthContext";

export const useAuthGuard = (): void => {
  const router = useRouter();
  const pathname = usePathname();
  const { authUser, isLoading } = useAuthContext();

  useEffect(() => {
    // 사용자를 얻을 수 없을 때는 로그인 페이지로 리다이렉트

    if (!authUser && !isLoading) {
      // router.push({
      //   pathname: "/signin",
      //   query: {
      //     redirect_to: pathname,
      //   },
      // });
      router.push(`/signin?redirect_to=${pathname}`);
    }
  }, [authUser, isLoading, pathname, router]);
};
