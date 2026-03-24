# Guidelines

Whenever possible, `null` should be avoided, using `undefined` instead.
Declare TypeScript types, not interfaces.
Leverage code existing in `src/Util` when possible.

Following a Pull Request implementation, run the "lint" script declared in package.json.

# The task to work on

Taking example on `docs/antler-project-marketing/src/config.ts`, add a similar file to `/src`
Then, add `/.env`, populating the backend URL to "http://localhost:9000"

Inside LandingPage.tsx, we'll do an API call to the backend at address "/", expecting a String (not JSON). Then display that string inside a `<p>` under the `<h1>`.
