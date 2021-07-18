import "./header.css";


export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Sports & News</span>
        <span className="headerTitleLg">BLOG</span>
      </div>
      <img
        className="headerImg"
        src="https://ommcom.s3.ap-south-1.amazonaws.com/wp-content/uploads/2021/02/05214831/IPL-2021-Schedule.jpg"
        alt=""
      />
    </div>
  );
}
