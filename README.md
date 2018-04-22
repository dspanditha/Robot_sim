# Robot_sim
The application is a simulation of a toy robot moving on a square tabletop, of dimensions 5 units x 5 units.There are no other obstructions on the table surface.The robot is free to roam around the surface of the table, but must be prevented from falling to destruction

## Prerequisites

Latest [Node.js](https://nodejs.org/en/)  and [NPM](https://npmjs.org) installed. 
The project is built on node v8.5.0 and npm v5.8.0.    
Use node -v and npm -v to check the versions



## Getting Started

### Project setup

The project is complied using webpack, dev-server and babel. You will have to install it before you start

1. Create a new folder
2. Clone the git repository (https://github.com/dspanditha/Robot_sim.git) to the above folder 
3. **go into the root folder (/Robot_sim) of the project**


Run the following commands to install dependancies

4. `npm install -g webpack`
5. `npm install -g webpack-dev-server`


### Project build
 
Run the following command to compile and build the project
 `npm run build`


Then run the the following command to start up the server
 `npm run server-start`

Then load the project in browser with  http://localhost: "portname shown in commandline"/src/

 **Eg: http://localhost:8080/src/**



## Running the tests

### Test setup

Run the following command to install dependancies for testing

`npm install -g mocha` 

### Run tests

Run the following command to run the tests
`npm run test`


## Built With

* [Node.js](https://nodejs.org/en/)  and [NPM](https://npmjs.org) - JavaScript run-time environment
* [Babel](https://babeljs.io/) - Javascript compiler
* [Webpack](https://webpack.github.io/) - Module bundler
* [Mocha](https://mochajs.org/) - Testing framework



## Authors

Don Panditha: https://github.com/dspanditha/ 

## License

This project is licensed under the ISC License


