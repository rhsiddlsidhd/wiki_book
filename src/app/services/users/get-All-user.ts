import { ApiContext, User } from "@/app/types/data";
import { fetcher } from "@/app/utils";

const getAllUsers = async (context: ApiContext): Promise<User[]> => {
  return await fetcher(`${context.apiRootUrl.replace(/\/$/g, "")}/users`, {
    headers: {
      Origin: "*",
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};

export default getAllUsers;
