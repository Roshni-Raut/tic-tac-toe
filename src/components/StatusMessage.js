import React from 'react'

const StatusMessage = ({winner,current}) => {
 
    const noMovesLeft = current.board.every(el => el !== null);

    return (
        <h2 style={{color: winner ? '#2B278D':'white',textDecoration:winner?'underline':'none'}}>
            {winner && `Winner is ${winner}`}
            {!winner && !noMovesLeft && `Next Player is ${current.isXNext?'X':'O'}`}
            {noMovesLeft && !winner && 'X and O tied'}
        </h2>
    )
}

export default StatusMessage