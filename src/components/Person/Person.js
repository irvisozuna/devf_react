import React from 'react';

const person = (props) => {
    return (
        <div>
             <p>Im {props.name} and im {props.age} years old</p>
             <p>{props.children}</p>
        </div>
    )
}

export default person;