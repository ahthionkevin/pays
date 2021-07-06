import React from 'react';

const Card = (props) => {

    console.log(props);
    return (
        <div>
            {props.country.name}
        </div>
    );
};

export default Card;