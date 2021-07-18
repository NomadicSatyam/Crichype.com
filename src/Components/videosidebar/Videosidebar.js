import { Link } from "react-router-dom";
import Videoes from '../videoes/Videoes.js';
import "./videosidebar.css";

export default function Videosidebar() {
  return (
    <div className="videosidebar">
      <div className="videosidebarItem">
        <span className="videosidebarTitle">Featured Videos</span>
    </div >
      <div className="mediaplayer">
      <Videoes />
      </div>
      
      <div className="videosidebarItem">
        <span className="videosidebarTitle">FOLLOW US</span>
        <div >
          <i className="videosidebarIcon fab fa-facebook"></i>
          <i className="videosidebarIcon fab fa-instagram"></i>
          <i className="videosidebarIcon fab fa-pinterest"></i>
          <i className="videosidebarIcon fab fa-twitter"></i>
        </div>
      </div>
    </div>
  );
}
