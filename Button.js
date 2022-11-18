import React,{useState} from 'react';
function Button(props) {
    const[title,setTitle]=useState("submit from function")
    return (
        <div>
            <button onClick={()=>setTitle('The form is submitted')}>{title}</button>
        </div>
    )
}
export default Button;