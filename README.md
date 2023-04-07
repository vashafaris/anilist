# Mission

- [x] Basic Requirements (List, Infinity Scroll, Filter, Details Page, Bookmark Page)
- [x] (Optional) Build the homepage based on the most trending order
- [x] (Optional) Add some unit testing in your project
- [ ] (Optional) Implement offline capabilities with PWA/Service Workers


## Stack used

- [Next.js](https://nextjs.org/)
- [Typescript](https://typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Apollo](https://www.apollographql.com/) for data fetching

## Linter

- [Husky](https://typicode.github.io/husky/#/) + [Lint Staged](https://github.com/okonet/lint-staged)
- [ESlint](https://eslint.org/)
- [Prettier](https://prettier.io/)

## Developing

A Node.js LTS setup with [yarn (v1)](https://yarnpkg.com/) is recommended.

```bash
# install dependencies
yarn

# serve with hot reload at localhost:3000
yarn dev

# build for production
yarn build

# run lint + type check
yarn validate

# run unit tests
yarn test
```

### Directory structure

- `components/` - UI/layout components that are used globally throughout project.
- `lib/` - Shared utility/helper functions.
- `modules/` - Each feature and their business logic goes into this folder.
- `pages/` - Next.js pages. Please read this page for more info about them.
  - `api/` - Next.js API routes. This is where the application's API/backend goes.
- `public/` - Next.js public directory, used for storing static assets.
- `styles/` - Global CSS files.
- `types/` - TypeScript types + interfaces that are used globally throughout the project.
