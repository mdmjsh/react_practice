import React from 'react';

const person = (props) => {
    return (
    <div>
        <p>I'm a {props.name} and I'm {props.age} years old!</p>
        {/* `props.children` - any element between opening and closing of element at runtime */}
        <p>{props.children}</p>
    </div>
    )
}

export default person;