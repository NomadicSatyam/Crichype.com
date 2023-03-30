import React,{useState,useEffect} from 'react';
import {db,storage,auth} from '../../Pages/loginpage/firebase';
import {useStateValue} from "../stateprovider/Stateprovider";
import Sidebar from "../sidebar/Sidebar";
import { useHistory} from "react-router-dom";
import "./MyProfile.css";

export default function MyProfile() {
  const history = useHistory();
  const [{user},dispatch]=useStateValue();

  const [fileUrl, setFileUrl] =useState("User1.png");
  const [username, setUserName] = useState('satyam');
  const [email, setEmail] = useState('');
  const [profiledata,setProfiledata]=useState('');

   const fetchData =() =>{

    if(user)
    {db.collection("users").doc(user.uid).get().then(d=>setProfiledata(d.data()));}

    setFileUrl(`${profiledata.fileUrl}`);
    setUserName(`${profiledata.username}`);
    setEmail(`${user.email}`);

    console.log(profiledata.fileUrl);
    console.log(profiledata.username);
    console.log(user.email);
 
   }
  
   useEffect(()=>{
    
    fetchData();
    
    })

    

   

  

  const deleteaccount=()=>{
    if(user)
    { alert('please confirm to delete')&&user.delete().then(()=>{alert('Deleated')}).catch((error)=>{alert(error)})}
     }
  
    
  

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate"> Your Profile </span>
          <span className="settingsTitleDelete" onClick={deleteaccount}>Delete Account</span>
        </div>
        <ul className="settingsForm" >
          <label>Profile Picture</label>
          <li className="settingsPP">
            <img
              src={fileUrl}
              alt=""
            />
            
          </li>
          <label>Username</label>
          <label>{username}</label>
          
          <label>Email</label>
          <label>{email}</label>
          
          
        </ul>
      </div>
      
    </div>
  );

}
