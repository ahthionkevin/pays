import axios from 'axios';
import React, {useState} from 'react';

const Countries = () => {
    const [state, setstate] = useState([]);
    axios.get("https://restcountries.eu/rest/v2/all?fields=name;population;capital;region;flag").then((res) =>{
        console.log(res);
    })
    return (
        <div>
            
        </div>
    );
};

export default Countries;