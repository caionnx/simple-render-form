# Simple Render Form using Vue 3 and Nuxt

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```

## Engineering Decisions
- As Vue 3 is a new context for me (usually I work with React) I decided to use Nuxt to speed up development.
- Vuetify was added as UI Library, for future scaling of the project.
- Different types of inputs were aggregated in a single component to reduce duplication of logic.
  
## Loose ends

- Input and error validation could be improved for better UX.
- I have spent some time trying to set the environment to have unit tests but without success. Vuetify seems to be the biggest issue in this situation. Vue Testing Library was my choice of testing library but once again using Nuxt did not make it straightforward to set it up.

## Future improvements
- Finish up the testing environment and unit tests.
- Locally save the data to have an easy transfer between edit/render pages. We could do it using the local storage
