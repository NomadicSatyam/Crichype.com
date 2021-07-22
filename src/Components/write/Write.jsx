import React,{useState,useEffect} from 'react';
import {db,storage} from '../../Pages/loginpage/firebase';
import "./write.css";

export default function Write() {
  const [fileUrl, setFileUrl] =useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [cdatetime,setCdatetime]=useState(`${Date().toLocaleString()}`);
  const [loader, setLoader] = useState(false);

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef =storage.ref();
    const fileRef = storageRef.child('Blogs/'+file.name);
    await fileRef.put(file);
    setFileUrl(await fileRef.getDownloadURL());
  };

const submit=(e)=>{
    e.preventDefault();
    setLoader(true);

    db.collection("blogs")
      .add({
       title:title,
       description:description,
       fileUrl:fileUrl,
       cdatetime:cdatetime,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });
    setFileUrl(null);
    setTitle("");
    setDescription("");
    
  };

  
    

  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form className="writeForm" onSubmit={submit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input id="fileInput" 
                 type="file" 
                 style={{ display: "none" }} 
                 onChange={onFileChange}
                 />
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>
        <button className="writeSubmit"
                type="submit"
                >
          Publish
        </button>
      </form>
    </div>
  );

}              
