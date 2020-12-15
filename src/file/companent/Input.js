import React from 'react';



const Input = (props) => {
    

    return(
        <div>
            <input onChange={ event => {
                if(event.target.value){
                props.function({
                    ...props.object,
                    title: event.target.value
                })
            }}
            }
                value={props.todo}
            />
            
        </div>
    )
}

export default Input;