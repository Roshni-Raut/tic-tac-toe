import React from 'react'

const Square = ({value}) => {
    return (
        <div >
            <button  type="button" className='square'> {value}</button>
        </div>
    );
}

export default Square;
