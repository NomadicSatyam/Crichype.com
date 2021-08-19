import React,{useState} from 'react';
import './Logout.css';
import { auth,db } from "../../Pages/loginpage/firebase";
import { Link ,useHistory} from "react-router-dom";
import {useStateValue} from "../stateprovider/Stateprovider";

const Logout=()=>{
    const history = useHistory();
    const [{user},dispatch]=useStateValue();
    const [profiledata,setProfiledata]=useState("User1.png");

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
            <img src={profiledata.fileUrl} alt="userpic" className="imgstyle"/>
            <h1>{profiledata.username}</h1>
            <p className="title">CEO & Founder, Example</p>
            <p>Harvard University</p>
            <p><button className="button" onClick={handleAuthenticaton}>Logout</button></p>
           </div>

        </div> );
}

export default Logout;