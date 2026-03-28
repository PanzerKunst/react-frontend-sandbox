import {Router} from "express"
import {requireSession, requireBankIdCompleted} from "../Middleware/AuthMiddleware.js"
import {httpStatusCode} from "../Util/HttpUtils.js"
import {Account} from "../Models/Account.js"

export function investmentRoutes(router: Router) {
  router.get("/investments", requireSession, requireBankIdCompleted, (req, res) => {
    try {
      const accounts: Account[] = [
        {
          accountName: "Avanza ISK",
          currency: "SEK",
          totalValue: 125000,
          holdings: [
            {name: "Avanza Zero", type: "Fund", value: 45000},
            {name: "Investor B", type: "Stock", value: 35000},
            {name: "Cash", type: "Cash", value: 45000}
          ]
        }
      ]

      res.status(httpStatusCode.OK).json({accounts})
    } catch (error) {
      console.error(error)
      res.status(httpStatusCode.INTERNAL_SERVER_ERROR).json(error)
    }
  })
}
