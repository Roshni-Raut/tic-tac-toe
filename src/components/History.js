import React from 'react'

const History = ({history,moveTo,currentMove}) => {
    return (
        <div className="history-wrapper">
        <ul className="history">
            {
                history.map((_,id)=>{
                    return(
                        <li key={id}>
                            <button className={`btn-move ${id===currentMove?'active':''}`}
                            style={{
                                fontWeight: id===currentMove?'bold':'normal'}} 
                            type="button" onClick={()=>{
                                moveTo(id)
                            }}>
                                {id===0?'Go to game start':`Go to move #${id}`}</button>
                        </li>
                    )
                })
            } 
        </ul></div>
    )
}

export default History
