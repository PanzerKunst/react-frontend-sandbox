import { Link } from "react-router-dom"

import "./AppHeader.scss"

export function AppHeader() {
  return (
    <div className="app-header-wrapper">
      <header>
        <Link to="/">
          <img src="/images/vite.svg" alt="logo"/>
        </Link>
      </header>
    </div>
  )
}
