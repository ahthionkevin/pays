import React from 'react';

const Card = (value) => {

    console.log(value);
    return (
        <div>
            {value.country.name}
        </div>
    );
};

export default Card;