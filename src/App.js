import './App.css';
import Square from '../src/components/polinja/square.component';
import React,{Component} from 'react';


class App extends Component{
  constructor(){
    super();
    this.state={
      player: 'circle',
      positions:["circle","empty","empty","cross","empty","circle","cross","empty","empty"]
    } 
  } 
  render (){ 
    return(
    <div className="App">
      <Square position="0" value={this.state.positions[0]}/>
      <Square position="1" value={this.state.positions[4]}/>
      <Square position="2" value={this.state.positions[5]}/>
      <Square position="3" value={this.state.positions[3]}/>
      <Square position="4" value={this.state.positions[2]}/>
      <Square position="5" value={this.state.positions[8]}/>
      <Square position="6" value={this.state.positions[6]}/>
      <Square position="7" value={this.state.positions[7]}/>
      <Square position="8" value={this.state.positions[1]}/>
    </div>
    )
  };
}

export default App;
