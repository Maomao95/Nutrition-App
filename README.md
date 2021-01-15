# Nutrition App 

## Live Demo: https://sheltered-everglades-36862.herokuapp.com/

Build a table to demonstrate the nutrition of desserts. <br />

## API
### Data API: https://sleepy-depths-16388.herokuapp.com/data  <br />
githhub link: https://github.com/ghost-60/JSON_server

### GraphQL API: https://shrouded-bayou-24550.herokuapp.com/graphql  <br />
github link: https://github.com/ghost-60/graphql_server

## How to run
1. install the dependencies for server
```
$ npm i 
```
2. Start The application
```
$ node server.js
```
then the web application will run on http://localhost:5000/

## How to run only client
1. install the dependencies for server
```
$ cd client
$ npm i 
```
2. Start The application in the same folder
```
$ npm start
```

## Features
### Material Ui Design
Built using modern material-ui library which provides fast and reusable components. <br/>
UI is responsive on both mobile/desktop and scale relative to screen size
### Graph QL backend usong Apollo Express Client
Mock data is retrieved using apollo client in react. (Link for graphQL api provided above)
### React Context for state management
States are available to any component without passing props achieved through using react context. <br/>
Makes development easier, the code more elegant and easier to read.

### Unit and Integration Testing on components using Jest
Implemented integration and unit testing for robustness and future work.
### Prop types specified in Typescript components

### Add nutrition 
![Add nutrition](https://github.com/ghost-60/nutritionapp/blob/main/add%20page.png "add nutrition")

### Delete nutrition 
![Delete nutrition](https://github.com/ghost-60/nutritionapp/blob/main/delete.png "delete nutrition")

### Reset Table
![Origin Table](https://github.com/ghost-60/nutritionapp/blob/main/home%20page.png "origin table")
