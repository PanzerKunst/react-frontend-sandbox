import { createContext, useContext, useMemo, useState } from "react"
import type { ReactNode } from "react"

import {
  getSessionIdFromLocalStorage,
  saveSessionIdInLocalStorage
} from "./Util/LocalStorage.ts"

export type AppContextType = {
  sessionId?: string;
  setSessionId: (id: string | undefined) => void;
}

const AppContext = createContext<AppContextType>({
  setSessionId: () => {}
})

type Props = {
  children: ReactNode;
}

export function AppContextProvider({ children }: Props) {
  const [sessionId, setSessionIdState] = useState(getSessionIdFromLocalStorage())

  const contextValue = useMemo(() => ({
    sessionId,

    setSessionId: (id: string | undefined) => {
      saveSessionIdInLocalStorage(id)
      setSessionIdState(id)
    },
  }), [sessionId])

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAppContext(): AppContextType {
  return useContext(AppContext)
}
