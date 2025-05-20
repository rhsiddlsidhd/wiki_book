"use client";

import SigninForm from "../components/organisms/SigninForm";
import { useAuthContext } from "../context/AuthContext";
import { useGlobalSpinnerActionsContext } from "../context/GlobalSpinnerContext";
import { useRouter, useSearchParams } from "next/navigation";

/**
 * 로그인폼 컨테이너
 */
const SigninFormContainer = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { signin } = useAuthContext();
  const setGlobalSpinner = useGlobalSpinnerActionsContext();
  // 로그인 버튼을 눌렀을 때의 이벤트 핸들러
  const onSignin = (err?: Error) => {
    if (!err) {
      // 로그인에 성공하고, 쿼리가 지정되어 있을 때는 해당 URL로 이동한다.
      // 기본은 톱 페이지로 이동한다.
      const redurectTo = searchParams.get("redirect_to") ?? "/";
      router.push(redurectTo);
    }
  };
  const handleSignin = async (username: string, password: string) => {
    try {
      setGlobalSpinner(true);

      await signin(username, password);

      if (onSignin) onSignin();
    } catch (err: unknown) {
      if (err instanceof Error) {
        // 에러 내용을 표시한다

        window.alert(err.message);
        if (onSignin) onSignin(err);
      }
    } finally {
      setGlobalSpinner(false);
    }
  };

  return <SigninForm onSignin={handleSignin} />;
};

export default SigninFormContainer;
