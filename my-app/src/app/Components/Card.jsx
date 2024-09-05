import React from 'react';

function Card(props){
    return <div>
        <h3>{props.name}</h3>
        <p>{props.email}</p>
        <p>{props.tel}</p>
    </div>;
}

export default Card;