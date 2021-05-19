import React from 'react'

const Square = ({value,onClick,isWiningSquare}) => {
    return (
        <div >
            <button  type="button" className='square' onClick={onClick} 
            style={{ fontWeight : isWiningSquare?'bold':'normal',
                    color:isWiningSquare? '#160DF5':'white'}  }>
                 {value}
            </button>
        </div>
    );
}

export default Square;
