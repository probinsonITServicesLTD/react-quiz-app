
import React from 'react';

const Quiz = (props)=>{     
    return(
        <div>
            <div className="question">
                {props.isLoaded?<span>{props.question}</span>: <img src="images/spinner.gif"/>}                   
            </div>
            <div className="options">
            {
                props.options.map((option, i)=>
                <button 
                    key={i}
                    data-button-id={i}
                    className={props.showAnswer ? props.button[i] ? 'base answer-true' : 'base answer-false' : 'base option'}
                    onClick={props.handleCheckAnswer}                      
                >{option}</button>)
            }
            </div>
        </div>
    );    
}
 export default Quiz

