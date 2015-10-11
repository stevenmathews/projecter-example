[![Build Status](https://travis-ci.org/stevenmathews/projecter.svg?branch=master)](https://travis-ci.org/stevenmathews/projecter)
[![Dependency Status](https://david-dm.org/stevenmathews/projecter.svg)](https://david-dm.org/stevenmathews/projecter)
[![devDependency Status](https://david-dm.org/stevenmathews/projecter/dev-status.svg)](https://david-dm.org/stevenmathews/projecter#info=devDependencies)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# Projecter

[Projecter](http://projecter.surge.sh/) is a base for new javascript projects to save time.

Includes npm scripts/dependencies, config files, and a basic example app.

## Usage
---
Meant to be a starting point - just remove/change as needed.

## Scripts
---
- `npm start`: [webpack](http://webpack.github.io/docs/webpack-dev-server.html) hotloading dev server 
- `npm run karma`: linting using [standard](https://github.com/feross/standard) then [karma](https://karma-runner.github.io/0.13/index.html) hotloading test runner 
- `npm test`: used by [travis](https://travis-ci.org/) for integration testing
- `npm run build`: webpack minifies and bundles project into static files
- `npm run deploy`: static files deployed using [surge](https://surge.sh/)

## Configuration
---
- [webpack](http://webpack.github.io/docs/configuration.html): webpack.config.js using [hjs-webpack](https://github.com/HenrikJoreteg/hjs-webpack) for easy configuration
- [standard](https://github.com/feross/standard): options in package.json
- [karma](https://karma-runner.github.io/0.13/config/configuration-file.html): karma.conf.js
- [travis](http://docs.travis-ci.com/user/customizing-the-build/): .travis.yml

## Accounts Setup
---
- Accounts are required for [travis](https://travis-ci.org/) (free for open source) and [surge](https://surge.sh/) (free).
- Get surge token with `./node_modules/.bin/surge token` in terminal
- Log into travis and add your project repo
- Add `SURGE_LOGIN` and `SURGE_TOKEN` environment variables to project settings

## Credits
---
This project is mostly based on [hjs-webpack](https://github.com/HenrikJoreteg/hjs-webpack) by [@HenrikJoreteg](http://twitter.com/henrikjoreteg) who has a [course](http://learn.humanjavascript.com) building a native web app from scratch using [ampersand](http://ampersandjs.com/) and [react](https://facebook.github.io/react/) that I found incredibly helpful.

## License
---
MIT. Copyright (c) Steve Mathews.