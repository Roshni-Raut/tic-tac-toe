import React,{useState} from "react";
import Board from "./components/Board"
import { calculateWinner } from "./helper";
import './styles/root.scss'

const App= () =>{
  const [board,setBoard]=useState(Array(9).fill(null))
  const [isXNext,setNext]=useState('X')

  const winner =calculateWinner(board)
  const message= winner? `winner is ${winner}`:`next player is ${isXNext?'X':'O'}` 

  const handleSquareClick=(index)=>{
      if(board[index]!==null || winner)
          return
      setBoard((prev)=>{
          return prev.map((square,pos)=>{
              if(pos===index){
                  return isXNext ?'O':'X'
              }
              return square;
          })
      })
      setNext(prev=>!prev)
  }
  
  return(
    <div className='app'>
      <h1> TIC TAC TOE </h1>
      <h2> {message} </h2>
      <Board board={board} handleSquareClick={handleSquareClick}/>
    </div>
  );
}
export default App;
