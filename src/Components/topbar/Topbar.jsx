import {useState} from "react";
import { Link ,useHistory} from "react-router-dom";
import "./topbar.css";
import "./Hoverable__Dropdown.css";
import {useStateValue} from "../stateprovider/Stateprovider";
import { auth,db } from "../../Pages/loginpage/firebase";


export default function Topbar() {
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
  
  return (
    <div className="top" >
      <div className="topLeft">
        
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" style={{ textDecoration: 'none' }}>
            <h1 className="logo__text">
            <span >Cichype.com</span>
            </h1>
            </Link>
          </li>
        </ul>
      </div>

      <div className="topCenter">
        <ul className="topList" >
          <li className="topListItem">Live Scores</li>
          <li className="topListItem">Schedules</li>
          <li className="topListItem">Series</li>
          <Link to="/blog" style={{ textDecoration: 'none' }}>

               <li className="topListItem">Blogs</li>

          </Link> 
          <Link to="/news" style={{ textDecoration: 'none' }}>

               <li className="topListItem">News</li>
          
          </Link>
          <Link to="/video" style={{ textDecoration: 'none' }}>

               <li className="topListItem">Videos</li>
          
          </Link>
          <li className="topListItem">Rankings</li>
          {user? (<li className="topListItem">
                   <Link className="link" to="/write">
                    Write
                   </Link>
                  </li>):(<li className="topListItem">More</li>)}
        
        </ul>
      </div>
      <div className="topRight" >
        <i className="topIcon fab fa-facebook"></i>
        <i className="topIcon fab fa-instagram"></i>
        <i className="topIcon fab fa-pinterest"></i>
        <i className="topIcon fab fa-twitter"></i>
        </div>
        <div className="userSearch" >
        
        <i className="topIcon fas fa-search"></i>
        
        
        {user ? (
            <div class="dropdown"  >
            
            <img
              className="topImg"
              src={profiledata.fileUrl}
              alt=""
              
            />
            <div class="dropdown-content" style={{float:'right'}}>
            <Link className="link"  onClick={handleAuthenticaton}>
                    Logout
                   </Link>
            <Link className="link" to='/setting'>Setting</Link>       
             
            </div>
          </div>
            
          
        ) : (
          
            <Link to={!user && '/login'}>
              <i className="topIcon far fa-user-circle"></i>
            </Link>
          )}
          </div>
          
       
       
    </div>
  );
}
