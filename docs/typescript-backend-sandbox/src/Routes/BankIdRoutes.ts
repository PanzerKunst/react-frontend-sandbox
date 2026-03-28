import QRCode from "qrcode"
import {Router} from "express"
import {requireSession} from "../Middleware/AuthMiddleware.js"
import {bankIdSessions} from "../BankIdSessions.js"
import {httpStatusCode} from "../Util/HttpUtils.js"

export function bankIdRoutes(router: Router) {
  router.get("/bank-id/qr-code", requireSession, async (req, res) => {
    try {
      const qrCode = await QRCode.toDataURL(crypto.randomUUID())
      bankIdSessions.set(req.headers["x-session-id"] as string, "Pending")
      res.status(httpStatusCode.OK).json({qrCode})
    } catch (error) {
      console.error(error)
      res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json(error)
    }
  })

  router.post("/bank-id/authenticating", requireSession, (req, res) => {
    try {
      const sessionId = req.headers["x-session-id"] as string

      if (bankIdSessions.get(sessionId) !== "Pending") {
        res.status(httpStatusCode.BAD_REQUEST).end()
        return
      }

      bankIdSessions.set(sessionId, "Authenticated")
      res.status(httpStatusCode.OK).end()
    } catch (error) {
      console.error(error)
      res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json(error)
    }
  })

  router.post("/bank-id/completing", requireSession, (req, res) => {
    try {
      const sessionId = req.headers["x-session-id"] as string

      if (bankIdSessions.get(sessionId) !== "Authenticated") {
        res.status(httpStatusCode.BAD_REQUEST).end()
        return
      }

      bankIdSessions.set(sessionId, "Completed")
      res.status(httpStatusCode.OK).end()
    } catch (error) {
      console.error(error)
      res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json(error)
    }
  })
}
