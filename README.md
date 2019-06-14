# forms-react-frontend

Simple react application using express REST api.

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Architecture](#architecture)
* [Features](#features)
* [Screenshots](#screenshots)
* [Setup](#setup)
* [Backend](#backend)
* [Status](#status)
* [Deployment](#deployment)
* [License](#license)


## General info
Goal of project is build React&Redux application from scratch.

## Technologies

* [Typescript](https://www.typescriptlang.org/)
* [React](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* React Router
* [Redux observable](https://redux-observable.js.org/)
* [Material-UI](https://material-ui.com/)
* react-chartjs-2
* [chartjs](https://www.chartjs.org/)
* prettier

Tested with:

* [jest](https://jestjs.io/)
* react-test-renderer
* [enzyme](https://airbnb.io/enzyme/)

## Architecture

![Forms applications architecture](https://github.com/mf256/forms-rest-api/blob/master/doc/forms-architecture.png)

## Features
* Main page with list of possibles questions.
* Choose one question and go to new page with list of possibles answers.
* After choosing one answer you can see table and chart with statistics. 

## Screenshots

<img src="/doc/screen1.png" alt="Screen 1" width="500">
<img src="/doc/screen2.png" alt="Screen 2" width="500">
<img src="/doc/screen3.png" alt="Screen 3" width="500">

## Setup
How to run this project.

1. Clone this repo

2. To run, go to project folder and run

`$ npm install`
or
`$ yarn install` (if you are using yarn)

3. Now start dev server by running -

`$ npm run start`
or
`$ yarn start`

4. visit - http://localhost:3000/

To create production ready codes -

`$ npm run build`

for more commands refer `package.json`


## Backend

Application use REST-API: [forms-rest-api](https://github.com/mf256/forms-rest-api). More infromations in readme. 

## Status
Project is finished.

## Deployment

Refer [deployment](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#deployment)

## License
MIT

