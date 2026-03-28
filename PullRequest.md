# Guidelines

Whenever possible, `null` should be avoided, using `undefined` instead.
Declare TypeScript types, not interfaces.
Leverage code existing in `src/Util` when possible.

Following a Pull Request implementation, run the "lint" script declared in package.json.

# The task to work on

The backend has been updated to feature 2 more endpoints (see `docs\typescript-backend-sandbox\src\Routes\BankIdRoutes.ts`.

We'll update `BankIdAuth.tsx` to follow that flow:
- When page loads, we display the QR code. Below it, let's add a button "Similate authentication". When it's clicked, the frontend calls endpoint "/bank-id/authenticating", and if the call is successful:
  o The QR code is replaced by a message "Authenticating".
  o The button is replaced by "Simulate completion"
- When the "Simulate completion" button is clicked, the frontend calls endpoint "/bank-id/completing", and if the call is successful, the user is redirected to a new page we're adding: "UI/Investments.tsx", blank for now. When completion is successful, the redirection to "Investments.tsx" should not be a new item in the browsing history. That's because if the user clicks navigates back, we want them to skip the bank ID page.
