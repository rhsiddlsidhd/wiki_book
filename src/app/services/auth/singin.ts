import { ApiContext } from "@/app/types/data";
import { fetcher } from "@/app/utils";

export type SigninParams = {
  username: string;
  password: string;
};

const signin = async (
  context: ApiContext,
  params: SigninParams
): Promise<any> => {
  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, "")}/auth/signin`,
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    }
  );
};

export default signin;
