import React from 'react'

const History = ({history,moveTo,currentMove}) => {
    return (
        <ul>
            {
                history.map((_,id)=>{
                    return(
                        <li key={id}>
                            <button 
                            style={{
                                fontWeight: id===currentMove?'bold':'normal',color: id===currentMove?'#160DF5':'white'}} 
                            type="button" onClick={()=>{
                                moveTo(id)
                            }}>
                                {id===0?'Go to game start':`Go to move #${id}`}</button>
                        </li>
                    )
                })
            } 
        </ul>
    )
}

export default History
