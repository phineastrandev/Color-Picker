
import React, {Component} from 'react';
class Reset extends Component {

  resetSize = (value) =>{
    this.props.onResetSize(value);
  }
  render(){
  return (
      <button type="button" className="btn btn-success" id="reset-button" 
      onClick = {() => this.resetSize(12)}
      >Reset</button>
     
  );
}
}

export default Reset;
