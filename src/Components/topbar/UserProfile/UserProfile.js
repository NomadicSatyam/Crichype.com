import React, {useState, useEffect, useRef} from 'react';
import UserProfileItem from './UserProfileItem';
import "./UserProfile.css";
import usericon from '../UserProfile/img/usericon.png';
import edit from '../UserProfile/img/edit.png';
import inbox from '../UserProfile/img/envelope.png';
import settings from '../UserProfile/img/settings.png';
import help from '../UserProfile/img/question.png';
import logout from '../UserProfile/img/log-out.png';
import { useStateValue } from '../../stateprovider/Stateprovider';
import { Link ,useHistory} from 'react-router-dom';
import { auth } from '../../../Pages/loginpage/firebase';

function UserProfile({pf}) 
{  const [open, setOpen] = useState(false);
   const [{user},dispatch] = useStateValue();
   const history = useHistory();
    

   const handleAuthenticaton = () => {
        if (user)
        {
          auth.signOut().then(history.push('/'));
        }
      }
      
    let menuRef = useRef();
  
    useEffect(() =>
     {
        let handler = (e)=>{
            if(!menuRef.current.contains(e.target))
            {
               setOpen(false);
               console.log(menuRef.current);
            }      
      };
  
      document.addEventListener("mousedown", handler);
      
  
      return() =>{
                   document.removeEventListener("mousedown", handler);
                 }
  
    });
  
    return (
        
          <div className='menu-container' ref={menuRef}>
            <div  onClick={()=>{setOpen(!open)}}>
                <i className="topIcon far fa-user-circle" />
            </div>
    
            <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
              <h3>The Satyam<br/><span>Website Designer</span></h3>
              <ul>
                <Link to="/myprofile" style={{ textDecoration: 'none' }}>
                <UserProfileItem img = {usericon} text = {"My Profile"}/>
                </Link>
                <UserProfileItem img = {edit} text = {"Edit Profile"}/>
                <UserProfileItem img = {inbox} text = {"Inbox"}/>
                <Link to="/setting" style={{ textDecoration: 'none' }}>
                <UserProfileItem img = {settings} text = {"Settings"}/>
                </Link >
                <UserProfileItem img = {help} text = {"Helps"}/>
                
                <Link onClick={handleAuthenticaton} style={{ textDecoration: 'none' }}>
                <UserProfileItem img = {logout} text = {"Logout"} />
                </Link>
              </ul>
            </div>
          </div>
       
      );
}

export default UserProfile
