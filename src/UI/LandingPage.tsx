import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"

import { useAppContext } from "../AppContext.tsx"
import { fetchSessionId } from "../Data/Backend/Apis/SessionApi.ts"

import "./LandingPage.scss"

export function LandingPage() {
  const { setSessionId } = useAppContext()
  const { data } = useQuery({ queryKey: ["sessionId"], queryFn: fetchSessionId })

  useEffect(() => {
    if (data) {
      setSessionId(data)
    }
  }, [data, setSessionId])

  return (
    <div className="page landing">
      <main>
        <h1>Landing Page</h1>
        <Link to="/bank-id">BankID Authentication</Link>
      </main>
    </div>
  )
}
