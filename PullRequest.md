# Guidelines

Whenever possible, `null` should be avoided, using `undefined` instead.
Declare TypeScript types, not interfaces.
Leverage code existing in `src/Util` when possible.

Following a Pull Request implementation, run the "lint" script declared in package.json.

# The task to work on

## Step 1 (done)

Look at the updated `docs\typescript-backend-sandbox\src\Routes\SessionRoutes.ts`, as we'll use the second endpoint.

I made a mistake in the current logic. `LandingPage.tsx` should not fetch a new session ID each time. The correct logic is:
- If a session ID is present in context, call endpoint `/session/check`, and if it returns OK, do nothing else (current session ID is legit). If it returns NO_CONTENT, we clear the value in context and request a new session ID.
- If no session ID is present in context, we simply request one.

## Step 2 (done)

I've added more files in `src/Util`. Instead of writing HTTP codes as numbers, leverage the `httpStatusCode` variable.

## Step 3 (done)

Look at the updated `docs\typescript-backend-sandbox\src`. It contains a new endpoint `investments`. The models corresponding to the JSON response have been added to `src\Data\Backend\Models`.

On page `Investments.tsx`, we want to display the investment information returned by the endpoint. This endpoint may return HTTP status Unauthorized. If it's the case, the user should be redirected to the landing page, replading URL `/investments` in the browsing history.

## Step 4 (done)

We need to replace the "BankID Authentication" link on the landing page, with "Display my investments". The flow should be:
- If the Investments page can be displayed, it should be.
- Else, the user should be redirected to the mock Bank ID authentication page-

Is there a clean way to implement that flow?

## Step 5

I've tested the above, and it's a bit clunky. The issue is that in case of an "Unauthorized" response, the Investment page is displayed with only the heading. Instead, the user should be immediately redirected to the landing page. On top of that, due to how Tanstack Query works, upon 401, the request is retried 3 more times before redirection to `/bank-id`. In case of 401, there should not be any retries, the user should not see any "Investment" heading.