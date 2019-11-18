//presentational, stateless or dumb component- means the component does not manage state.
    //you want to have as many components be stateless as possible.
    //this allows the page to render more quickly, and allows the code to be much easier to manage.
import React from 'react';
import './Person.css';


const Person = ( props ) => {
    return (
        <div className='Person'>
            <p onClick={ props.click }>I'm { props.name } and I am { props.age } years old!!</p>
            {/* props.children includes everything between opening and closing tag. For example <p>this is where the children live</p> */}
            <p>{ props.children }</p>
            <input 
                type='text' 
                onChange={ props.changed } 
                value={ props.name } 
            />
        </div>
    )
};



export default Person;