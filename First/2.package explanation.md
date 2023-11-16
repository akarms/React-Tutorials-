
# package.json

package.json is a file that gives the information to npm that allows it to identify the project as well as handle the project's dependencies. It can also contain other metadata such as a project description, the version of the project in a particular distribution, license information, even configuration data - all of which can be vital to both npm and to the end users of the package. The package.json file is normally located at the root directory of a Node.js project.

This file tells what are the differnet libraries or packages that this project needs in order to work.

The below is the package.json file is created by react and it contain minimum packages that an app needs to run .

```JSON
{
  "name": "monsters-rolodex",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",  //in here it will run the start script
    "build": "react-scripts build", //in here it will run the build script it will create a build folder with all the files
    //because we are using react we dont need to worry about the build script
    "test": "react-scripts test", //in here it will run the test script and there is a seperate file in src folder called app.test.js
    "eject": "react-scripts eject" //in here it will run the eject script and it will give us the access to the webpack config file
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}

```

## Scripts 

In the above package.json file there are some scripts that we can run in the terminal.

* start
* build
* test
* eject

### start

```bash
npm start
```

This will run the start script in the package.json file and it will run the react-scripts start script.

### build

```bash
npm run build
```

This will run the build script in the package.json file and it will run the react-scripts build script.

this optimizes the build for the best performance.
Like minification of the code and it will create a build folder with all the files

it will helps to display the page as fast as possible even in slow network

### test

```bash
npm run test
```

This will run the test script in the package.json file and it will run the react-scripts test script.

this can help to identify whether is it running as per our expect to do

### eject

```bash
npm run eject
```

This will run the eject script in the package.json file and it will run the react-scripts eject script.

So oftet different wweb browser works differently and we need to make sure that our app works in all the browsers.
 For ensure that there are two main libraies used in react called babel and webpack.

 #### Babel
  
  It actually condences down the code to a format that all the browsers can understand. very basic javaScript. 

  #### Webpack

  It takes all the different files and assets and it bundles them together into one file that can be read by the browser.

  cz you can see in the build file there are a lots of files and it is not easy to read by the browser. so webpack will bundle all the files into one file and it will be easy to read by the browser.

  <br>

  So what exactly a eject does is it will give us the access to the webpack config file. so we can change the webpack config file as we want.




