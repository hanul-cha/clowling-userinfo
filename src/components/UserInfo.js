import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

/* import { Cheerio } from 'cheerio'; */


export const UserInfo = () => {
    const { userName } = useParams();

    const getHTML = async(keyword) => {
        try {
            return await axios.get("https://lostark.game.onstove.com/Profile/Character/" + encodeURI(keyword))
        }catch(err) {
            console.log(err);
        }
    }

    console.log(getHTML(userName));



    
    

    return (
        <div>
            <h2>유저이름 : {userName}</h2>
            
        </div>
    )
}
