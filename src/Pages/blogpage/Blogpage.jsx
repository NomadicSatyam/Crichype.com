import React ,{useContext} from "react";
import Sidebar from "../../Components/sidebar/Sidebar.jsx";
import Videosidebar from "../../Components/videosidebar/Videosidebar";
import Blogs from "../../Components/blogs/Blogs.js"
import SinglePost from "../../Components/singlepost/SinglePost";
import "./blogpage.css";
import { useParams } from "react-router-dom";


export default function Blogpage() {
  
  return (
    <div className="single">
      <Blogs />
      <Sidebar/>
      
     
    </div>
  );
}
