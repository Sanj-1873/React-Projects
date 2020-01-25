
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'

class  App extends Component {
 
    state = {
      persons: [
        { name:'Sanj', age: 20},
        { name:'Jithin', age:21}
      ],
      showPersons:false
    }
  
    
  switchNameHandler = (newName) => {
    //console.log('Was clicked')
    // DON'T DO THIS : this.state.persons[0].name = "Sanjna";
    this.setState({persons:
    [
      { name: newName, age: 20},
      { name:'Jithin', age:21}
    ]
    })
  }

  nameChangedHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }


  togglePersonHandler = () => {
    const doesShow  = this.state.showPersons;
    this.setState({showPersons: !doesShow})

  }
  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons});

  }
  render(){
    const style = {
      backgroundColor: 'green',
      font:'inherit',
      border:'1x solid blue',
      padding: '8px'
    };
    let persons = null;

    if (this.state.showPersons){
        persons = (
          <div> 
          {this.state.persons.map((person, index) => {
            return <Person 
            click = {() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed ={(event) => this.nameChangedHandler(event,person.id)}/>  
          
          })}
          
          </div>

          )

    }
    return (
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <button onClick={this.togglePersonHandler}>Switch Name</button>
        
           
      {persons}
        
     
      </div>
      
    /// React.createElement('div', {className: App}, React.createElement('h1',null,'I\'m a React App'))
    );
  }
}

export default App;
