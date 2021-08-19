import { Link } from "react-router-dom";
import "./news.css";
import moment from 'moment';

export default function News({n}) {
  return (
    <div className="news">
      <img
        className="newsImg"
        src={n.featuredimage}
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
          <Link to={`/news/${n.newsid}`} className="link">
            {n.title}
          </Link>
        </span>
        <hr />
        <span className="newsDate">{moment(n.created_at).format('LLL')}</span>
      </div>
      <p className="newsDesc">
        {n.description}
      </p>
    </div>
  );
}
