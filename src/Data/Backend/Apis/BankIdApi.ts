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
