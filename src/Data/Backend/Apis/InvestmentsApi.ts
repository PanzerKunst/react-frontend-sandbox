import { config } from "../../../config.ts"
import { httpStatusCode, UnauthorizedError } from "../../../Util/HttpUtils.ts"
import type { Account } from "../Models/Account.ts"

type InvestmentsResponse = {
  accounts: Account[]
}

export async function fetchInvestments(sessionId: string): Promise<Account[]> {
  const result = await fetch(`${config.BACKEND_URL}/investments`, {
    headers: { "X-Session-Id": sessionId }
  })

  if (result.status === httpStatusCode.UNAUTHORIZED) {
    throw new UnauthorizedError()
  }

  if (!result.ok) {
    throw new Error("Error while fetching investments")
  }

  const { accounts } = await result.json() as InvestmentsResponse

  return accounts
}
