# minifarm-web
A serverless boilerplate for web application with nextjs and koa.

## Stack
* serverless
* nextjs
* koa
* react

## Prepare
* install serverless
  ```
  npm install -g serverless
  ```
* restore npm packages
  ```
  npm install
  ```

## Commands
* build (build serverless pages using the target in next.config.js)
  ```
  npm run build
  ```
* dev (run with nextjs server to enjoy the hot reload and load time compiling which is important for development)
  ```
  npm run dev
  ```
* start with local koa server
  ```
  npm run local
  ```
* start with serverless offline mode to simulate serverless environment
  ```
  npm start
  ```
* deploy to serverless environment: dev, stage, or prod
  ```
  npm run deploy:dev
  ```
  ```
  npm run deploy:stage
  ```
  ```
  npm run deploy:prod
  ```
* automatically fix problems and format files (eslint & prettier)
  ```
  npm run lint
  ```
* check if the configuration contains any rules that are unnecessary or conflict with **prettier**
  ```
  npm run lint-check
  ```
* clean: remove the generated .next and .serverless folders
  ```
  npm run clean
  ```
* deep-clean: remove the generated .next and .serverless folders, remove node_modules folder and package-lock.json, then run ```npm install``` to restore node packages and regenerate package-lock.json file
  ```
  npm run deep-clean
  ```
## User Guides
* index page\
http://localhost:3000

* about page\
http://localhost:3000/about

* static resources\
http://localhost:3000/static/hello.txt

## Configuration Files (./config)
* local.yml
* dev.yml
* stage.yml
* prod.yml

## Known Issues:
* serverless excludeDevDependencies doesn't work well with nextjs npm packages\
  sls package will include lots of npm packages for dev only for nextjs, which causes the package size is so big (about 25M). The solution is to move next, react, and react-dom npm packages to devDependencies, and the package size reduced to M.
* There are 403 errors in browser when running on aws lambda
* koa log still has 404 although the status is actually 200 or 304 on the response
* when deploy to aws, there is base path, e.g. /dev, however, the nextjs Link doesn't know of the base path
Tried to use the following code but it doens't workd
```
module.exports = {
  target: 'serverless',
  assetPrefix: process.env.stage === 'local' ? '' : process.env.stage
};
```
I have to use this one instead when deploy to aws dev environment, and manually change to '' for local testing
```
module.exports = {
  target: 'serverless',
  assetPrefix: 'dev'
};
```
There is still no '/dev' in the url when use Link to navigate.
## TODOs
* use axios or superagent to get data from web api
* introduce css & UI framework
* common components: nav, header, footer
* layout
* sign-in, sign-out

