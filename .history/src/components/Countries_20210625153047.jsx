import axios from 'axios';
import React, {useEffect, useState} from 'react';
import Card from './Card';

const Countries = () => {
    const [state, setstate] = useState([]);
    const [sortedData, setSortedData] =useState([]);
    const [playOnce,setPlayOnce] = useState(true);
    const [rangeValue,setRangeValue]= useState(100);

    change = () =>{
        let input=document.querySelector(input);
        setRangeValue(input.value);
    }

    useEffect(() => {
        if(playOnce)
        {
            axios.get("https://restcountries.eu/rest/v2/all?fields=name;population;capital;region;flag").then((res) =>{
                setstate(res.data);
                setPlayOnce(false);
            });
        }

        const sortCountries = () =>{
            const countryObj = Object.keys(state).map((i) => state[i]);
            const sortedArray = countryObj.sort((a,b) => {return b.population - a.population});
            sortedArray.length=rangeValue;
            setSortedData(sortedArray)
        }
        
        sortCountries();
    }
    , [state,rangeValue]);
    
    return (
        
        <div className="countries">
            <div className="sort-container">
                <input type="range" min="1" max="250" value={rangeValue} onChange={change}/>
            </div>
            <ul className="countries-list">
            {
                sortedData.map((country) =>{
                    return <Card key={country.name} country={country} className="countries"/>
                })
     
            }
            </ul>
           
        </div>
           
    );
};

export default Countries;