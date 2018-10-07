import React from 'react';

const Scoreboard = (props) =>{
    return(
        <div className="inline-block">
            <h1 className="inline-block">
                Question: {props.questionCounter}
            </h1>
            <h1 className="inline-block">
                Score: {props.score}
            </h1>
        </div>
    )     
}

export default Scoreboard;