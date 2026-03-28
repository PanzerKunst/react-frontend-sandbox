export type ContextInLocalStorage = {
  sessionId?: string;
}

/* eslint-disable @typescript-eslint/no-explicit-any */
function isContextCompatible(obj: any): obj is ContextInLocalStorage {
  if (typeof obj !== "object" || !obj) {
    return false
  }

  const keys = Object.keys(obj)
  const allowedKeys = ["sessionId"]

  if (keys.some(key => !allowedKeys.includes(key))) {
    return false
  }

  if (obj.sessionId && typeof obj.sessionId !== "string") {
    console.log("Context incompatible: 'obj.sessionId && typeof obj.sessionId !== \"string\"'")
    return false
  }

  return true
}
/* eslint-enable @typescript-eslint/no-explicit-any */

const localStorageKey = "context"

const defaultContext: ContextInLocalStorage = {}

function getContextFromLocalStorage(): ContextInLocalStorage {
  const contextStringInStorage = window.localStorage.getItem(localStorageKey)

  if (!contextStringInStorage) {
    return defaultContext
  }

  const contextInStorage = JSON.parse(contextStringInStorage) as ContextInLocalStorage

  if (!isContextCompatible(contextInStorage)) {
    window.localStorage.removeItem(localStorageKey)
    return defaultContext
  }

  return contextInStorage
}


// sessionId

export function getSessionIdFromLocalStorage(): string | undefined {
  return getContextFromLocalStorage().sessionId
}

export function saveSessionIdInLocalStorage(sessionId: string | undefined): void {
  const updatedContext: ContextInLocalStorage = {
    ...getContextFromLocalStorage(),
    sessionId,
  }

  window.localStorage.setItem(localStorageKey, JSON.stringify(updatedContext))
}
