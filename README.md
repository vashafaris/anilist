# Mission

- [x] Basic Requirements (List, Infinity Scroll, Filter, Details Page, Bookmark Page)
- [x] (Optional) Build the homepage based on the most trending order
- [x] (Optional) Add some unit testing in your project
  <img width="696" alt="image" src="https://user-images.githubusercontent.com/55099418/230690544-451eb313-9ba3-4fc4-b596-a2057d0ea498.png">

- [ ] (Optional) Implement offline capabilities with PWA/Service Workers


## Stack used

- [Next.js](https://nextjs.org/)
- [Typescript](https://typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Apollo](https://www.apollographql.com/) for data fetching

## Screenshots

<img width="1359" alt="image" src="https://user-images.githubusercontent.com/55099418/230683500-064519fe-7079-4eeb-9b19-03021718b637.png">
<img width="985" alt="image" src="https://user-images.githubusercontent.com/55099418/230683565-585c692a-ae83-48de-a3f1-ad7c28eb8a4b.png">


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
