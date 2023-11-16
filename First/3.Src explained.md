## explanation about files in srs folder

1. index.js

this file imports the react and react-dom libraries and it renders the app component to the screen
```JS
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

```

look at the code below which is a part of index.js

```js
   ReactDOM.render(<react.Stricmode>
   <App/>
   </react.Stricmode>,
    document.getElementById('root')
    );

```

This is the code that renders the app component to the screen

It will render the app component to the div with the id of root


2. App.test.js 

When we run test in our terminal this will excecute. 
It helps to prevent the bugs wihout data loss



3. SetupTests.js


It helps to import testing Library and it helps to configure the test environment

