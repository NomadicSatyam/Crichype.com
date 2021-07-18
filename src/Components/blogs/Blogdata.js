import {useState,useEffect} from 'react';
import {db,storage} from '../../Pages/loginpage/firebase';

const Blogdata=()=>{
    const [blog, setBlog] = useState([]);
    useEffect(() => {
        const fetchBlogs = async () => {
          const blogsCollection = await db.collection("blogs").get();
          setBlog(
            blogsCollection.docs.map((doc) => {
              return doc.data();
            })
          );
        };
        fetchBlogs();
      }, []);
    return("");
}

export default  Blogdata;