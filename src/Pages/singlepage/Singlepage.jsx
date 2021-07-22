import React ,{useContext,Fragment} from "react";
import {useParams} from 'react-router-dom';
import Sidebar from "../../Components/sidebar/Sidebar.jsx";
import SinglePost from "../../Components/singlepost/SinglePost.jsx";
import {useBlogValue} from "../../Components/stateprovider/Stateprovider";
import "./singlepage.css";


export default function Singlepage() {
 
  const {id}=useParams();
 
  return (
    <div className="single">
      
      <SinglePost n={id}/>
               
      <Sidebar />
    </div>
  );
}
