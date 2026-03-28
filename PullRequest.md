# Guidelines

Whenever possible, `null` should be avoided, using `undefined` instead.
Declare TypeScript types, not interfaces.
Leverage code existing in `src/Util` when possible.

Following a Pull Request implementation, run the "lint" script declared in package.json.

# The task to work on

## Step 1 (done)

A new endpoint has been added to the backend, providing a QR code. See `docs\typescript-backend-sandbox\src\Routes\BankIdRoutes.ts`.

We want to display that QR code inside a new page: `UI/BankIdAuth.tsx`. On query error: no need to clear the session ID via `setSessionId(undefined)`. But to redirect to `/`. If it's not already the case, `LandingPage()` clears any current session ID in context, and replaces it by the new one.

## Step 2

Add a link (anchor) to the Landing page, navigating to the Bank ID authentication page.