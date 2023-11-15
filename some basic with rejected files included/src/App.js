import {Component} from 'react' ;

import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor(){
  super();
  this.state = {
    name : {Firstname : 'Akar' , Lastname : 'Ahamed'} ,
    place : 'Kerala'
  }
}


 render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi {this.state.name.Firstname} {this.state.name.Lastname}
          <></>
          I'm from {this.state.place}
        </p>
        {
        /*with the below code we can change the state of the name and place but it for the first time it will not change in console
        after the excecution only it will change in console because this method works asynchronously
         */
        }
        {/* <button onClick = { () => {
          this.setState({name : {Firstname : 'Sihar' , Lastname : 'Mohamed'} , place : 'Karnataka'});
        console.log(this.state);
                                   }
                                     }> Change Name</button> */}





{
        /*
        But in this code we can change the state of the name and place and it will change in console also
        because we are using the callback function in the setState method
        and it'll word in synchronously
         */
        }
                            
        <button onClick = { () => {
          this.setState( () => {
                return {
                  name : {Firstname : 'Sihar' , Lastname : 'Mohamed' } ,
                  place : 'Karnataka' 
                };

          } , () => {      
              console.log(this.state);
          });
                                   }
                                     }> Change Name</button>



      </header>
    </div>
  );
 }
}

export default App;
