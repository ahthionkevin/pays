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
            {
                state.map((country) =>{
                    return <Card key={country.name} country={country} className="sort-container"/>
                })
     
            }
        </div>
           
    );
};

export default Countries;