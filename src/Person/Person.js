import React from 'react';

const Person = ( props ) => {
    return (
        <div>
            <p>I'm {props.name} and I am {props.age} years old!!</p>
            {/* props.children includes everything between opening and closing tag. For example <p>this is where the children live</p> */}
            <p>{props.children}</p>
        </div>
    )
};



export default Person;