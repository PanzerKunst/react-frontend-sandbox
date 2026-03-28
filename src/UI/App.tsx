import { createBrowserRouter, RouterProvider } from "react-router-dom"

import { BankIdAuth } from "./BankIdAuth.tsx"
import { Investments } from "./Investments.tsx"
import { LandingPage } from "./LandingPage.tsx"
import { Layout } from "./_CommonComponents/Layout.tsx"

import "./App.scss"

const router = createBrowserRouter([
  {
    path: "/", element: <Layout/>, children: [
      { path: "/", element: <LandingPage/> },
      { path: "/bank-id", element: <BankIdAuth/> },
      { path: "/investments", element: <Investments/> },
    ]
  }
])

export function App() {
  return (
    <RouterProvider router={router}/>
  )
}
