import React ,{useContext,Fragment} from "react";
import {useParams} from 'react-router-dom';
import Sidebar from "../../Components/sidebar/Sidebar.jsx";
import SingleNewsPost from "../../Components/singlenewspost/Singlenewspost.js";
import {useNewsValue} from "../../Components/stateprovider/Stateprovider";
import "./singleblogpage.css";


export default function Singlenewspage() {
  const value=useNewsValue();
  console.log(value);
  const {id}=useParams();
  console.log(id);
  return (
    <div className="single">
      {
          value
          .filter((list) =>list.newsid == id)
          .map((list) => (
               <Fragment>
                 <SingleNewsPost n={list}/>
               </Fragment>
              ))}
           
      <Sidebar />
    </div>
  );
}
