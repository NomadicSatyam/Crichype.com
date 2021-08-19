import { useState,useEffect } from "react";
import { Link ,useHistory} from "react-router-dom";
import "./singleblogpost.css";
import moment from 'moment';
import { DeleteNews } from "../../API/Newsapi";

export default function SingleNewsPost({n}) {
  const history=useHistory();
  const [pic,setpic]=useState("https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500");
  console.log(n);
  console.log(n.id);
  const deleteBtn = () => {
    DeleteNews(n.id)
    .then((resp) =>{console.log(resp);
                    console.log(n.id)} )
    .then(history.push("/news"))
    .catch(error => alert("News not deleated"))
   
}
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src={n?n.featuredimage:pic}
          alt=""
        />
        <h1 className="singlePostTitle">
        {n.title} 
          <div className="singlePostEdit">
          <Link to={`/update/${n.id}`}>
            <i className="singlePostIcon far fa-edit" ></i>
            </Link>
            <i className="singlePostIcon far fa-trash-alt" onClick = {deleteBtn} ></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              <Link className="link" to="/posts?username=Safak">
                Safak 
              </Link>
            </b>
          </span>
          <span>{moment(n.created_at).format('LLL')}</span>
        </div>
        <p className="singlePostDesc">
          {n.description}
          <br />
          <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
          quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
          Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
          eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
          error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
          impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
          odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
          iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
          a odit modi eos! Lorem, ipsum dolor sit amet consectetur.
        </p>
      </div>
    </div>
  );
}
