
import './App.css';
import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SizeSetting';
import Reset from './components/Reset';
import Result from './components/Result';
import React, {Component} from 'react';

class App extends Component
{
  constructor(props){
    super(props);
    this.state = {
      color : 'red',
      fontSize: 8
    };
  }
  /** khai báo bằng arrow function */
  onSetColor = (params) =>{
    console.log(params);
    this.setState({
      color : params
    });
  }

  onChangeSize = (value) =>{
   if(this.state.fontSize + value >=8 && this.state.fontSize + value <=36){
    this.setState({
      fontSize: this.state.fontSize + value
    });
   }
  }

  onResetSize = (value) =>{
    this.setState({
      fontSize : value,
      color : 'red'
    })
  }
    /* truyền props color: 'red' qua ColorPicker bằng biến tự đặt tên
     colorApp nhận dữ liệu về bằng function onReciveColor */
  render() {
    return (
      <div className="container px-lg-5">
      <div className="row mx-lg-n5">
      
        <ColorPicker colorApp={this.state.color} onReciveColor= {this.onSetColor}/>
        <SizeSetting fontSize = {this.state.fontSize} onChangeSize = {this.onChangeSize}/>

        
      </div>
      <Reset onResetSize= {this.onResetSize} />
      <Result colorApp={this.state.color} fontSize = {this.state.fontSize}/>
        
     
  </div>
    );
  }
}

export default App;
