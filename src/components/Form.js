import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="firstName"
            onChange={event => this.props.handleChange(event)}
            value={this.props.formData.firstName}
          />
          <input
            type="text"
            name="lastName"
            onChange={event => this.props.handleChange(event)}
            value={this.props.formData.lastName} />
        </form>
      </div>
    )
  }
}
//Here we have a component that is in charge of the form
//this.props = to the props passed in by the parent
//formData = to the state of the parent component
//.lastName/.firstName = is equal to the Parents state's 
//first and last name in the State.. which is in the formData.
//we set that to a variable. called value.

//we then make a onChange method that triggers onChange, and 
//sends that event to the function that was passed in as a prop.
//that function takes in a event.

//IN THE PARENT COMPONENT.. 
handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  } 
//it takes in that event. Passed in by the Form Component
//gets the event target. name which like we said is the state of the Parent
//it is both the first and last name state from the parent
//THAT was passed in by the parent in "formData"

//we then set that to the event target.value which is what is typed
//in the input box, that is the target value. 
export default Form; 