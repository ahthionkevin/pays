import axios from 'axios';
import React, { useState } from 'react';

const Article = (props) => {

    const [isEditing,setIsEditing]=useState(false);
    const [editedContent,setEditedContent]=useState("");

    

    const dateParser = (date) =>{
        let newDate=new Date(date).toLocaleDateString('fr-FR',{
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            weekday: 'long',
            hour: '2-digit',
            minute: '2-digit',
            second: 'numeric'
        });
        return newDate;
    }

    const handleEdit = () =>{
        const data={
            author: props.article.author,
            content: editedContent,
            date: props.article.date
        }
        axios.put("http://localhost:3003/articles/" +props.article.id,data)
        .then(() =>{
           
            setIsEditing(false);
            //window.location.reload();
            props.getData();
        })

        
    }
    
    return (
        <div className="article" style={{background: isEditing ? "#54dafb" : "white"}}>
            <div className="card-header">
                <h3>{props.article.author}</h3>
                <em>Poste le {dateParser(props.article.date)}</em>
                
            </div>

            {isEditing ? (<textarea onChange={(e) =>setEditedContent(e.target.value)} autoFocus defaultValue={props.article.content}></textarea>) : (<p>{props.article.content}</p>)}

            
            <div className="btn-container">
                {isEditing ? (<button onClick={handleEdit}>Valider</button>) : (<button onClick={ () => setIsEditing(true)}>Edit</button>)}
                
                <button>Delete</button>
            </div>
        </div>
    );
};

export default Article;