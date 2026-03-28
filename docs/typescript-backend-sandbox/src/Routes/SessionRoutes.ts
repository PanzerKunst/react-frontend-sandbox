import {Router} from "express"
import {httpStatusCode} from "../Util/HttpUtils.js"

export function sessionRoutes(router: Router) {
  router.get("/session/id", (_req, res) => {
    try {
      res.status(httpStatusCode.OK).send(crypto.randomUUID())
    } catch (error) {
      console.error(error)
      res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json(error)
    }
  })
}
