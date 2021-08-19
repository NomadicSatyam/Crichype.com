import { useState,useEffect,Fragment } from "react";
import {getNews} from "../../API/Newsapi.js";
import News from "../news/News";
import "./newses.css";

export default function Newses() {
  const [news, setNews] = useState([]);
  
    
  useEffect(() => {
    
    getNews().then((data)=> {  setNews(data);
                               console.log("news",data);})
    .catch((error)=> alert(error));

  }, []);

  return (
    <div className="newses">
      
      {news.map((n)=>(
           
           <Fragment >
           {<News n={n} />}
  
           </Fragment>
         ))}
    </div>
  );
}
