import { ApiContext } from "@/app/types/data";
import { fetcher } from "@/app/utils";

export type GetUserParams = {
  id: number;
};

const getUser = async (
  context: ApiContext,
  { id }: GetUserParams
): Promise<any> => {
  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, "")}/users/${id}`,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
};

export default getUser;
