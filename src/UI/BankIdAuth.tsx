import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"

import { useAppContext } from "../AppContext.tsx"
import { fetchBankIdQrCode } from "../Data/Backend/Apis/BankIdApi.ts"

import "./BankIdAuth.scss"

export function BankIdAuth() {
  const { sessionId } = useAppContext()
  const navigate = useNavigate()

  const { data, isError } = useQuery({
    queryKey: ["bankIdQrCode"],
    queryFn: () => fetchBankIdQrCode(sessionId!),
    enabled: !!sessionId
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
        {data && <img src={data} alt="BankID QR Code"/>}
      </main>
    </div>
  )
}
