import {useState,useEffect,Fragment} from 'react';
import {db,storage} from '../../Pages/loginpage/firebase';
import Blog from "../blog/Blog";
import "./blogs.css";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const fetchBlogs=async()=>{

    const response=db.collection('blogs');
    const data=await response.get();
    
    console.log(data);
    setBlogs(
      data.docs.map((doc) => {
        return doc.data();
      })
    ); }
    {/*data.docs.map(item=>{
     setBlogs( [...blogs,item.data()]);
    }) }*/}
  
  useEffect(() =>{  fetchBlogs(); } , []);
  console.log(blogs);
  return (
    <div className="blogs">
      {
        blogs && blogs.map(blog=>{
          return(
            <Blog b={blog}/>
          )
        })
      }
    </div>
  );
}
