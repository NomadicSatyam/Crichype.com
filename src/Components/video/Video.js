import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import "./video.css";

export default function Video({img}) {
  return (
    <div className="video">
      
      <div className='videoImg player-wrapper'>
        <ReactPlayer
        className='react-player'
        url="https://www.youtube.com/watch?v=UVCP4bKy9Iw"
        width="100%"
        height='100%'
        controls={true}
        />
      </div>
    
      {/*<img
        className="videoImg"
        src={img}
        alt=""
      />*/}
      
      
      <div className="videoInfo">
        {/*<div className="videoCats">
          <span className="videoCat">
            <Link className="link" to="/videos?cat=Music">
              Music
            </Link>
          </span>
          <span className="videoCat">
            <Link className="link" to="/videos?cat=Music">
              Life
            </Link>
          </span>
        </div>*/}
        <span className="videoTitle">
          <Link to="/video/abc" className="link">
            Lorem ipsum dolor sit amet
          </Link>
        </span>
        <hr />
        <span className="videoDate">1 hour ago</span>
      </div>
      <p className="videoDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>
    </div>
  );
}
