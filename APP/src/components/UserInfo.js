import React from 'react'
import { useParams } from 'react-router-dom'
import { postWeb } from "../js/fetch"

/* import { Cheerio } from 'cheerio'; */



export const UserInfo = () => {
    const { userName } = useParams();
    
    
    function onclick() {
        const info = {
            type: "text",
            num: "10"
        };
    
        fetch(`http://localhost:5000/api/user`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(info),
        })
        .then((res) => res.json())
        .then((res) => {
            if (res.success) {
                alert("성공");
              }
        })
        .catch((err) => {
          console.error("혐오스런 문제 발생");
        });  
    }
    
    

    return (
        <div>
            <h2>유저이름 : {userName}</h2>
            <button onClick={onclick}>ok</button>
        </div>
    )
}
