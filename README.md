# Front End Challenge

A simple blog with the following features:

- Create posts
- Edit posts
- Create comments
- Delete comments

### Technologies

- React
- React Router
- Redux
- Styled components
- Axios
- redux-axios-middleware

### Bootstrapping

Run the following inside both the client/ and api/ directories:

```bash
$ yarn; yarn start
```

### Notes

- An admin/editor toggle is added to the top of the app to edit posts and delete comments. I decided to do this because there is no relation between a post and an author to check for an owner or a role of `'ADMIN'` or `'EDITOR'` in the existing schema. It isn't secure, as anyone can just go into the Redux DevTools and change it, but I wanted to demonstrate my ability to add an edit & delete feature.

- I haven't used lodash/fp until today, but I've played with RxSwift and Elm in the past and I understand functional programming so figured I would include this as well where I could.

- There isn't an ESLint file included as I typically just use the existing .eslintrc the team is already using. I likely would've installed [Airbnb's](eslint-config-airbnb). I just used my Prettier extension to fix the style and VSCode's intellisense find errors for me as needed.

Prettier config:

```json
  "prettier.eslintIntegration": true,
  "prettier.singleQuote": true,
  "prettier.trailingComma": "all"
```
