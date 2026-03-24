import { config } from "../../../config.ts"

export async function fetchRoot(): Promise<string> {
  const result = await fetch(`${config.BACKEND_URL}/`)

  if (!result.ok) {
    throw new Error("Error while fetching root")
  }

  return result.text()
}
