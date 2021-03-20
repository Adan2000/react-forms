import React from 'react';
import Form from './Form'
import DisplayData from './DisplayData'
//we import the Form
//we import DisplayData
class ParentComponent extends React.Component {
  state = {
    firstName: "",
    lastName: "",
  }
  //we set our inititial states
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  //this function takes in a event and changes the state of the name
  render() {
    return (
      <div>
        <Form
          formData={this.state}
          handleChange={this.handleChange}
        />
        <DisplayData formData={this.state} />
      </div>
    )
  }
}
//we pass this state to Form and DisplayData
//AND we pass the DisplayData a function called HandleState

export default ParentComponent; 