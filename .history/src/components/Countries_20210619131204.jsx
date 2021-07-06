import axios from 'axios';
import React, {useEffect, useState} from 'react';

const Countries = () => {
    const [state, setstate] = useState([]);

    useEffect(() => {
        axios.get("https://restcountries.eu/rest/v2/all?fields=name;population;capital;region;flag").then((res) =>{
            setstate(res.data);
        });console.log(state);
        }
    , []);
    
    return (
        <div>
           this.state.map(function(country) {
               <li>Card</li>
           })
        </div>
    );
};

export default Countries;