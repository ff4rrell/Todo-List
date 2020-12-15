import React from 'react';


const Render = (props) => {

    return(
        <div>
        
            {props.array.map( it => <div> {it.title} </div>)}
        </div>

    )
};

export default Render;