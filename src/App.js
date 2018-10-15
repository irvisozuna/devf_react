import React, { Component } from 'react';
import Person from './components/Person/Person';
import './App.css';

class App extends Component {

  state={
    persons: [
      {name : 'Jesse', age: 19},
      {name : 'Woody', age: 32},
      {name : 'Buzz', age: 28},
    ],
    showPerson : false
  }

  cambiarNombre = () =>{
    this.setState({persons: [
      {name : 'Lotso', age: 19},
      {name : 'Barbie', age: 32},
      {name : 'Ken', age: 28},
    ]})
  }

  togglePersonHandler = () =>{
    const doesntShow = this.state.showPerson
    this.setState({showPerson : !doesntShow})
  }


  render() {
    return (
      <div className="App">
        <p>Hola mundo</p>
        <button onClick={this.togglePersonHandler}>Toggle</button>

        {this.state.showPerson ? 
         <div>
         <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
         <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
         <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
         </div> :  null
      }
       
        
      </div>
    );
  }
}

export default App;
