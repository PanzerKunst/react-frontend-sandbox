import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useMutation, useQuery } from "@tanstack/react-query"

import { useAppContext } from "../AppContext.tsx"
import { fetchBankIdQrCode, postBankIdAuthenticating, postBankIdCompleting } from "../Data/Backend/Apis/BankIdApi.ts"

import "./BankIdAuth.scss"

export function BankIdAuth() {
  const { sessionId } = useAppContext()
  const navigate = useNavigate()
  const [isAuthenticating, setIsAuthenticating] = useState(false)

  const { data, isError } = useQuery({
    queryKey: ["bankIdQrCode"],
    queryFn: () => fetchBankIdQrCode(sessionId!),
    enabled: !!sessionId
  })

  const authenticatingMutation = useMutation({
    mutationFn: () => postBankIdAuthenticating(sessionId!),
    onSuccess: () => setIsAuthenticating(true)
  })

  const completingMutation = useMutation({
    mutationFn: () => postBankIdCompleting(sessionId!),
    onSuccess: () => navigate("/investments", { replace: true })
  })

  useEffect(() => {
    if (isError) {
      navigate("/")
    }
  }, [isError, navigate])

  return (
    <div className="page bank-id-auth">
      <main>
        <h1>BankID Authentication</h1>
        {isAuthenticating ? (
          <>
            <p>Authenticating</p>
            <button onClick={() => completingMutation.mutate()}>Simulate completion</button>
          </>
        ) : (
          <>
            {data && <img src={data} alt="BankID QR Code"/>}
            <button onClick={() => authenticatingMutation.mutate()}>Simulate authentication</button>
          </>
        )}
      </main>
    </div>
  )
}
