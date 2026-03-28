import {Holding} from "./Holding.js"

export type Account = {
  accountName: string,
  currency: string,
  totalValue: number,
  holdings: Holding[]
}
