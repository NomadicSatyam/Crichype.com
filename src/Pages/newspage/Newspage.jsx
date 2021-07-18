import React ,{useContext} from "react";
import Sidebar from "../../Components/sidebar/Sidebar.jsx";
import Newses from "../../Components/newses/Newses.js"
import "./newspage.css";


export default function Newspage() {
  
  return (
    <div className="single">
      <Newses />
      <Sidebar/>
     
    </div>
  );
}
