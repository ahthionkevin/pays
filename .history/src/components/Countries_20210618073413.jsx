import axios from 'axios';
import React, {useEffect, useState} from 'react';

const Countries = () => {
    const [state, setstate] = useState([]);

    useEffect(() => {
        axios.get("https://restcountries.eu/rest/v2/all?fields=name;population;capital;region;flag").then((res) =>{
            setstate(res.data);
        });console.log(state);
        }
    , [0]);
    
    return (
        <div>
            
        </div>
    );
};

export default Countries;