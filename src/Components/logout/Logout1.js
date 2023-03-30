import React,{useState} from 'react';
import './Logout.css';
import { auth,db } from "../../Pages/loginpage/firebase";
import { Link ,useHistory} from "react-router-dom";
import {useStateValue} from "../stateprovider/Stateprovider";

const Logout1=()=>{
    const history = useHistory();
    const [{user},dispatch]=useStateValue();
    const [profiledata,setProfiledata]=useState("User.png");

    const handleAuthenticaton = () => {
        if (user) {
          auth.signOut().then(history.push('/'));
        }
      }
      if(user)
      {db.collection("users").doc(user.uid).get().then(d=>setProfiledata(d.data()));}
    
    return(
        <div className="back">
            <h2 style={{align:"center"}}>User Profile </h2>

           <div className="card">
               <p><button className="button" onClick={handleAuthenticaton}>Logout</button></p>
           </div>

        </div> );
}

export default Logout1;