import React from 'react';

class Form extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry"
  }

  handleFirstNameChange = event => {
    this.setState({
      firstName: event.target.value
    })
  }

  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    })
  }


  handleSubmit = event => {
    event.preventDefault()
    let formData = { firstName: this.state.firstName, lastName: this.state.lastName }
    this.sendFormDataSomewhere(formData)
  } 
  //we use prevent default to prevent refresh,

  //since the handle First/Last name function already 
  //changed the state
  
  //we use let formData,to put together the current form data using 
  //the values stored in the state (that were changed by the 2 function)

  //we then use the sendFormDataSomewhere and pass in the data 
  //in our state, and that function takes care of the rest

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <input type="text" name="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />
        <input type="text" name="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
      </form>
    )
  }
}

export default Form;

//controlled forms are those that derives its input values from state
//onChange will fire everytime value in our input changes.
//this method is automatically passing in the event data.
//so the event contains data about the target,
//the target being an input, has a value attribute, 
//this is equal to whatever os currently entered in the input.

//CONTROLLED FORMS, make it easy to share form values...
//since the values are stored in the state. They can be 
//passed down as props or sent upwards via a function.

//now that we are controlling the form with state, we add
//a second event listener to the form tag itself, onSubmit.
//so when we press enter or click a submit button, it will
//pass that event data to a function that will handle it (handleSubmit)

