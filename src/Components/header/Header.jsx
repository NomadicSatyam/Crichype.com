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
        src="https://bcciplayerimages.s3.amazonaws.com/resizedimageskirti/31d59473-d48a-4786-a620-c44f112d1d1e_compressed.jpg"
        alt=""
      />
    </div>
  );
}
