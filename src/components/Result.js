

import React, {Component} from 'react';
class Result extends Component
  {
    changeColor(){
      return {
        color : this.props.colorApp,
        borderColor : this.props.colorApp,
        fontSize : this.props.fontSize
      };
    }
    render(){
    return (
    
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <p>Color : {this.props.colorApp} - Fontsize : {this.props.fontSize}</p>
            <div id="content" style = {this.changeColor()}>
              Nội dung setting
            </div>
          </div>
          
  );
}
  }

export default Result;
