import {Router} from "express"
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
}
