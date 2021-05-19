import React from 'react'

const Square = ({value,onClick,isWiningSquare}) => {
    return (
        <div >
            <button  type="button" className={`square ${isWiningSquare?'wining':''}${value==='X'?'text-green':'text-orange'}`} onClick={onClick} >
                 {value}
            </button>
        </div>
    );
}

export default Square;
