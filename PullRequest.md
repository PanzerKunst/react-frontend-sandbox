# Guidelines

Whenever possible, `null` should be avoided, using `undefined` instead.
Declare TypeScript types, not interfaces.
Leverage code existing in `src/Util` when possible.

Following a Pull Request implementation, run the "lint" script declared in package.json.

# The task to work on

While keeping a codebase structure close to the example apps in `docs`, cleanup the current code in `src` so that it compiles, and is minimalistic. For example, remove a lot of markup in LandingPage.tsx, which was copy/pasted from an example app.

## Context clarifications

- _CommonStyles/ should be added to the app, with global-level files such as mixins. `$color-app-bg` are needed and should be added too. Same values as the example app `antler-project-marketing`.
- AppFooter and AppHeader need to be added, from the example app `antler-project-marketing`
- Other missing components in the current code of LandingPage.tsx should be removed