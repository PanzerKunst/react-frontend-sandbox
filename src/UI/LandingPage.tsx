import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"

import { useAppContext } from "../AppContext.tsx"
import { checkSessionId, fetchSessionId } from "../Data/Backend/Apis/SessionApi.ts"

import "./LandingPage.scss"

export function LandingPage() {
  const { sessionId, setSessionId } = useAppContext()

  const { data: isSessionValid } = useQuery({
    queryKey: ["sessionCheck", sessionId],
    queryFn: () => checkSessionId(sessionId!),
    enabled: !!sessionId
  })

  const { data: newSessionId } = useQuery({
    queryKey: ["sessionId"],
    queryFn: fetchSessionId,
    enabled: !sessionId
  })

  useEffect(() => {
    if (isSessionValid === false) {
      setSessionId(undefined)
    }
  }, [isSessionValid, setSessionId])

  useEffect(() => {
    if (newSessionId) {
      setSessionId(newSessionId)
    }
  }, [newSessionId, setSessionId])

  return (
    <div className="page landing">
      <main>
        <h1>Landing Page</h1>
        <Link to="/investments">Display my investments</Link>
      </main>
    </div>
  )
}
