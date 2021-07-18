import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import "./singlevideo.css";


export default function SingleVideo({n}) {
  console.log(n);
  return (
    <div className="singleVideo">
      <div className="singleVideoWrapper">
      <div className='singleVideoImg player-wrapper'>
        <ReactPlayer
        className='react-player'
        url="https://www.youtube.com/watch?v=AFEZzf9_EHk&ab_channel=ICC"
        width="100%"
        height='100%'
        controls={true}
        light={true}
        />
      </div>
        <h1 className="singleVideoTitle">
        Lorem ipsum dolor sit amet 
          <div className="singleVideoEdit">
            <i className="singleVideoIcon far fa-edit"></i>
            <i className="singleVideoIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singleVideoInfo">
          <span>
            Author:
            <b className="singleVideoAuthor">
              <Link className="link" to="/Videoes?username=Safak">
                Safak 
              </Link>
            </b>
          </span>
          <span>1 day ago</span>
        </div>
        <p className="singleVideoDesc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
          quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
          Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
          eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
          error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
          impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
          odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
          iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
          a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
          iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
          a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
          iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
          a odit modi eos!
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
