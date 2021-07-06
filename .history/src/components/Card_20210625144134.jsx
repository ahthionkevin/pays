import React from 'react';

const Card = (props) => {

    function numStr(a, b) {
            a = '' + a;
            b = b || ' ';
            var c = '',
                d = 0;
            while (a.match(/^0[0-9]/)) {
              a = a.substr(1);
            }
            for (var i = a.length-1; i >= 0; i--) {
              c = (d != 0 && d % 3 == 0) ? a[i] + b + c : a[i] + c;
              d++;
            }
            return c;
          
    }
    return (
        <li className="card">
            <img height='200px' src={ props.country.flag }/>
            <div className="data-container">
                <ul>
                    <li>{props.country.name}</li>
                    <li>{'Capital: ' + props.country.capital}</li>
                    <li>{nnumStr(props.country.population) + ' persons'}</li>
                </ul>
            </div>
        </li>
    );
};

export default Card;
