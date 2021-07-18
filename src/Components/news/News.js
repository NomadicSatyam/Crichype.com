import { Link } from "react-router-dom";
import "./news.css";

export default function News({img}) {
  return (
    <div className="news">
      <img
        className="newsImg"
        src={img}
        alt=""
      />
      <div className="newsInfo">
        <div className="newsCats">
          <span className="newsCat">
            <Link className="link" to="/newss?cat=Music">
              Music
            </Link>
          </span>
          <span className="newsCat">
            <Link className="link" to="/newss?cat=Music">
              Life
            </Link>
          </span>
        </div>
        <span className="newsTitle">
          <Link to="/news/abc" className="link">
            Lorem ipsum dolor sit amet
          </Link>
        </span>
        <hr />
        <span className="newsDate">1 hour ago</span>
      </div>
      <p className="newsDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>
    </div>
  );
}
