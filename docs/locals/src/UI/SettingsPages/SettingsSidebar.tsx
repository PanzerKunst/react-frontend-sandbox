import classNames from "classnames"
import { useLocation } from "react-router-dom"

import { useSidebarNav } from "../_CommonComponents/SidebarNav.ts"

export function SettingsSidebar() {
  const location = useLocation()
  const { handleClick } = useSidebarNav()

  return (
    <aside>
      <nav>
        <ul className="styleless">
          <li>
            <button
              className={classNames("button transparent", { active: location.pathname === "/settings" })}
              onClick={() => handleClick("/settings")}
            >
              <span>Account</span>
            </button>
          </li>
          <li>
            <button
              className={classNames("button transparent", { active: location.pathname === "/settings/subscriptions" })}
              onClick={() => handleClick("/settings/subscriptions")}
            >
              <span>Subscriptions</span>
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
