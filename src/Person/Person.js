import React from 'react';

const Person = (props) => {
    return (
        <div>
            <p>I'm a Person and I am {Math.floor(Math.random() * 30)} years old!!</p>
        </div>
    )
};



export default Person;