export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE"

type HttpStatusCode = {
  readonly OK: number,
  readonly NO_CONTENT: number,
  readonly BAD_REQUEST: number,
  readonly UNAUTHORIZED: number,
  readonly FORBIDDEN: number,
  readonly TOO_MANY_REQUESTS: number,
  readonly INTERNAL_SERVER_ERROR: number,
}

export const httpStatusCode: HttpStatusCode = {
  OK: 200,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  TOO_MANY_REQUESTS: 429,
  INTERNAL_SERVER_ERROR: 500
}
