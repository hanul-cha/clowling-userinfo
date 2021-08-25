import { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function Header() {
    const [userName, setText] = useState("");
    const history = useHistory();
    

    function onChange(e) {
        setText(e.target.value);
    }

    function onSubmit(e){
        /* const userName = e.target.getElementsByTagName("input")[0].value */
        e.preventDefault();
        history.push(`/info_page/${userName}`);
        setText("")
        
    }

    return <div className="header clearFix">
        <h1 className="headerH1">
            <Link to="/">LOADO</Link>
        </h1>
        <form onSubmit={onSubmit}>
            <input type="text" value={userName} placeholder="이름입력" required className="head_input" onChange={onChange} />
            <button>검색</button>
        </form>
    </div>

    
}