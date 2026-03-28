export type BankIdAuthState = "Pending" | "Authenticated" | "Completed"

export const bankIdSessions: Map<string, BankIdAuthState> = new Map()
