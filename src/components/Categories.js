import React from 'react';

const Categories = (props) =>{
    return(
        <div className="float-right">
            <div className="radio-buttons" onChange={props.handleSetMoviesOrTVShows.bind(this)}>
                <input type="radio" value="tvshows" name="format"/> TV Shows
                <input type="radio" value="movies" name="format" defaultChecked /> Movies
            </div>
            <div className="radio-buttons" onChange={props.handleSetDecade.bind(this)}>
                <input type="radio" value="50" name="decade"/> 50's
                <input type="radio" value="60" name="decade"/> 60's
                <input type="radio" value="70" name="decade"/> 70's
                <input type="radio" value="80" name="decade" defaultChecked /> 80's
                <input type="radio" value="90" name="decade"/> 90's
                <input type="radio" value="00" name="decade"/> 00's
                <input type="radio" value="10" name="decade"/> 10's
            </div>        
        </div>

    )     
}

export default Categories;