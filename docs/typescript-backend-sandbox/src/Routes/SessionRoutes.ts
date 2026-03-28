import {Router, Request} from "express"
import {sessionIds} from "../Sessions.js"
import {httpStatusCode} from "../Util/HttpUtils.js"

export function sessionRoutes(router: Router) {
  router.get("/session/id", (_req, res) => {
    try {
      const id = crypto.randomUUID()
      sessionIds.push(id)
      res.status(httpStatusCode.OK).send(id)
    } catch (error) {
      console.error(error)
      res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json(error)
    }
  })

  type CheckSessionBody = {sessionId: string}

  router.post("/session/check", (req: Request<object, unknown, CheckSessionBody>, res) => {
    try {
      const {sessionId} = req.body
      const status = sessionIds.includes(sessionId) ? httpStatusCode.OK : httpStatusCode.NO_CONTENT
      res.sendStatus(status)
    } catch (error) {
      console.error(error)
      res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json(error)
    }
  })
}
