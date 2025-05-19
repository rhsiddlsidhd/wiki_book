import { z } from "zod";

export const NEXT_PUBLIC_API_BASE_PATH = z
  .string()
  .parse(process.env.NEXT_PUBLIC_API_BASE_PATH);

export const API_BASE_URL = z.string().parse(process.env.API_BASE_URL);
