import axios from 'axios';
import React, {useEffect, useState} from 'react';
import Card from './Card';

const Countries = () => {
    const [state, setstate] = useState([]);

    useEffect(() => {
        axios.get("https://restcountries.eu/rest/v2/all?fields=name;population;capital;region;flag").then((res) =>{
            setstate(res.data);
        });
        }
    , []);
    
    return (
        <div className="countries">
            <ul className="countries-list">
            {
                state.map((country) =>{
                    return <li><Card key={country.name} country={country} className="countries"/></li>
                })
     
            }
            </ul>
           
        </div>
           
    );
};

export default Countries;