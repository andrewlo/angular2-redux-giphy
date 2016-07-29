
# Giphy search based on Angular 2/TypeScript/Redux/Webpack Starter

Giphy search app based on Rangle's [Angular 2 Redux starter](https://github.com/rangle/angular2-redux-starter).

Working on this as a learning exercise and reference for building common things in Angular 2 + Redux (paginated & filtered lists).

## Getting Started
## npm scripts

> To see all available scripts:
```bash
$ npm run
```

### Dev
```bash
$ npm run dev
```
This runs a development mode server with live reload etc. Linter warnings will be displayed with each reload.

Open `http://localhost:8080` in your browser.

### Production

```bash
$ npm install
$ npm start
```

This runs a production-ready express server that serves up a bundled and
minified version of the client.

Open `http://localhost:8080` in your browser.

### Tests

#### Single Run (with linting and coverage)
```bash
$ npm test
# or
$ npm t
```

#### Watch Files
```bash
$ npm run test:watch
```

#### Linting
```bash
$ npm run lint
```
This will run both code and style linters, but you can run them individually using `npm run lint-ts` and `npm run lint-css`.

#### Coverage
```bash
$ npm run cover
```