# TypeScript React sandbox

This is a sandbox for prototyping React Single-Page applications written in TypeScript. It is based on the following tech stack:
- Vite bundler
- Sass (SCSS) for writing styles
- Mantine (https://mantine.dev/) as the library for base components
- React Router, with the routes declared in `src/UI/App.tsx`.
- Stylelint and EsLint for code quality and standards

`/docs` contains the source code of a two previously written React applications using a similar tech stack. Theirs dependencies and code are outdated, but that reference code is interesting as an exemple of how our app's source code could be organised. Architecture decisions to follow:
- Styles written in SCSS, with each React component and its .scss stylesheet side-by-side
- Using a React Component library as a base for styles (Joy UI by Material UI, but for this project we use Mantine instead). And then CSS overrides of those base components to follow the app-specific branding.

`/docs/antler-project-marketing` can be used as a reference on how styles are organized. Including:
- Having `_CommonComponents`, a directory for components common to the app
- Having `_CommonStyles`, including `3rdPartyOverrides` which are overrides of the Component Library's styles.

`/docs/locals` can be used as a reference on how a React SPA communicates with a backend server, see `/docs/locals/src/Data/Backend`, and how Tanstack Query is used when fetching data.

Both use `AppContext.tsx`, which is an application-level context using local storage to handle page refresh without losing the current user flow (see `docs/locals/src/Util/LocalStorage.ts`). Only 1 context is used: data is shared in the application either via this application context, or by passing props.
