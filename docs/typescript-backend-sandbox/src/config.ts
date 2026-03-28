import * as dotenv from "dotenv"
dotenv.config()

type Config = {
  readonly IS_PROD: boolean,
  readonly PORT: number,
  readonly FRONTEND_URL: string,
}

export const config: Config = {
  IS_PROD: process.env.NODE_ENV === "production",
  PORT: Number(process.env.PORT!),
  FRONTEND_URL: process.env.FRONTEND_URL!,
}
