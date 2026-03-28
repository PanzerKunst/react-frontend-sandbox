import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"

import { useAppContext } from "../AppContext.tsx"
import { fetchInvestments } from "../Data/Backend/Apis/InvestmentsApi.ts"
import { UnauthorizedError } from "../Util/HttpUtils.ts"

import "./Investments.scss"

export function Investments() {
  const { sessionId } = useAppContext()
  const navigate = useNavigate()

  const { data: accounts, isError, error } = useQuery({
    queryKey: ["investments"],
    queryFn: () => fetchInvestments(sessionId!),
    enabled: !!sessionId,
    retry: (_, error) => !(error instanceof UnauthorizedError)
  })

  useEffect(() => {
    if (isError && error instanceof UnauthorizedError) {
      navigate("/bank-id", { replace: true })
    }
  }, [isError, error, navigate])

  if (!accounts) {
    return null
  }

  return (
    <div className="page investments">
      <main>
        <h1>Investments</h1>
        {accounts.map(account => (
          <div key={account.accountName}>
            <h2>{account.accountName} ({account.currency})</h2>
            <p>Total value: {account.totalValue}</p>
            <ul>
              {account.holdings.map(holding => (
                <li key={holding.name}>{holding.name} — {holding.type}: {holding.value}</li>
              ))}
            </ul>
          </div>
        ))}
      </main>
    </div>
  )
}
