
import React, {Component} from 'react';

class ColorPicker extends Component {

  constructor(props){
    super(props);
    this.state = {
      colors :['red', 'green', 'blue', 'black']
    };
    
  }

  showColor(color){
    return {
      backgroundColor: color
    };
  }

  setActiveColor = (color) =>{
    this.props.onReciveColor(color);
  }

  render(){
    var elmColors = this.state.colors.map((color, index) =>{
      return <span className={ this.props.colorApp === color ? 'active btn' : 'btn'} 
      key={index} 
      style={ this.showColor(color) }
      onClick = { () => this.setActiveColor(color)}
      ></span>
    });
  return (
    <div className="col py-3 px-lg-5 border bg-light">
    <div className="card">
        
        <div className="card-body">
          <h5 className="card-title">Pick color</h5>
          <p className="card-text">
          {elmColors}

          </p>
        </div>
    </div>
    </div>
  );
}
}

export default ColorPicker;
