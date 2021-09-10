import { text } from "body-parser";

const clowlling = require("./clowlling");

const port = process.env.PORT || 5000;



export function postWeb(userName) {
    /* const userInfo = new clowlling(userName); */
    const info = {
        type: text,
        num: "10"
    };

    fetch(`http://localhost:${port}/api/user`, {
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