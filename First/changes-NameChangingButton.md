In src Folder App.js file :

reacts has a component called local state which is a plain javascript object that is used to record and react to user events. 

we can use it by constructor method.


but when a constructor made you have to call super() method. 

```js

class app extends Components {
    constructor() {
        super();
    }
}


```

for iniating the state we have to use this.state = { } to ensure that the state is a plain javascript object.

in this method we can use any type of data like string, number, boolean, array, object.

elements are name {key : value pair.}


```js
class app extends Components {
    constructor() {
        super();

        this.state = {
            name: 'Hello Akar'
        
        }
    }
}


```

<br>
and then we can use this state in our render method.

```js

    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
            </div>
        )
    }


```

<br>

An example of changing the name by clicking a button:



```JS

import {component} from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
   constructor() {
        super();

        this.state = {
            name: 'Akar'
        
        }
    }


  render() {
    return (
      <div className="App">
      <header classname = 'App-header'>
        <img src={logo} className="App-logo" alt="logo" />
        <p> Hi {this.state.name} </p>
        <Button onclick = {() => {
            this.state.name = 'Sihar';
            console.log(this.state);
        }}> Change Name </Button>
      </header>
      </div>
    );
  }
}

```


In the avove code even thought the name update in console when clicked the display name has't changed 

this is because we have to use setState() method to update the state.

```js
<Button onclick = {() => {
            this.setState = ({name : 'Sihar'});
        }}>
        
```     


<br>

on this.state we can add multiple state in one state 

```js


 constructor() {
        super();

        this.state = {
            name: {firstName : 'Akar', lastName : 'Ahamed'},
            company : 'Google'
        
        }
    }

```

and can render that by 

```js

 
        <p> Hi {this.state.name.firstName} {this.state.name.lasttName} </p>
        
        <Button onclick = {() => {
            this.setState({name: {firstname : 'Sihar' , lastName : 'Ahamed'}})
        }}> Change Name </Button>


```