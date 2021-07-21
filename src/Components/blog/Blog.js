import { Link } from "react-router-dom";
import "./blog.css";
//const n={'title':'this is title'}
export default function Blog({b}) {
  
  return (
    <div className="blog">
      <img
        className="blogImg"
        src={b.fileUrl}
        alt=""
      />
      <div className="blogInfo">
        <div className="blogCats">
          <span className="blogCat">
            <Link className="link" to="/blogs?cat=Music">
              Music
            </Link>
          </span>
          <span className="blogCat">
            <Link className="link" to="/blogs?cat=Music">
              Life
            </Link>
          </span>
        </div>
        <span className="blogTitle">
          <Link to={`/blog/${b.title}`} className="link">
            {b.title}
          </Link>
        </span>
        <hr />
        <span className="blogDate">{b.cdatetime}</span>
      </div>
      <p className="blogDesc">
        {b.description}
      </p>
    </div>
  );
}
