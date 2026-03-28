import { config } from "../../../config.ts"

export async function fetchSessionId(): Promise<string> {
  const result = await fetch(`${config.BACKEND_URL}/session/id`)

  if (!result.ok) {
    throw new Error("Error while fetching session ID")
  }

  return result.text()
}
