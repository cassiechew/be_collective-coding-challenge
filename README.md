# Description
This is a response to the Be Collective Challenge. An implimentation of a file viewer web ui frontend with a provided API. The application has been scaffolded with create-react-app.

# Instructions
To run this app, install the dependancies with yarn with this command.
```sh
yarn
```
Then build the application. 
```sh
yarn build
```
After which instructions will appear to run it on the local network with serve.
```sh
serve -s build
```
This runs the app and will be accessable through the network address provided.

# Testing
To run the react testing tool use.
```sh
yarn test
```
To get test coverage.
```sh
yarn test:coverage
```
To update testing snapshots.
```sh
yarn test:update
```
To enable an extension or a further modification of the data. A postman collection has been added to allow contributers to more easily see the output of the data.

# Context
This application is for people who wish to see a json object containing files and folders turned into a proper gui interface. The input from the API comes in this format.
```sh
[
  {
      "type": "folder",
      "name": "Fiat",
      "children": [
          {
              "type": "file",
              "name": "usability.gif",
              "size": 1510225
          }
      ]
  }
]
```

# Architectural Elements and Decisions
There were a few decisions made regarding the building of this application concerning file structure, and component responsibility.

## File Structure
Concerning file structure, I took a standard react app approach to seperate UI elements into state-changing, and non-state-changing categories. The folders components, and containers respectively. This was done even though there were no other pages to allow for the app to be more extensible to additional developers in the future should the client wish to expand the functionality. I have also decided to include the assets, and config folder in the src folder for similar reasons.
Other items of note would be the addition of a postman collection. Postman being an API testing tool to hit APIs. This was added to allow for quick testing of the API and to see more clearly the response json that would be returned.

## Component Responsibility
With components, as mentioned above they have been split into the two categories. Furthermore, each component has been broken down to it's smallest components to a degree. This is to allow for a better unit testing structure where each component can be tested in isolation.

## CI
CI was setup using CircleCI. This was also to allow for possible future extensibility, and a lower overhead to set it up if the need be.
