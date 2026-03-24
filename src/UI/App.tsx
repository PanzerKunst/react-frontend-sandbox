import { createBrowserRouter, RouterProvider } from "react-router-dom"

import { LandingPage } from "./LandingPage.tsx"
import { Layout } from "./_CommonComponents/Layout.tsx"

import "./App.scss"

const router = createBrowserRouter([
  {
    path: "/", element: <Layout/>, children: [
      { path: "/", element: <LandingPage/> },
    ]
  }
])

export function App() {
  return (
    <RouterProvider router={router}/>
  )
}
