import React,{useState,useEffect} from 'react';
import {db,storage,auth} from '../../Pages/loginpage/firebase';
import {useStateValue} from "../stateprovider/Stateprovider";
import Sidebar from "../sidebar/Sidebar";
import { useHistory} from "react-router-dom";
import "./settings.css";

export default function Settings() {
  const history = useHistory();
  const [{user},dispatch]=useStateValue();

  const [fileUrl, setFileUrl] =useState("User1.png");
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState(`${user.email}`);
  const [password, setPassword] = useState(`${user.password}`);
  const [loader, setLoader] = useState(false);

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef =storage.ref();
    const fileRef = storageRef.child('Users/'+file.name);
    await fileRef.put(file);
    setFileUrl(await fileRef.getDownloadURL());
  };

  const deleteaccount=()=>{
    if(user)
    {alert('please confirm to delete')&&user.delete().then(()=>{alert('Deleated')}).catch((error)=>{alert(error)})}
  }
 


  const submit=(e)=>{
    e.preventDefault();
    setLoader(true);

    db.collection("users").doc(user.uid)
      .set({
       username:username,
       email:email,
       password:password,
       fileUrl:fileUrl,
      })
      .then(() => {
        setLoader(false);
        alert("Your profile has been successfuly updated👍");
      }).then(history.push('/'))
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });
    setFileUrl(null);
    setUserName("");
    setEmail("");
    setPassword("");
    
  };

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="settingsTitleDelete" onClick={deleteaccount}>Delete Account</span>
        </div>
        <form className="settingsForm" onSubmit={submit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src={fileUrl}
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              onChange={onFileChange}
              className="settingsPPInput"
            />
          </div>
          <label>Username</label>
          <input 
                placeholder={username}
                type="text"
                autoFocus={true}
                value={username}
                onChange={e => setUserName(e.target.value)} />
          <label>Email</label>
          <input 
                placeholder={email}
                type="text"
                autoFocus={true}
                value={email}
                onChange={e => setEmail(e.target.value)}/>

          <label>Password</label>
          <input 
                placeholder={password}
                type="password"
                autoFocus={true}
                value={password}
                onChange={e => setPassword(e.target.value)} />
          <button className="settingsSubmitButton" type="submit">
            Update
          </button>
        </form>
      </div>
      
    </div>
  );
}
