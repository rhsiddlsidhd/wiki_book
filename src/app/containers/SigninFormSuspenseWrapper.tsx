"use client";

import React, { Suspense } from "react";
import SigninFormContainer from "./SigninFormContainer";

const SigninFormSuspenseWrapper = () => {
  return (
    <Suspense>
      <SigninFormContainer />
    </Suspense>
  );
};

export default SigninFormSuspenseWrapper;
