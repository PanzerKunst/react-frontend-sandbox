import {NextFunction, Request, Response} from "express"
import {sessionIds} from "../Sessions.js"
import {httpStatusCode} from "../Util/HttpUtils.js"

export function requireSession(req: Request, res: Response, next: NextFunction) {
  const sessionId = req.headers["x-session-id"]

  if (typeof sessionId !== "string" || !sessionIds.includes(sessionId)) {
    res.status(httpStatusCode.UNAUTHORIZED).end()
    return
  }

  next()
}
