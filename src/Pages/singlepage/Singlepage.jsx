import React ,{useContext} from "react";
import {useParams} from 'react-router-dom';
import Sidebar from "../../Components/sidebar/Sidebar.jsx";
import SinglePost from "../../Components/singlepost/SinglePost.jsx";
import "./singlepage.css";


export default function Singlepage() {
  const {id}=useParams();
  console.log(id);
  return (
    <div className="single">
      <SinglePost n={id}/>
      <Sidebar />
    </div>
  );
}
