import React from 'react'
import { useParams } from 'react-router-dom'
import { postWeb } from "../js/fetch"

/* import { Cheerio } from 'cheerio'; */



export const UserInfo = () => {
    const { userName } = useParams();
    postWeb(userName);
    
    
    

    return (
        <div>
            <h2>유저이름 : {userName}</h2>
            
        </div>
    )
}
