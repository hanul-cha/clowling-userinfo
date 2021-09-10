
const clowlling = require("./clowlling");



export function postWeb(userName) {
    const userInfo = new clowlling(userName);
    const info = userInfo.parsing();

    fetch("http://localhost:5000/", {
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