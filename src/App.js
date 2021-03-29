import './App.css';
import Square from '../src/components/polinja/square.component';
import React from 'react';
import Result from './components/result/result.component'
import CustomButton from './components/result/customButton.component'


function App() {
  const[state,setState] = React.useState({
    player: 'Cross',
    positions:["empty","empty","empty","empty","empty","empty","empty","empty","empty"],
    winner: "empty"
  })

  function takeTurn(position){
    const positions=[...state.positions]
    positions[position] = state.player;

    setState({
      player: state.player==="Cross" ? "Circle" : "Cross",
      positions: positions,
      winner: detectWinner(positions)
    })
  }

  function detectWinner(p){
    if(p[0]==="Circle" && p[1]==="Circle" && p[2]==="Circle") return "Circle";
    if(p[0]==="Circle" && p[3]==="Circle" && p[6]==="Circle") return "Circle";
    if(p[1]==="Circle" && p[4]==="Circle" && p[7]==="Circle") return "Circle";

    if(p[2]==="Circle" && p[5]==="Circle" && p[8]==="Circle") return "Circle";
    if(p[3]==="Circle" && p[4]==="Circle" && p[5]==="Circle") return "Circle";
    if(p[6]==="Circle" && p[7]==="Circle" && p[8]==="Circle") return "Circle";

    if(p[0]==="Circle" && p[4]==="Circle" && p[8]==="Circle") return "Circle";
    if(p[2]==="Circle" && p[4]==="Circle" && p[6]==="Circle") return "Circle";

    if(p[0]==="Cross" && p[1]==="Cross" && p[2]==="Cross") return "Cross";
    if(p[0]==="Cross" && p[3]==="Cross" && p[6]==="Cross") return "Cross";
    if(p[1]==="Cross" && p[4]==="Cross" && p[7]==="Cross") return "Cross";

    if(p[2]==="Cross" && p[5]==="Cross" && p[8]==="Cross") return "Cross";
    if(p[3]==="Cross" && p[4]==="Cross" && p[5]==="Cross") return "Cross";
    if(p[6]==="Cross" && p[7]==="Cross" && p[8]==="Cross") return "Cross";

    if(p[0]==="Cross" && p[4]==="Cross" && p[8]==="Cross") return "Cross";
    if(p[2]==="Cross" && p[4]==="Cross" && p[6]==="Cross") return "Cross";

    if(p.every(position=>position!=="empty")) return "It's a tie";
  }
  const winnerot=detectWinner(state.positions);

  function reset(){
    setState({
      player: 'Cross',
      positions:["empty","empty","empty","empty","empty","empty","empty","empty","empty"],
      winner: "empty"
    })
  }
  
  return(
    <div className='wholeApp'>
      <div className='buttons'>
        <CustomButton textot={"It is "+state.player+" turn"}></CustomButton>
      </div>
      <div className="App">
        <Square position="0" value={state.positions[0]} takeTurn={takeTurn}/>
        <Square position="1" value={state.positions[1]} takeTurn={takeTurn}/>
        <Square position="2" value={state.positions[2]} takeTurn={takeTurn}/>
        <Square position="3" value={state.positions[3]} takeTurn={takeTurn}/>
        <Square position="4" value={state.positions[4]} takeTurn={takeTurn}/>
        <Square position="5" value={state.positions[5]} takeTurn={takeTurn}/>
        <Square position="6" value={state.positions[6]} takeTurn={takeTurn}/>
        <Square position="7" value={state.positions[7]} takeTurn={takeTurn}/>
        <Square position="8" value={state.positions[8]} takeTurn={takeTurn}/>  
      </div>
      {winnerot && <Result winner={winnerot} reset={reset}/>}
    </div>
    )
};

export default App;
