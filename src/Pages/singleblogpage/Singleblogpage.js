import React ,{useContext,Fragment} from "react";
import {useParams} from 'react-router-dom';
import Sidebar from "../../Components/sidebar/Sidebar.jsx";
import SingleBlogPost from "../../Components/singleblogpost/Singleblogpost.js";
import {useBlogValue} from "../../Components/stateprovider/Stateprovider";
import "./singleblogpage.css";


export default function Singleblogpage() {
  const value=useBlogValue();
  console.log(value);
  const {id}=useParams();
  console.log(id);
  return (
    <div className="single">
      {
            value
              .filter((list) => list.title === id)
              .map((list) => (
               <Fragment>
                 <SingleBlogPost n={list}/>
               </Fragment>
              ))}
      <Sidebar />
    </div>
  );
}
