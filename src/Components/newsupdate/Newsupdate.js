import { useState,useEffect,useCookies } from "react";
import {useParams} from 'react-router-dom';
import {useNewsValue} from "../../Components/stateprovider/Stateprovider";
import "./Newsupdate.css";
import {ModifyNews} from '../../API/Newsapi.js';
import { Link ,useHistory} from "react-router-dom";


export default function NewsUpdate() {
    const history=useHistory();
  const value=useNewsValue();
  const [title, setTitle] = useState("sadsfd");
  const [description, setDescription] = useState("");
  const [newsid,setNewsid]=useState(null);
  const {id}=useParams();
  console.log(id);
  useEffect(() => {
    {
      value
        .filter((news) => news.id == id)
        .map((news) => {
              setTitle(news.title);
              setDescription(news.description);
              setNewsid(news.newsid); }
        )} 
    

}, [])

{/*useEffect(() => {
  fetch(`http://127.0.0.1:8000/api/news/${id}`, {
    'method':'GET',
    headers: {
      'Content-Type':'application/json',
      'Authorization':'Token 8d4b8c548f9c87433c0fb7fbf717791634bbea6c' 
      
    }
  })
  .then(resp => resp.json())
  .then(resp =>{ setTitle(resp.title);
                setDescription(resp.description);
                setNewsid(resp.newsid);})
  .catch(error => console.log(error))

}, [])*/}

const Modify = () => {
  ModifyNews(id, {newsid,title, description})
  .then(resp => console.log(resp))
  .then(history.push(`/news`))


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
          <input id="fileInput" type="file" style={{ display: "none" }} />
          <input
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
          />
        </div>
        <button className="writeSubmit" type="submit" onClick = { Modify } > 
          Update 
        </button>
      </form>
    </div>
  );
}
