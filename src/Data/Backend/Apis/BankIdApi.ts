import { config } from "../../../config.ts"

type BankIdQrCodeResponse = {
  qrCode: string;
}

export async function fetchBankIdQrCode(sessionId: string): Promise<string> {
  const result = await fetch(`${config.BACKEND_URL}/bank-id/qr-code`, {
    headers: { "X-Session-Id": sessionId }
  })

  if (!result.ok) {
    throw new Error("Error while fetching BankID QR code")
  }

  const { qrCode } = await result.json() as BankIdQrCodeResponse

  return qrCode
}

export async function postBankIdAuthenticating(sessionId: string): Promise<void> {
  const result = await fetch(`${config.BACKEND_URL}/bank-id/authenticating`, {
    method: "POST",
    headers: { "X-Session-Id": sessionId }
  })

  if (!result.ok) {
    throw new Error("Error while posting BankID authenticating")
  }
}

export async function postBankIdCompleting(sessionId: string): Promise<void> {
  const result = await fetch(`${config.BACKEND_URL}/bank-id/completing`, {
    method: "POST",
    headers: { "X-Session-Id": sessionId }
  })

  if (!result.ok) {
    throw new Error("Error while posting BankID completing")
  }
}
