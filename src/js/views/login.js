import React, {useState,useEffect,useContext} from "react";
import PropTypes from "prop-types";
import {Link,useParams} from "react-router-dom";
import {Context} from "../store/appContext";
// import UnaCarta from "../component/unaCarta.js";

export const Login =()=> {
const[email,setEmail]=useState("");
const[password,setPassword]=useState("");
const {store,actions} = useContext(Context);

// useEffect(() => {
//     actions.detallesPersonaje(params.theid)
// }, [])
function enviarDatos(e) {
    e.preventDefault()
    actions.login(email,password)
    setEmail("")
    setPassword("")


    fetch('https://3000-daianamelo-jwtauthentic-98xddj89mmt.ws-us84.gitpod.io/login',{
        method:'POST', 
        mode: 'no-cors',
        credentials: 'include',
        headers: {
                // 'Access-Control-Allow-Method':'*',
            'Content-Type': 'application/json',
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
         body: JSON.stringify({"email":email,"password":password}) // body data type must match "Content-Type" header
})
.then((response) => response.json())
.then((data) => console.log(data))
.catch((err)=>console.log(err))
}
return (
<>
{store.auth === true ? <Navigate to="/demo"/>:
<form className="w-50 mx-auto" onSubmit={enviarDatos}>
<div className="mb-3 container"><label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
<input type="email"className="form-control"id="exampleInputEmail1"aria-describedby="emailHelp" value={email}onChange={(e)=>setEmail(e.target.value)}/></div><div className="mb-3">
<label htmlFor="exampleInputPassword1" className="form-label"/>Password
<input type="password"className="form-control"id="exampleInputPassword1"value={password}onChange={(e)=>setPassword(e.target.value)}/></div><button type="submit" className="btn btn-primary">Submit</button>
</form>}
</>
);
};

// Single.propTypes = {
//     match: PropTypes.object
// };