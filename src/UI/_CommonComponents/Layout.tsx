import { Outlet, ScrollRestoration } from "react-router-dom"

import "./Layout.scss"

export function Layout() {
  return (
    <>
      <Outlet />
      <ScrollRestoration />
    </>
  )
}
