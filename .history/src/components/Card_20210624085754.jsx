import React from 'react';

const Card = (props) => {

    console.log(props);
    return (
        <div>
            <img height='200px' src={ props.country.flag}/>
            <p>{props.country.name}</p>

        </div>
    );
};

export default Card;