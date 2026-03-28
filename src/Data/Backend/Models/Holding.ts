export type HoldingType = "Cash" | "Fund" | "Stock"

export type Holding = {
  name: string,
  type: HoldingType,
  value: number
}
