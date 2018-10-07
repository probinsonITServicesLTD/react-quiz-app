import React from 'react';
import Scoreboard from './Scoreboard';

const Header = (props) =>{
    return(
        <div className="header">
            <div>
                <h1 className="header__title">{props.title}</h1>
                <Scoreboard 
                    score={props.score}
                    questionCounter={props.questionCounter}
                />   
            </div>     
        </div>
    )     
}

export default Header;