import React ,{useContext} from "react";
import Sidebar from "../../Components/sidebar/Sidebar.jsx";
import SingleVideo from "../../Components/singlevideo/SingleVideo.js";
import "./singlevideopage.css";


export default function SingleVideopage() {
  
  return (
    <div className="single">
      <SingleVideo />
      <Sidebar />
    </div>
  );
}
