import React, {Component} from 'react';
class SizeSetting extends Component{


changeSize= (value)=>{
  this.props.onChangeSize(value);
}
  render(){
  return (

          <div className="col py-3 px-lg-5 border bg-light">
              <h5>Size : {this.props.fontSize} px</h5>
              <hr/>
              <button type="button" className="btn btn-primary" onClick = { () => this.changeSize(+2)}>Tăng</button>
              <button type="button" className="btn btn-primary" onClick = { () => this.changeSize(-2)}>Giảm</button>
              
          </div>

    
  );
}
}

export default SizeSetting;
