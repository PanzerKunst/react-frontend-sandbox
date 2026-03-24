import { useQuery } from "@tanstack/react-query"

import { fetchRoot } from "../Data/Backend/Apis/RootApi.ts"

import "./LandingPage.scss"

export function LandingPage() {
  const { data } = useQuery({ queryKey: ["root"], queryFn: fetchRoot })

  return (
    <div className="page landing">
      <main>
        <h1>Landing Page</h1>
        {data && <p>{data}</p>}
      </main>
    </div>
  )
}
