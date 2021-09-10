import React from 'react'
import { useParams } from 'react-router-dom'

/* import { Cheerio } from 'cheerio'; */


export const UserInfo = () => {
    const { userName } = useParams();

    

    return (
        <div>
            <h2>유저이름 : {userName}</h2>
            
        </div>
    )
}
