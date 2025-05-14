import { z } from "zod";

const envSchema = z.object({
  API_BASE_URL: z.string(),
  NEXT_PUBLIC_API_BASE_PATH: z.string(),
});

export default envSchema;
