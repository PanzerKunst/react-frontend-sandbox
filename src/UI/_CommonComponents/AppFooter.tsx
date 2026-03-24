import "./AppFooter.scss"

export function AppFooter() {
  return (
    <footer className="app-footer">
      <div className="container">
        <span>&copy; {new Date().getFullYear()}</span>
      </div>
    </footer>
  )
}
