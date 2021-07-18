import "./homepage.css";
import Posts from "../../Components/posts/Posts.jsx";
import Sidebar from "../../Components/sidebar/Sidebar.jsx";
import Header from '../../Components/header/Header';



export default function Homepage() {
  
  return (
    <>
      <Header/>
      <div className="home">
        <Posts/>
        <Sidebar />
      </div>
    </>
  );
}
