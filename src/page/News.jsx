import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import axios from 'axios';
import Article from '../components/Article';

const News = () => {

    const [newsData,setNewsData]=useState([]);
    const [author, setAuthor] = useState("");
    const [content, setContent]=useState("");
    const [error,setError]=useState(false);

    const getData =() =>{
        axios.get("http://localhost:3003/articles").then((res) =>{

            setNewsData(res.data);
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(content.length<140)
        {
            setError(true);
        }
        else{
            axios.post("http://localhost:3003/articles",{
                author: author,
                content: content,
                date: Date.now()
            }).then(() =>{
                document.querySelector('input[type=text]').value="";
                document.querySelector('textarea').value="";
                setAuthor("");
                setContent("");
                setError(false);
                getData();
            });
        }
       

        
    }

    useEffect(() =>{
        getData();
    },[])
    
    return (
        <div className="news-container">
            <Navigation/>
            <Logo/>
            <h1>News</h1>

            <form action="" onSubmit={handleSubmit}>
                <input onInput={(e) => setAuthor(e.target.value)} type="text" name="nom" id="nom" placeholder="Nom de l'Auteur" autoComplete="off"/>
                <textarea 
                style={{border: error? "1px solid red" :"1px solid #61dafb"}}
                onChange={(e) => setContent(e.target.value)} name="message" id="message" placeholder="Votre message" cols="30" rows="10"></textarea>
                {error && <p>Veuillez ecrire plus de 140 caracteres</p>}
                <input type="submit" value="Envoyer" />
            </form>

            <ul>
                {newsData.sort((a,b)=>b.date-a.date).map((article) =>{
                    return <Article key={article.id} article={article} getData={getData}/>;
                })}
            </ul>
        </div>
    );
};

export default News;