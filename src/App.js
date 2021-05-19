import React,{useState} from "react";
import Board from "./components/Board"
import History from "./components/History"
import { calculateWinner } from "./helper";
import './styles/root.scss'

const App= () =>{
  const [history,setHistory]=useState([
    {board:Array(9).fill(null), isXNext: true}
  ])
  const [currentMove,setCurrentMove]=useState(0)
  const current= history[currentMove]

  const winner =calculateWinner(current.board)
  const message= winner? `winner is ${winner}`:`next player is ${current.isXNext?'X':'O'}` 

  const handleSquareClick=(index)=>{
    
      if(current.board[index]!==null || winner)
          return
      setHistory(prev=>{
          const last =prev[prev.length-1]
          const newBoard= last.board.map((square,pos)=>{
              if(pos===index){
                  return last.isXNext ?'O':'X'
              }
              return square;
          })
          return prev.concat({board:newBoard,isXNext:!last.isXNext})
      })
      setCurrentMove(prev=>prev+1)
  }
  const moveTo=(index)=>{
    setCurrentMove(index);
  }
  return(
    <div className='app'>
      <h1> TIC TAC TOE </h1>
      <h2> {message} </h2>
      <Board board={current.board} handleSquareClick={handleSquareClick}/>
      <History history={history} moveTo={moveTo} currentMove={currentMove}></History>
    </div>
  );
}
export default App;
