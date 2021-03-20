// src/components/DisplayData.js
import React from 'react';

class DisplayData extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.formData.firstName}</h1>
        <h1>{this.props.formData.lastName}</h1>
      </div>
    )
  }
}
//This component is only in charge of displaying the data 
//the parent ALSO passed in formData that is = to the parent's state
//and this component just renders both of the first and last name.

export default DisplayData 