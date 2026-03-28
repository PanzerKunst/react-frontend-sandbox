import { config } from "../../../config.ts"
import { httpStatusCode } from "../../../Util/HttpUtils.ts"

export async function fetchSessionId(): Promise<string> {
  const result = await fetch(`${config.BACKEND_URL}/session/id`)

  if (!result.ok) {
    throw new Error("Error while fetching session ID")
  }

  return result.text()
}

export async function checkSessionId(sessionId: string): Promise<boolean> {
  const result = await fetch(`${config.BACKEND_URL}/session/check`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ sessionId })
  })

  if (result.status === httpStatusCode.OK) return true
  if (result.status === httpStatusCode.NO_CONTENT) return false
  throw new Error("Error while checking session ID")
}
