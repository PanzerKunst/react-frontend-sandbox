# Guidelines

Whenever possible, `null` should be avoided, using `undefined` instead.
Declare TypeScript types, not interfaces.
Leverage code existing in `src/Util` when possible.

Following a Pull Request implementation, run the "lint" script declared in package.json.

# The task to work on

Currently, `LandingPage.tsx` calls the backend endpoint to fetch a session ID. We want that to be saved in `src/AppContext.tsx`. Take example on `docs/locals/src/AppContext.tsx`. The session ID is a similar attribute to `spotifyApiAccessToken` in the example file. The session ID should be saved in local storage, so that it's not lost if the user refreshes the page.
