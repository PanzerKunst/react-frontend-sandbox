import { useEffect } from "react"
import { useQuery } from "@tanstack/react-query"

import { useAppContext } from "../AppContext.tsx"
import { fetchSessionId } from "../Data/Backend/Apis/SessionApi.ts"

import "./LandingPage.scss"

export function LandingPage() {
  const { sessionId, setSessionId } = useAppContext()
  const { data } = useQuery({ queryKey: ["sessionId"], queryFn: fetchSessionId, enabled: !sessionId })

  useEffect(() => {
    if (data) {
      setSessionId(data)
    }
  }, [data, setSessionId])

  return (
    <div className="page landing">
      <main>
        <h1>Landing Page</h1>
        {sessionId && <p>{sessionId}</p>}
      </main>
    </div>
  )
}
