## getting started

1. Clone this repo: `$ git clone git@github.com:imjared/react-starter.git <your-project-name> && cd <your-project-name>`
1. Install dependencies with Yarn or npm: `$ yarn` or `$ npm i`
1. Create a working .env with the provided sample: `$ cp .env.sample .env && rm .env.sample`
1. Start the app: `$ npm start` and go to [http://localhost:3000](http://localhost:3000)

## includes

- hot reloading of components
- autoprefixing with [post-css](https://github.com/postcss/postcss-loader)
- SCSS injection & compilation
- basic redux scaffolding. Uses the ["duck"](https://github.com/erikras/ducks-modular-redux/issues) pattern.
- pretty opinionated .eslintrc and .editorconfig
- cached development assets thanks to [happypack](https://www.npmjs.com/package/happypack)
- auto HTML generation and asset hashing

## deploying

- ensure `NODE_ENV="production"` in `.env` and run `$ npm run deploy`. generated hashed assets will be in `/dist`
