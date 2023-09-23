import React from 'react';

const Hello=()=>{
function search(){
//const input=document.getElementById("input").value;
fetch("https://www.googleapis.com/books/v1/volumes?q=harry+potter")
.then(response=>response.json())
.then(data=>
    console.log(data));
}
    return(
        <div>
         <header>
            <input type="text" placeholder="enter something" id="input"/>
            <button onClick={search}>search</button>
         </header>
        </div>
    )
}
export default Hello;