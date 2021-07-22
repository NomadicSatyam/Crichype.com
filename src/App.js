import React,{useEffect,useContext} from 'react';
import './App.css';
import Topbar from './Components/topbar/Topbar';
import Settings from './Components/settings/Settings';
import Homepage from './Pages/homepage/Homepage';
import Errorpage from './Pages/errorpage/Errorpage';
import Singlepage from './Pages/singlepage/Singlepage';
import Singleblogpage from './Pages/singleblogpage/Singleblogpage';
import Blogpage from './Pages/blogpage/Blogpage';
import Newspage from './Pages/newspage/Newspage';
import Videopage from './Pages/videopage/Videopage';
import Loginpage from './Pages/loginpage/Loginpage';
import Write from './Components/write/Write';
import SingleVideopage from './Pages/singlevideopage/SingleVideoPage.js';
import {auth} from "./Pages/loginpage/firebase";
import {BrowserRouter,Route,Link,Switch} from "react-router-dom";
import {useStateValue,BlogProvider} from './Components/stateprovider/Stateprovider';



function App() {
  const [{user}, dispatch] = useStateValue();
  useEffect(() =>{
    // Will only run once when the app component loads...
    
    auth.onAuthStateChanged(authUser => {
      console.log('The user is >>>',authUser);

      if (authUser) {
        // The user just logged in /the user was logged in
      dispatch({
          type: "SET_USER",
          user: authUser,
        });
      }
      else{
        // The User is logged out
        dispatch({
          type:'SET_USER',
          user:null,
        });
      }
    })
  },[]);



  return (
    <div className="App">
      <BrowserRouter>
        <Topbar/>
          <Switch>
            <Route path="/" exact>
              <Homepage/>
            </Route>
            <Route path="/blog" exact>
              <Blogpage/>
            </Route>
            <Route path="/news" exact>
              <Newspage/>
            </Route>
            <Route path="/video" exact>
              <Videopage  />
            </Route>
            <Route path="/login" exact>
              <Loginpage  />
            </Route>
            <Route path="/write" exact>
              {user ? <Write /> : <Loginpage />}
            </Route>
            <Route path="/setting" exact>
              <Settings/>
            </Route>
            <Route path="/post/:id" exact>
              <Singlepage  />
            </Route>
            <Route path="/blog/:id" exact>
              <Singleblogpage  />
            </Route>
            <Route path="/news/:id" exact>
              <Singlepage  />
            </Route>
            <Route path="/video/:id" exact>
              <SingleVideopage  />
            </Route>
            <Route>
              <Errorpage/>
            </Route>
          </Switch> 
      </BrowserRouter>
      
    </div>
  );
}

export default App;
