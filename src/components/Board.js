import React,{ useState} from 'react'
import Square from './Square'


const Board = () => {
    const [board,setBoard]=useState(Array(9).fill(null))
    const [isXNext,setNext]=useState('X')

    const handleSquareClick=(index)=>{
        if(board[index]!==null)
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
    
    const renderSquare=position=>{
        return(
            <Square value={board[position]} onClick={()=>{handleSquareClick(position)}}/>
        )
    }
    return (
        <div className='board'>
            <div className='board-row'>
                { renderSquare(0)}
                { renderSquare(1)}
                { renderSquare(2)}
            </div>
            <div className='board-row'>
                { renderSquare(3)}
                { renderSquare(4)}
                { renderSquare(5)}
            </div>
            <div className='board-row'>
                { renderSquare(6)}
                { renderSquare(7)}
                { renderSquare(8)}
            </div>
        </div>
    )
}

export default Board
