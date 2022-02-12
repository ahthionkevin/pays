import axios from 'axios';
import React, {useEffect, useState} from 'react';
import Card from './Card';

const Countries = () => {
    const [state, setstate] = useState([]);
    const [sortedData, setSortedData] =useState([]);
    const [playOnce,setPlayOnce] = useState(true);
    const [rangeValue,setRangeValue]= useState(100);
    const [selectedRadio,setSelectedRadio]=useState("");
    const radios=['Africa','Asia','Europe','America','Oceania'];

    const change = (e) =>{
        setRangeValue(e.target.value);
    }

    useEffect(() => {
        if(playOnce)
        {
            axios.get("https://restcountries.com/v3.1/all?fields=name,population,capital,region,flags").then((res) =>{
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
    , [state,rangeValue,playOnce]);
    
    return (
        
        <div className="countries">
            <div className="sort-container">
                <input type="range" min="1" max="250" value={rangeValue} onChange={change}/>
                <ul>
                    { radios.map((radio) => <li key={radio}><input type="radio" name="radio" value={radio} id={radio} checked={radio===selectedRadio} onChange={(e) => {setSelectedRadio(e.target.value)}}/><label htmlFor={radio}>{radio}</label></li>)}
                </ul>
            </div>
            <div className="cancel">
                {selectedRadio && <h5 onClick={() =>setSelectedRadio("")}>Annuler Recherche</h5>}
            </div>
            <ul className="countries-list">
            {
                sortedData.filter((country) => country.region.includes(selectedRadio)).map((country) =>{
                    return <Card key={country.name.common} country={country} className="countries"/>
                })
     
            }
            </ul>
           
        </div>
           
    );
};

export default Countries;
