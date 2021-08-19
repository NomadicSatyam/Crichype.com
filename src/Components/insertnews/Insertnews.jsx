import { useState,useEffect } from "react";
import {InsertNews} from '../../API/Newsapi.js';
import "./write.css";

export default function Insert() {
  const [newsid,setNewsid]=useState(1);
  const [title,setTitle]=useState("");
  const [description,setDescription]=useState("");
  const [featuredimage,setFeaturedImage]=useState(null);

  useEffect( ()=>{setNewsid(Date.now());
                   console.log(Date.now());                
  },[]);

  const insertNews = () => {
    
    const uploadData=new FormData();
    uploadData.append('newsid',newsid);
    uploadData.append('title',title);
    uploadData.append('description',description);
    uploadData.append('featuredimage',featuredimage,featuredimage.name);
    InsertNews(uploadData) 
    .then(resp => console.log(resp))
    .catch(error => console.log(error))
}
  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input id="fileInput"
                 type="file"
                 style={{ display: "none" }}
                 onChange={(e)=>setFeaturedImage(e.target.files[0])} />
          <input
            
            placeholder="Title"
            className="writeInput"
            type="text"
            autoFocus={true}
            value={title}
            onChange = {e => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            type="text"
            autoFocus={true}
            value={description}
            id="description" 
            onChange = {e => setDescription(e.target.value)}
            placeholder="Tell your story..."
            
          />
        </div>
        <button className="writeSubmit" type="submit" onClick = {()=>insertNews()}>
          Publish
        </button>
      </form>
    </div>
  );
}
