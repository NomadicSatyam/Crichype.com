import {useState} from "react";
import { Link ,useHistory} from "react-router-dom";
import "./topbar.css";
import "./Hoverable__Dropdown.css";
import {useStateValue} from "../stateprovider/Stateprovider";
import { auth,db } from "../../Pages/loginpage/firebase";
import Dropdown from './Dropdown';
import Writedown from './writedown/Writedown';
import Userdown from './userdown/Userdown';



export default function Topbar() {
  const [dropdown, setDropdown] = useState(false);
  const [writedown,setWritedown]=useState(false);
  const [userdown,setUserdown]=useState(false);

  const [click, setClick] = useState(false);

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

  const closeMobileMenu = () => setClick(false);


  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const onMouseEnter1 = () => {
    if (window.innerWidth < 960) {
      setWritedown(false);
    } else {
      setWritedown(true);
    }
  };

  const onMouseLeave1 = () => {
    if (window.innerWidth < 960) {
      setWritedown(false);
    } else {
      setWritedown(false);
    }
  };

  const onMouseEnter2 = () => {
    if (window.innerWidth < 960) {
      setUserdown(false);
    } else {
      setUserdown(true);
    }
  };

  const onMouseLeave2 = () => {
    if (window.innerWidth < 960) {
      setUserdown(false);
    } else {
      setUserdown(false);
    }
  };

  
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
          
          <li
            className="topListItem"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/services'
              className="link"
              onClick={closeMobileMenu}
            >
              Rankings <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>

          {user? (
          <li
            className="topListItem"
            onMouseEnter={onMouseEnter1}
            onMouseLeave={onMouseLeave1}
          >
            <Link
              to='/services'
              className="link"
              onClick={closeMobileMenu}
            >
              Write <i className='fas fa-caret-down' />
            </Link>
            {writedown && <Writedown />}
          </li>
          
          ):(<li className="topListItem">More</li>)}
        
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
          <div>
          <li
            className="topListItem"
            onMouseEnter={onMouseEnter2}
            onMouseLeave={onMouseLeave2}
          >
            <Link
              to='/services'
              className="link"
              onClick={closeMobileMenu}
            >
              <img
              className="topImg"
              src={profiledata.fileUrl}
              alt=""
              
            />
            </Link>
            {userdown && <Userdown />}
          </li>

            {/*<div class="dropdown">
            <div className="dropdown-content" style={{float:'right'}} >
            <Link className="link"  onClick={handleAuthenticaton}>
                    Logout
                   </Link>
            <Link className="link" to='/setting'>Setting</Link>       
             </div>
             </div> */}
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
