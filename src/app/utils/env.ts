import { ApiContext } from "../types/data";

type Key = "serve" | "client";
interface GetApiContextProps {
  key: "serve" | "client";
}
const getApiContext = ({ key }: GetApiContextProps): ApiContext => {
  const path =
    key === "serve"
      ? process.env.API_BASE_URL
      : process.env.NEXT_PUBLIC_API_BASE_PATH;

  if (!path) {
    throw new Error(`Environment is undefined`);
  }

  return {
    apiRootUrl: path,
  };
};

export default getApiContext;
