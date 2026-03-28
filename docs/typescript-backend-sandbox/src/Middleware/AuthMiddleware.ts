import {NextFunction, Request, Response} from "express"
import {sessionIds} from "../Sessions.js"
import {bankIdSessions} from "../BankIdSessions.js"
import {httpStatusCode} from "../Util/HttpUtils.js"

export function requireSession(req: Request, res: Response, next: NextFunction) {
  const sessionId = req.headers["x-session-id"]

  if (typeof sessionId !== "string" || !sessionIds.includes(sessionId)) {
    res.status(httpStatusCode.UNAUTHORIZED).end()
    return
  }

  next()
}

export function requireBankIdCompleted(req: Request, res: Response, next: NextFunction) {
  const sessionId = req.headers["x-session-id"] as string

  if (bankIdSessions.get(sessionId) !== "Completed") {
    res.status(httpStatusCode.UNAUTHORIZED).end()
    return
  }

  next()
}
