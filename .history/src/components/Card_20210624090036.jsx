import React from 'react';

const Card = (props) => {

    console.log(props);
    return (
        <div>
            <img height='200px' src={ props.country.flag}/>
            <p>{props.country.name}</p>
            <p>{'Capital: ' + props.country.capital}</p>
            <p>{props.country.population + ' persons'}</p>

        </div>
    );
};

export default Card;