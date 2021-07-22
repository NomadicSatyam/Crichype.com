import React ,{createContext,useContext,useReducer,useState,useEffect} from 'react';
import {db} from "../../Pages/loginpage/firebase";
export const StateContext=createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );

export const useStateValue=()=>useContext(StateContext);

export const BlogContext=createContext();

export const BlogProvider = ({children}) => {
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
    
  
  useEffect(() =>{  fetchBlogs(); } , []);
  console.log(blogs);
  return(
    <>
    <BlogContext.Provider value={blogs}>
     {children}
    </BlogContext.Provider>
    </>
  );
}

export const useBlogValue=()=>useContext(BlogContext);