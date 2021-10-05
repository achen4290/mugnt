# MUGN'T

This repository is the frontend for our submission to [HackCMU 2021](https://hackcmu21.devpost.com/) and won [2nd place overall](https://devpost.com/software/mugn-t).

## About MUGN'T

MUGN’T takes in 3 inputs:
- the city (currently only supporting Baltimore, Detroit, and Pittsburgh)
- an input start and end point 
- a “safety priority coefficient” which is a user-provided threshold on their acceptable rate of being the victim of a violent crime

The currently supported safety priority coefficients are:
- Mugged
- Murdered
- Assaulted
- Robbed
- Shot

It uses the input points and runs a Dijkstra’s algorithm, augmented with probabilistic algorithms, to find the optimal path with respect to the safety priority coefficients.

The safety of both the new path and the shortest path are then evaluated using Markov Chains that estimate the probability of a violent event occurring along the route. This is done by analyzing the historic number of violent crimes along each route and the population density of the various cities. We then return to the user an intuitive safety analysis UI comparing the safety of the two routes with respect to our 5 safety priority coefficients. 

## Available Scripts
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and supports all of the relevant scripts.
In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
