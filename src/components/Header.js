import React from 'react';

const Header = (props) =>{
    return(
        <div className="inline-flex black-bg fullscreenwidth margin-bottom5rem">
            <div className="header-text">
                {props.title}
            </div>
            <div className="header-text white-text">
                Score = {props.score}
            </div>
            <div className="header-text white-text">
                Question = {props.questionCounter}
            </div>                       
            <div className="radio-container">      
                {/*<div className="radio-buttons" onChange={props.handleSetMoviesOrTVShows.bind(this)}>
                    <label className="radio-element">TV Shows
                        <input type="radio" name="format" value="tvshows"/>
                        <span className="checkmark"></span>
                     </label>
                    <label className="radio-element">Movies
                        <input type="radio" name="format" value="movies" defaultChecked/>
                        <span className="checkmark"></span>
                    </label>
                </div>*/}
                <div onChange={props.handleSetDecade.bind(this)}>
                    <label className="radio-element">50's
                        <input type="radio" name="decade" value="50"/>
                        <span className="checkmark"></span>
                    </label>
                    <label className="radio-element">60's
                        <input type="radio" name="decade" value="60"/>
                        <span className="checkmark"></span>
                    </label>
                    <label className="radio-element">70's
                        <input type="radio" name="decade" value="70"/>
                        <span className="checkmark"></span>
                    </label>
                    <label className="radio-element">80's
                        <input type="radio" name="decade" value="80" defaultChecked/>
                        <span className="checkmark"></span>
                    </label>
                    <label className="radio-element">90's
                        <input type="radio" name="decade" value="90"/>
                        <span className="checkmark"></span>
                    </label>
                    <label className="radio-element">00's
                        <input type="radio" name="decade" value="00"/>
                        <span className="checkmark"></span>
                    </label>
                    <label className="radio-element">10's
                        <input type="radio" name="decade" value="10"/>
                        <span className="checkmark"></span>
                    </label>
                </div>
            </div>  
        </div>
    )     
}

export default Header;